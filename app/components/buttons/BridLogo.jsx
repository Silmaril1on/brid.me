import React from "react";
import logo from "../../assets/logo-brid.png";
import Image from "next/image";
import Link from "next/link";

const BridLogo = () => {
  return (
    <Link href="/">
      <Image src={logo} priority alt="brid" className="h-6 w-auto" />
    </Link>
  );
};

export default BridLogo;
