"use client"

import swrHook, { SWRConfiguration, SWRResponse } from "swr"

import { ApiUrl } from "@/types/api-url"
import { FetchOptions, fetchWrapper } from "@/lib/api"

interface SWRWrapperOptions<T> extends Omit<FetchOptions, "url"> {
  method?: "GET" | "POST" | "PUT" | "DELETE" | "PATCH"
  swrConfig?: SWRConfiguration<T>
}

const useSWR = <T>(
  url: ApiUrl,
  options?: SWRWrapperOptions<T>
): SWRResponse<T, any> => {
  const { params, body, headers, method = "GET", swrConfig } = options || {}

  const fetcher = async () => {
    const response = await fetchWrapper<T>(method, {
      url,
      params,
      body,
      headers
    })
    if ("data" in response) {
      return response.data
    } else {
      throw new Error(response.message)
    }
  }

  const key = JSON.stringify({ url, params, body, headers, method })

  return swrHook<T>(key, fetcher, swrConfig)
}

export default useSWR
