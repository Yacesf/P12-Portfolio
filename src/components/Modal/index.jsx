import "./index.css";
import LogoGithub from "../../img/Logo-de-competence/Logo-GitHub.png";

function Modal(props) {
  return (
    <div className={`modal ${props.isOpen ? "modal-open" : "modal-closed"}`}>
      <div className="modal-wrapper">
        <i className="fa-solid fa-xmark close" onClick={props.isClose}></i>
        <a href={props.github}>
          <img
            className="modal-github"
            src={LogoGithub}
            alt="Logo GitHub"
          ></img>
        </a>
        <img
          id={props.bannerId}
          className="modal-banner"
          src={props.banner}
          alt={props.bannerAlt}
        ></img>
        <div className="modal-title-about">
          <h4>INFORMATION DU PROJET</h4>
          <h4>COMPÉTENCES UTILISÉ</h4>
        </div>
        <div className="modal-line">
          <div className="modal-line-about"></div>
          <div className="modal-line-about"></div>
        </div>
        <div className="modal-about">
          {props.aboutText}
          {props.skills && (
            <div className="modal-skill-row">
              {props.skills.map((skill, skillIndex) => (
                <img
                  key={skillIndex}
                  className="modal-logo-skill"
                  src={skill.src}
                  alt={props.bannerAlt}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Modal;
