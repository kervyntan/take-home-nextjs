import { API_URL, IS_DEV } from "@/lib/constants"

export interface FetchOptions {
  url: string
  params?: Record<string, any>
  body?: any
  headers?: Record<string, string>
  token?: string
}

interface ErrorResponse {
  success: false
  message: string
  details?: any
}

interface SuccessResponse<T> {
  data: T
  success: true
}

export const fetchWrapper = async <T>(
  method: "GET" | "POST" | "PUT" | "DELETE" | "PATCH",
  options: FetchOptions
): Promise<SuccessResponse<T> | ErrorResponse> => {
  const { url, params, body, headers, token } = options

  const apiUrl = url.startsWith("http") ? `${url}` : `${API_URL}${url}`
  const queryParams = params ? "?" + new URLSearchParams(params).toString() : ""

  const fetchHeaders: HeadersInit = new Headers({
    ...headers
  })

  if (token) {
    fetchHeaders.set("Authorization", `Bearer ${token}`)
  }

  const fetchOptions: RequestInit = {
    method,
    headers: fetchHeaders,
    body: body ? JSON.stringify(body) : undefined
  }

  if (IS_DEV) {
    console.log(`Req: ${method} ${url}${queryParams}`)
  }

  try {
    const response = await fetch(apiUrl + queryParams, fetchOptions)

    const contentType = response.headers.get("Content-Type")

    let responseData
    if (contentType && contentType.includes("application/json")) {
      responseData = await response.json()
    } else {
      responseData = await response.text()
    }

    if (IS_DEV) {
      console.log(`Response: ${response.status}`, responseData)
    }

    if (!response.ok) {
      return {
        success: false,
        message: response.statusText,
        details: responseData
      }
    }

    return {
      success: true,
      data: responseData as T
    }
  } catch (error) {
    if (IS_DEV) {
      console.error(`Error: ${(error as Error).message}`)
    }
    return {
      success: false,
      message: (error as Error).message
    }
  }
}
