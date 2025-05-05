import React, { useContext, useEffect, useState } from "react";
import Navbar from "../../layout/Navbar";
import { ThemIcon } from "../../asset/them/themSetting";
import SocialItems from "../home/SocialItems";
import email from "./icons/email.png"
import github from "./icons/github.png"
import linkedin from "./icons/linkedin.png"
import location from "./icons/location.png"
import phone from "./icons/phone.png"
import telegram from "./icons/telegram.png"
import styles from "./styles.module.css"

export default function Contact() {
  const [randomNum, setRandomNum] = useState(0);
  const myGifPosition = {
    right: {
      right: "28.5%",
      bottom: "40%",
      transform: "rotate(270deg)",
      min: 0,
      max: `${randomNum}%`,
      //bottom
    },
    top: {
      top: "-40px",
      transform: "rotate(180deg)",
      bottom: 0,
      min: 0,
      max: `${randomNum}%`,
      //left
    },
  };
  const themIcon = useContext(ThemIcon);

  return (
    <div className={styles.contact}>
      <Navbar styleItemContacts={"rgb(0,159,241)"} themIcon={themIcon} />
      <div
        className=" mt-[60px]  text-white p-[50px_20px_20px] text-start relative flex flex-col gap-[30px]"
      >
        <a
          href="https://mail.google.com/mail/u/0/?view=cm&fs=1&to=hossein.taeezadeh17@gmail.com"
          target="-blank"
          className="flex items-center gap-1"
        >
          <img src={email} alt="" width={16} className="invert-check"/>
        
          <span style={{ color: "rgb(0,159,241)" }}>
            {" "}
            Gmaill
          </span>
        </a>
        <a
          href="https://github.com/mohammadhosseinTZ?tab=repositories"
          target="-blank"
          className="flex items-center gap-1"
        >
          <img src={github} alt="" width={18} className="invert-check" />
          
          <span style={{ color: "rgb(0,159,241)" }}>
            {" "}
            Github
          </span>
        </a>
        <a
          href="https://www.linkedin.com/in/taeizadeh"
          target="-blank"
          className="flex items-center gap-1"
        >
          <img src={linkedin} alt="" width={18} className="invert-check" />
          
          <span style={{ color: "rgb(0,159,241)" }}>
            {" "}
            linkedin
          </span>
        </a>
        <a
          href="tel:+989129366297"
          target="-blank"
          className="flex items-center gap-1"
        >
          <img src={phone} alt="" width={18} className="invert-check" />
          
          <span style={{ color: "rgb(0,159,241)" }}>
            {" "}
            phone
          </span>
        </a>
        <div      className="flex title-light items-center gap-1 mb-[20px]"> <img src={location} alt="" width={18} className="invert-check " /> Location: Tehran (west)</div>
        
 
      </div>
    </div>
  );
}
