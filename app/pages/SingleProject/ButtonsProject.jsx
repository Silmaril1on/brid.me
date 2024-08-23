import LeftButton from "@/app/components/buttons/LeftButton";
import RightButton from "@/app/components/buttons/RightButton";
import projectsData from "@/app/database/projectdata";
import Link from "next/link";
import { useState, useEffect } from "react";

const ButtonsProject = ({ data }) => {
  const projectLinks = projectsData.map((item) => item.name);
  const [nextLink, setNextlink] = useState();
  const [prevLink, setPrevLink] = useState();

  useEffect(() => {
    if (data?.id === 0) {
      setPrevLink(projectLinks[projectsData.length - 1]);
    } else {
      setPrevLink(projectLinks[data?.id - 1]);
    }

    if (data?.id === projectLinks.length - 1) {
      setNextlink(projectLinks[0]);
    } else {
      setNextlink(projectLinks[data?.id + 1]);
    }
  }, [data, projectLinks]);

  return (
    <div className="px-3 lg:px-5 py-3 flex flex-row justify-between items-center">
      {prevLink && (
        <Link href={prevLink}>
          <LeftButton />
        </Link>
      )}
      {nextLink && (
        <Link href={nextLink}>
          <RightButton />
        </Link>
      )}
    </div>
  );
};

export default ButtonsProject;
