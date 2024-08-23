import SecondaryNavBar from "@/app/components/SecondaryNavBar";
import BridProjects from "@/app/pages/projects/BridProjects";

export const metadata = {
  title: "BRID | Work",
};

const WorkPage = () => {
  return (
    <div>
      <SecondaryNavBar />
      <BridProjects />
    </div>
  );
};

export default WorkPage;
