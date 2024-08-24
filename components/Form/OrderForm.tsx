"use client";

import { IMaskInput } from "react-imask";
import Button from "../Button";
import Conf from "../Conf";
import { sendTelegram } from "@/hooks/sendTelegam";
import { Controller, useForm } from "react-hook-form";
import { useThankStore } from "@/store/modal/thankStore";
import { IForm } from "@/types/IForm";
import { toast } from "react-toastify";
import { useOrderStore } from "@/store/modal/orderStore";

const OrderForm = () => {
  const { setIsOpen: setIsThankOpen } = useThankStore();
  const { setIsOpen: setIsOrderOpen } = useOrderStore();
  const { register, handleSubmit, control, reset } = useForm<IForm>();

  const handleSubmitForm = handleSubmit(
    async (data) => {
      const { company, email, name, tel, info } = data;

      const message = `
<b>Имя: </b> ${name}
<b>Телефон: </b> ${tel}
<b>Информация и грузе и маршруте: </b> ${info}`;

      const isOk = await sendTelegram(message);

      if (isOk) {
        setIsThankOpen();
        setIsOrderOpen();
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
      if (errors.info) {
        toast.error(errors.info.message);
      }
      if (errors.conf) {
        toast.error(errors.conf.message);
      }
    }
  );

  return (
    <form onSubmit={handleSubmitForm} className="flex flex-col gap-6">
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
        <textarea
          {...register("info", {
            required: "Поле Информация и грузe не заполнено!",
          })}
          placeholder="Информация и грузе и маршруте"
        ></textarea>
      </div>

      <Conf register={register} />

      <Button>Заказать звонок</Button>
    </form>
  );
};
export default OrderForm;
