import Realisation from "../../components/realisation-carte";
import "./index.css";
import { useState } from "react";
import { projetsData } from "./projets-data"
import Modal from "../../components/Modal"

function Projet(props) {
  const [openModalId, setOpenModalId] = useState(null);

  const openModal = (modalId) => {
    setOpenModalId(modalId);
  };

  const closeModal = () => {
    setOpenModalId(null);
  };

  return (
    <section className="sections" id="projet">
    <div id="projet-reveal">
      <h2 className="section-title">MES PROJETS</h2>
      <div className="title-line"></div>
      <div id="projet-container">
        {projetsData.map((projet) => (
          <Realisation
            key={projet.id}
            src={projet.src}
            alt={projet.alt}
            span={projet.span}
            modalId={projet.modalId}
            openModal={() => openModal(projet.modalId)}
            link={projet.link}
          />
        ))}
      </div>
      {projetsData.map((projet) => (
        <Modal
          key={projet.id}
          isOpen={openModalId === projet.modalId}
          isClose={closeModal}
          github={projet.github}
          banner={projet.banner}
          bannerId={projet.bannerId}
          bannerAlt={projet.bannerAlt}
          aboutText={projet.aboutText}
          skills={projet.skills}
        />
      ))}
      </div>
    </section>
  );
}

export default Projet;
