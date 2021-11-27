import React from 'react'
import "./work-card.css"

const WorkCard = ({item}) => {
    return (
        <div className="work-card">
            <img src={item.companyLogo}  className="work-logo" alt="companylogo" />
            <div className="work-info">
                <label className="company-name">{item.company}</label>
                <label className="work-puesto" >{item.puesto}</label>
                <div className="work-dates">
                    <label >{item.comienzo}</label> - <label>{item.final}</label>
                </div>
                <div className="work-desc">
                    <p>{item.descripcion}</p>
                </div>
            </div>
        </div>
    )
}

export default WorkCard
