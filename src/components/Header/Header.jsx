import { useState } from "react";
import "./Header.css";

function Header() {
  const [activeLink, setActiveLink] = useState("presentation");
  const [toogleNavbar, setToogleNavbar] = useState(false);

  const linkActive = (section) => {
    setActiveLink(section);
  };

  const clickToogleNavbar = () => {
    setToogleNavbar(!toogleNavbar);
  };

  return (
    <header id="header">
      <h1 id="title">Y.SAFSAFI</h1>
      <nav
        className={toogleNavbar ? "toogle-nav" : ""}
        onClick={clickToogleNavbar}
      >
        <div className="toogle">
          <i className="fa-solid fa-bars open"></i>
          <i className="fa-solid fa-xmark close"></i>
        </div>
        <ul id="menu">
          <li
            className={`link-nav ${
              activeLink === "presentation" ? "active-link" : ""
            }`}
          >
            <a
              href="#about"
              id="presentation"
              onClick={() => linkActive("presentation")}
            >
              PRÉSENTATION
            </a>
          </li>
          <li
            className={`link-nav ${
              activeLink === "competences" ? "active-link" : ""
            }`}
          >
            <a href="#skill" id="competences" onClick={() => linkActive("competences")}>
              COMPÉTENCES
            </a>
          </li>
          <li
            className={`link-nav ${
              activeLink === "projets" ? "active-link" : ""
            }`}
          >
            <a href="#projet" id="projets" onClick={() => linkActive("projets")}>
              PROJETS
            </a>
          </li>
          <li
            className={`link-nav ${
              activeLink === "contact" ? "active-link" : ""
            }`}
          >
            <a href="#contacts" id="contact" onClick={() => linkActive("contact")}>
              CONTACT
            </a>
          </li>
          <li className={`link-nav`}>
            <a href="#" id="cv">
              MON CV
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
export default Header;
