import { edges } from "@/constants/edges";
import Container from "./Container";
import Title from "./Title";
import Image from "next/image";

const Edges = () => {
  return (
    <Container
      id="edges"
      className="flex flex-col items-center xl:gap-[50px] gap-10 scroll-mt-28"
    >
      <div className="flex flex-col items-center xl:gap-5 gap-[30px] text-center">
        <Title>Наши преимущества</Title>

        <p className="xl:max-w-[754px] w-full xl:text-[26px] text-[22px] xl:leading-[33.8px] leading-[28.6px]">
          Наша задача — сделать процесс транспортировки груза любой
          сложностипростым, понятным и удобным для Вас!
        </p>
      </div>

      <ul className="grid xl:grid-cols-3 md:grid-cols-2 xl:gap-x-[152px] xl:gap-y-10 gap-x-[30px] gap-y-[30px]">
        {edges.map(({ icon, id, text }) => (
          <li
            key={id}
            className="flex flex-col items-center xl:gap-[18px] gap-2 group"
          >
            <Image
              alt="Иконка"
              src={icon}
              width={70}
              height={70}
              className="w-[70px] h-[70px] group-hover:scale-110"
            />

            <p className="xl:text-xl text-lg xl:leading-[26px] leading-[23.4px] text-center max-w-[288px] w-full">
              {text}
            </p>
          </li>
        ))}
      </ul>
    </Container>
  );
};
export default Edges;
