
import React, { useState } from "react";
import styles from "./App.module.css"
import {Navbar} from "./components/Navbar/Navbar"
import {Hero} from "./components/Hero/Hero"
import {About} from "./components/About/About"
import {Experience} from "./components/Experience/Experience"
import {Projects} from "./components/Projects/Projects"
import {Contact} from "./components/Contact/Contact"
import { MySkills } from "./components/MySkills/MySkills";
import { Education } from "./components/Education/Education";
import { Services } from "./components/Services/Services";
import { StatsSection } from "./components/StatsSection/StatsSection";

function App() {

    const [darkMode, setDarkMode] = useState(true);

    const toggleDarkMode = () => {
      setDarkMode(!darkMode);
      document.documentElement.classList.toggle("light-mode", !darkMode);
    };
    return <div classname={styles.App}>
            <Navbar />
            <button onClick={toggleDarkMode} className={styles.toggleBtn}>
        Toggle Mode
      </button>
            <Hero />
            <About />
            <MySkills />
            <Education />
            <StatsSection />
            <Experience />
            <Services />
            <Projects />
            <Contact />
           

           </div>
}

export default App
