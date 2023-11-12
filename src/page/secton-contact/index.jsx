import "./index.css";

function Contact() {
  return (
    <section className="sections" id="contacts">
      <h2 className="section-title" id="title-section">CONTACT</h2>
      <div className="title-line"></div>
      <form id="contactForm" name="contact" data-netlify="true">
          <label htmlFor="name">Nom :</label>
          <input type="text" id="name" name="name" required />
          <label htmlFor="email">E-mail :</label>
          <input type="text" id="email" name="email" required />
          <label htmlFor="message">Message :</label>
          <textarea id="message" name="message" rows="4"></textarea>
      <button type="submit">Envoyer</button>
      </form>
    </section>
  );
}

export default Contact;
