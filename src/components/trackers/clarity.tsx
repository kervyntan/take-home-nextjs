"use client"

import { useEffect } from "react"
import { CLARITY_ID } from "@/configs/app-config"
import { clarity } from "react-microsoft-clarity"

import { IS_PROD } from "@/lib/constants"

const ClarityTag = () => {
  useEffect(() => {
    if (IS_PROD) {
      if (!(window as any).clarity) {
        clarity.init(CLARITY_ID)
      }
    }
  }, [])

  return <></>
}

export default ClarityTag
