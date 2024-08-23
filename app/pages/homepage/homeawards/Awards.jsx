import React from "react";
import AwardsList from "./AwardsList";
import SectionHeadline from "@/app/components/SectionHeadline";

const Awards = () => {
  return (
    <section
      id="awards"
      className="flex flex-col justify-center space-y-4 lg:space-y-8 pt-14 my-8"
    >
      <SectionHeadline text="awards" />
      <AwardsList />
    </section>
  );
};

export default Awards;
