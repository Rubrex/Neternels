import { yellow } from "@mui/material/colors";
import React from "react";
import styles from "./DeviceNames.module.css";
const DeviceNames = ({ name, active }) => {
  const change = active
    ? {
        backgroundColor: "var(--primary-color)",
        color: "var(--primary-background)",
      }
    : { backgroundColor: "inherit" };
  return (
    <div className={styles.name_container} style={change}>
      {name}
    </div>
  );
};

export default DeviceNames;
