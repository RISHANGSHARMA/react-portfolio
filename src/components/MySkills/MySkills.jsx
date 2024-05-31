import React from "react";
import styles from "./MySkills.module.css";
import skillsData from "../../data/myskills.json";
// import skillsImage from "../../assets/hero/heroImage.png"; // Update the path as per your image location
import { getImageUrl } from "../../utils";

export const MySkills = () => {
  return (
    <section className={styles.skillsSection} id="myskills">
      <h2 className={styles.title}>My Skills</h2>
      <img src={getImageUrl("hero/200w.gif")} alt="Skills illustration" className={styles.skillsImage} />
      {/* <img src={getImageUrl("hero/heroImage.png")}alt="Hero image of me" className={styles.heroImg}      /> */}
      <div className={styles.skillsContainer}>
        {skillsData.map((skillCategory, index) => (
          <div key={index} className={styles.skillCategory}>
            <h3>{skillCategory.category}</h3>
            <p>{skillCategory.skills.join(", ")}</p>
            <div className={styles.progressBar}>
              <div
                className={styles.progress}
                style={{ width: `${skillCategory.level}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
      {/* <div className={styles.topBlur} /> */}
      <div className={styles.bottomBlur} />
    </section>
  );
};
