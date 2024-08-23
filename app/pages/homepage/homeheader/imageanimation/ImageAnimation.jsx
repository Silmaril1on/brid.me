import ActiveImage from "./ActiveImage";
import Headline from "./Headline";
import ActiveMobileImage from "./ActiveMobileImage";

const ImageAnimation = () => {
  return (
    <div className="w-full">
      <div className="overflow-hidden hidden h-full w-full md:flex justify-between flex-col">
        <ActiveImage />
        <Headline />
      </div>
      <ActiveMobileImage />
    </div>
  );
};

export default ImageAnimation;
