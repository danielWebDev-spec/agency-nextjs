import React from "react";
import Image from "next/image";
import styles from "../styles/Testimonials.module.css";

const Testimonial = ({ testimonies }) => {
  return (
    <div className={styles.wrapper}>
      {testimonies.map((user) => (
        <div key={user.id} className={styles.card}>
          <Image
            src={`/img/${user.logo}`}
            width={30}
            height={30}
            objectFit="cover"
            loading="lazy"
            alt=""
          />
          <p className={styles.comment}>{user.comment}</p>
          <div className={styles.person}>
            <Image
              className={styles.avatar}
              src={`/img/${user.avatar}`}
              width={45}
              height={45}
              objectFit="cover"
              loading="lazy"
              alt=""
            />
            <div className={styles.info}>
              <span className={styles.username}>{user.name}</span>
              <span className={styles.jobTitle}>{user.title}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Testimonial;
