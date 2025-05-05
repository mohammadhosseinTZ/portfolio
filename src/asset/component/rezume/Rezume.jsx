import React from "react";
import rezumeItem from "../../file/resume.pdf";
export default function Rezume() {
  return (
    <div>
      <a
        href={rezumeItem}
        className="rezumeItem text-[20px]  md:text-[32px] left-[0]  top-[220px]"
        download
      >
        resume
      </a>
    </div>
  );
}
