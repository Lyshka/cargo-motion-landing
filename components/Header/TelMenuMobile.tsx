import { siteInfo } from "@/constants/siteInfo";
import { cn } from "@/lib/utils";
import { useOrderStore } from "@/store/modal/orderStore";
import Link from "next/link";
import { FC } from "react";

interface IProps {
  isOpen: boolean;
  handleMenu: () => void;
}

const TelMenuMobile: FC<IProps> = ({ isOpen, handleMenu }) => {
  const { setIsOpen } = useOrderStore();

  const handleOpenModal = () => {
    handleMenu();
    setIsOpen();
  };

  return (
    <section className={cn("mobileMenu", isOpen && "open")}>
      <div className="flex pt-[140px] flex-col items-center gap-[30px]">
        <ul className="flex flex-col items-center gap-5">
          <li>
            <Link
              className="text-2xl leading-[31.2px] hover:text-red-hover"
              href={`tel:${siteInfo.tels.social.telFormatted}`}
            >
              {siteInfo.tels.social.tel}
            </Link>
          </li>

          <li>
            <Link
              className="text-2xl leading-[31.2px] hover:text-red-hover"
              href={`tel:${siteInfo.tels.simple.telFormatted}`}
            >
              {siteInfo.tels.simple.tel}
            </Link>
          </li>
        </ul>

        <button
          onClick={handleOpenModal}
          className="text-base leading-[20.8px] text-red hover:text-white hover:bg-red border border-red h-[41px] max-w-[144px] w-full flex justify-center items-center"
        >
          Заказать звонок
        </button>
      </div>
    </section>
  );
};
export default TelMenuMobile;
