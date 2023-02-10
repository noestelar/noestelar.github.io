import React from "react";
import SkillsCard from "./skillsCard";
function Skills() {
  return (
    <nav>
      <ul className="flex  items-center h-[80px] font-portal text-[30px]">
        <li className="mr-10 ]">
          {" "}
          <a href="#home">Home</a>{" "}
        </li>
      </ul>

      <>
        <SkillsCard />
      </>
    </nav>
  );
}

export default Skills;
