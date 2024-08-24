import Image from "next/image";
import Container from "./Container";
import Button from "./Button";
import Link from "next/link";

const UpBlock = () => {
  return (
    <section className="xl:h-[840px] xl:py-0 py-[60px] flex items-center relative">
      <Image
        width={1920}
        height={840}
        className="w-full h-full object-cover absolute inset-0 xl:block hidden"
        alt="Грузовик"
        src={"/upBlockBg.webp"}
      />

      <Image
        width={360}
        height={474}
        className="w-full h-full object-cover absolute inset-0 xl:hidden block"
        alt="Грузовик"
        src={"/upBlockBgMobile.webp"}
      />

      <Container className="flex flex-col xl:gap-[60px] gap-10 xl:items-start items-center relative z-[1]">
        <div className="flex flex-col xl:gap-6 gap-5 xl:items-start items-center text-white xl:max-w-[522px] w-full xl:text-left text-center">
          <h1 className="xl:text-[70px] text-[44px] xl:leading-[91px] leading-[57.2px] font-semibold">
            Автомобильные грузоперевозки
          </h1>

          <p className="xl:text-[26px] text-[22px] xl:leading-[33.8px] leading-[28.6px]">
            по территории Республики Беларусь, Российской Федерации, странам
            СНГ, Европейского союза, стран Азии
          </p>
        </div>

        <div className="flex items-center xl:flex-row flex-col gap-5">
          <Link href={"#contact"}>
            <Button>Получить расчет</Button>
          </Link>

          <span className="text-lg leading-[23.4px] text-white">
            Только для юр. лиц и ИП
          </span>
        </div>
      </Container>
    </section>
  );
};
export default UpBlock;
