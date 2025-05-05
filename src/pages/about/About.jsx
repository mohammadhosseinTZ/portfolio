import React, { useContext } from "react";
import Navbar from "../../layout/Navbar";
import { ThemIcon } from "../../asset/them/themSetting";

import SocialItems from "../home/SocialItems";
import AboutItems from "./AboutItems";
export default function About() {
  const themIcon = useContext(ThemIcon);

  return (
    <div>
      <Navbar styleItemAboute={"rgb(0,159,241)"} themIcon={themIcon} />
      <div className="mt-[60px] md:mt-[110px] md:flex justify-center items-center md:bg-white w-[calc(100vw-45px)] md:pe-[200px] md:py-[20px]">
        <AboutItems/>
        <div ><SocialItems/></div>
      </div>
      
    </div>
  );
}
