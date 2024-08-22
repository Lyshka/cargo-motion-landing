import { cn } from "@/lib/utils";
import { ButtonHTMLAttributes, FC } from "react";

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

const Button: FC<IProps> = ({ children, className, ...props }) => {
  return (
    <button
      {...props}
      className={cn(
        className,
        "shadow-button bg-red hover:bg-red-hover w-[282px] flex justify-center items-center h-[50px] text-lg leading-[23.4px] text-center text-white"
      )}
    >
      {children}
    </button>
  );
};
export default Button;
