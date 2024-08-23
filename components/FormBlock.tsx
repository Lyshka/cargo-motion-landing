import Image from "next/image";
import Container from "./Container";
import Title from "./Title";
import ShippingForm from "@/components/Form/ShippingForm";

const FormBlock = () => {
  return (
    <section className="xl:h-[645px] flex justify-center items-center xl:py-[70px] relative">
      <Image
        src={"/formBlock.webp"}
        height={645}
        width={1920}
        alt="Вагоны"
        className="absolute w-full h-full object-cover xl:block hidden"
      />

      <Container className="bg-white xl:py-[50px] w-full flex justify-center items-center relative z-[1]">
        <div className="xl:max-w-[886px] w-full flex flex-col items-center xl:gap-[50px] gap-10">
          <div className="flex flex-col items-center xl:gap-5 gap-[30px] text-center">
            <Title>Вам нужно перевезти груз?</Title>

            <p className="xl:text-[26px] text-[22px] xl:leading-[33.8px] leading-[28.6px] text-black-36">
              Ответим на все ваши вопросы
            </p>
          </div>

          <ShippingForm />
        </div>
      </Container>
    </section>
  );
};
export default FormBlock;
