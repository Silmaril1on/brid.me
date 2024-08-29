"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import img2 from "@/app/assets/headerphotos/02.jpg";
import img4 from "@/app/assets/headerphotos/04.jpg";
import img5 from "@/app/assets/headerphotos/05.jpg";
import img6 from "@/app/assets/headerphotos/06.jpg";
import img7 from "@/app/assets/headerphotos/07.jpg";
const video1 = "/01.webm";
const video3 = "/03.webm";
const video8 = "/08.webm";
const video9 = "/09.webm";

const ActiveImage = () => {
  const media = [
    { type: "video", src: video1 },
    { type: "image", src: img2 },
    { type: "video", src: video3 },
    { type: "image", src: img4 },
    { type: "image", src: img5 },
    { type: "image", src: img6 },
    { type: "image", src: img7 },
    { type: "video", src: video8 },
    { type: "video", src: video9 },
  ];
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
          const newIndex = Math.floor(combinedRatio * media.length);

          setIndex(newIndex >= media.length ? 0 : newIndex);
        }
      }
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [media.length]);

  const { type, src } = media[index];

  return (
    <div ref={containerRef} className="w-full h-full">
      {type === "video" ? (
        <video className="w-full h-full object-cover" autoPlay muted loop>
          <source src={src} type="video/webm" />
        </video>
      ) : (
        <Image
          className="w-full object-cover h-full"
          src={src}
          alt="media"
          priority
          quality={80}
          width={1920}
          height={1080}
        />
      )}
    </div>
  );
};

export default ActiveImage;
