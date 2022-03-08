import React from "react";
import ResumeComponent from "../components/main/ResumeComponent";
import style from "../styles/Page.module.css";

const Resume = ({show}) => {
  return (
    <div className={style.resume}>
      <ResumeComponent showtp={show} />
    </div>
  );
};

export default Resume;
