import React from "react";
import styles from "../../styles/nav.module.css";

const NavLink = ({ icon, name, path, clickOfLink, highlightPath }) => {
  return (
    <div
      className={styles.oneNavLink}
      onClick={() => clickOfLink(path)}
      style={
        path === highlightPath ? { color: "#f2aa4c" } : { color: "#b2b2b2" }
      }
    >
      <div>{icon}</div>
      <div className={styles.navLinkText}>{name}</div>
    </div>
  );
};

export default NavLink;
