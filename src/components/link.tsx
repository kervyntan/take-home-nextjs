"use client"

import { ComponentProps, Suspense } from "react"
import { Url } from "next/dist/shared/lib/router/router"
import NextLink from "next/link"
import { ReadonlyURLSearchParams, useSearchParams } from "next/navigation"

const ignorePrefetch = ["/whatsapp"]

const modifyHref = (
  href: Url,
  searchParams: ReadonlyURLSearchParams,
  persistParam = true
) => {
  const hrefString = href.toString()

  if (!persistParam || searchParams.size === 0) {
    return hrefString
  }

  const [baseUrl, existingParams] = hrefString.split("?")
  const combinedParams = new URLSearchParams(existingParams)

  searchParams.forEach((value, key) => {
    if (persistParam || !combinedParams.has(key)) {
      combinedParams.set(key, value)
    }
  })

  return `${baseUrl}?${combinedParams.toString()}`
}

interface Props extends ComponentProps<typeof NextLink> {
  persistParams?: boolean
}

const LinkComponent = (props: Props) => {
  const { href, persistParams = true, ...restProps } = props
  const searchParams = useSearchParams()

  const modifiedHref = modifyHref(href, searchParams, persistParams)

  return (
    <NextLink
      prefetch={!ignorePrefetch.includes(href.toString())}
      {...restProps}
      href={modifiedHref}
    />
  )
}

const Link = (props: Props) => (
  <Suspense fallback={<NextLink {...props} />}>
    <LinkComponent {...props} />
  </Suspense>
)

export default Link
