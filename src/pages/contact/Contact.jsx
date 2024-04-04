import React, { useContext, useEffect, useState } from "react";
import Navbar from "../../layout/Navbar";
import { ThemIcon } from "../../asset/them/themSetting";
import SocialItems from "../home/SocialItems";
import spy from "./icons/spy.gif";

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
  useEffect(() => {
    const myInterval = setInterval(() => {
      setRandomNum(Math.round(Math.random() * 60));
      
    }, 9400);
    return () => {
      clearInterval(myInterval);
    };
  });
  return (
    <div>
      <Navbar styleItemContacts={"rgb(0,159,241)"} themIcon={themIcon} />
      <div
        style={{
          height: "300px",
          margin: "100px 30%",
          backgroundColor: "rgb(255, 255, 255)",
          padding: "50px",
          textAlign: "start",
          position: "relative",
          display: "flex",
          flexDirection: "column",
          gap: "30px",
        }}
        className="w-screen"
      >
        <a
          href="https://mail.google.com/mail/u/0/?view=cm&fs=1&to=hossein.taeezadeh17@gmail.com"
          target="-blank"
        >
          Gmaill:
          <span style={{ color: "rgb(0,159,241)" }}>
            {" "}
            hossein.taeezadeh17@gmail.com
          </span>
        </a>
        <span>Location: Tehran (west)</span>
        <div style={{ position: "absolute", bottom: 10, left: "30%" }}>
          <SocialItems />
        </div>
        <img
          src={spy}
          alt="spy"
          style={{
            position: "absolute",
            width: "100px",
            right: myGifPosition.right.right,
            bottom: myGifPosition.right.max,
            transform: myGifPosition.right.transform,
            zIndex: "99999",
          }}
        />
        <img
          src={spy}
          alt="spy"
          style={{
            position: "absolute",
            width: "100px",
            top: myGifPosition.top.top,
            transform: myGifPosition.top.transform,
            bottom: myGifPosition.top.bottom,
            left: myGifPosition.top.max,
            zIndex: "99999",
          }}
        />
      </div>
    </div>
  );
}
