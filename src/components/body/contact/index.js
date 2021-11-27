import React from 'react'

import Separator from '../../common/separate'
import SocialContact from '../../common/social-contact'
import "./contact.css"

const Contact = () => {
    return (
        <div className="contact">
            <Separator/>
            <label className="section-title">Contacto</label>
            <div className="contact-container">
                <div className="contact-left">
                    <p>Contáctame en cualquiera de las plataformas</p>
                     <SocialContact/>
                </div>
                <div className="download">
                    <a download href={require('../../../assets/cv/CV-Damian_Trajster_2021.pdf').default}>
                    <i className="fi-rr-cloud-download download-icon"></i>Descargar CV 
                    </a>

                </div>
            </div>
           
        </div>
    )
}

export default Contact
