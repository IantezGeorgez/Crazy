import React from "react";
import Typewriter from "typewriter-effect";
import style from "../../styles/MainComponent.module.css";
import SlideComponent from "../helper/SlideComponent";
import DhirajImage from "../../images/dhb.png";

const HomeComponent = () => {
  return (
    <div className={style.homeComponent}>
      <SlideComponent direction="right">
        <div className={style.homeComponentImageContainer}>
          <img
            className={style.homeComponentImage}
            src={DhirajImage}
            alt="dhiraj on hill"
          />
        </div>
      </SlideComponent>
      <SlideComponent direction="down">
        <div className={style.homeComponentText}>
          <h1 className={style.homeComponentHeading}>
            I'm <span className={style.fsd}>Dhiraj</span>
          </h1>
          <div className={style.homeComponentBody}>
            Professional {" "}
            <span style={{ color: "#f2aa4c" }}>
              <Typewriter
                options={{
                  strings: [
                    "Full Stack Developer .",
                    "React Developer .",
                    "Java Backend Developer .",
                    "Software Engineer ."
                  ],
                  autoStart: true,
                  loop: true,
                }}
              />
            </span>
          </div>
        </div>
      </SlideComponent>
    </div>
  );
};

export default HomeComponent;
