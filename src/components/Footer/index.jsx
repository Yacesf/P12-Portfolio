import "./index.css";

function Footer() {
const emailAddress = "yacine.sf@outlook.fr"
  return (
    <footer id="footer">
      <div className="div-icon">
        <a href="https://github.com/Yacesf"><i className="fa-brands fa-github icon"></i></a>
        <a href={`mailto:${emailAddress}`}><i className="fa-solid fa-envelope icon"></i></a>
      </div>
      <p>© 2023 Yacine SAFSAFI, Tous droits réservés.</p>
    </footer>
  );
}
export default Footer;
