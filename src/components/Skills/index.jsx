import "./index.css"

const skillColors = {
  HTML: "#E44D26",
  CSS: "#1572B6",
  JAVASCRIPT: "#F0DB4F",
  SASS: "#CC6699",
  REACT: "#61DAFB",
  REDUX: "#764ABC",
  GIT: "#F34F29",
  SWAGGER: "#85EA2D",
};

const skillShadows = {
  HTML: "rgba(228, 77, 38, 1.0)",
  CSS: "rgba(21, 114, 182, 1.0)",
  JAVASCRIPT: "rgba(240, 219, 79, 1.0)",
  SASS: "rgba(204, 102, 153, 1.0)",
  REACT: "rgba(97, 218, 251, 1.0)",
  REDUX: "rgba(118, 74, 188, 1.0)",
  GIT: "rgba(243, 79, 41, 1.0)",
  SWAGGER: "rgba(133, 234, 45, 1.0)",
};

function Skills(props) {
  const skillColor = skillColors[props.skillName]
  const skillShadow = skillShadows[props.skillName]

  return (
        <div className="skills">
          <div className="skill-circle" style={{borderColor: skillColor, boxShadow: `0 5px 5px ${skillShadow}`}}>
            <img className="skill-logo" src={props.skillSrc} alt={`Logo ${props.skillName}`} />
          </div>
          {props.skillName}
        </div>
  );
}

export default Skills;