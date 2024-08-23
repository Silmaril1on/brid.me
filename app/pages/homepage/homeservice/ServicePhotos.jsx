import { motion } from "framer-motion";
import Image from "next/image";

const ServicePhotos = ({ item, top, left }) => {
  return (
    <motion.div
      className="hidden lg:block absolute z-[5] h-44 w-auto object-cover"
      variants={{
        hidden: {
          scale: 0,
        },
        whileHover: {
          scale: 1,
        },
      }}
      transition={{ type: "spring" }}
      style={{
        top,
        left,
        translateX: "-50%",
        translateY: "-50%",
      }}
    >
      <Image
        src={item.image}
        alt="service_img"
        className="w-full h-full"
        width={300}
      />
    </motion.div>
  );
};

export default ServicePhotos;
