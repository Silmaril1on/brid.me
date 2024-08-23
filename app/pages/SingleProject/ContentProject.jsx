import Image from "next/image";

const ContentProject = ({ data }) => {
  const images = data?.projectImages;

  return (
    <div className="project-section-container">
      {images?.map((image, index) => {
        return (
          <div className="w-full" key={index}>
            <Image
              src={image}
              className="w-full h-auto"
              alt="Brid-Projects"
              priority
              quality={80}
              width={1920}
            />
          </div>
        );
      })}
    </div>
  );
};

export default ContentProject;
