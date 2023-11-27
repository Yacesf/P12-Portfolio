import './page.css'
import About from "./section-about";
import Skill from './section-competences';
import Projet from './section-projet';
import Contact from './secton-contact';
import gsap from 'gsap';
import { useEffect } from 'react';
import { ScrollToPlugin, ScrollTrigger } from 'gsap/all';

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)

function Page() {
  const slideSectionright = (elem) => {
    gsap.fromTo(
      elem, {
        opacity: 0,
        x: -300
      },
      {
        opacity: 1,
        x: 0,
        duration: 0.6,
        scrollTrigger: {
          trigger: elem,
          start: "top center",
          end: "bottom center",
        }
      }
    )
  }
  const slideSectionleft = (elem) => {
    gsap.fromTo(
      elem, {
        opacity: 0,
        x: 300
      },
      {
        opacity: 1,
        x: 0,
        duration: 0.6,
        scrollTrigger: {
          trigger: elem,
          start: "top center",
          end: "bottom center",
        }
      }
    )
  }

  useEffect(() => {
    slideSectionright("#about")
  }, [])

  useEffect(() => {
    slideSectionleft("#skill")
  }, [])

  useEffect(() => {
    slideSectionright("#projet")
  }, [])

  useEffect(() => {
    slideSectionleft("#contacts")
  }, [])

  return (
    <main>
    <About/>
    <Skill/>
    <Projet/>
    <Contact/>
    </main>
  );
}

export default Page;
