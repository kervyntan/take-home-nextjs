import { FaFacebookSquare, FaInstagram, FaLinkedin } from "react-icons/fa"

import Link from "@/components/link"
import { Logo } from "@/components/logo"

const Footer = () => (
  <footer className="mt-20 bg-primary text-sm text-muted-foreground text-white">
    <div className="container p-5">
      <div className="mb-6 flex flex-col items-start justify-between gap-8 lg:flex-row lg:gap-28">
        <div className="order-1 w-full lg:order-1 lg:w-fit">
          <div className="my-2 w-fit">
            <Link href="/">
              <Logo />
            </Link>
          </div>

          <p className="text-sm">hello@embedglobal.com</p>
          <p className="text-sm">+65 6957 5566</p>
          <p className="text-sm">204B Telok Ayer Street</p>
          <p className="text-sm">Singapore 068640</p>
        </div>

        <div className="order-3 flex-1 lg:order-2">
          <p>Disclaimer statement:</p>

          <p>
            At Embed Global, we strive to provide accurate, objective, and
            up-to-date information. While we serve one insurance company for
            now, our content is not influenced by third-party advertisers. The
            list of insurance products displayed on this website is not
            exhaustive, you may contact us to learn more about the full range of
            products.
          </p>

          <div className="mt-4 flex gap-2">
            <Link href="/tos" className="hover:underline">
              TOS
            </Link>

            <Link href="/privacy" className="hover:underline">
              Privacy
            </Link>
          </div>
        </div>

        <div className="order-2 w-full space-y-2 text-base md:pr-4 lg:order-3 lg:w-fit">
          <p className="text-sm">Contact Us</p>

          <div className="flex gap-2">
            <Link
              href="https://www.linkedin.com/company/embed-global/"
              persistParams={false}
              target="_blank">
              <FaLinkedin size={30} />
            </Link>
            <Link
              href="https://www.instagram.com/embedglobal/"
              target="_blank"
              persistParams={false}>
              <FaInstagram size={30} />
            </Link>
            <Link
              href="https://www.facebook.com/embedglobal"
              target="_blank"
              persistParams={false}>
              <FaFacebookSquare size={30} />
            </Link>
          </div>
        </div>
      </div>

      <Link href="/">
        <p className="mb-0 text-center text-sm">
          2024 &copy; Embed Global Pte. Ltd.
        </p>
      </Link>
    </div>
  </footer>
)

export default Footer
