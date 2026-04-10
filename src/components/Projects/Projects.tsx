import { projects } from "../../data/projects";
import "./Projects.scss";

function Projects() {
    return (
        <section className="projects" id="projects">
            <div className="projects__container">
                <div className="projects__header">
                    <p className="projects__eyebrow">Projects</p>
                    <h2>Selected Work</h2>
                    <p>Here are some of the projects I built and improved as a frontend developer.</p>
                </div>

                <div className="projects__grid">
                    {projects.map((project) => (
                        <article className="project-card" key={project.title}>
                            <div className="project-card__image">
                                <img src={project.image} alt={project.title} />
                            </div>
                            <div className="project-card__body">
                                <h3>{project.title}</h3>
                                <p>{project.description}</p>
                                <div className="project-card__tags">
                                    {project.tech.map((item) => (
                                        <span key={item}>{item}</span>
                                    ))}
                                </div>
                                <div className="project-card__links">
                                    <a href={project.liveUrl} target="_blank" rel="noreferrer">
                                        Live Demo
                                    </a>
                                    <a href={project.githubUrl} target="_blank" rel="noreferrer">
                                        GitHub
                                    </a>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Projects;