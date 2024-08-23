import SectionHeadline from "@/app/components/SectionHeadline";
import TextAnimation from "@/app/components/TextAnimation";

const Headline = () => {
  return (
    <article className="py-10 lg:py-0">
      <div className="flex xl:flex-row flex-col-reverse md:flex-row justify-between items-start lg:items-end border-b border-lineColor pb-2 lg:pb-3">
        <div className="flex justify-end flex-col px-3 lg:px-5 *:text-[9px] mt-2 lg:mt-0">
          <TextAnimation text="Are you interested in working together and" />
          <TextAnimation text="elevate your brand to the next level?" />
        </div>
        <SectionHeadline text="hello" />
      </div>
      <article className="pl-3 lg:pl-5 text-[9px] xl:text-lg py-2 bg-black">
        <h1>let's get to work!</h1>
      </article>
    </article>
  );
};

export default Headline;
