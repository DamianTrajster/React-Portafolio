import React from 'react'
import "./project-card.css"

const ProjectCard = ({project}) => {
    return (
        <div className="project-card" >
            <div className="project-info">
                <label  className="project-title"> {project.titulo}</label>
                <div  className="project-links">
                    {project.demo&& (
                        <a className="project-link" href={project.demo}>
                        <div className="link-button">
                            <i className="fi-rr-globe"></i>Demo
                        </div>
                        </a>
                        )}
                        {project.github&&(
                            <a className="project-link" href={project.github}>
                            <div className="link-button">
                            <i className="devicon-github-original"></i>Github
                            </div>
                            </a>
                        )}
                </div>
                <p>{project.descripcion}</p>
                <div className="project-tags">
                    {project.tags.map(tag =>{
                        return (
                            <label key={tag} className="tag">{tag}</label>
                        )
                    })}

                </div>

            </div>
            <img src={project.imagen}  className="project-photo"  alt="imagen-project" />
        </div>
    )
}

export default ProjectCard
