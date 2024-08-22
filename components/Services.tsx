import { services } from "@/constants/services";
import Container from "./Container";
import Title from "./Title";
import Image from "next/image";
import { cn } from "@/lib/utils";

const Services = () => {
  return (
    <main>
      <Container className="flex flex-col items-center gap-[50px]">
        <div className="flex flex-col items-center gap-5">
          <Title>Услуги</Title>

          <p className="text-[26px] leading-[33.8px] text-center text-black-36">
            В зависимости от потребности клиента мы находим наиболее эффективное
            логистическое решение, которое включает оптимальный маршрут и способ
            транспортировки{" "}
          </p>
        </div>

        <ul className="space-y-10">
          {services.map(({ desc, id, title, img }, idx) => (
            <li
              key={id}
              className={cn(
                "flex items-center gap-6",
                idx % 2 !== 0 ? "flex-row-reverse" : ""
              )}
            >
              <div className="overflow-hidden max-w-[588px] flex-shrink-0 w-full h-[360px]">
                <Image
                  width={588}
                  height={360}
                  className="w-auto h-auto group-hover:scale-110 object-cover"
                  alt={title}
                  src={img}
                />
              </div>

              <div className="space-y-6">
                <h2 className="text-[30px] leading-[39px] font-semibold uppercase">
                  {title}
                </h2>

                <div
                  className="text-xl text-justify leading-[26px] text-black-36 space-y-2.5"
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
