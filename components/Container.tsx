import { cn } from "@/lib/utils";
import { FC } from "react";

interface IProps extends React.HTMLProps<HTMLDivElement> {}

const Container: FC<IProps> = ({ children, className, ...props }) => {
  return (
    <div
      {...props}
      className={cn("max-w-[1200px] w-full mx-auto xl:px-0 px-2.5", className)}
    >
      {children}
    </div>
  );
};
export default Container;
