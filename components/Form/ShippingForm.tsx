"use client";

import { toast } from "react-toastify";
import { useForm, Controller } from "react-hook-form";
import { IMaskInput } from "react-imask";

import Button from "../Button";
import Conf from "../Conf";
import { sendTelegram } from "@/hooks/sendTelegam";
import { useThankStore } from "@/store/modal/thankStore";
import { IForm } from "@/types/IForm";

const ShippingForm = () => {
  const { setIsOpen } = useThankStore();
  const { register, handleSubmit, control, reset } = useForm<IForm>();

  const handleSubmitForm = handleSubmit(
    async (data) => {
      const { company, email, name, tel } = data;

      const message = `
<b>Имя: </b> ${name}
<b>Телефон: </b> ${tel}
<b>email: </b> ${email ? email : "Не указано"}
<b>Название компании: </b> ${company}
    `;

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
      if (errors.conf) {
        toast.error(errors.conf.message);
      }
    }
  );

  return (
    <form
      onSubmit={handleSubmitForm}
      className="xl:space-y-[30px] space-y-5 w-full"
    >
      <div className="grid md:grid-cols-2 md:gap-x-[34px] gap-y-3.5">
        <input
          type="text"
          {...register("name", {
            required: "Поле Имя не заполнено!",
          })}
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

        <input type="email" {...register("email")} placeholder="E-mail" />

        <input
          type="text"
          {...register("company", {
            required: "Поле Компании не заполнено!",
          })}
          placeholder="Название компании*"
        />
      </div>

      <Conf register={register} />

      <Button type="submit">Отправить</Button>
    </form>
  );
};
export default ShippingForm;
