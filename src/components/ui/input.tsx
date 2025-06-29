import * as React from "react"

import { cn } from "@/lib/cn"

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  inputClassName?: string
  prefixComp?: React.ReactNode
  suffixComp?: React.ReactNode
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, prefixComp, suffixComp, ...props }, ref) => {
    const hasHeadorTail = Boolean(prefixComp) || Boolean(suffixComp)

    return (
      <>
        {hasHeadorTail ? (
          <div
            className={cn(
              "flex h-10 items-center justify-center gap-2 rounded border border-input bg-transparent px-3 ring-offset-background focus-within:ring-1 focus-within:ring-ring focus-within:ring-offset-2 data-[disabled=true]:cursor-not-allowed data-[disabled=true]:opacity-50",
              className
            )}
            data-disabled={props.disabled}>
            {prefixComp && (
              <div className={cn("text-muted-foreground")}>{prefixComp}</div>
            )}

            <input
              type={type}
              className={cn(
                "flex h-full w-full rounded border-none bg-transparent py-2 text-sm shadow-none outline-none file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:border-none focus-visible:shadow-none focus-visible:outline-none",
                props.inputClassName
              )}
              ref={ref}
              {...props}
            />

            {suffixComp && (
              <div className={cn("text-muted-foreground")}>{suffixComp}</div>
            )}
          </div>
        ) : (
          <input
            type={type}
            className={cn(
              "flex h-10 w-full rounded border border-input bg-transparent px-4 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
              className
            )}
            ref={ref}
            {...props}
          />
        )}
      </>
    )
  }
)
Input.displayName = "Input"

export { Input }
