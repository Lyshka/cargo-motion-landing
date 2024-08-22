import Image from "next/image";
import Container from "./Container";
import Button from "./Button";

const UpBlock = () => {
  return (
    <section className="h-[840px] flex items-center relative">
      <Image
        width={1920}
        height={840}
        className="w-full h-full object-cover absolute inset-0"
        alt="Грузовик"
        src={"/upBlockBg.webp"}
      />

      <Container className="flex flex-col gap-[60px] relative z-[1]">
        <div className="space-y-6 text-white max-w-[522px] w-full">
          <h1 className="text-[70px] leading-[91px] font-semibold">
            Автомобильные грузоперевозки
          </h1>

          <p className="text-[26px] leading-[33.8px]">
            по территории Республики Беларусь, Российской Федерации, странам
            СНГ, Европейского союза, стран Азии
          </p>
        </div>

        <div className="flex items-center gap-[5px]">
          <Button>Получить расчет</Button>

          <span className="text-lg leading-[23.4px] text-white">
            Только для юр. лиц и ИП
          </span>
        </div>
      </Container>
    </section>
  );
};
export default UpBlock;
