import Realisation from "../../components/RealisationCarte";
import "./index.css";
import BookiImage from "../../img/Booki.png";
import OMFImage from "../../img/ohmyfood.png";
import SBImage from "../../img/Logo-SophieBluel.png";
import KasaImage from "../../img/Kasa.png";
import NCImage from "../../img/Logo-NinaCarducci.png"
import eventsImage from "../../img/724events.png"
import ArgentBankImage from "../../img/argentBankLogo.jpg"

function Projet(props) {
  return (
    <section className="sections" id="projet">
      <h2 className="section-title">MES PROJETS</h2>
      <div className="title-line"></div>
      <div id="projet-container">
        <Realisation
          src={BookiImage}
          alt="Logo de Booki"
          span="Créez la page d'accueil d'une agence de voyage avec HTML & CSS"
        />
        <Realisation
          src={OMFImage}
          alt="Logo de Ohmyfood"
          span="Améliorez l'interface d'un site mobile avec des animations CSS"
        />
        <Realisation
          src={SBImage}
          alt="Logo de l'architecte"
          span="Créez une page web dynamique avec JavaScript"
        />
        <Realisation
          src={KasaImage}
          alt="Logo de Kasa"
          span="Créez une application web de location immobilière avec React"
        />
        <Realisation
          src={NCImage}
          alt="Logo de la photographe"
          span="Optimisez le référencement d'un site de photographe"
        />
        <Realisation
          src={eventsImage}
          alt="Logo de 724events"
          span="Débuggez le site d'une agence d'événementiel"
        />
        <Realisation
          src={ArgentBankImage}
          alt="Logo d'Argent Bank"
          span="Implémentez le front-end d'une application bancaire avec React"
        />
      </div>
    </section>
  );
}

export default Projet;
