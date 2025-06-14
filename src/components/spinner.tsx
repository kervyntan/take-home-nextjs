import { CgSpinnerAlt } from "react-icons/cg"

import { cn } from "@/lib/cn"

interface Props extends React.SVGProps<SVGSVGElement> {}

const Spinner = (props: Props) => {
  return (
    <CgSpinnerAlt
      size={20}
      {...props}
      className={cn("animate-spin", props.className)}
    />
  )
}

export default Spinner
