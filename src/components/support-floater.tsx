import { FaWhatsapp } from "react-icons/fa"

import Link from "@/components/link"

const SupportFloater = () => (
  <div className="fixed bottom-5 right-5 z-10 cursor-pointer overflow-hidden">
    <Link
      href="/whatsapp"
      target="_blank"
      persistParams={false}
      className=" flex items-center gap-1 rounded-md bg-green-500 p-2 text-sm text-white">
      <FaWhatsapp className="size-[32px] md:size-[24px]" />

      <span className="hidden md:block">Chat on WhatsApp</span>
    </Link>
  </div>
)

export default SupportFloater
