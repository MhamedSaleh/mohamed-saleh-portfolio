import { SKILL_GROUPS } from "../config/constants";

export default function Skills() {
  return (
    <section id="skills" className="section fade-in">
      <div className="container">
        <h2 className="section__title">Technical Proficiency</h2>
        <p className="section__subtitle">
          A specialized stack focused on scalability, performance, and the integration of AI in modern workflows.
        </p>

        <div className="skills__grid">
          {SKILL_GROUPS.map((group) => (
            <div className="skills__card" key={group.title}>
              <div className="skills__card-header">
                <div className="skills__icon-dot"></div>
                <h3>{group.title}</h3>
              </div>
              <div className="skills__tags">
                {group.items.map((item) => (
                  <span className="skills__tag" key={item}>
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}