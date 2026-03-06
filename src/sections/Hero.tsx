export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero__content">
        <div className="hero__badge">
          <span className="tag tag--accent">Available for work</span>
        </div>
        
        <h1 className="hero__title text-hero">
          Mohamed Saleh
        </h1>
        
        <h2 className="hero__subtitle text-h2">
          Frontend Developer & UI Engineer
        </h2>

        <p className="hero__description text-body">
          Crafting exceptional digital experiences with modern React, TypeScript, and design systems.
          Specialized in building scalable, performant web applications that delight users.
        </p>

        <div className="hero__actions">
          <a href="#projects" className="btn btn--primary">
            View Projects
          </a>
          
          <a href="#contact" className="btn btn--secondary">
            Get In Touch
          </a>
          
          <a href="/mohamed_saleh_cv.pdf" download className="btn btn--ghost">
            Download CV
          </a>
        </div>
      </div>
      
      <div className="hero__visual">
        <div className="hero__gradient"></div>
        <div className="hero__particles">
          {[...Array(6)].map((_, i) => (
            <div key={i} className={`particle particle-${i + 1}`}></div>
          ))}
        </div>
      </div>
    </section>
  );
}