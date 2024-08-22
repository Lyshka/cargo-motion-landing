import { about } from "@/constants/about";
import Container from "./Container";
import Title from "./Title";

const About = () => {
  return (
    <Container className="space-y-[50px]">
      <div className="flex justify-between">
        <Title>О Компании</Title>

        <div className="max-w-[792px] w-full space-y-2.5 text-justify text-[26px] leading-[33.8px]">
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

      <ul className="grid grid-cols-3 gap-6">
        {about.map(({ desc, id, value }) => (
          <li
            key={id}
            className="flex flex-col items-center justify-center transition-all duration-300 shadow-aboutCard bg-gray-f7 h-[180px] hover:shadow-button group"
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
