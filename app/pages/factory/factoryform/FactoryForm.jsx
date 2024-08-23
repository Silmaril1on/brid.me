import TextAnimation from "@/app/components/TextAnimation";
import UserForm from "./UserForm";

const FactoryForm = () => {
  return (
    <section
      id="bottom"
      className="flex flex-col h-screen md:flex-row w-full bg-black pt-12 lg:pt-0"
    >
      <div className="w-full lg:w-2/4 flex flex-col justify-between py-5 lg:py-0">
        <div className="text-3xl md:text-6xl text-white lg:mt-20 pl-3 lg:pl-5">
          <TextAnimation text="FILL AND " />
          <TextAnimation text="TEAM UP WITH US" />
        </div>
        <div className="mb-16 pl-5 text-[9px] lg:text-[14px] hidden lg:block">
          <h1>join the factory</h1>
        </div>
      </div>
      <UserForm />
    </section>
  );
};

export default FactoryForm;
