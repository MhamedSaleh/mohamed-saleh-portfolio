import type { ProjectType, Project } from "../types";
import { PROJECTS } from "../config/constants";
import { useState, useEffect } from "react";
function Badge({ type }: { type: ProjectType }) {
  return (
    <span className={`project__badge ${type === "company" ? "is-company" : "is-personal"}`}>
      {type === "company" ? "Company" : "Personal"}
    </span>
  );
}

function ImagePopup({ image, title, onClose }: { image: string; title: string; onClose: () => void }) {
  return (
    <div className="image-popup" onClick={onClose}>
      <div className="image-popup__content" onClick={(e) => e.stopPropagation()}>
        <button className="image-popup__close" onClick={onClose}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M18 6L6 18M6 6l12 12" />
          </svg>
        </button>
        <img src={image} alt={title} className="image-popup__img" />
        <div className="image-popup__title">{title}</div>
      </div>
    </div>
  );
}

export default function Projects() {
  const [selectedImage, setSelectedImage] = useState<{ src: string; title: string } | null>(null);

  const openImagePopup = (image: string, title: string) => {
    setSelectedImage({ src: image, title });
    document.body.style.overflow = 'hidden';
  };

  const closeImagePopup = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'unset';
  };

  useEffect(() => {
    const handleEscKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && selectedImage) {
        closeImagePopup();
      }
    };

    if (selectedImage) {
      document.addEventListener('keydown', handleEscKey);
    }

    return () => {
      document.removeEventListener('keydown', handleEscKey);
    };
  }, [selectedImage]);

  return (
    <>
    <div className="container">
      {selectedImage && (
        <ImagePopup
          image={selectedImage.src}
          title={selectedImage.title}
          onClose={closeImagePopup}
        />
      )}
      <section id="projects" className="section fade-in">
        <h2 className="section__title">Projects</h2>
        <p className="section__subtitle">
          Selected work — company projects + personal portfolio projects.
        </p>

        <div className="projects__grid">
          {PROJECTS.map((project: Project) => (
            <article key={project.title} className="project__card">
              <div className="project__image" onClick={() => openImagePopup(project.image, project.title)}>
                <img src={project.image} alt={project.title} loading="lazy" />
                <Badge type={project.type} />
                <div className="project__image-overlay">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                  <span>Click to view full screen</span>
                </div>
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

                <div className="project__actions">
                  {project.live && (
                    <a 
                      href={project.live} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="btn btn--primary"
                    >
                       Live Demo
                    </a>
                  )}
                </div>

                {project.type === "company" && project.confidentialNote ? (
                  <p className="project__note">{project.confidentialNote}</p>
                ) : null}
              </div>
            </article>
          ))}
        </div>
      </section>
      </div>
    </>
  );
}