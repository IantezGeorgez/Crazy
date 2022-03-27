import { Button, Snackbar } from "@mui/material";
import React, { useState } from "react";
import style from "../../styles/MainComponent.module.css";
import resume from "../../images/dhbr.jpg";
import resumePdf from "../../images/dhbr.pdf";
import resumerd from "../../images/dhbrd.jpg";
import resumePdfrd from "../../images/dhbrd.pdf";
import SlideComponent from "../helper/SlideComponent";

const ResumeComponent = ({ showtp }) => {
  const [show, setShow] = useState(true);
  const [dwn, setDwn] = useState(false);

  return (
    <div className={style.resumeComponent}>
      <SlideComponent direction="right">
        <h2>
          <u>Resume</u>
        </h2>
      </SlideComponent>
      <SlideComponent direction="down">
        <div className={style.resumeComponentButtonContainer}>
          <Button
            className={style.resumeComponentButton}
            variant="outlined"
            size="large"
            onClick={() => setShow(!show)}
          >
            {show ? "HIDE RESUME" : "SHOW RESUME"}
          </Button>

          <a
            href={showtp ? resumePdfrd : resumePdf}
            download="dhiraj.pdf"
            style={{ textDecoration: "none" }}
          >
            {" "}
            <Button
              className={style.resumeComponentButton}
              variant="outlined"
              size="large"
              onClick={() => setDwn(true)}
            >
              DOWNLOAD RESUME
            </Button>
            <Snackbar
              open={dwn}
              autoHideDuration={5000}
              onClose={() => setDwn(false)}
              message="RESUME DOWNLOADED &#128513;"
              anchorOrigin={{ vertical: "down", horizontal: "right" }}
              variant
            />
          </a>
        </div>
      </SlideComponent>
      {show && (
        <SlideComponent direction="right">
          <div className={style.resumeComponentImageContainer}>
            <img
              className={style.resumeComponentImage}
              src={showtp ? resumerd : resume}
              alt="dhiraj resume"
            />
          </div>
        </SlideComponent>
      )}
    </div>
  );
};

export default ResumeComponent;
