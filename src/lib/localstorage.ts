type StoredItem<T> = {
  type: string
  value: T
}

const getType = (value: unknown): string => {
  if (value === null) return "null"
  if (Array.isArray(value)) return "array"
  if (value instanceof Date) return "date"
  if (typeof value === "object") return "object"
  return typeof value
}

const serialize = <T>(value: T): StoredItem<any> => {
  const valueType = getType(value)

  switch (valueType) {
    case "object":
      return {
        type: "object",
        value: Object.fromEntries(
          Object.entries(value as Record<string, unknown>).map(([key, val]) => [
            key,
            serialize(val)
          ])
        )
      }
    case "array":
      return { type: "array", value: (value as unknown[]).map(serialize) }
    case "date":
      return { type: "date", value: (value as Date).toISOString() }
    default:
      return { type: valueType, value }
  }
}

const deserialize = <T>(item: StoredItem<T>): unknown => {
  const { type, value } = item

  switch (type) {
    case "object":
      return Object.fromEntries(
        Object.entries(value as Record<string, StoredItem<T>>).map(
          ([key, val]) => [key, deserialize(val)]
        )
      )
    case "array":
      return (value as StoredItem<T>[]).map(deserialize)
    case "date":
      return new Date(value as string)
    case "number":
      return Number(value)
    case "boolean":
      return value === "true"
    case "null":
      return null
    default:
      return value
  }
}

export const setLocalStorage = <T>(key: string, data: T): void => {
  try {
    const serializedData = JSON.stringify(serialize(data))
    localStorage.setItem(key, serializedData)
  } catch (error) {
    console.error(`Error saving data to localStorage: ${error}`)
  }
}

export const getLocalStorage = <T>(key: string): T | null => {
  try {
    const serializedData = localStorage.getItem(key)
    if (serializedData === null) return null
    const item = JSON.parse(serializedData)
    return deserialize(item) as T
  } catch (error) {
    console.error(`Error loading data from localStorage: ${error}`)
    return null
  }
}
