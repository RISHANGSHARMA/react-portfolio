/* Add this useEffect to Hero.jsx */
import React, { useEffect } from "react";
import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  useEffect(() => {
    const title = document.querySelector(`.${styles.title}`);
    const description = document.querySelector(`.${styles.description}`);

    const titleTypingDuration = 3000; // Duration of title typing animation in milliseconds
    const descriptionDelay = titleTypingDuration + 500; // Delay before showing description

    // Set a timeout to show the description after the title animation
    setTimeout(() => {
      description.classList.add(styles.show);
    }, descriptionDelay);
  }, []);

  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Rishang Sharma</h1>
        <p className={styles.description}>
        Versatile Tech Solutions Architect with Expertise in FullStack Development, Cloud/DevOps, and Cyber Security 
        </p>
        <a href="mailto:rishangsharma@email.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl("hero/portfolio.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
