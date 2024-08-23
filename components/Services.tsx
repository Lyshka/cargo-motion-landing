import { services } from "@/constants/services";
import Container from "./Container";
import Title from "./Title";
import Image from "next/image";
import { cn } from "@/lib/utils";

const Services = () => {
  return (
    <main>
      <Container id="services" className="flex flex-col items-center xl:gap-[50px] gap-10 scroll-mt-28">
        <div className="flex flex-col items-center xl:gap-5 gap-[30px]">
          <Title>Услуги</Title>

          <p className="xl:text-[26px] text-[22px] xl:leading-[33.8px] leading-[28.6px] text-center text-black-36">
            В зависимости от потребности клиента мы находим наиболее эффективное
            логистическое решение, которое включает оптимальный маршрут и способ
            транспортировки{" "}
          </p>
        </div>

        <ul className="xl:space-y-10 space-y-[30px]">
          {services.map(({ desc, id, title, img }, idx) => (
            <li
              key={id}
              className={cn(
                "flex items-center xl:flex-row flex-col xl:gap-6 gap-3 group",
                idx % 2 !== 0 ? "xl:flex-row-reverse" : ""
              )}
            >
              <div className="overflow-hidden xl:max-w-[588px] flex-shrink-0 w-full xl:h-[360px]">
                <Image
                  width={588}
                  height={360}
                  className="w-full h-full group-hover:scale-110 object-cover"
                  alt={title}
                  src={img}
                />
              </div>

              <div className="xl:space-y-6 space-y-2">
                <h2 className="xl:text-[30px] text-2xl xl:leading-[39px] leading-[31.2px] font-semibold uppercase group-hover:text-red-hover">
                  {title}
                </h2>

                <div
                  className="xl:text-xl text-lg text-justify xl:leading-[26px] leading-[23.4px] text-black-36 space-y-2.5"
                  dangerouslySetInnerHTML={{ __html: desc }}
                />
              </div>
            </li>
          ))}
        </ul>
      </Container>
    </main>
  );
};
export default Services;
