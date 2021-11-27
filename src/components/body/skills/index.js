import React from 'react'
import { SkillsData } from '../../../data/skills'
import Separator from '../../common/separate'
import SkillCard from './skill-card'
import './skills.css'

const Skills = () => {
    const data =SkillsData;
    return (
        <div className="skills">
            <Separator/>
            <label className="section-title">Skills</label>
            <div className="skills-container">
                {data.map(item=>{
                    return(
                    <div key={item.id} className="skills-section">
                        <label className="skills-section-title" >{item.type}</label>
                        <div className="skills-list">
                           {item.list.map(skill =>{
                               return (
                                   <SkillCard key={skill.id} skill={skill}/>
                               )
                           })} 
                        </div>   
                    </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Skills
