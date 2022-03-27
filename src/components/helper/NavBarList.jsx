import React from "react";
import { useNavigate } from "react-router-dom";
import style from "../../styles/HelperComponent.module.css";

const NavBarList = (props) => {
  const navigate = useNavigate();

  const linkClicked = () =>{
    navigate(props.path)
    props.downdateSelected(props.name)
  }

  return (
    <div
      className={`${style.iconNameNavBar} ${props.selected ? style.activeNavBar:""}`}
      onClick={() => linkClicked()}
      title={props.name}
    >
      <div className={style.iconNavBar}>{props.children}</div>
      <p className={style.nameNavBar}>{props.name}</p>
    </div>
  );
};

export default NavBarList;
