import React from "react";
import styles from "../../styles/work.module.css";
import { getCurrentExp } from "@/service/Calculation";
import TimeLineComponent from "../helper/TimeLineComponent";
import SlideComponent from "../helper/SlideComponent";
import { Timeline } from "@mui/lab";

const WorkPageComponent = () => {
  let data = [
    {
      name: "SMARTQ",
      color: "success",
      duration: getCurrentExp(2022),
      icon: "js",
      direction: "down",
      role: "REACT DEVELOPER",
    },
    {
      name: "THIS IS DMG! GmbH",
      color: "info",
      duration: "1 YEAR 9 MONTHS",
      icon: "js",
      direction: "up",
      role: "FULL STACK DEVELOPER",
    },
    {
      name: "MINDTREE",
      color: "info",
      duration: "5 YEARS",
      icon: "java",
      direction: "right",
      role: "SOFTWARE ENGINEER",
    },
  ];

  return (
    <div className={styles.workComponent}>
      <SlideComponent direction="down">
        <h1 className={styles.workComponentHeadingSub}>work experience</h1>
      </SlideComponent>
      <Timeline position="alternate">
        {data.map((a) => (
          <TimeLineComponent key={a.duration} tl={a} />
        ))}
      </Timeline>
    </div>
  );
};

export default WorkPageComponent;
