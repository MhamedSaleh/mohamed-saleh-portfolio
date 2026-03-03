import { CONTACT } from "../config/constants";

export default function Contact() {
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const data = new FormData(form);

    const name = String(data.get("name") || "");
    const fromEmail = String(data.get("email") || "");
    const message = String(data.get("message") || "");

    const subject = encodeURIComponent(`Portfolio Contact - ${name}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${fromEmail}\n\nMessage:\n${message}`
    );

    // Opens email client with pre-filled message
    window.location.href = `mailto:${CONTACT.email}?subject=${subject}&body=${body}`;

    form.reset();
  };

  return (
    <section id="contact" className="section fade-in">
      <div className="container">
        <h2 className="section__title">Contact</h2>
        <p className="section__subtitle">
          Want to work together? Send me a message — I'll reply as soon as possible.
        </p>

        <div className="contact__grid">
          <div className="contact__card">
            <h3>Quick Links</h3>

            <div className="contact__links">
              <a className="contact__link" href={`mailto:${CONTACT.email}`}>
                📧 {CONTACT.email}
              </a>
              <a className="contact__link" href={CONTACT.linkedin} target="_blank" rel="noreferrer">
                💼 LinkedIn
              </a>
            </div>

            <div className="contact__cta">
              <a className="btn btn--primary" href={`mailto:${CONTACT.email}`}>
                Email Me
              </a>
              <a className="btn btn--ghost" href={CONTACT.linkedin} target="_blank" rel="noreferrer">
                Connect
              </a>
            </div>
          </div>

          <form className="contact__card" onSubmit={onSubmit}>
            <h3>Send a Message</h3>

            <label className="contact__label">
              Name
              <input className="contact__input" name="name" required placeholder="Your name" />
            </label>

            <label className="contact__label">
              Email
              <input
                className="contact__input"
                name="email"
                type="email"
                required
                placeholder="your@email.com"
              />
            </label>

            <label className="contact__label">
              Message
              <textarea
                className="contact__textarea"
                name="message"
                required
                placeholder="Write your message..."
                rows={5}
              />
            </label>

            <button className="btn btn--primary" type="submit">
              Send
            </button>

            <p className="contact__hint">
              This form opens your email client (no backend needed).
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}