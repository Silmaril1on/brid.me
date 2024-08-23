"use client";
import { useState } from "react";
import BenefitsHeader from "./BenefitsHeader";
import BenefitsInfoMobile from "./BenefitsInfoMobile";
import BenefitsInfoDesktop from "./BenefitsInfoDesktop";
import one from "@/app/assets/Vector1.png";
import two from "@/app/assets/Vector2.png";
import three from "@/app/assets/Vector3.png";

const data = [
  {
    number: one,
    name: "proof of quality of your brand",
    info: "Our team possesses a unique blend of skills and combines aesthetics with strategy To meet your business goals and objectives",
  },
  {
    number: two,
    name: "value your time",
    info: "Save time and don't waste time on things that are not your priorities",
  },
  {
    number: three,
    name: "big profit, low cost",
    info: "A team of five people instead of one designer",
  },
];

const FactoryBenefits = () => {
  const [active, setActive] = useState(0);

  return (
    <section className="w-full my-8 bg-black h-screen">
      <div className="flex flex-col md:flex-row justify-center h-full">
        <BenefitsHeader />
        <BenefitsInfoDesktop
          data={data}
          active={active}
          setActive={setActive}
        />
        <BenefitsInfoMobile data={data} active={active} setActive={setActive} />
      </div>
    </section>
  );
};

export default FactoryBenefits;
