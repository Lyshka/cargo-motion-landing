import { cn } from "@/lib/utils";
import { FC, ReactNode } from "react";

interface IProps {
  children: ReactNode;
  className?: string;
}

const Title: FC<IProps> = ({ children, className }) => {
  return (
    <h3
      className={cn(
        "font-semibold uppercase xl:text-[46px] text-[40px] xl:leading-[59.8px] leading-[52px]",
        className
      )}
    >
      {children}
    </h3>
  );
};
export default Title;
