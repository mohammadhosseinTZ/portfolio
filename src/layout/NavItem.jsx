import React from "react";
import { Link } from "react-router-dom";
import navStyle from "./navStyle.module.css";
import { useSelector } from "react-redux";
export default function NavItem({
  styleItemAboute,
  styleItemHome,
  styleItemProjects,
  styleItemContacts,
  styleItemSkills,
 
}) {
  const checkThem = useSelector((state) => state.checkThem.myThem);
  return (
    <nav
      style={{
        color: checkThem ? "black" : "white",
      }}
      className=" md:gap-[20px] gap-3 lg:text-[20px] flex mot-container"
    >
      <Link to="/" className={navStyle.items} style={{ color: styleItemHome }}>
        Home
      </Link>
      <Link
        to="/About"
        className={navStyle.items}
        style={{ color: styleItemAboute }}
      >
        About
      </Link>
      <Link
        to="/Projects"
        className={navStyle.items}
        style={{ color: styleItemProjects }}
      >
        Projects
      </Link>
      <Link
        to="/Skills"
        className={navStyle.items}
        style={{ color: styleItemSkills }}
      >
        Skills
      </Link>
      
      <Link
        to="/Contact"
        className={navStyle.items}
        style={{ color: styleItemContacts }}
      >
        Contact
      </Link>
    </nav>
  );
}
