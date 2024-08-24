"use client";

import { useThankStore } from "@/store/modal/thankStore";
import Button from "../Button";
import Modal from "./Modal";

const ThankModal = () => {
  const { setIsOpen, isOpen } = useThankStore();

  return (
    <Modal closeHandle={setIsOpen} title="Спасибо за заявку" isOpen={isOpen}>
      <div className="flex flex-col items-center xl:gap-10 gap-5">
        <p className="xl:text-[26px] text-[22px] xl:leading-[33.8px] leading-[28.6px] text-black-36 text-center">
          Мы свяжемся с вами в ближайшее время
        </p>

        <Button onClick={setIsOpen}>Хорошо</Button>
      </div>
    </Modal>
  );
};
export default ThankModal;
