import React from "react";
import styles from "./home.module.css";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { pageVariants } from "./AnimatonStates";
import { AnimatePresence } from "framer-motion";
const Home = () => {
  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      className={styles.home}
    >
      <div className={styles.typography}>
        <h1>What is Neternels</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni eum
          corrupti nobis. Eius id sed veritatis repudiandae sit laboriosam vero
          quae aspernatur, consequatur accusamus nemo velit est, nulla eum
          quaerat. Nam aut ut error quis quam officia tenetur? Dicta quisquam
          minus, unde rem debitis facilis dolorum enim, amet sunt incidunt ipsum
          laudantium! Quo, reprehenderit. Dolor laudantium nulla obcae
        </p>
        <Link to="/supporteddevices">
          <button className="glitchButton" style={{ width: "300px" }}>
            Get Now
          </button>
        </Link>
      </div>
      <div className={styles.imageContainer}>
        <img src="https://i.imgur.com/GsCjMnX.png" alt="neternels" />
      </div>
    </motion.div>
  );
};

export default Home;
