import React from "react";
import Link from "next/link";
import Image from "next/image";
import ArrowSvg from "@/app/components/buttons/ArrowSvg";

const ProjectsList = ({ project, name, image }) => {
  const truncateString = (str, num) => {
    if (str?.length > num) {
      return str.slice(0, num);
    } else {
      return str;
    }
  };

  return (
    <Link href={`/work/${project.name}`}>
      <section className="w-[450px] *:duration-300 relative duration-500 flex flex-col h-full px-4">
        <article className="flex flex-row w-full h-12 mb-3 space-x-6 items-center border-b border-lineColor">
          <div className="flex flex-row w-full">
            <div className="arrow-size">
              <ArrowSvg />
            </div>
            <h1 className="text-3xl center justify-start ml-3 w-full">
              {truncateString(name.toLocaleString(), 15)}
            </h1>
          </div>
        </article>

        <div className="w-full h-80 overflow-hidden">
          <Image
            className="object-auto w-full h-full object-cover hover:scale-110 duration-300"
            src={image}
            alt="horizon"
            quality={100}
            width={550}
          />
        </div>

        <div className="border-b border-t mt-5 border-lineColor flex flex-row flex-wrap items-start py-2 h-16">
          {project.scope.map((item, index) => {
            return (
              <h1 key={index} className="mr-3 text-sm">
                {item} \
              </h1>
            );
          })}
        </div>
      </section>
    </Link>
  );
};

export default ProjectsList;
