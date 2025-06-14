import Script from "next/script"
import { GTAG_ID } from "@/configs/app-config"

import { IS_PROD } from "@/lib/constants"

const GTag = () => {
  return IS_PROD ? (
    <>
      <Script src={`https://www.googletagmanager.com/gtag/js?id=${GTAG_ID}`} />

      <Script id="google-analytics">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GTAG_ID}');
        `}
      </Script>
    </>
  ) : (
    <></>
  )
}

export default GTag
