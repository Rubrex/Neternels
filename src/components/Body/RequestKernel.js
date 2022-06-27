import React from "react";
import { motion } from "framer-motion";
import { pageVariants } from "./AnimatonStates";
const RequestKernel = () => {
  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
    >
      RequestKernel
    </motion.div>
  );
};

export default RequestKernel;
