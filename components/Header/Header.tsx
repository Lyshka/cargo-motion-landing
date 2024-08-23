import Link from "next/link";
import Container from "../Container";
import Image from "next/image";
import { siteInfo } from "@/constants/siteInfo";
import { menu } from "@/constants/menu";

const Header = () => {
  return (
    <header className="bg-white shadow-header h-24 flex justify-center items-center sticky top-0 z-[3]">
      <Container className="flex items-center justify-between">
        <Link href={"/"} className="hover-opacity block h-[83px] w-[229px]">
          <Image
            height={83}
            width={229}
            className="w-full h-full"
            alt="Логотип"
            src={siteInfo.logoHeader}
          />
        </Link>

        <div className="space-y-5">
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

        <button className="max-w-[144px] w-full h-[41px] text-base leading-[20.8px] flex justify-center items-center text-red border-red border hover:bg-red hover:text-white">
          Заказать звонок
        </button>
      </Container>
    </header>
  );
};
export default Header;
