import React, { useState } from "react";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineDot from "@mui/lab/TimelineDot";
import SlideComponent from "./SlideComponent";
import styles from "../../styles/work.module.css";
import JavascriptIcon from "@mui/icons-material/Javascript";
import LocalCafeIcon from "@mui/icons-material/LocalCafe";
import BadgeIcon from "@mui/icons-material/Badge";

const getIcon = (key) => {
  switch (key) {
    case "js":
      return <JavascriptIcon />;
    case "java":
      return <LocalCafeIcon />;
    default:
      return <BadgeIcon />;
  }
};

const TimeLineComponent = (props) => {
  const [show, setShow] = useState(false);

  return (
    <SlideComponent direction={props.tl.direction}>
      <TimelineItem
        style={
          props.tl.color === "success"
            ? { color: "#f2aa4c" }
            : { color: "white" }
        }
        onMouseEnter={() => setShow(!show)}
        onMouseLeave={() => setShow(!show)}
      >
        <TimelineOppositeContent
          className={`${styles.timeLineRole} ${
            show
              ? props.tl.color === "success"
                ? styles.timeLineActiveCurrect
                : styles.timeLineActive
              : styles.timeLineInactive
          }`}
        >
          {props.tl.role}
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot color="secondary">{getIcon(props.tl.icon)}</TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent style={{ fontFamily: "unset" }}>
          <div className={styles.timeLineName}>{props.tl.name}</div>
          <div
            className={`${styles.timeLineDuration} ${
              show
                ? props.tl.color === "success"
                  ? styles.timeLineActiveCurrect
                  : styles.timeLineActive
                : styles.timeLineInactive
            }`}
          >
            {props.tl.duration}
          </div>
        </TimelineContent>
      </TimelineItem>
    </SlideComponent>
  );
};

export default TimeLineComponent;
