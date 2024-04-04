import React from "react";
import {  HashRouter, Route, Routes } from "react-router-dom";

import { ThemIcon, myThem } from "./asset/them/themSetting";
import {
  About,
  Contact,
 
  Home,
  Projects,
  Skills,
} from "./pages";
import { useSelector } from "react-redux";

export default function App() {
  const checkThem = useSelector((state) => state.checkThem.myThem);
  return (

    <ThemIcon.Provider value={myThem}>
      <div className=" w-full h-screen p-[40px]" style={{background:checkThem? "radial-gradient(circle, rgba(214,221,225,1) 0%, rgba(227,226,226,1) 51%)":"radial-gradient(circle, rgba(65,65,65,1) 0%, rgba(46,46,46,1) 51%)" , overflow:'hidden'}} >
        <div className="w-full h-full border-t-solid border-[gray] border-l-2 border-b-2 rounded-bl-[10px]">
          <HashRouter base="/">
            <Routes>
              <Route path="/" element={<Home />}></Route>
              <Route path="/Projects" element={<Projects />}></Route>
              <Route path="/Contact" element={<Contact />}></Route>
              <Route path="/Skills" element={<Skills />}></Route>
              
              <Route path="/About" element={<About />}></Route>
            </Routes>
          </HashRouter>
        </div>
      </div>
    </ThemIcon.Provider>
  );
}
