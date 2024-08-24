import { cn } from "@/lib/utils";
import { FC, ReactNode } from "react";
import Title from "../Title";

interface IProps {
  children: ReactNode;
  isOpen: boolean;
  title: string;
  closeHandle: () => void;
}

const Modal: FC<IProps> = ({ children, isOpen, title, closeHandle }) => {
  return (
    <section className={cn("modal", isOpen && "open")}>
      <div className="xl:max-w-[800px] w-full flex-col gap-5 flex justify-center items-center xl:py-20 py-[60px] bg-gray-fc relative shadow-aboutCard xl:px-0 px-[15px]">
        <button className="closeModal" onClick={closeHandle}>
          <svg
            width="36"
            height="36"
            viewBox="0 0 36 36"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M5 5L31 31M5 31L31 5" stroke="#DE2E2D" strokeWidth="4" />
          </svg>
        </button>

        <Title className="xl:text-left text-center">{title}</Title>
        {children}
      </div>
    </section>
  );
};
export default Modal;
