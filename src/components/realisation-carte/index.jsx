import "./index.css";


function Realisation(props) {
  return (
  <div className="realisation-carte" onClick={props.openModal}>
    {props.link && (
      <a className="link-projets" href={props.link}><i className="fa-solid fa-arrow-up-right-from-square"></i></a>
    )}
    <img className="realisation-img" src={props.src} alt={props.alt}></img>
    <span>{props.span}</span>
  </div>
  );
}

export default Realisation;
