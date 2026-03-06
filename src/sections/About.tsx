export default function About() {
  return (
    <section id="about" className="section fade-in">
      <div className="container">
        <h2 className="section__title">About Me</h2>
        <p className="section__subtitle">
          Bridging the gap between Advanced Academic Research and Industrial-grade Software Engineering.
        </p>

        <div className="about__grid">
          {/* العمود الأول: الخبرة العامة */}
          <div className="about__card">
            <h3>Professional Profile</h3>
            <p>
              Senior Frontend Engineer with 5+ years of hands-on experience. I specialize in architecting 
              scalable React ecosystems and high-performance dashboards. Having delivered 200+ projects, 
              I possess a deep understanding of the full development lifecycle, from complex Business Logic 
              to pixel-perfect UI.
            </p>
            <p style={{ marginTop: '1rem' }}>
              As a **University Demonstrator** and **M.Sc. Researcher in AI**, I bring a unique analytical 
              approach to solving technical challenges, ensuring code robustness and algorithmic efficiency.
            </p>
          </div>

          {/* العمود الثاني: التميز التقني */}
          <div className="about__card">
            <h3>Technical Excellence</h3>
            <ul className="about__list">
              <li><strong>Architecture:</strong> Building modular, component-driven UI systems using Atomic Design.</li>
              <li><strong>Data Layer:</strong> Advanced state management (Zustand/Redux) & optimized data fetching (React Query).</li>
              <li><strong>Performance:</strong> Achieving top-tier Core Web Vitals via code-splitting, memoization, and lazy loading.</li>
              <li><strong>Quality:</strong> Writing type-safe code with TypeScript and maintaining clean, reusable architectures.</li>
            </ul>
          </div>

          {/* العمود الثالث: قسم الـ AI الجديد */}
          <div className="about__card full-width">
            <h3>AI-Driven Development</h3>
            <p>
              I embrace the future of software engineering by integrating **AI-assisted workflows** to double productivity 
              without compromising quality.
            </p>
            <div className="ai__tools_grid">
              <div className="ai__tool_item">
                <strong>Modern Tooling:</strong> Expert in <strong>Cursor</strong>, GitHub Copilot, and custom AI agents for rapid prototyping and debugging.
              </div>
              <div className="ai__tool_item">
                <strong>Advanced Prompting:</strong> Leveraging LLMs (ChatGPT/Gemini) for complex logic refactoring, Unit Testing, and documentation.
              </div>
              <div className="ai__tool_item">
                <strong>Innovation:</strong> Implementing **MCP (Model Context Protocol)** to bridge AI tools with local development environments for smarter coding.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}