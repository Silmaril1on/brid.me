"use client";
import { useState } from "react";
import ArrowSvg from "./ArrowSvg";
import GreenArrow from "./GreenArrow";

const RightButton = ({ onClick }) => {
  const [active, setActive] = useState(true);
  return (
    <button
      onMouseEnter={() => setActive(false)}
      onMouseLeave={() => setActive(true)}
      className="flex flex-row items-center space-x-2"
      onClick={onClick}
    >
      <h1 className="text-[16px] lg:text-2xl text-hover"> next</h1>
      <div>
        {active ? (
          <div className="arrow-size">
            <ArrowSvg />
          </div>
        ) : (
          <div className="arrow-size">
            <GreenArrow />
          </div>
        )}
      </div>
    </button>
  );
};

export default RightButton;
