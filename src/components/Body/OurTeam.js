import React from "react";
import { motion } from "framer-motion";
import { pageVariants } from "./AnimatonStates";
const OurTeam = () => {
  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
    >
      OurTeam
    </motion.div>
  );
};

export default OurTeam;
