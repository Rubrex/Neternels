import React from "react";
import DeviceInfo from "./DeviceInfo";
import styles from "./supporteddevice.module.css";
const SupportedDevices = () => {
  return (
    <div>
      <div>
        <h1>Download NeterNels</h1>
        <p>Get last build by selecting your device below</p>
      </div>
      <hr />
      <h2>Select Your Device</h2>

      <div className={styles.container}>
        <DeviceInfo />
        <DeviceInfo />
        <DeviceInfo />
        <DeviceInfo />
      </div>
    </div>
  );
};

export default SupportedDevices;
