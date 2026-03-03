export default function Hero() {
  return (
    <section className="hero fade-in" id="home">
      <div className="hero__content">
        <div className="hero__badge stagger-item show">
          <span className="tag tag--accent">Available for work</span>
        </div>
        
        <h1 className="hero__title text-hero stagger-item show">
          Mohamed Saleh
        </h1>
        
        <h2 className="hero__subtitle text-h2 stagger-item show">
          Frontend Developer & UI Engineer
        </h2>

        <p className="hero__description text-body stagger-item show">
          Crafting exceptional digital experiences with modern React, TypeScript, and design systems. 
          Specialized in building scalable, performant web applications that delight users.
        </p>

        <div className="hero__actions stagger-item show">
          <a href="#projects" className="btn btn--primary">
            View Projects
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </a>
          
          <a href="#contact" className="btn btn--secondary">
            Get In Touch
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19v-6a2 2 0 012-2h10a2 2 0 012 2v6m-7 3h6"/>
            </svg>
          </a>
          
          <a href="/cv.pdf" download className="btn btn--ghost">
            Download CV
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 2v9m0 0l-3-3m3 3l3-3M3 17v3a2 2 0 002 2h14a2 2 0 002-2v-3"/>
            </svg>
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