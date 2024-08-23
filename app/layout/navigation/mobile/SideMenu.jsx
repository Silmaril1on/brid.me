"use client";
import { useState } from "react";
import close from "../../../assets/close.png";
import menu from "../../../assets/menu.png";
import Image from "next/image";
import SideLinks from "./SideLinks";

const SideMenu = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <>
      <div
        onClick={() => setIsActive(!isActive)}
        className="block lg:hidden cursor-pointer *:flex *:items-center"
      >
        {isActive ? (
          <div className="w-7 h-7">
            <Image src={close} alt="close" className="w-full h-auto" />
          </div>
        ) : (
          <div className="w-7 h-7">
            <Image src={menu} alt="menu" className="w-full h-auto" />
          </div>
        )}
      </div>
      {isActive && <SideLinks setIsActive={setIsActive} />}
    </>
  );
};

export default SideMenu;
