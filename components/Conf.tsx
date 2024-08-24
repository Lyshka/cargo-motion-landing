import { UseFormRegister } from "react-hook-form";

import Link from "next/link";
import { FC } from "react";
import { IForm } from "@/types/IForm";

interface IProps {
  register: UseFormRegister<IForm>;
}

const Conf: FC<IProps> = ({ register }) => {
  return (
    <label className="flex items-center gap-2.5 cursor-pointer">
      <div className="container-conf w-[18px] h-[18px] border border-gray-a9 flex justify-center items-center flex-shrink-0 relative bg-white">
        <input
          {...register?.("conf", {
            required:
              "Вы должны согласиться с Политикой обработки персональных данных",
          })}
          className="w-full h-full flex-shrink-0 opacity-0 absolute cursor-pointer"
          type="checkbox"
          defaultChecked
        />

        <svg
          className="icon-checked transition-all duration-300 opacity-0"
          width="24"
          height="24"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M5.92085 10.1163L12.5434 3.5L13.8493 4.80591L5.92075 12.7344L2 8.81369L3.31377 7.50918L5.92085 10.1163Z"
            fill="#DE2E2D"
          />
        </svg>
      </div>

      <p className="xl:text-lg text-base xl:leading-[23.4px] leading-[20.8px] text-gray-65">
        Я соглашаюсь с 
        <Link target="_blank" className="hover:text-red" href="/">
          Политикой обработки персональных данных
        </Link>
      </p>
    </label>
  );
};
export default Conf;
