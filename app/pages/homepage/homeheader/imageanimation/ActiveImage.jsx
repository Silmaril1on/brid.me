"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import img1 from "@/app/assets/headerphotos/01.gif";
import img2 from "@/app/assets/headerphotos/02.jpg";
import img3 from "@/app/assets/headerphotos/03.gif";
import img4 from "@/app/assets/headerphotos/04.jpg";
import img5 from "@/app/assets/headerphotos/05.jpg";
import img6 from "@/app/assets/headerphotos/06.jpg";
import img7 from "@/app/assets/headerphotos/07.jpg";
import img8 from "@/app/assets/headerphotos/08.gif";
import img9 from "@/app/assets/headerphotos/09.gif";

const ActiveImage = () => {
  const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9];
  const [index, setIndex] = useState(0);
  const containerRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (event) => {
      if (containerRef.current) {
        const { left, right, top, bottom } =
          containerRef.current.getBoundingClientRect();

        if (
          event.clientX >= left &&
          event.clientX <= right &&
          event.clientY >= top &&
          event.clientY <= bottom
        ) {
          const containerWidth = right - left;
          const containerHeight = bottom - top;
          const xRatio = (event.clientX - left) / containerWidth;
          const yRatio = (event.clientY - top) / containerHeight;
          const combinedRatio = (xRatio + yRatio) / 2;
          const newIndex = Math.floor(combinedRatio * images.length);

          setIndex(newIndex >= images.length ? 0 : newIndex);
        }
      }
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [images.length]);

  return (
    <div ref={containerRef} className="w-full h-full">
      <Image
        className="w-full object-cover h-full"
        src={images[index]}
        alt="animation"
        priority
        quality={80}
        width={1920}
      />
    </div>
  );
};

export default ActiveImage;
