import React from "react";
import html from "../../public/image/skills/html.png";
import css from "../../public/image/skills/css.png";
import js from "../../public/image/skills/js.png";
import sass from "../../public/image/skills/sass.png";
import react from "../../public/image/skills/react.png";
import redux from "../../public/image/skills/redux.png";
import nextjs from "../../public/image/skills/nextjs.png";
import mui from "../../public/image/skills/mui.png";
import ant from "../../public/image/skills/ant.png";
import bootstrap from "../../public/image/skills/bootstrap.png";
import git from "../../public/image/skills/git.png";
import java from "../../public/image/skills/java.png";
import sb from "../../public/image/skills/springBoot.png";
import dw from "../../public/image/skills/dropwizard.png";
import pssql from "../../public/image/skills/pssql.png";
import mdb from "../../public/image/skills/mongo.png";
import sel from "../../public/image/skills/selenium.png";
import gc from "../../public/image/skills/gc.png";
import firebase from "../../public/image/skills/firebase.png";
import OneSkill from "../helper/OneSkill";
import styles from "../../styles/skills.module.css";
import SlideComponent from "../helper/SlideComponent";

const data = [
  { name: "html", path: html, alt: "html" },
  { name: "css", path: css, alt: "css" },
  { name: "sass", path: sass, alt: "sass" },
  { name: "material ui", path: mui, alt: "mui" },
  { name: "ant design", path: ant, alt: "ant" },
  { name: "bootstrap", path: bootstrap, alt: "bootstrap" },
  { name: "javascript", path: js, alt: "js" },
  { name: "react", path: react, alt: "react" },
  { name: "redux", path: redux, alt: "redux" },
  { name: "next JS", path: nextjs, alt: "next js" },
  { name: "firebase", path: firebase, alt: "Firebase" },
  { name: "git", path: git, alt: "git" },
  { name: "google cloud", path: gc, alt: "google cloud" },
  { name: "java", path: java, alt: "java" },
  { name: "spring boot", path: sb, alt: "spring boot" },
  { name: "dropwizard", path: dw, alt: "dropwizard" },
  { name: "postgresql", path: pssql, alt: "postgre sql" },
  { name: "mongo db", path: mdb, alt: "mongo db" },
  { name: "selenium", path: sel, alt: "Selenium" },
];

const SkillPageComponent = () => {
  return (
    <div className={styles.skillComponentWrapper}>
      <SlideComponent direction="down">
        <h1 className={styles.skillsComponentHeadingSub}>Skills</h1>
      </SlideComponent>
      <div className={styles.skillComponent}>
        {data.map((a) => (
          <OneSkill skill={a} key={a.name} direction="right" />
        ))}
      </div>
    </div>
  );
};

export default SkillPageComponent;
