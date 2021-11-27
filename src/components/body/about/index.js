import React from 'react'
import SocialContact from '../../common/social-contact/index'
import './about.css'

const About = () => {
    return (
        <div className="about">
           <div className="about-top">
                <div className="about-info">
                Hola soy <span className="info-name">Damian Trajster</span> 👋. 
                <br />Me encanta escribir código. Creo en el poder de la programación para transformar y mejorar la vida de las personas en todo el mundo.
                </div>
                <div className="about-photo">
                    <img src={require('../../../assets/Code typing-bro.png').default} className="picture" alt="Foto1" />
                </div>
           </div>
           <SocialContact/>
        </div>
    )
}

export default About
