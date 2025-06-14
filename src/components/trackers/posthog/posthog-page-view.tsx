// "use client"

// import { useEffect } from "react"
// import { usePathname, useSearchParams } from "next/navigation"
// import { useAuth, useUser } from "@clerk/nextjs"
// import { usePostHog } from "posthog-js/react"

// const PostHogPageView = () => {
//   const pathname = usePathname()
//   const searchParams = useSearchParams()
//   const posthog = usePostHog()

//   const { isSignedIn, userId } = useAuth()
//   const { user } = useUser()

//   useEffect(() => {
//     if (pathname && posthog) {
//       let url = window.origin + pathname
//       if (searchParams.toString()) {
//         url = url + `?${searchParams.toString()}`
//       }
//       posthog.capture("$pageview", { $current_url: url })
//     }
//   }, [pathname, searchParams, posthog])

//   useEffect(() => {
//     // Sign in
//     if (isSignedIn && userId && user && !posthog._isIdentified()) {
//       posthog.identify(userId, {
//         email: user.primaryEmailAddress?.emailAddress,
//         username: user.username
//       })
//     }

//     // Sign out
//     if (!isSignedIn && posthog._isIdentified()) {
//       posthog.reset()
//     }
//   }, [posthog, user, isSignedIn])

//   return <></>
// }

// export default PostHogPageView
