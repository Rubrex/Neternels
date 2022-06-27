export const pageVariants = {
  initial: {
    opacity: 0,
    x: "-100vw",
  },
  in: {
    opacity: 1,
    x: "0%",
    transition: {
      x: { type: "spring", stiffness: 80 },
    },
  },
  out: {
    opacity: 0,
    x: "100vw",
  },
};
