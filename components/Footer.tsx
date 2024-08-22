import Link from "next/link";
import Container from "./Container";
import Image from "next/image";
import { siteInfo } from "@/constants/siteInfo";

const Footer = () => {
  return (
    <footer className="h-[121px] flex justify-center items-center bg-gray-a9">
      <Container>
        <Link className="flex flex-col -space-y-[1px] hover-opacity" href={"/"}>
          <Image
            src={siteInfo.logo}
            alt="Логотип"
            width={154}
            height={56}
            className="w-[154px] h-14"
          />

          <span className="text-xs leading-[15.6px]">© ООО “Карго-Мотион”</span>
        </Link>
      </Container>
    </footer>
  );
};
export default Footer;
