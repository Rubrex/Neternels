export const pageVariants = {
  initial: {
    opacity: 0,
    scale: 0.9,
  },
  in: {
    opacity: 1,
    scale: 1,
    transition: {
      x: { type: "spring", stiffness: 80 },
    },
  },
  out: {
    opacity: 0,
    scale: 0.9,
  },
};
