import './page.css'
import About from "./section-about";
import Skill from './section-competences';
import Projet from './section-projet';
import Contact from './secton-contact';

function Page() {
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
