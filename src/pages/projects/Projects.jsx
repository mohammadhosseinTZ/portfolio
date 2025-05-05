import Navbar from "../../layout/Navbar";
import React, { useContext, useState } from "react";
import { ThemIcon } from "../../asset/them/themSetting";

import { myProjects } from "./projectsItems";
import OptionsProjects from "./OptionsProjects";

export default function Projects() {
  const themIcon = useContext(ThemIcon);
  const [projectCount, setProjectCount] = useState(4);
  const handleOptionProjects = (e) => setProjectCount(e.target.value);

  let counter = 0;
  return (
    <div>
      {" "}
      <Navbar styleItemProjects={"rgb(0,159,241)"} themIcon={themIcon} />
      <div className="mb-[10px]">
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: 50,
            marginBottom: 20,
          }}
        >
          <OptionsProjects
            onOption={handleOptionProjects}
            projectCount={projectCount}
          />
        </div>
        <div className="flex flex-wrap gap-2 projectStyle mot-container">
          {myProjects.map((myProject, index) => {
            counter++;
            if (counter > projectCount) return;
            return <div className="w-[calc(100%/2-5px)]" key={index}>{myProject}</div>;
          })}
        </div>
      </div>
    </div>
  );
}
