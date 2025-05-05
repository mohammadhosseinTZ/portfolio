import React from "react";
export default function OptionsProjects({onOption , projectCount}) {
    
  return (
    <select
      style={{ border: "4px solid rgb(0,159,241)", textAlign: "start" }}
      value={projectCount}
      onChange={onOption}
      className="md:p-[4px] p-[0px]"
    >
      <option value="4">4 PROJECTS</option>
      <option value="8">8 PROJECTS</option>
      <option value="16">16 PROJECTS</option>
      <option value="32">32 PROJECTS</option>
    </select>
  );
}
