import React from "react";
import ContactComponent from "../components/main/ContactComponent";
import style from "../styles/Page.module.css";

const Contact = () => {
  return (
    <div className={style.contact}>
      <ContactComponent />
    </div>
  );
};

export default Contact;
