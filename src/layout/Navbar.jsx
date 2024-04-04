import React from "react";

import NavItem from "./NavItem";
import NavCallAndThem from "./NavCallAndThem";
export default function Navbar({
  styleItemAboute,
  styleItemHome,
  styleItemProjects,
  styleItemContacts,
  styleItemSkills,
  
  themIcon,
}) {
  
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <NavItem
        styleItemHome={styleItemHome}
        styleItemAboute={styleItemAboute}
        styleItemProjects={styleItemProjects}
        styleItemContacts={styleItemContacts}
        styleItemSkills={styleItemSkills}
      
      />
      <NavCallAndThem themIcon={themIcon} />
    </div>
  );
}
