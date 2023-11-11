import "./index.css";


function Realisation(props) {
  return (
  <div className="realisation-carte" onClick={props.openModal}>
    <img className="realisation-img" src={props.src} alt={props.alt}></img>
    <span>{props.span}</span>
  </div>
  );
}

export default Realisation;
