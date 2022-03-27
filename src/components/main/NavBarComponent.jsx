import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import style from "../../styles/MainComponent.module.css";
import NavBarList from "../helper/NavBarList";
import HomeIcon from "@mui/icons-material/Home";
import AssignmentIcon from "@mui/icons-material/Assignment";
import WorkIcon from "@mui/icons-material/Work";
import CodeIcon from "@mui/icons-material/Code";
import EmailIcon from "@mui/icons-material/Email";
import PreviewIcon from "@mui/icons-material/Preview";

const NavBarComponent = ({ resume }) => {
  const navigate = useNavigate();

  const [data, setdata] = useState(
    resume
      ? [
          { selected: false, name: "Home", path: "/", icon: <HomeIcon /> },
          {
            selected: false,
            name: "Skills",
            path: "/skills",
            icon: <CodeIcon />,
          },
          {
            selected: false,
            name: "Projects",
            path: "/projects",
            icon: <PreviewIcon />,
          },
          { selected: false, name: "Work", path: "/work", icon: <WorkIcon /> },
          {
            selected: false,
            name: "Resume",
            path: "/resume",
            icon: <AssignmentIcon />,
          },
          {
            selected: false,
            name: "Contact",
            path: "/contact",
            icon: <EmailIcon />,
          },
        ]
      : [
          { selected: false, name: "Home", path: "/", icon: <HomeIcon /> },
          {
            selected: false,
            name: "Skills",
            path: "/skills",
            icon: <CodeIcon />,
          },
          {
            selected: false,
            name: "Projects",
            path: "/projects",
            icon: <PreviewIcon />,
          },
          { selected: false, name: "Work", path: "/work", icon: <WorkIcon /> },
          {
            selected: false,
            name: "Contact",
            path: "/contact",
            icon: <EmailIcon />,
          },
        ]
  );

  useEffect(() => {
    const url = window.location.href.toString().split("/");
    const urlLast = url[url.length - 1];
    const newData = [];

    for (const iterator of data) {
      if (iterator.path === "/" + urlLast) {
        iterator.selected = true;
      } else {
        iterator.selected = false;
      }
      newData.push(iterator);
    }
    setdata(newData);
  }, []);

  const downdateSelected = (keyWord) => {
    const newData = [];

    for (const iterator of data) {
      if (iterator.name === keyWord) {
        iterator.selected = true;
      } else {
        iterator.selected = false;
      }
      newData.push(iterator);
    }

    setdata(newData);
  };

  return (
    <div className={style.navBarComponent}>
      <h1 className={style.navBarComponentHOne} onClick={() => navigate("/")}>
        Portfolio{" "}
      </h1>
      <div className={style.navBarComponentListWrapper}>
        {data.map((oneEntry) => (
          <NavBarList
            name={oneEntry.name}
            path={oneEntry.path}
            key={oneEntry.name}
            selected={oneEntry.selected}
            downdateSelected={downdateSelected}
          >
            {oneEntry.icon}
          </NavBarList>
        ))}
      </div>
      <p className={style.navBarComponentFooter}>
        Developed with ❤️ by{" "}
        <a
          href="https://www.linkedin.com/in/dhirajb7/"
          target="_blank"
          rel="noreferrer"
        >
          DhirajB7
        </a>
      </p>
    </div>
  );
};

export default NavBarComponent;
