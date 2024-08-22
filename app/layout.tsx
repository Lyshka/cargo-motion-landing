import type { Metadata } from "next";
import NextTopLoader from "nextjs-toploader";
import "./globals.css";
import { proximaNovaCondensed } from "@/fonts/ProximaNovaCondensed";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer";

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
      <body className={"proximaNovaCondensed.className"}>
        <NextTopLoader />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
