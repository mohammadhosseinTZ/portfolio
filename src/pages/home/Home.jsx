import React, { useContext } from "react";
import { ThemIcon } from "../../asset/them/themSetting";
import Navbar from "../../layout/Navbar";

import HomeItems from "./HomeItems";

export default function Home() {
  const themIcon = useContext(ThemIcon);
  
  return (
    <div>
      
      <Navbar
        styleItemHome={"rgb(0,159,241)"}
        themIcon={themIcon}
        
      />
      <HomeItems />
    </div>
    
  );
}
