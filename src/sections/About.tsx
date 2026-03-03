export default function About() {
  return (
    <section id="about" className="section fade-in">
      <div className="container">
        <h2 className="section__title">About</h2>
        <p className="section__subtitle">
          Frontend Developer focused on building clean, responsive, and
          user-friendly web apps using React.
        </p>

        <div className="about__grid">
          <div className="about__card">
            <h3>What I do</h3>
            <p>
              I create modern UI, integrate APIs, and build reusable components
              with clean architecture.
            </p>
          </div>

          <div className="about__card">
            <h3>Highlights</h3>
            <ul className="about__list">
              <li>✅ Responsive UI & accessibility basics</li>
              <li>✅ REST APIs + React Query / Axios</li>
              <li>✅ State management (Redux Toolkit / Zustand)</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}