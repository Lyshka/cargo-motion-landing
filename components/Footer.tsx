import Link from "next/link";
import Container from "./Container";
import Image from "next/image";
import { siteInfo } from "@/constants/siteInfo";

const Footer = () => {
  return (
    <footer className="xl:h-[121px] xl:py-0 py-7 flex justify-center items-center bg-gray-a9">
      <Container className="xl:text-sm text-base xl:leading-[18.2px] leading-[20.8px] flex items-center xl:justify-between xl:flex-row flex-col gap-6">
        <Link className="flex flex-col xl:-space-y-[1px] xl:gap-0 gap-2.5 xl:items-start items-center hover-opacity" href={"/"}>
          <Image
            src={siteInfo.logo}
            alt="Логотип"
            width={154}
            height={56}
            className="xl:w-[154px] w-[173px] xl:h-14 h-[62px]"
          />

          <span className="xl:text-xs text-base xl:leading-[15.6px] leading-[20.8px]">© ООО “Карго-Мотион”</span>
        </Link>

        <Link className="hover:text-red-hover" target="_blank" href={"/"}>Политика обработки персональных данных</Link>

        <Link className="hover:text-red-hover" target="_blank" href={"https://artcly.by/"}>Создание сайта: ArtCly.by</Link>
      </Container>
    </footer>
  );
};
export default Footer;
