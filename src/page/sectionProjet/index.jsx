import Realisation from "../../components/RealisationCarte";
import "./index.css";
import { useState } from "react";
import { projetsData } from "./ProjetsData/index"
import Modal from "../../components/Modal/index";

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
          />
        ))}
      </div>
      {projetsData.map((projet) => (
        <Modal
          key={projet.id}
          isOpen={openModalId === projet.modalId}
          isClose={closeModal}
          banner={projet.banner}
          bannerId={projet.bannerId}
          bannerAlt={projet.bannerAlt}
          aboutText={projet.aboutText}
          skills={projet.skills}
        />
      ))}
    </section>
  );
}

export default Projet;
