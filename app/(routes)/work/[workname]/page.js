import SecondaryNavBar from "@/app/components/SecondaryNavBar";
import projectsData from "@/app/database/projectdata";
import SingleProject from "@/app/pages/SingleProject/SingleProject";

export const generateMetadata = async ({ params }) => {
  const itemName = params.workname.replace(/(%20|%3A)/g, (match) =>
    match === "%20" ? " " : ":"
  );
  const singleItem = projectsData.find((item) => item.name === itemName);
  return {
    title: `BRID | ${singleItem?.name}`,
  };
};

const SingleProjectPage = ({ params }) => {
  const itemName = params.workname.replace(/(%20|%3A)/g, (match) =>
    match === "%20" ? " " : ":"
  );
  const currrentProject = projectsData.find((item) => item.name === itemName);

  return (
    <div>
      <SecondaryNavBar />
      <SingleProject data={currrentProject} />
    </div>
  );
};

export default SingleProjectPage;
