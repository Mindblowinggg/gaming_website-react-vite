export const logoanimation = () => {
  return {
    hidden: {
      x: 100,
      y: 350,
      opacity: 1,
      scale: 5,
    },

    show: {
      y: 0,
      x: 0,
      opacity: 1,
      scale: 1,

      transition: {
        duration: 1.8,
        type: "spring",
      },
    },
  };
};
