// StatsSection.jsx
import React, { useEffect } from 'react';
import styles from './StatsSection.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faCalendar, faClock, faUsers } from '@fortawesome/free-solid-svg-icons';

export const StatsSection = () => {
  useEffect(() => {
    const counters = document.querySelectorAll(`.${styles.counter}`);
    const speed = 300; // Change animation speed here

    counters.forEach(counter => {
      const updateCount = () => {
        const target = +counter.getAttribute('data-target');
        const count = +counter.innerText;

        const increment = target / speed;

        if (count < target) {
          counter.innerText = Math.ceil(count + increment);
          setTimeout(updateCount, 20);
        } else {
          counter.innerText = target;
        }
      };

      updateCount();
    });
  }, []);

  return (
    
        
    <section className={styles.statsSection}>
      <div className={styles.overlay}></div>
      <div className={styles.stat}>
        <FontAwesomeIcon icon={faCheckCircle} className={styles.icon} />
        <h3><span className={styles.counter} data-target="20">0</span></h3>
        <p>Projects Completed</p>
      </div>
      <div className={styles.stat}>
        <FontAwesomeIcon icon={faCalendar} className={styles.icon} />
        <h3><span className={styles.counter} data-target="7">0</span></h3>
        <p>Years of Experience</p>
      </div>
      <div className={styles.stat}>
        <FontAwesomeIcon icon={faClock} className={styles.icon} />
        <h3><span className={styles.counter} data-target="15000">0</span></h3>
        <p>Hours of Productive Work</p>
      </div>
      <div className={styles.stat}>
        <FontAwesomeIcon icon={faUsers} className={styles.icon} />
        <h3><span className={styles.counter} data-target="4">0</span></h3>
        <p>Previous Employers</p>
      </div>
    </section>
    
    
    
  );
};

export default StatsSection;
