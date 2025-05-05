import Navbar from "../../layout/Navbar";
import React, { useContext, useState } from "react";
import { ThemIcon } from "../../asset/them/themSetting";
import { perSkillsItems } from "./perSkillsItems";
import { leftIcon, rightIcon } from "./icons";
import { useSelector } from "react-redux";

export default function Skills() {
  const [btnSlider, setBtnSlider] = useState(0);
  const themIcon = useContext(ThemIcon);
  const checkThem = useSelector((state) => state.checkThem.myThem);
  const handleRightBtn =()=>{
    if(btnSlider === 1)return
    else setBtnSlider(btnSlider+1)
  }
  const handleLeftBtn =()=>{
    if(btnSlider === 0)return
    else setBtnSlider(btnSlider-1)
  }
  return (
    <div >
      {" "}
      <Navbar styleItemSkills={"rgb(0,159,241)"} themIcon={themIcon} />
      <div
        style={{
          width: "90%",
          padding: 30,
          display: "flex",
        }}
        className="md:border-t-solid md:border-[gray] md:border-l-2 md:border-b-2 md:rounded-bl-[10px] md:mt-[50px]  md:mx-[auto] m-[40px auto] !pe-0"
      >
        <div  className="flex flex-wrap justify-between w-full gap-2 md:gap-[5px] skillsStyle ">
          {perSkillsItems[btnSlider].map((perSkillsItem) => {
            return perSkillsItem;
          })}
        </div>
       
      </div>
      <div style={{ width: "100%", backgroundColor: "while",display:'flex' , flexDirection:'column' , alignItems:'center',marginTop:20 , justifyContent:'center' }}>
          <button style={{fill:checkThem ? 'black' : 'white' , cursor:btnSlider===1&&'not-allowed'}} disabled={btnSlider===1&&true} onClick={handleRightBtn}>{rightIcon}</button>
          <button style={{fill:checkThem ? 'black' : 'white' ,cursor:btnSlider===0&&'not-allowed'}} disabled={btnSlider===0&&true} onClick={handleLeftBtn}>{leftIcon}</button>
        </div>
    </div>
  );
}
