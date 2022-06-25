import React, { useState } from "react";
import styles from "./index.module.css";
import { Sling as Hamburger } from "hamburger-react";

const Header = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img src="https://i.imgur.com/o7flkdd.png" />
        <h2>Neternals</h2>
      </div>
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
            <li>
              <a className="fancy" href="#">
                <span className="top-key"></span>
                <span className="text">Supported Devices</span>
                <span className="bottom-key-1"></span>
                <span className="bottom-key-2"></span>
              </a>
            </li>
            <li>
              <a className="fancy" href="#">
                <span className="top-key"></span>
                <span className="text">Request Kernel</span>
                <span className="bottom-key-1"></span>
                <span className="bottom-key-2"></span>
              </a>
            </li>
            <li>
              <a className="fancy" href="#">
                <span className="top-key"></span>
                <span className="text">Our Team</span>
                <span className="bottom-key-1"></span>
                <span className="bottom-key-2"></span>
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
