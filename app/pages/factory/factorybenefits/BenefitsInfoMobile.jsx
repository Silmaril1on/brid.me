import Image from "next/image";

const BenefitsInfoMobile = ({ data, active, setActive }) => {
  return (
    <section className="flex md:hidden">
      <div className="w-full space-y-6 mr-4">
        {data.map((item, index) => {
          return (
            <div
              onMouseEnter={() => setActive(index)}
              className="flex flex-col w-full pl-3 space-y-3 "
              key={index}
            >
              <div className="flex flex-row items-end *:duration-300">
                <div className="w-12 h-12">
                  <Image
                    className="h-full w-auto"
                    src={item.number}
                    alt="numb"
                    quality={100}
                    priority
                  />
                </div>
                <h1
                  className={
                    active === index
                      ? "text-lg text-green w-[220px]"
                      : "text-lg text-grayText w-[220px]"
                  }
                >
                  {item.name}
                </h1>
              </div>
              <p className="text-xs">{item.info}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default BenefitsInfoMobile;
