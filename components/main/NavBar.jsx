import Link from "next/link";
import React from "react";
import styles from "../../styles/nav.module.css";
import HomeIcon from "@mui/icons-material/Home";
import ResumeIcon from "@mui/icons-material/Assignment";
import WorkIcon from "@mui/icons-material/Work";
import CodeIcon from "@mui/icons-material/Code";
import ContactIcon from "@mui/icons-material/Email";
import NavLink from "../helper/NavLink";
import { useRouter } from "next/router";
import DhirajImage from "../../public/image/dhb.png";
import Image from "next/image";

const NavBar = ({ flag }) => {
  const router = useRouter();

  const clickOfLink = (path) => {
    router.push(path);
  };

  return (
    <div className={styles.nav}>
      <div className={styles.navContainer}>
        <div
          className={styles.navComponentImageContainer}
          onClick={() => clickOfLink("/")}
        >
          <Image
            className={styles.navComponentImage}
            src={DhirajImage}
            alt="dhiraj on hill"
          />
        </div>

        <div className={styles.navList}>
          <NavLink
            icon={<HomeIcon />}
            name="about"
            path="/"
            clickOfLink={clickOfLink}
            highlightPath={router.pathname}
          />
          <NavLink
            icon={<CodeIcon />}
            name="skills"
            path="/skills"
            clickOfLink={clickOfLink}
            highlightPath={router.pathname}
          />
          <NavLink
            icon={<WorkIcon />}
            name="work"
            path="/work"
            clickOfLink={clickOfLink}
            highlightPath={router.pathname}
          />
          {flag && (
            <NavLink
              icon={<ResumeIcon />}
              name="resume"
              path="/resume"
              clickOfLink={clickOfLink}
              highlightPath={router.pathname}
            />
          )}
          <NavLink
            icon={<ContactIcon />}
            name="contact"
            path="/contact"
            clickOfLink={clickOfLink}
            highlightPath={router.pathname}
          />
        </div>
        <p className={styles.navBarComponentFooter}>
          Developed with ❤️ by the developer 
          <a
            href="https://https://smtechofc1.blogspot.com/"
            target="_blank"
            rel="noreferrer"
          >
            thedeveloper03
          </a>
        </p>
      </div>
    </div>
  );
};

export default NavBar;
