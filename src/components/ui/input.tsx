import * as React from "react";

import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  startIcon?: LucideIcon;
  endIcon?: LucideIcon;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, startIcon, endIcon, ...props }, ref) => {
    const StartIcon = startIcon;
    const EndIcon = endIcon;

    return (
      <div className="w-full relative">
        {StartIcon && (
          <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
            <StartIcon size={18} className="text-white" />
          </div>
        )}
        <input
          type={type}
          className={cn(
            "flex h-11 w-full rounded-lg focus:border focus:border-[#0096FA] border border-white/10 text-white bg-[#171717] py-2 px-4 text-base file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-white/70 focus-visible:outline-none focus-visible:ring-offset-0 disabled:cursor-not-allowed disabled:opacity-50",
            startIcon ? "pl-10" : "",
            endIcon ? "pr-10" : "",
            className
          )}
          ref={ref}
          {...props}
        />
        {EndIcon && (
          <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
            <EndIcon className="text-white" size={18} />
          </div>
        )}
      </div>
    );
  }
);
Input.displayName = "Input";

export { Input };
