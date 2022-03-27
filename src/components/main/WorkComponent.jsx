import { Timeline } from "@mui/lab";
import React from "react";
import style from "../../styles/MainComponent.module.css";
import TimeLineComponent from "../helper/TimeLineComponent";

let data = [];
const WorkComponent = ({ show }) => {
  show
    ? (data = [
        {
          name: "SMARTQ",
          color: "success",
          duration: "Working from March 2022",
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
          role: "FRONT-END DEVELOPER",
        },
        {
          name: "ADD SKILLS",
          color: "info",
          duration: "6 MONTHS",
          icon: "js",
          direction: "down",
          role: "FRONT-END DEVELOPER",
        },
      ])
    : (data = [
        {
          name: "SMARTQ",
          color: "success",
          duration: "Working from March 2022",
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
          role: "FRONT-END DEVELOPER",
        },
        {
          name: "ADD SKILLS",
          color: "info",
          duration: "6 MONTHS",
          icon: "js",
          direction: "down",
          role: "FRONT-END DEVELOPER",
        },
        {
          name: "MINDTREE",
          color: "info",
          duration: "4 YEARS",
          icon: "java",
          direction: "right",
          role: "SOFTWARE ENGINEER",
        },
        {
          name: "MINDTREE",
          color: "info",
          duration: "3 MONTHS",
          icon: "intern",
          direction: "down",
          role: "JAVA DEVELOPER TRAINEE",
        },
      ]);

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
