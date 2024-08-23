import Button from "../Button";
import Conf from "../Conf";

const form = () => {
  return (
    <form className="xl:space-y-[30px] space-y-5 w-full">
      <div className="grid md:grid-cols-2 md:gap-x-[34px] gap-y-3.5">
        <input type="text" name="text" placeholder="Имя*" />
        <input type="tel" name="tel" placeholder="Номер телефона*" />
        <input type="email" name="email" placeholder="E-mail" />
        <input type="text" name="company" placeholder="Название компании*" />
      </div>

      <Conf />

      <Button type="submit">Отправить</Button>
    </form>
  );
};
export default form;
