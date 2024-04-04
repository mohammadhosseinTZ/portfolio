import React from 'react'
import myPic from "./img/myPic.png";
import Rezume from "../../asset/component/rezume/Rezume";
export default function AboutItems() {
  return (
    <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "white",
          
          paddingTop:10
        }}
        className="gap-[18px]  w-lvw mt-[100px]"
      >
        <div style={{  display: "flex", flexDirection: "column" }} className="md:w-[30%] w-[50%]">
          <span
            style={{ borderLeft: "2px solid rgb(0,159,241)", paddingLeft: 5 }}
            className="md:text-[30px] text-[20px]"
          >
            ABOUT{" "}
            <span className="md:text-[30px] text-[20px]" style={{ color: "rgb(0,159,241)" }}>
              Me
            </span>
          </span>
          <span
            className="md:text-[13px] mb-[5px] text-[10px]"
            style={{
              textAlign: "justify",
              marginTop: 30,
              color: "rgb(133, 132, 132)",
              
            }}
          >
            I'm mohammadhosein Taeizadeh, a frontend developer with a passion
            for creating captivating web experiences. My focus is on continuous
            learning and pushing the boundaries of web design. In my projects, I
            strive to deliver user-friendly interfaces that leave a lasting
            impression.
          </span>
        </div>
        <img
          src={myPic}
          alt="myPic"
          style={{ height: "100%", width: "20%" , alignSelf:'end' }}
          className="cover"
        />
        <Rezume />
        </div>
  )
}
