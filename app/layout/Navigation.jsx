import React from "react";
import BridLogo from "../components/buttons/BridLogo";
import Navliks from "./navigation/desktop/Navliks";
import SideMenu from "./navigation/mobile/SideMenu";

const Navigation = () => {
  return (
    <nav className="flex z-10 flex-row justify-between items-center border-b border-lineColor px-3 xl:px-5 py-3 fixed top-0 w-full bg-black">
      <BridLogo />
      <Navliks />
      <SideMenu />
    </nav>
  );
};

export default Navigation;
