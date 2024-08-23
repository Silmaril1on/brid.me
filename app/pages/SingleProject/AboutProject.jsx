import ArrowSvg from "@/app/components/buttons/ArrowSvg";
import React from "react";

const AboutProject = ({ data }) => {
  return (
    <section className="flex flex-col lg:flex-row space-y-5 lg:space-y-0 lg:space-x-14 *:flex *:flex-col *:space-y-4 *:w-full p-3 lg:p-5">
      <About data={data} />
      <Scope data={data} />
    </section>
  );
};

const About = ({ data }) => {
  return (
    <div className="lg:border-b border-lineColor pb-5">
      <article className="flex flex-row items-center border-b border-lineColor pb-2">
        <div className="arrow-size">
          <ArrowSvg />
        </div>
        <h1 className="text-xl lg:text-2xl ml-2">{data?.name}</h1>
      </article>
      <p className="text-[12px] lg:text-[15px]">{data?.about}</p>
    </div>
  );
};

const Scope = ({ data }) => {
  return (
    <div className="lg:border-b border-lineColor pb-5">
      <article className="flex flex-row items-center border-b border-lineColor pb-2">
        <div className="arrow-size">
          <ArrowSvg />
        </div>
        <h1 className="text-xl lg:text-2xl ml-2">scope of work</h1>
      </article>
      <div>
        {data?.scope.map((item, index) => {
          return (
            <h1
              key={index}
              className="text-[12px] lg:text-[15px] hover:text-green duration-300 cursor-pointer"
            >
              {item}
            </h1>
          );
        })}
      </div>
    </div>
  );
};

export default AboutProject;
