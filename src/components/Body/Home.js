import React from "react";
import styles from "./home.module.css";
const Home = () => {
  return (
    <div className={styles.home}>
      <div className={styles.typography}>
        <h1>What is Neternal</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni eum
          corrupti nobis. Eius id sed veritatis repudiandae sit laboriosam vero
          quae aspernatur, consequatur accusamus nemo velit est, nulla eum
          quaerat. Nam aut ut error quis quam officia tenetur? Dicta quisquam
          minus, unde rem debitis facilis dolorum enim, amet sunt incidunt ipsum
          laudantium! Quo, reprehenderit. Dolor laudantium nulla obcaecati quod
          impedit? Sapiente iste fugiat vel recusandae aliquid facilis, possimus
          assumenda modi ullam voluptates aut incidunt atque neque maiores
        </p>
        <button className="glitchButton" style={{ width: "300px" }}>
          Get Now
        </button>
      </div>
      <div className={styles.imageContainer}>
        <img src="https://i.imgur.com/GsCjMnX.png" alt="neternels" />
      </div>
    </div>
  );
};

export default Home;
