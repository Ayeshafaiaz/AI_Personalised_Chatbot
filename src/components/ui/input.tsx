import * as React from "react";
import { cn } from "../../lib/utils";
import { EyeIcon, EyeOffIcon } from "lucide-react";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  Icon?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  iconProps?: React.SVGProps<SVGSVGElement>;
  EndIcon?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  endIconProps?: React.SVGProps<SVGSVGElement>;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    { Icon, className, type, iconProps, EndIcon, endIconProps, ...props },
    ref
  ) => {
    const [showPassword, setShowPassword] = React.useState(false);

    const togglePasswordVisibility = () => setShowPassword(!showPassword);

    const inputClasses = cn(
      "flex h-12 w-full rounded-full bg-white p-[21px] text-sm font-[400] border-[1px] border-[#EFEFF8] file:border-0 file:bg-transparent placeholder:text-[#676767] placeholder:font-normal file:text-sm file:font-medium focus:border-[1px] focus:border-[#1551B2] disabled:cursor-not-allowed disabled:opacity-50 focus-visible:outline-none",
      Icon && "pl-10",
      EndIcon && "pr-10",
      type === "password" && "pr-8",
      className
    );

    return (
      <div className={cn("relative", className)}>
        {Icon && (
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <Icon {...iconProps} />
          </div>
        )}
        <input
          type={type === "password" && showPassword ? "text" : type}
          className={inputClasses}
          ref={ref}
          {...props}
        />
        {EndIcon && (
          <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
            <EndIcon {...endIconProps} />
          </div>
        )}

        {type === "password" && (
          <div className="absolute right-0 flex items-center pr-3 -translate-y-1/2 top-1/2 gap-x-1">
            {showPassword ? (
              <EyeIcon
                className="cursor-pointer"
                onClick={togglePasswordVisibility}
                size={20}
              />
            ) : (
              <EyeOffIcon
                className="cursor-pointer"
                onClick={togglePasswordVisibility}
                size={20}
              />
            )}
          </div>
        )}
      </div>
    );
  }
);
Input.displayName = "Input";

export { Input };
