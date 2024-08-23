"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import mob1 from "@/app/assets/mobileheaderphotos/1.jpg";
import mob2 from "@/app/assets/mobileheaderphotos/2.jpg";
import mob3 from "@/app/assets/mobileheaderphotos/3.jpg";
import mob4 from "@/app/assets/mobileheaderphotos/4.jpg";
import mob5 from "@/app/assets/mobileheaderphotos/5.jpg";
import mob6 from "@/app/assets/mobileheaderphotos/6.jpg";
import mob7 from "@/app/assets/mobileheaderphotos/7.jpg";
import mob8 from "@/app/assets/mobileheaderphotos/8.jpg";
import Headline from "./Headline";

const ActiveMobileImage = () => {
  const mobileImages = [mob2, mob1, mob4, mob3, mob6, mob7, mob5, mob8];
  const [index, setIndex] = useState(0);
  const [activePhoto, setActivePhoto] = useState(mobileImages[index]);

  const changeIndex = () => {
    setIndex(index + 1);
    if (index === 7) {
      setIndex(0);
    }
  };

  useEffect(() => {
    setActivePhoto(mobileImages[index]);
  }, [index]);

  return (
    <div onClick={changeIndex} className="w-full h-full md:hidden block">
      <Image
        className="w-full h-full object-cover"
        src={activePhoto}
        alt="Brid-Project-Pics"
        quality={80}
        width={500}
        priority
      />
      <Headline />
    </div>
  );
};

export default ActiveMobileImage;
