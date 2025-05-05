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
      <div className={` w-full  p-[10px] md:p-[40px] min-h-[380px]   mot-app ${checkThem? "light" : "dark"}`  }  >
        <div className="w-full pb-[30px] md:pb-[50px] border-t-solid border-[gray] border-l-2 border-b-2 rounded-bl-[10px]">
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
