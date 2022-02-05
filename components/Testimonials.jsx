import React from "react";
import { Circle } from ".";
import styles from "../styles/Testimonials.module.css";
import Testimonial from "./Testimonial";

const Testimonials = ({ testimonies }) => {
  return (
    <div className={styles.container}>
      <Circle
        backgroundColor={"darkblue"}
        top={"-70vh"}
        left={"0"}
        right={"0"}
      />
      <h1 className={styles.title}>Testimonials</h1>
      <Testimonial testimonies={testimonies} />
    </div>
  );
};

export default Testimonials;
