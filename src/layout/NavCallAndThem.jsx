import React from "react";
import { sunIcon } from "./icons/sunIcon";
import navStyle from "./navStyle.module.css";

import { useDispatch, useSelector } from "react-redux";
import { statusThem } from "../store/slices/checkThem";

export default function NavCallAndThem({ themIcon }) {
  const dispatch = useDispatch();
  const checkThem = useSelector((state) => state.checkThem.myThem);
 
  const handleCheckThem = () => {
    dispatch(statusThem());
    console.log('ok');
  };
  return (
    <div style={{ alignItems: "center", gap: 20, display: "flex" }}>
      <span className="flex hidden md:flex">
        <a
          href="tel:+989129366297"
          style={{ color: checkThem ? "black" : "white", fontSize: 13 }}
          className={navStyle.items}
        >
          {" "}
          +989129366297
        </a>
      </span>
      <button
        onClick={handleCheckThem}
        style={{
          cursor: "pointer",

          fill: checkThem ? themIcon.iconLighte : themIcon.iconDark,
        }}
        className=" border-l-[1px] border-[#d7d7d7] ps-4"
      >
        {sunIcon}
      </button>
    </div>
  );
}
