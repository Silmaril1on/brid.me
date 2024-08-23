const ServiceTitles = ({ item }) => {
  return (
    <div>
      <h1 className="text-[22px] md:text-4xl lg:text-5xl cursor-pointer hover:text-whiteText duration-300 text-center ">
        {item.name}
      </h1>
    </div>
  );
};

export default ServiceTitles;
