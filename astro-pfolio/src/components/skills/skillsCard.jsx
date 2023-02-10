function SkillsCard (){
    return (
        <div className="skills">
        <h1 className="font-portal text-[70px] ">Skills</h1>
        <div className="skills-container">
          <div className="skills-item">
            <h2 className="font-portal text-[50px]">Frontend</h2>
            <ul>
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>React</li>
              <li>Angular</li>
              <li>Bootstrap</li>
              <li>Material UI</li>
            </ul>
          </div>
          <div className="skills-item">
            <h2 className="font-portal text-[50px]">Backend</h2>
            <ul>
              <li>C#</li>
              <li>Python</li>
              <li>NodeJS</li>o
              <li>Flask</li>
              <li>SQL</li>
              <li>PostgreSQL</li>
            </ul>
          </div>
        </div>
      </div>
      )
}
export default SkillsCard;