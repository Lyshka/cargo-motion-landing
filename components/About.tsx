import { about } from "@/constants/about";
import Container from "./Container";
import Title from "./Title";

const About = () => {
  return (
    <Container
      id="about"
      className="flex flex-col gap-[50px] xl:items-start items-center scroll-mt-28"
    >
      <div className="flex xl:gap-0 gap-[30px] w-full xl:flex-row flex-col xl:items-start items-center xl:justify-between">
        <Title>О Компании</Title>

        <div className="xl:max-w-[792px] w-full space-y-2.5 text-justify xl:text-[26px] text-[22px] xl:leading-[33.8px] leading-[28.6px]">
          <p>
            ООО «Карго-Мотион» - транспортно-экспедиционная компания, работающая
            на рынке с 2012 года. Предоставляем весь спектр услуг по организации
            грузовых перевозок как собственным, так и привлеченным транспортом.
            Собственный подвижной состав соответствует экологическим стандартам
            Евро-5, Евро-6.
          </p>

          <p>
            Накопленный опыт позволяет выполнять нам перевозки максимально
            быстро, качественно и надежно.
          </p>
        </div>
      </div>

      <ul className="grid xl:grid-cols-3 grid-cols-1 gap-6 w-full">
        {about.map(({ desc, id, value }) => (
          <li
            key={id}
            className="flex flex-col items-center justify-center transition-all duration-300 shadow-aboutCard bg-gray-f7 xl:h-[180px] h-40 hover:shadow-button group"
          >
            <span className="font-bold text-[80px] leading-[104px] text-red group-hover:text-red-hover transition-all duration-300">
              {value}
            </span>

            <p className="text-xl leading-[26px] text-black-36">{desc}</p>
          </li>
        ))}
      </ul>
    </Container>
  );
};
export default About;
