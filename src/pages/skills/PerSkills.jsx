import React from "react";

export default function PerSkills({ name, icon ,bg ,loading , img }) {
 
  return (
    <div
      style={{
        backgroundColor: bg,
      }}
      className=" w-[calc(100%/2-5px)] md:w-[calc(100%/4-5px)]  h-[100px] flex flex-row flex-wrap p-[10px] items-center justify-center relative fill-white"
    >
      {img ? <img src={icon} width={60}/> : icon} 
      {loading ? <img src={loading} alt={name} style={{  width:100 ,position:'absolute'  }} className="left-[-20px] "/> :<span style={{ color: "white" }}>{name}</span>}
    </div>
  );
}
