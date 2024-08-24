import { menu } from "@/constants/menu";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { FC } from "react";

interface IProps {
  handleMenu: () => void;
  isOpen: boolean;
}

const MenuMobile: FC<IProps> = ({ handleMenu, isOpen }) => {
  return (
    <section className={cn("mobileMenu", isOpen && "open")}>
      <ul className="flex flex-col items-center gap-[30px] pt-[140px]">
        {menu.map(({ id, link, name }) => (
          <li key={id}>
            <Link
              onClick={handleMenu}
              className="text-lg leading-[23.4px] uppercase hover:text-red"
              href={link}
            >
              {name}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
};
export default MenuMobile;
