"use client";

import { IMaskInput } from "react-imask";
import Button from "../Button";
import Conf from "../Conf";
import { Controller, useForm } from "react-hook-form";
import { useThankStore } from "@/store/modal/thankStore";
import { sendTelegram } from "@/hooks/sendTelegam";
import { toast } from "react-toastify";
import { IForm } from "@/types/IForm";

const ContactForm = () => {
  const { setIsOpen } = useThankStore();
  const { register, handleSubmit, control, reset } = useForm<IForm>();

  const handleSubmitForm = handleSubmit(
    async (data) => {
      const { company, email, name, tel, info } = data;

      const message = `
<b>Имя: </b> ${name}
<b>Телефон: </b> ${tel}
<b>email: </b> ${email ? email : "Не указано"}
<b>Название компании: </b> ${company}
<b>Информация и грузе и маршруте: </b> ${info}`;

      const isOk = await sendTelegram(message);

      if (isOk) {
        setIsOpen();
        reset();
      }
    },
    (errors) => {
      if (errors.name) {
        toast.error(errors.name.message);
      }
      if (errors.tel) {
        toast.error(errors.tel.message);
      }
      if (errors.company) {
        toast.error(errors.company.message);
      }
      if (errors.info) {
        toast.error(errors.info.message);
      }
      if (errors.conf) {
        toast.error(errors.conf.message);
      }
    }
  );

  return (
    <form
      onSubmit={handleSubmitForm}
      className="xl:max-w-[504px] flex-shrink-0 w-full bg-white xl:px-[30px] py-[30px] px-[15px] space-y-6 shadow-aboutCard"
    >
      <div className="space-y-3.5">
        <input
          {...register("name", {
            required: "Поле Имя не заполнено!",
          })}
          type="text"
          placeholder="Имя*"
        />
        <Controller
          control={control}
          name="tel"
          render={({ field }) => (
            <IMaskInput
              onAccept={field.onChange}
              type="tel"
              {...register("tel", {
                required: "Поле Телефон не заполнено!",
              })}
              ref={field.ref}
              placeholder="Номер телефона*"
              mask="+375 (00) 000-00-00"
            />
          )}
        />
        <input {...register("email")} type="email" placeholder="E-mail" />
        <input
          {...register("company", {
            required: "Поле Компании не заполнено!",
          })}
          type="text"
          placeholder="Название компании*"
        />
        <textarea
          {...register("info", {
            required: "Поле Информация о грузе не заполнено!",
          })}
          placeholder="Информация и грузе и маршруте*"
        ></textarea>
      </div>

      <Conf register={register} />

      <Button type="submit">Получить расчет</Button>
    </form>
  );
};
export default ContactForm;
