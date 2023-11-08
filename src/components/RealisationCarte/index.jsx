import "./index.css";


function Realisation(props) {
  return (
  <div className="realisation-carte">
    <img className="realisation-img" src={props.src} alt={props.alt}></img>
    <span>{props.span}</span>
  </div>
  );
}

export default Realisation;
