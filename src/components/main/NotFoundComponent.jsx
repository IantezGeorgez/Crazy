import { Button } from "@mui/material";
import React from "react";
import style from "../../styles/MainComponent.module.css";
import { useNavigate } from "react-router-dom";
import SlideComponent from "../helper/SlideComponent";

const NotFoundComponent = () => {
  const navigate = useNavigate();

  return (
    <SlideComponent direction = "down">
      <div className={style.notFoundComponent}>
        <h1 className={style.notFoundComponentHOne}>404</h1>
        <h4 className={style.notFoundComponentHFour}>
          Uh oh...Lets go back to home page &#128519;{" "}
        </h4>
        <Button
          className={style.notFoundComponentButton}
          variant="outlined"
          size="large"
          title="Take Me To HomePage"
          onClick={() => navigate("/")}
        >
          Home Page
        </Button>
      </div>
    </SlideComponent>
  );
};

export default NotFoundComponent;
