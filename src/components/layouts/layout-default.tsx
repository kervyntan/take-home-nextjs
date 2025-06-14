import { cn } from "@/lib/cn"

interface Props {
  children: React.ReactNode
  container?: boolean
}

const LayoutDefault = ({ children, container = true }: Props) => {
  return (
    <main className={cn("grow py-5", container && "container")}>
      {children}
    </main>
  )
}

export default LayoutDefault
