import awardsData from "@/app/database/awardsdata";
import React from "react";

const AwardsList = () => {
  return (
    <div className="">
      <div className="bg-secondaryBg flex flex-row items-center justify-between p-3 lg:p-5">
        <span>category</span>
        <h1 className="w-full ml-[155px] hidden lg:block">project</h1>
        <span className="block">year</span>
      </div>
      {awardsData.map((item) => {
        return (
          <div
            className="px-3 lg:px-5 flex flex-row items-center justify-between py-3 odd:bg-secondaryBg even:bg-[#2e2e2e] relative before:absolute before:w-full before:h-full before:bg-lineColor before:-top-full before:left-0 hover:before:top-0 before:duration-300 overflow-hidden before:-z-1 *:z-5 hover:text-green"
            key={item.id}
          >
            <span className="w-[200px]">{item.category}</span>
            <h1 className="w-full mx-[100px] hidden lg:block  pointer-events-none">
              {item.name}
            </h1>
            <span>{item.year}</span>
          </div>
        );
      })}
    </div>
  );
};

export default AwardsList;
