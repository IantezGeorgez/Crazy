import React from "react";
import Typewriter from "typewriter-effect";
import styles from "../../styles/home.module.css";
import SlideComponent from "../helper/SlideComponent";
import DhirajImage from "../../public/image/dhb.png";
import Image from "next/image";

const HomePageComponent = () => {
  return (
    <div className={styles.homeComponent}>
      <div className={styles.homeComponentText}>
        <SlideComponent direction="right">
          <h1 className={styles.homeComponentHeadingSub}>About Me</h1>
        </SlideComponent>
        <SlideComponent direction="right">
          <div className={styles.homeComponentImageContainer}>
            <Image
              className={styles.homeComponentImage}
              src={DhirajImage}
              alt="dhiraj on hill"
            />
          </div>
        </SlideComponent>
        <div className={styles.homeComponentParagraphWrapper}>
          <SlideComponent direction="down">
            <p className={styles.homeComponentBody}>
              <span className={styles.paraOne}>🥷</span>
              Hello, I'm <span className={styles.name}>Dhiraj</span> a coding
              ninja with 8 years of experience in the world of web development .
            </p>
          </SlideComponent>
          <SlideComponent direction="up">
            <p className={styles.homeComponentBody}>
              <span className={styles.paraTwo}>⚔️</span>
              My weapons of choice are React JS, Java with Spring Boot and I'm
              always ready to tackle any coding challenge that comes my way .
            </p>
          </SlideComponent>
          <SlideComponent direction="down">
            <p className={styles.homeComponentBody}>
              <span className={styles.paraThree}>🎮</span>
              When I'm not slinging code, you can find me binge-watching my
              favorite shows on Netflix or mastering the latest Xbox games .
            </p>
          </SlideComponent>
          <SlideComponent direction="right">
            <p className={styles.homeComponentBodyLastPoint}>
              <span className={styles.paraFour}>👨‍💻</span>
              Professional Full Stack Developer, React JS Developer & Java
              Backend Developer .
            </p>
          </SlideComponent>
          <SlideComponent direction="right">
            <div className={styles.homeComponentBodyTypewritter}>
              <div className={styles.paraFour}>👨‍💻</div>
              <div>Professional </div>{" "}
              <Typewriter
                options={{
                  cursor: "_",
                  strings: [
                    "Full Stack Developer .",
                    "React JS Developer .",
                    "Java Backend Developer .",
                    "Software Developer .",
                  ],
                  autoStart: true,
                  loop: true,
                }}
              />
            </div>
          </SlideComponent>
        </div>
      </div>
    </div>
  );
};

export default HomePageComponent;
