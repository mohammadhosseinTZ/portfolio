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
  
        <AboutItems/>
        <span style={{position:"absolute" , bottom:'10%' , left:'45%'}}><SocialItems/></span>
      
    </div>
  );
}
