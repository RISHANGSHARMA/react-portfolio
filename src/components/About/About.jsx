import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  console.log("About component is rendering");
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
      <div className={styles.aboutText}>
          <p>
            As a seasoned Cyber Engineering Consultant at EY, I specialize in architecting and 
            implementing highly secure, scalable, and cost-effective cloud solutions on 
            Microsoft Azure. With a focus on security, identity management, automation, and 
            CI/CD, I consistently deliver large-scale projects exceeding CAD $1 million while 
            managing teams of 10+ specialists. <br />
            <br />
            My expertise in cloud architecture enables me to design solutions that drive 
            operational efficiency and cost reduction, ensuring a seamless transition to Azure. 
            I prioritize security from the ground up, safeguarding data integrity and ensuring 
            compliance with industry regulations. Through Azure Active Directory 
            management, I deliver streamlined user experiences with hybrid identities and 
            single sign-on capabilities. <br />
            <br />
            I possess a deep understanding of DevOps concepts and tools including 
            PowerShell, Azure CLI, Jenkins, and Terraform, enabling me to create highly 
            automated infrastructure and deployment processes. Proficient in 
            containerization technologies (Docker, Kubernetes), I optimize application 
            deployment and management. By proactively integrating security into CI/CD 
            pipelines with SAST and DAST tools, I mitigate vulnerabilities early in the 
            development lifecycle. <br />
            <br />
            Let's connect and discuss how I can leverage my expertise to deliver secure, 
            efficient, and innovative cloud solutions tailored to your needs.
          </p>
        </div>
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cloud.png")} alt="Cloud icon" />
            <div className={styles.aboutItemText}>
              <h3>Cloud/DevOps Engineer</h3>
              <p>
              Proven expertise in architecting and automating cloud infrastructure on major platforms (AWS, Azure, GCP). Experienced in building and maintaining CI/CD pipelines, leveraging infrastructure-as-code (IaC) for efficient, reliable, and scalable deployments.

              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/fingerprint.webp")} alt="Finger icon" />
            <div className={styles.aboutItemText}>
              <h3>CyberSec Engineer</h3>
              <p>
               Experienced in implementing and managing IAM solutions. Proficient in integrating security tools (DevSecOps) throughout the SDLC(CI/CD pipeline) to identify and mitigate vulnerabilities early.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/front.png")} alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h3>FrontEnd Developer</h3>
              <p>
              Experience in modern front-end technologies (e.g., React, Angular, Vue.js) to build responsive and visually appealing interfaces. Experience in designing landing pages and developing comprehensive design systems for consistent branding and usability.

              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
