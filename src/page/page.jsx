import "./page.css";
import About from "./section-about";
import Skill from "./section-competences";
import Projet from "./section-projet";
import Contact from "./secton-contact";
import gsap from "gsap";
import { useEffect} from "react";
import { ScrollToPlugin, ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

function Page(props) {

  const opacityAnimation = (elem) => {
    gsap.fromTo(
      elem,
      {
        opacity: 0,
      },
      {
        opacity: 1,
        duration: 1.5,
        ease: "ease-in-out",
        scrollTrigger: {
          trigger: elem,
          start: "top center",
          end: "bottom center",
        },
      }
    );
  };

  useEffect(() => {
    opacityAnimation("#about-reveal");
  }, []);

  useEffect(() => {
    opacityAnimation("#skill-reveal");
  }, []);

  useEffect(() => {
    opacityAnimation("#projet-reveal");
  }, []);

  useEffect(() => {
    opacityAnimation("#contacts-reveal");
  }, []);

  return (
    <>
    <main>
      <About />
      <Skill />
      <Projet />
      <Contact />
    </main>
    </>
  );
}

export default Page;
