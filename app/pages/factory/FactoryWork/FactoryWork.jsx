import WorkHeader from "./WorkHeader";
import WorkTitles from "./WorkTitles";

const FactoryWork = () => {
  return (
    <section className="flex justify-start lg:justify-center relative flex-col w-full h-auto xl:h-screen bg-secondaryBg space-y-5 lg:space-y-10">
      <WorkHeader />
      <WorkTitles />
    </section>
  );
};

export default FactoryWork;
