import "./index.css";

function About() {
  return (
    <div id="about">
      <h2 className="section-title">PRÉSENTATION</h2>
      <div className="title-line"></div>
      <div id="about-text">
        <p>
          Passionné par le monde du web depuis de nombreuses années, j'ai choisi
          de faire de cette passion mon métier.
          <br /> Pour concrétiser ce projet, j'ai suivi une formation en tant
          qu'intégrateur web.
          <br /> <br/>Aujourd'hui, je possède les compétences nécessaires pour
          déboguer, optimiser et même intégrer des applications avec React, Redux et <a id="about-text-link" href="#">bien plus.</a>
        </p>
      </div>
    </div>
  );
}

export default About;
