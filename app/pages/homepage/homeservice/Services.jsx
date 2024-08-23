import ServiceList from "./ServiceList";

const Services = () => {
  return (
    <section
      id="services"
      className="flex justify-center flex-col h-auto my-8 lg:pt-14 px-3 lg:px-5 lg:my-5 overflow-hidden"
    >
      <ServiceList />
    </section>
  );
};

export default Services;
