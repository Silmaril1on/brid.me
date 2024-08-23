export const staggerOpacity200 = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.4,
      ease: "easeInOut",
      staggerChildren: 0.2,
    },
  },
};

export const headlineAnimation = {
  hidden: {
    y: "100%",
  },
  visible: {
    y: 0,
    transition: {
      duration: 0.6,
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

export const primaryTextAnimation = {
  hidden: {
    y: "120px",
  },
  visible: {
    y: 0,
    transition: {
      duration: 0.6,
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

export const staggerSlideUp = {
  hidden: {
    opacity: 0,
    y: "100px",
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3,
      staggerChildren: 0.4,
      delayChildren: 0.4,
    },
  },
};

export const scrollAnimation = {
  hidden: {
    x: 0,
  },
  visible: {
    x: "-100%",
    transition: {
      duration: 30,
      repeat: Infinity,
      repeatType: "loop",
      ease: "linear",
      delay: 0,
    },
  },
};

export const rotateX = {
  hidden: {
    rotateX: 90,
  },
  visible: {
    rotateX: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.4,
      delayChildren: 0.4,
    },
  },
};
