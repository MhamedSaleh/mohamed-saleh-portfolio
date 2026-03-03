import type { ProjectType, Project } from "../types";
import { PROJECTS } from "../config/constants";

function Badge({ type }: { type: ProjectType }) {
  return (
    <span className={`project__badge ${type === "company" ? "is-company" : "is-personal"}`}>
      {type === "company" ? "Company" : "Personal"}
    </span>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="section fade-in">
      <div className="container">
        <h2 className="section__title">Projects</h2>
        <p className="section__subtitle">
          Selected work — company projects + personal portfolio projects.
        </p>

        <div className="projects__grid">
          {PROJECTS.map((project: Project) => (
            <article className="project__card" key={project.title}>
              <div className="project__image">
                <img src={project.image} alt={project.title} loading="lazy" />
                <Badge type={project.type} />
              </div>

              <div className="project__body">
                <h3 className="project__title">{project.title}</h3>
                <p className="project__desc">{project.description}</p>

                {project.type === "company" && project.role?.length ? (
                  <>
                    <h4 className="project__smallTitle">My Role</h4>
                    <ul className="project__features">
                      {project.role.map((role) => (
                        <li key={role}>• {role}</li>
                      ))}
                    </ul>
                  </>
                ) : null}

                <h4 className="project__smallTitle">Highlights</h4>
                <ul className="project__features">
                  {project.features.map((feature) => (
                    <li key={feature}>• {feature}</li>
                  ))}
                </ul>

                <div className="project__stack">
                  {project.stack.map((tech) => (
                    <span className="project__tag" key={tech}>
                      {tech}
                    </span>
                  ))}
                </div>

                {project.type === "company" && project.confidentialNote ? (
                  <p className="project__note">{project.confidentialNote}</p>
                ) : null}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}