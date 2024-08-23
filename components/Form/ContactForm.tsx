import Button from "../Button";
import Conf from "../Conf";

const ContactForm = () => {
  return (
    <form className="xl:max-w-[504px] flex-shrink-0 w-full bg-white xl:px-[30px] py-[30px] px-[15px] space-y-6 shadow-aboutCard">
      <div className="space-y-3.5">
        <input type="text" name="name" placeholder="Имя*" />
        <input type="tel" name="tel" placeholder="Номер телефона*" />
        <input type="email" name="email" placeholder="E-mail" />
        <input type="text" name="company" placeholder="Название компании*" />
        <textarea placeholder="Название компании*" name="info"></textarea>
      </div>

      <Conf />

      <Button type="submit">Получить расчет</Button>
    </form>
  );
};
export default ContactForm;
