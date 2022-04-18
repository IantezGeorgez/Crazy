import { Timeline } from "@mui/lab";
import React from "react";
import { getSmartQExp } from "../../service/Calulation";
import style from "../../styles/MainComponent.module.css";
import TimeLineComponent from "../helper/TimeLineComponent";

const WorkComponent = () => {
  let data = [
    {
      name: "SMARTQ",
      color: "success",
      duration: getSmartQExp(),
      icon: "js",
      direction: "down",
      role: "FRONT-END DEVELOPER",
    },
    {
      name: "THIS IS DMG! GmbH",
      color: "info",
      duration: "1 YEAR 9 MONTHS",
      icon: "js",
      direction: "right",
      role: "FULL STACK DEVELOPER",
    },
    {
      name: "ADD SKILLS",
      color: "info",
      duration: "6 MONTHS",
      icon: "js",
      direction: "down",
      role: "FULL STACK DEVELOPER",
    },
    //  {
    //    name: "MINDTREE",
    //    color: "info",
    //    duration: "4 YEARS 9 MONTHS",
    //    icon: "java",
    //    direction: "right",
    //    role: "SOFTWARE ENGINEER",
    //  },
  ];

  return (
    <div className={style.workComponent}>
      <Timeline className={style.timeLineWrapper} position="alternate">
        {data.map((a) => (
          <TimeLineComponent key={a.duration} tl={a} />
        ))}
      </Timeline>
    </div>
  );
};

export default WorkComponent;
