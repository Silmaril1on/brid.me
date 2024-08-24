import Image from "next/image";

const ContentProject = ({ data }) => {
  const images = data?.projectImages;

  return (
    <div className="project-section-container">
      {images?.map((image, index) => {
        const imageUrl = image.src;
        const isGif = imageUrl.endsWith(".gif");
        return (
          <div className="w-full" key={index}>
            {isGif ? (
              <Image
                src={imageUrl}
                className="w-full h-auto"
                alt="Brid-Projects"
                priority={index === 0}
                quality={50}
                width={1920}
                height={1080}
              />
            ) : (
              <Image
                src={imageUrl}
                className="w-full h-auto"
                alt="Brid-Projects"
                priority={index === 0}
                quality={100}
                width={1920}
                height={1080}
              />
            )}
          </div>
        );
      })}
    </div>
  );
};

export default ContentProject;
