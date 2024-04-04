import React from "react";

import SocialItems from "./SocialItems";
import { useSelector } from "react-redux";
export default function HomeItems() {
  const checkThem = useSelector((state) => state.checkThem.myThem);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
      className=" h-[560px] md:h-[650px] md:gap-[220px] gap-[280px]"
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          
        }}
        className="mt-[25%] md:mt-[10%]"
      >
        <h1 style={{ color: checkThem?"black":"white",  translate:'scale(10px,10px)'}} className="text-[30px] md:text-[50px]" >
          WELCOME TO MY WEBSITE
        </h1>
        <p
          style={{ marginTop: 30, color:checkThem? "rgb(64, 64, 64)": "rgb(185, 185, 185)", fontWeight: 10 }}
          className="text-[12px] md:text-[20px]"
        >
          Hi, I am{" "}
          <span
            style={{ color: "rgb(0,159,241)" }}
            className="text-[12px] md:text-[20px]"
          >
            MOHAMMADHOSSEIN TAEIZADEH
          </span>{" "}
        </p>
        <p
          style={{ color: checkThem? "rgb(64, 64, 64)": "rgb(185, 185, 185)", fontWeight: 10 }}
          className="text-[12px] md:text-[15px]"
        >
          interested in programming and coding and challenging myself
        </p>
      </div>
      <SocialItems />
    </div>
  );
}
