import React from 'react'
import myPic from "./img/myPic.png";
import Rezume from "../../asset/component/rezume/Rezume";
export default function AboutItems() {
  return (
    <div
        className="gap-[12px] items-end  w-lvw  flex items-start justify-between bg-white pt-[10px] mot-container md:w-[50%] pe-[25px]"
      >
        <div style={{  display: "flex", flexDirection: "column" }} className="md:w-[75%] w-[60%]">
          <span
            style={{ borderLeft: "2px solid rgb(0,159,241)", paddingLeft: 5 }}
            className="md:text-[30px] text-[20px] font-bold"
          >
            ABOUT{" "}
            <span className="md:text-[30px] text-[20px]" style={{ color: "rgb(0,159,241)" }}>
              Me
            </span>
          </span>
          <span
            className="md:text-[14px] mb-[10px] text-[12px]  mt-[10px] text-black"
  
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
          
          className="cover w-[100px] items-s md:hidden"
        />
  
        </div>
  )
}
