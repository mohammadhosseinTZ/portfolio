import React from "react";
import rezumeItem from "../../file/rezume.pdf";
export default function Rezume() {
  return (
    <div>
      <a
        href={rezumeItem}
        className="rezumeItem text-[20px]  md:text-[32px] left-[0]  "
        download
      >
        rezume
      </a>
    </div>
  );
}
