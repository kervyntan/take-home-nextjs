import Link from "@/components/link"

export default function NotFound() {
  return (
    <div className="flex h-screen items-center justify-center text-center">
      <div>
        <h1 className="mb-2 text-xl">This page does not exists</h1>

        <Link href="/" className="hover:text-primary-alt underline">
          Click here to return Home
        </Link>
      </div>
    </div>
  )
}
