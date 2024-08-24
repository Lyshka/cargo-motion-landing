"use client";

import Link from "next/link";
import Container from "../Container";
import Image from "next/image";
import { siteInfo } from "@/constants/siteInfo";
import { menu } from "@/constants/menu";
import MenuMobile from "./MenuMobile";
import TelMenuMobile from "./TelMenuMobile";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { useOrderStore } from "@/store/modal/orderStore";

const Header = () => {
  const { setIsOpen } = useOrderStore();

  const [isOpenMobileMenu, setIsOpenMobileMenu] = useState(false);
  const [isOpenTelMobileMenu, setIsOpenTelMobileMenu] = useState(false);

  const handleMobileMenu = () => {
    if (isOpenMobileMenu) {
      setIsOpenMobileMenu(false);
    } else {
      setIsOpenTelMobileMenu(false);
      setIsOpenMobileMenu(true);
    }
  };

  const handleTelMobileMenu = () => {
    if (isOpenTelMobileMenu) {
      setIsOpenTelMobileMenu(false);
    } else {
      setIsOpenMobileMenu(false);
      setIsOpenTelMobileMenu(true);
    }
  };

  return (
    <>
      <header className="bg-white shadow-header h-24 flex justify-center items-center sticky top-0 z-[3]">
        <Container className="flex items-center justify-between">
          <Link
            href={"/"}
            className="hover-opacity block xl:h-[83px] h-[57px] xl:w-[229px] w-[160px]"
          >
            <Image
              height={83}
              width={229}
              className="w-full h-full"
              alt="Логотип"
              src={siteInfo.logoHeader}
            />
          </Link>

          <div className="space-y-5 xl:block hidden">
            <div className="w-full justify-between items-center flex text-base leading-[20.8px]">
              <Link className="hover:text-red-hover" href={siteInfo.email}>
                {siteInfo.email}
              </Link>

              <ul className="flex items-center gap-5">
                <li>
                  <Link
                    className="hover:text-red-hover flex items-center gap-[5px]"
                    href={`tel:${siteInfo.tels.social.telFormatted}`}
                  >
                    <svg
                      className="flex-shrink-0"
                      width="20"
                      height="21"
                      viewBox="0 0 20 21"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M6.08036 3.5C6.24409 3.5 6.40484 3.54382 6.54592 3.6269C6.687 3.70999 6.80328 3.82931 6.88269 3.97249L8.00474 5.99366C8.07709 6.12404 8.11657 6.27009 8.11977 6.41916C8.12297 6.56823 8.08978 6.71584 8.02309 6.8492L6.94232 9.01165C6.94232 9.01165 7.25563 10.6223 8.56669 11.9338C9.8782 13.2448 11.4833 13.5531 11.4833 13.5531L13.6453 12.4719C13.7787 12.4051 13.9264 12.3719 14.0756 12.3751C14.2247 12.3783 14.3709 12.4178 14.5013 12.4902L16.5289 13.6178C16.6717 13.6973 16.7907 13.8136 16.8736 13.9546C16.9564 14.0956 17.0001 14.2561 17 14.4196V16.7468C17 17.9321 15.899 18.7881 14.7761 18.4092C12.4696 17.6308 8.88918 16.1491 6.61983 13.8797C4.35095 11.6104 2.86879 8.03043 2.09078 5.72347C1.71187 4.60095 2.56786 3.5 3.75322 3.5H6.08036Z"
                        fill="#DE2E2D"
                        stroke="#DE2E2D"
                        strokeLinejoin="round"
                      />
                    </svg>

                    {siteInfo.tels.social.tel}
                  </Link>
                </li>

                <li>
                  <Link
                    className="hover:text-red-hover"
                    href={`tel:${siteInfo.tels.simple.telFormatted}`}
                  >
                    {siteInfo.tels.simple.tel}
                  </Link>
                </li>
              </ul>

              <time>{siteInfo.timeWork}</time>
            </div>

            <nav>
              <ul className="flex items-center gap-[58px]">
                {menu.map(({ id, link, name }) => (
                  <li key={id}>
                    <Link
                      className="text-lg leading-[23.4px] uppercase hover:text-red-hover"
                      href={link}
                    >
                      {name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          <button
            onClick={setIsOpen}
            className="max-w-[144px] w-full h-[41px] text-base leading-[20.8px] xl:flex hidden justify-center items-center text-red border-red border hover:bg-red hover:text-white"
          >
            Заказать звонок
          </button>

          <div className="xl:hidden flex items-center gap-4">
            <button
              onClick={handleTelMobileMenu}
              id="handleMobileTelMenu"
              className={cn(
                "h-9 w-9 handleMobileTelMenu",
                isOpenTelMobileMenu && "active"
              )}
            >
              <svg
                width="36"
                height="36"
                viewBox="0 0 36 36"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13.8644 8.80757C13.5437 7.73797 13.3233 6.64088 13.2058 5.53045C13.0884 4.42337 12.1219 3.59961 11.0088 3.59961H5.84496C4.51662 3.59961 3.49402 4.74705 3.61063 6.06941C4.78797 19.3969 15.4042 30.0124 28.7318 31.1905C30.0549 31.3071 31.2016 30.2883 31.2016 28.9599V24.3552C31.2016 22.6748 30.3778 21.712 29.2707 21.5946C28.1603 21.4774 27.0632 21.2572 25.9936 20.9368C25.3594 20.7488 24.6862 20.7358 24.0453 20.8994C23.4044 21.063 22.8197 21.397 22.3532 21.866L20.1428 24.0764C16.1565 21.9168 12.8844 18.6446 10.7248 14.6584L12.9352 12.448C13.4043 11.9816 13.7384 11.3969 13.9021 10.756C14.0658 10.1151 14.0523 9.44181 13.8644 8.80757Z"
                  fill="#DE2E2D"
                />
              </svg>
            </button>

            <button
              onClick={handleMobileMenu}
              id="handleMobileMenu"
              className={cn(
                "h-9 relative w-9 flex justify-center items-center handleMobileTelMenu",
                isOpenMobileMenu && "active"
              )}
            >
              <svg
                className="burgerIcon"
                width="36"
                height="36"
                viewBox="0 0 36 36"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.5 28.5H34.5M1.5 7.5H34.5M1.5 18H34.5"
                  stroke="#DE2E2D"
                  strokeWidth="4"
                />
              </svg>

              <svg
                className="closeIcon"
                width="36"
                height="36"
                viewBox="0 0 36 36"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5 5L31 31M5 31L31 5"
                  stroke="#DE2E2D"
                  strokeWidth="4"
                />
              </svg>
            </button>
          </div>
        </Container>
      </header>

      <MenuMobile handleMenu={handleMobileMenu} isOpen={isOpenMobileMenu} />
      <TelMenuMobile
        handleMenu={handleTelMobileMenu}
        isOpen={isOpenTelMobileMenu}
      />
    </>
  );
};
export default Header;
