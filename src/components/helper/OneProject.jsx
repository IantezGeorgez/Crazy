import React from "react";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import style from "../../styles/HelperComponent.module.css";
import SlideComponent from "./SlideComponent";

const OneProject = (props) => {
  return (
    <SlideComponent direction="top">
    <Card className={style.oneProjectCard}>
      <CardMedia  className={style.oneProjectCardContenImage} component="img" alt={props.name} image={props.src}/>
      <CardContent className={style.oneProjectCardContent}>
        <Typography
          className={style.oneProjectCardContentHeading}
          gutterBottom
          variant="h5"
          component="div"
        >
          {props.name}
        </Typography>
        <Typography
          className={style.oneProjectCardContentData}
          variant="body2"
          color="text.secondary"
        >
          {props.details}
        </Typography>
      </CardContent>
      <CardActions className={style.oneProjectCardContent}>
        <a href={props.url} target="_blank" rel="noreferrer" style={{textDecoration:"none",margin:"auto"}}>
          {" "}
          <Button
            className={style.oneProjectCardContentButton}
            size="small"
            variant="outlined"
          >
            {props.launch ? "Launch in new tab" : "open in github"}
          </Button>
        </a>
      </CardActions>
    </Card>
    </SlideComponent>
  );
};

export default OneProject;
