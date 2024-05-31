import React from "react";
import styles from "./Education.module.css";

export const Education = () => {
  return (
    <section className={styles.educationSection}>
      <h2 className={styles.title}>Education</h2>
      <div className={styles.educationContainer}>
        <div className={styles.educationItem}>
          <h3 className={styles.degree}>Master’s in Computer Science - Maj. Data Science</h3>
          <p className={styles.details}>
            GPA – 3.80/4.00<br />
            University of Ottawa, Canada<br />
            2019-2021
          </p>
        </div>
        <div className={styles.educationItem}>
          <h3 className={styles.degree}>Bachelor of Computer Science and Engineering</h3>
          <p className={styles.details}>
            GPA – 3.40/4.00<br />
            Chandigarh University, India<br />
            2011-2015
          </p>
        </div>
      </div>
    </section>
  );
};

export default Education;