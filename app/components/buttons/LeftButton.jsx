"use client";
import { useState } from "react";
import GreenArrow from "./GreenArrow";
import ArrowSvg from "./ArrowSvg";

const LeftButton = ({ onClick }) => {
  const [active, setActive] = useState(true);
  return (
    <button
      onMouseEnter={() => setActive(false)}
      onMouseLeave={() => setActive(true)}
      className="flex flex-row items-center space-x-2"
      onClick={onClick}
    >
      <div>
        {active ? (
          <div className="rotate-90 arrow-size">
            <ArrowSvg />
          </div>
        ) : (
          <div className="rotate-180 arrow-size">
            <GreenArrow />
          </div>
        )}
      </div>
      <h1 className="text-[16px] lg:text-2xl text-hover"> previous</h1>
    </button>
  );
};

export default LeftButton;
