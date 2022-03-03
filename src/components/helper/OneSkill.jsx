import React from "react";
import style from "../../styles/HelperComponent.module.css";
import SlideComponent from "./SlideComponent";

const OneSkill = (props) => {
  return (
    <SlideComponent direction={props.direction}>
      <div className={style.oneSkill}>
        <img
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
