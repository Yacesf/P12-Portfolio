/* Logo Entreprise */
import BookiImage from "../../../img/Logo-entreprise/Booki.png";
import OMFImage from "../../../img//Logo-entreprise/ohmyfood.png";
import SBImage from "../../../img//Logo-entreprise/Logo-SophieBluel.png";
import KasaImage from "../../../img/Logo-entreprise/Kasa.png";
import NCImage from "../../../img//Logo-entreprise/Logo-NinaCarducci.png";
import eventsImage from "../../../img/Logo-entreprise/724events.png";
import ArgentBankImage from "../../../img/Logo-entreprise/argentBankLogo.jpg";
/* Logo Banniere */
import BookiBanner from "../../../img/Banniere-entreprise/Booki-Banner.png";
import OMFBanner from "../../../img/Banniere-entreprise/OMF-Banner.png";
import SBBanner from "../../../img/Banniere-entreprise/SB-Banner.png";
import KasaBanner from "../../../img/Banniere-entreprise/Kasa-Banner.png";
import NCBanner from "../../../img/Banniere-entreprise/NC-Banner.jpg";
import ArgentBankBanner from "../../../img/Banniere-entreprise/Argent-BankBanner.png";
/* Logo Competence */
import LogoHTML from "../../../img/Logo-de-competence/Logo-HTML.png";
import LogoCSS from "../../../img/Logo-de-competence/CSS3_logo.svg.png";
import LogoSASS from "../../../img/Logo-de-competence/Logo-SASS.png";
import LogoJS from "../../../img/Logo-de-competence/Logo-JS.png";
import LogoReact from "../../../img/Logo-de-competence/Logo-React.png";
import LogoRedux from "../../../img/Logo-de-competence/Logo-redux.png";

export const projetsData = [
  {
    id: "booki",
    modalId: "bookiModal",
    src: BookiImage,
    alt: "Logo de Booki",
    span: "Créer la page d'accueil d'une agence de voyage avec HTML & CSS",
    bannerId: "booki",
    banner: BookiBanner,
    bannerAlt: "Banniere de Booki",
    aboutText: (
      <p>
        - Intégration des maquettes desktop, tablette et mobile.
        <br />
        <br />
        - Respect des spécifications et contraintes techniques détaillées dans
        la note de synthèse.
        <br />
        <br />- Utilisation de la structure de la base de code fournie par
        l'entreprise.
      </p>
    ),
    skills: [
      { name: "HTML", src: LogoHTML },
      { name: "CSS", src: LogoCSS },
    ],
    github: "https://github.com/Yacesf/Projet-3-Booki",
    link: "https://yacesf.github.io/Projet-3-Booki/",
  },
  {
    id: "omf",
    modalId: "omfModal",
    src: OMFImage,
    alt: "Logo d'Ohmyfood",
    span: "Améliorer l'interface d'un site mobile avec des animations CSS",
    banner: OMFBanner,
    bannerId: "omf",
    bannerAlt: "Banniere d'Ohmyfood",
    aboutText: (
      <p>
        - Intégration des maquettes mobile ("mobile first"), tablette et
        desktop.
        <br />
        <br />
        - Suivi rigoureux des information fournies par le brief créatif.
        <br />
        <br />- Ajout d'un loader et des animations demandées sur la maquettes
        Figma.
      </p>
    ),
    skills: [
      { name: "HTML", src: LogoHTML },
      { name: "CSS", src: LogoCSS },
      { name: "SASS", src: LogoSASS },
    ],
    github: "https://github.com/Yacesf/Projet-4-OMF",
    link: "https://yacesf.github.io/Projet-4-OMF/",
  },
  {
    id: "sophie-bluel",
    modalId: "sbModal",
    src: SBImage,
    alt: "Logo de l'architecte",
    span: "Créer une page web dynamique avec JavaScript",
    banner: SBBanner,
    bannerId: "sb",
    bannerAlt: "Banniere de Sophie Bluel",
    aboutText: (
      <p>
        - Ajout de la galerie de maniere dynamique via Swagger.
        <br />
        <br />
        - Création d'une page de connexion, pour permettre à l'artiste de se
        connecter en tant qu'administrateur.
        <br />
        <br />- Implémentation d'un système de suppression ou d'ajout via
        Swagger.
      </p>
    ),
    skills: [
      { name: "HTML", src: LogoHTML },
      { name: "CSS", src: LogoCSS },
      { name: "JavaScript", src: LogoJS },
    ],
    github: "https://github.com/Yacesf/Projet-6-Portfolio",
  },
  {
    id: "kasa",
    modalId: "kasaModal",
    src: KasaImage,
    alt: "Logo de Kasa",
    span: "Créer une application web de location immobilière avec React",
    banner: KasaBanner,
    bannerId: "kasa",
    bannerAlt: "Banniere de Kasa",
    aboutText: (
      <p>
        - Refonte du site avec React.
        <br />
        <br />
        - Suivi des maquettes Figma fournies par l'entreprise.
        <br />
        <br />- Réutilisation de certains composants demandés par l'entreprise.
      </p>
    ),
    skills: [
      { name: "HTML", src: LogoHTML },
      { name: "CSS", src: LogoCSS },
      { name: "SASS", src: LogoSASS },
      { name: "JavaScript", src: LogoJS },
    ],
    github: "https://github.com/Yacesf/Projet-8-Kasa",
  },
  {
    id: "nina-carducci",
    modalId: "ncModal",
    src: NCImage,
    alt: "Logo de la photographe",
    span: "Optimiser le référencement d'un site de photographe",
    banner: NCBanner,
    bannerId: "nc",
    bannerAlt: "Banniere de Nina Carducci",
    aboutText: (
      <p>
        - Utilisation d'outils tels que Lighthouse ou Wave pour effectuer
        l'audit.
        <br />
        <br />
        - Rédaction d'un rapport détaillé comprenant toutes les modifications et
        améliorations apportées.
        <br />
        <br />- Mise en place du référencement local, ajout de balises méta pour
        les réseaux sociaux et redimensionnement des images.
      </p>
    ),
    skills: [
      { name: "HTML", src: LogoHTML },
      { name: "CSS", src: LogoCSS },
    ],
    github: "https://github.com/Yacesf/P9-Optimisation",
    link: "https://yacesf.github.io/P9-Optimisation/",
  },
  {
    id: "events",
    modalId: "eventsModal",
    src: eventsImage,
    alt: "Logo de 724events",
    span: "Débugger le site d'une agence d'événementiel",
    banner: eventsImage,
    bannerId: "events",
    bannerAlt: "Banniere de 724events",
    aboutText: (
      <p>
        - Analyse du cahier des recettes répertoriant les bogues de
        l'application.
        <br />
        <br />- Utilisation de React Developer Tools pour identifier les
        portions du code comportant des erreurs.
      </p>
    ),
    skills: [
      { name: "HTML", src: LogoHTML },
      { name: "CSS", src: LogoCSS },
      { name: "React", src: LogoReact },
    ],
    github: "https://github.com/Yacesf/Debug-P10",
  },
  {
    id: "argent-bank",
    modalId: "argentBankModal",
    src: ArgentBankImage,
    alt: "Logo d'Argent Bank",
    span: "Implémenter le front-end d'une application bancaire avec React",
    banner: ArgentBankBanner,
    bannerId: "argent-bank",
    bannerAlt: "Banniere d'ArgentBank",
    aboutText: (
      <p>
        - Implémentation dynamique du front-end avec React.
        <br />
        <br />
        - Utilisation de Redux pour gérer les changements d'états de l'ensemble
        de l'application.
        <br />
        <br />- Rédaction d'un document décrivant les futures routes de l'API
        conformément aux exigences de l'entreprise.
      </p>
    ),
    skills: [
      { name: "HTML", src: LogoHTML },
      { name: "CSS", src: LogoCSS },
      { name: "React", src: LogoReact },
      { name: "Redux", src: LogoRedux },
    ],
    github: "https://github.com/Yacesf/ArgentBank-P11",
  },
];

export default projetsData;
