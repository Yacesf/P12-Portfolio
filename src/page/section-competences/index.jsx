import "./index.css";
import Skills from "../../components/Skills";
import LogoCSS from "../../img/Logo-de-competence/CSS3_logo.svg.png";
import LogoHTML from "../../img/Logo-de-competence/Logo-HTML.png";
import LogoSASS from "../../img/Logo-de-competence/Logo-SASS.png";
import LogoJS from "../../img/Logo-de-competence/Logo-JS.png";
import LogoReact from "../../img/Logo-de-competence/Logo-React.png";
import LogoRedux from "../../img/Logo-de-competence/Logo-redux.png";
import LogoGit from "../../img/Logo-de-competence/Logo-Git.png";
import LogoSwagger from "../../img/Logo-de-competence/Logo-Swagger.png";

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

const createSkillRows = (rowSize) => {
  const skillRows = [];
  for (let i = 0; i < skillsData.length; i += rowSize) {
    const row = skillsData.slice(i, i + rowSize);
    skillRows.push(row);
  }
  return skillRows;
};

function Skill(props) {
  
  return (
    <section className="sections" id="skill">
      <h2 className="section-title">MES COMPÉTENCES</h2>
      <div className="title-line"></div>
      <div id="skill-container">
        {createSkillRows(4).map((row, rowIndex) => (
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
