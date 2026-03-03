import { SKILL_GROUPS } from "../config/constants";

export default function Skills() {
  return (
    <section id="skills" className="section fade-in">
      <div className="container">
        <h2 className="section__title">Skills</h2>
        <p className="section__subtitle">
          Technologies I use to build modern web applications.
        </p>

        <div className="skills__grid">
          {SKILL_GROUPS.map((group) => (
            <div className="skills__card" key={group.title}>
              <h3>{group.title}</h3>
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