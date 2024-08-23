"use client";
import Link from "next/link";
import BridLogo from "./buttons/BridLogo";
import SideMenu from "../layout/navigation/mobile/SideMenu";

const SecondaryNavBar = () => {
  return (
    <nav className=" flex flex-row justify-between items-center px-3 lg:px-5 border-b border-lineColor py-3 fixed top-0 w-full z-10  bg-black">
      <BridLogo />
      <div className="space-x-2 xl:space-x-4 hover:*:text-whiteText hidden lg:flex flex-row *:duration-300 *:uppercase text-[10px] xl:text-base">
        <Link href="/#services">services \</Link>
        <Link href="/work">work \</Link>
        <Link href="/#awards">awards \</Link>
        <Link href="/#footer">contact \</Link>
        <div className="w-20">
          <Link href="/factory" className="text-green hover:font-bold ">
            factory
          </Link>
        </div>
      </div>
      <SideMenu />
    </nav>
  );
};

export default SecondaryNavBar;
