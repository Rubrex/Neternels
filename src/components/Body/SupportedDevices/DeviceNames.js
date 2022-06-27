import React from "react";
import styles from "./DeviceNames.module.css";
const DeviceNames = ({ name, active }) => {
  const change = active
    ? {
        backgroundColor: "var(--primary-color)",
        color: "var(--primary-background)",
      }
    : { backgroundColor: "inherit", color: "var(--primary-text-color)" };
  return (
    <button className={styles.name_container} style={change}>
      {name}
    </button>
  );
};

export default DeviceNames;
