import "./index.css";

function Contact() {
  return (
    <section className="sections" id="contacts">
    <div id="contacts-reveal">
      <h2 className="section-title" id="title-section">
        CONTACT
      </h2>
      <div className="title-line"></div>
      <form id="contactForm" method="POST" name="contact" data-netlify="true">
        <input type="hidden" name="form-name" value="contact" />
        <label htmlFor="name">Nom :</label>
        <input type="text" id="name" name="name" required />
        <label htmlFor="email">E-mail :</label>
        <input type="email" id="email" name="email" required />
        <label htmlFor="message">Message :</label>
        <textarea id="message" name="message" rows="4"></textarea>
        <button type="submit">Envoyer</button>
      </form>
      </div>
    </section>
  );
}

export default Contact;
