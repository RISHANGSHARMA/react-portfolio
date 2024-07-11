import React, { useState, useEffect } from "react";
import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 830);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 830);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        {isMobile ? (
          <div className={styles.shortAboutText}>
            <p>
              As a seasoned Cyber Engineering Consultant at EY, I specialize in cloud solutions on Microsoft Azure, focusing on security, identity management, automation, and CI/CD.
            </p>
          </div>
        ) : (
          <div className={styles.aboutText}>
              <p>
                As a Versatile Tech Solutions Engineer, I bring a wealth of experience in Full Stack Development, Cloud/DevOps Engineering, and Cyber Security. At Ernst & Young, I have led the architecture and implementation of secure, scalable, and cost-effective solutions across diverse technology stacks, including Microsoft Azure, AWS, and cutting-edge development frameworks such as React, Angular and Django.<br />
                <br />
                My comprehensive approach ensures seamless integration and operational efficiency, whether transitioning to the cloud, optimizing deployment processes, or enhancing application security. With a strong foundation in both backend and frontend development, I create robust and user-friendly web applications that drive business value.<br />
                <br />
                I specialize in designing and implementing automated CI/CD pipelines, leveraging tools like Jenkins, GitLab CI, and Terraform, and managing containerized environments using Docker and Kubernetes. My expertise extends to proactive security integration, utilizing SAST and DAST tools to mitigate vulnerabilities early in the development lifecycle.<br />
                <br />
                In addition to my technical acumen, I excel in team leadership, guiding cross-functional teams to deliver high-impact projects. My experience in identity management in Cyber security, particularly with Azure Active Directory and Okta SSO ensures that solutions are not only efficient but also secure and compliant with industry standards.<br />
                <br />
                Let’s connect to explore how my diverse skill set can deliver innovative and secure solutions tailored to meet your organization's needs.
              </p>

          </div>
        )}
        <ul className={styles.aboutItems}>
        <li className={styles.aboutItem}>
            <img src={getImageUrl("about/front.png")} alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h3>FullStack Developer</h3>
              <p>
                Experience in modern FullStack technologies (e.g., React, Angular, Node.js,Python, Django) to build responsive and visually appealing Websites.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cloud.png")} alt="Cloud icon" />
            <div className={styles.aboutItemText}>
              <h3>Cloud/DevOps Engineer</h3>
              <p>
                Proficient in architecting and automating cloud infrastructure on major platforms (AWS, Azure, GCP). Building and maintaining CI/CD pipelines, (IaC) for efficient and scalable deployments.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/fingerprint.webp")} alt="Finger icon" />
            <div className={styles.aboutItemText}>
              <h3>CyberSec Engineer</h3>
              <p>
                Experienced in implementing CIAM solutions & integrating security tools (DevSecOps) throughout the SDLC (CI/CD pipeline) to identify and mitigate vulnerabilities early.
              </p>
            </div>
          </li>
          
        </ul>
      </div>
    </section>
  );
};
