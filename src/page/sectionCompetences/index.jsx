import "./index.css";
import Skills from "../../components/Skills";
import LogoCSS from "../../img/CSS3_logo.svg.png";
import LogoHTML from "../../img/Logo-HTML.png";
import LogoSASS from "../../img/Logo-SASS.png";
import LogoJS from "../../img/Logo-JS.png";
import LogoReact from "../../img/Logo-React.png";
import LogoRedux from "../../img/Logo-redux.png";
import LogoGit from "../../img/Logo-Git.png";
import LogoSwagger from "../../img/Logo-Swagger.png";

function Skill(props) {
  const skillsData = [
    { name: "HTML", src: LogoHTML },
    { name: "CSS", src: LogoCSS },
    { name: "JAVASCRIPT", src: LogoJS },
    { name: "SASS", src: LogoSASS },
    { name: "REACT", src: LogoReact },
    { name: "REDUX", src: LogoRedux },
    { name: "GIT", src: LogoGit },
    { name: "SWAGGER", src: LogoSwagger },
  ];

  const createSkillRows = () => {
    const skillRows = [];
    for (let i = 0; i < skillsData.length; i += 4) {
      const row = skillsData.slice(i, i + 4);
      skillRows.push(row);
    }
    return skillRows;
  };

  return (
    <section className="sections" id="skill">
      <h2 className="section-title">MES COMPÉTENCES</h2>
      <div className="title-line"></div>
      <div id="skill-container">
        {createSkillRows().map((row, rowIndex) => (
          <div className="skill-row" key={rowIndex}>
            {row.map((skill, skillIndex) => (
              <Skills
                key={skillIndex}
                skillName={skill.name}
                skillSrc={skill.src}
              />
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skill;
