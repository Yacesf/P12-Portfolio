import "./index.css";

function About() {
  return (
    <section className="sections" id="about">
      <h2 className="section-title">PRÉSENTATION</h2>
      <div className="title-line"></div>
      <div id="about-text">
        <p>
          Passionné par le monde du web depuis de nombreuses années, j'ai choisi
          de faire de cette passion mon métier.
          <br /> Pour concrétiser ce projet, j'ai suivi une formation en tant
          qu'intégrateur web.
          <br />
        </p>
        <p>
          Aujourd'hui, je possède les compétences nécessaires pour déboguer,
          optimiser et même intégrer des applications avec React, Redux et{" "}
          <a id="about-text-link" href="#">
            bien plus.
          </a>
        </p>
      </div>
    </section>
  );
}

export default About;
