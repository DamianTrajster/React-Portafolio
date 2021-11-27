import React from 'react'
import { ProjectsData } from '../../../data/projects'
import Separator from '../../common/separate';
import ProjectCard from './project-card';
import './projects.css'

const Projects = () => {
    const data = ProjectsData;
    return (
        <div className="projects">
            <Separator/>
           <label className="section-title">Proyectos</label>
           <div>
                {data.map(project => {
                 return <ProjectCard key={project.id} project={project}/>
                })}
           </div>
        </div>
    )
}

export default Projects
