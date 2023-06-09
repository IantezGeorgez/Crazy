import React from "react";
import style from "../../styles/skills.module.css";
import SlideComponent from "./SlideComponent";
import Image from "next/image";

const OneSkill = (props) => {
  return (
    <SlideComponent direction={props.direction}>
      <div className={style.oneSkill}>
        <Image
          className={style.oneSkillImage}
          src={props.skill.path}
          alt={props.skill.alt}
        />
        <p className={style.oneSkillText}>{props.skill.name}</p>
      </div>
    </SlideComponent>
  );
};

export default OneSkill;