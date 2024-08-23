import React from "react";
import Link from "next/link";

const LinkButton = () => {
  return (
    <div className="py-2 flex justify-end w-full relative z-[5]">
      <Link
        href="/work"
        className="mr-2 md:mr-5 uppercase text-sm lg:text-2xl underline underline-offset-2 duration-300 hover:text-whiteText cursor-pointer"
      >
        view all projects
      </Link>
    </div>
  );
};

export default LinkButton;
