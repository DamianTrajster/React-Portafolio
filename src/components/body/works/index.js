import React from 'react'
import { WorkData } from '../../../data/works'
import Separator from '../../common/separate'
import WorkCard from './work-card'
import './works.css'

const Works = () => {
    const data = WorkData;
    return (
        <div className="work">
            <Separator/>
            <label className="section-title">Experiencia</label>
            <div className="work-list">
            {data.map(item => {
                return(
                    <WorkCard key={item.id} item={item}/>
                )
            })}
                </div>
        </div>

        
    )
}

export default Works
