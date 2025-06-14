import { Button } from "@/components/ui/button"
import Link from "@/components/link"
import { Logo } from "@/components/logo"

const links: string[] = []

const NavigationBar = () => (
  <nav className="fixed top-0 z-10 w-full border-b border-[#9E051C] bg-[#9E051C] px-5 py-2 shadow-md md:px-0">
    <div className="flex justify-between md:container">
      <Link href="/">
        <Logo height={40} />
      </Link>

      <div className="hidden flex-1 items-center justify-center gap-2 lg:flex">
        {links.map((link, idx) => (
          <Button
            key={idx}
            asChild
            variant="ghost"
            className="bg-primary"
            size="sm">
            <Link href="/sign-in" className="text-sm text-white">
              {link}
            </Link>
          </Button>
        ))}
      </div>

      <div className="flex items-center justify-center gap-4 align-middle">
        {/*  */}
      </div>
    </div>
  </nav>
)

export default NavigationBar
