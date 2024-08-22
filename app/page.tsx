import About from "@/components/About";
import Contact from "@/components/Contact";
import Edges from "@/components/Edges";
import FormBlock from "@/components/FormBlock";
import Services from "@/components/Services";
import Steps from "@/components/Steps";
import UpBlock from "@/components/UpBlock";

export default function Home() {
  return (
    <div className="xl:space-y-[140px] space-y-[60px]">
      <UpBlock />
      <About />
      <Services />
      <Edges />
      <FormBlock />
      <Steps />
      <Contact />
    </div>
  );
}
