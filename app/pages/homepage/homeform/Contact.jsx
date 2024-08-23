import SocialMedia from "@/app/components/SocialMedia";
import React from "react";

const Contact = () => {
  return (
    <div className="px-3 lg:px-0 lg:pr-5 mt-10 lg:pb-4 flex flex-col justify-end">
      <SocialMedia />
      <div className="w-full flex flex-col items-end *:text-[14px] mb-2">
        <h1>Al. kazbegi st. 12a</h1>
        <h3>+995 599 49 88 09</h3>
        <a href="mailto:id@brid.me" className="font-secondary lowercase">
          id@brid.me
        </a>
      </div>
    </div>
  );
};

export default Contact;
