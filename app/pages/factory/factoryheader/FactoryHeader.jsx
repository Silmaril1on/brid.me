"use client";
import HeaderHeadline from "./HeaderHeadline";
import HeaderInfo from "./HeaderInfo";

const FactoryHeader = () => {
  return (
    <section
      id="#top"
      className="w-full h-screen flex flex-col justify-between"
    >
      <HeaderHeadline />
      <HeaderInfo />
    </section>
  );
};

export default FactoryHeader;
