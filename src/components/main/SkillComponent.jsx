import React from "react";
import style from "../../styles/MainComponent.module.css";
import OneSkill from "../helper/OneSkill";
import html from "../../images/skills/html.png";
import css from "../../images/skills/css.png";
import js from "../../images/skills/js.png";
import sass from "../../images/skills/sass.png";
import react from "../../images/skills/react.png";
import redux from "../../images/skills/redux.png";
import mui from "../../images/skills/mui.png";
import bootstrap from "../../images/skills/bootstrap.png";
import git from "../../images/skills/git.png";

const data = [
  { name: "html", path: html, alt: "html" },
  { name: "css", path: css, alt: "css" },
  { name: "sass", path: sass, alt: "sass" },
  { name: "bootstrap", path: bootstrap, alt: "bootstrap" },
  { name: "material ui", path: mui, alt: "mui" },
  { name: "javascript", path: js, alt: "js" },
  { name: "react", path: react, alt: "react" },
  { name: "redux", path: redux, alt: "redux" },
  { name: "git", path: git, alt: "git" }
];

const SkillComponent = () => {
  return (
    <div className={style.skillComponent}>
      {data.map((a) => (
        <OneSkill skill={a} key={a.name} direction="right" />
      ))}
    </div>
  );
};

export default SkillComponent;
