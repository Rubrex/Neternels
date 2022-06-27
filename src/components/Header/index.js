import React, { useState } from "react";
import styles from "./index.module.css";
import { Sling as Hamburger } from "hamburger-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
const Header = () => {
  const [isOpen, setOpen] = useState(false);
  console.log(isOpen);
  return (
    <header className={styles.header}>
      <Link to="./">
        <motion.div
          initial={{ y: -200 }}
          animate={{ y: 0 }}
          transition={{ delay: 1 }}
          className={styles.logo}
        >
          <img src="https://i.imgur.com/o7flkdd.png" />
          <h2>NetErnels</h2>
        </motion.div>
      </Link>
      <div style={{ zIndex: "11" }}>
        <Hamburger
          toggled={isOpen}
          toggle={setOpen}
          color={isOpen ? "#d32e3c" : "white"}
        />
      </div>
      {isOpen && (
        <div className={styles.menu}>
          <ul>
            <li onClick={console.log("Clicked")}>
              <Link to="/supporteddevices" className="fancy">
                <span className="top-key"></span>
                <span className="text">Supported Devices</span>
                <span className="bottom-key-1"></span>
                <span className="bottom-key-2"></span>
              </Link>
            </li>
            <li>
              <Link to="/requestkernel" className="fancy">
                <span className="top-key"></span>
                <span className="text">Request Kernel</span>
                <span className="bottom-key-1"></span>
                <span className="bottom-key-2"></span>
              </Link>
            </li>
            <li>
              <Link to="/ourteam" className="fancy">
                <span className="top-key"></span>
                <span className="text">Our Team</span>
                <span className="bottom-key-1"></span>
                <span className="bottom-key-2"></span>
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
