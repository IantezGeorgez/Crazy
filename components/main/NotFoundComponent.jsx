import { Button } from "@mui/material";
import { useRouter } from "next/router";
import React from "react";
import styles from "../../styles/404.module.css"
import SlideComponent from "../helper/SlideComponent";

const NotFoundComponent = () => {

  const router = useRouter()

  return (
    <SlideComponent direction = "down">
      <div className={styles.notFoundComponent}>
        <h1 className={styles.notFoundComponentHOne}>404</h1>
        <h4 className={styles.notFoundComponentHFour}>
          Uh oh...Lets go back to home page &#128519;{" "}
        </h4>
        <Button
          className={styles.notFoundComponentButton}
          variant="outlined"
          size="large"
          title="Take Me To HomePage"
          onClick={()=>router.push("/")}
        >
          Home Page
        </Button>
      </div>
    </SlideComponent>
  );
};

export default NotFoundComponent;