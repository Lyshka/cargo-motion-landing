"use client";

import { useOrderStore } from "@/store/modal/orderStore";
import OrderForm from "../Form/OrderForm";
import Modal from "./Modal";

const OrderModal = () => {
  const { isOpen, setIsOpen } = useOrderStore();

  return (
    <Modal title="Заказать звонок" closeHandle={setIsOpen} isOpen={isOpen}>
      <OrderForm />
    </Modal>
  );
};
export default OrderModal;
