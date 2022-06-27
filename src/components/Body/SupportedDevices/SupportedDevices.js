import React from "react";
import DeviceInfo from "./DeviceInfo";
import DeviceNames from "./DeviceNames";
import styles from "./supporteddevice.module.css";
import { motion } from "framer-motion";
import { pageVariants } from "../AnimatonStates";
const SupportedDevices = () => {
  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageVariants.transition}
    >
      <div className={styles.download_header}>
        <h1>Download NeterNels</h1>
        <p>Get last build by selecting your device below</p>
      </div>
      <hr />
      <h2 className={styles.name_header}>Select Your Device</h2>
      <div className={styles.names_container}>
        <DeviceNames name="Xiaomi" />
        <DeviceNames name="Redmi" active />
        <DeviceNames name="Samsung" />
        <DeviceNames name="Huawei" />
        <DeviceNames name="Motorola" />
      </div>
      <div className={styles.container}>
        <DeviceInfo />
        <DeviceInfo />
        <DeviceInfo />
        <DeviceInfo />
      </div>
    </motion.div>
  );
};

export default SupportedDevices;
