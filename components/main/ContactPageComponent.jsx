import React from "react";
import style from "../../styles/contact.module.css";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import SlideComponent from "../helper/SlideComponent";
import Link from "next/link";

const ContactPageComponent = () => {
  return (
    <div className={style.contactComponent}>
      <SlideComponent direction="down">
        <h1 className={style.contactComponentHeadingSub}>Contact</h1>
      </SlideComponent>
      <SlideComponent direction="right">
        <h1 className={style.contactComponentHone}>Let's work together...</h1>
      </SlideComponent>

      <SlideComponent direction="down">
        <div className={style.contactComponentIcons}>
          <Link
            className={style.contactComponentLink}
            href="https://www.linkedin.com/in/dhirajb7/"
            target="_blank"
            rel="noreferrer"
            title="LINKEDIN"
          >
            <LinkedInIcon className={style.contactComponentIcon} />
          </Link>
          <Link
            className={style.contactComponentLink}
            href="https://github.com/DhirajB7"
            target="_blank"
            rel="noreferrer"
            title="GITHUB"
          >
            <GitHubIcon className={style.contactComponentIcon} />
          </Link>
          <Link
            className={style.contactComponentLink}
            href="https://wa.me/918880093594"
            target="_blank"
            rel="noreferrer"
            title="WHATSAPP"
          >
            <WhatsAppIcon className={style.contactComponentIcon} />
          </Link>
          <Link
            className={style.contactComponentLink}
            href="tel:+91-8880093594"
            target="_blank"
            rel="noreferrer"
            title="CALL @ 8880093594"
          >
            <PhoneIphoneIcon className={style.contactComponentIcon} />{" "}
          </Link>
          <Link
            className={style.contactComponentLink}
            href="mailto:dhiraj.basavaraju@gmail.com"
            target="_blank"
            rel="noreferrer"
            title="CLICK TO SEND MAIL"
          >
            <AlternateEmailIcon className={style.contactComponentIcon} />
          </Link>
        </div>
      </SlideComponent>

      <SlideComponent direction="right">
        <h4 className={style.contactComponentHfour}>ways to reach me </h4>
      </SlideComponent>
    </div>
  );
};

export default ContactPageComponent;
