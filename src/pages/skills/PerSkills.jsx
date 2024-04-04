import React from "react";

export default function PerSkills({ name, icon ,bg ,loading }) {
 
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        padding: 10,
        backgroundColor: bg,
        
        alignItems: "center",
        justifyContent: "center",
        fill: "white",
        borderRadius: 10,
        
        position:"relative",
        margin:'20px auto 0px'
      }}
      className="lg:w-[80%] md:h-[100px] w-[120px] h-[100px]"
    >
      {icon} 
      {loading ? <img src={loading} alt={name} style={{  width:100 ,position:'absolute'  }} className="left-[-20px] "/> :<span style={{ color: "white" }}>{name}</span>}
    </div>
  );
}
