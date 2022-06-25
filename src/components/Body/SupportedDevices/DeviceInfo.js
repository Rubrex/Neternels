import React from "react";
import styles from "./deviceinfo.module.css";
const DeviceInfo = ({ device, codename, status, maintainer, download }) => {
  return (
    <div className={styles.deviceInfoContainer}>
      <section className={styles.imageContainer}>
        <img src="https://i.imgur.com/GsCjMnX.png" alt="deviceImage" />
      </section>
      <section className={styles.infoContainer}>
        <h2>{device}Redmi Note 8</h2>
        <p className={styles.codename}>{codename}Ginkgo</p>
        <p className={styles.status}>{status}[Active]</p>
        <p className={styles.maintainer}>Maintainer :</p>
        <h2>{maintainer}Rubel Hossain</h2>
        <button className={styles.hover}> Get Kernel</button>
      </section>
    </div>
  );
};

export default DeviceInfo;
