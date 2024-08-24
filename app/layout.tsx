import type { Metadata } from "next";
import NextTopLoader from "nextjs-toploader";
import { ToastContainer, ToastTransition } from "react-toastify";

import Header from "@/components/Header/Header";
import Footer from "@/components/Footer";
import ThankModal from "@/components/Modal/ThankModal";
import OrderModal from "@/components/Modal/OrderModal";

import { proximaNovaCondensed } from "@/fonts/ProximaNovaCondensed";
import "./globals.css";
import "react-toastify/dist/ReactToastify.css";

export const metadata: Metadata = {
  title: "ООО Карго-Мотион",
  description:
    "Автомобильные грузоперевозки по территории Республики Беларусь, Российской Федерации, странам СНГ, Европейского союза, стран Азии",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={proximaNovaCondensed.className}>
        <NextTopLoader />
        <Header />
        {children}
        <Footer />
        <ThankModal />
        <OrderModal />
        <ToastContainer position="top-right" />
      </body>
    </html>
  );
}
