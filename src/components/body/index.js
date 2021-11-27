import React from 'react'
import About from './about'
import './body.css'


import Contact from './contact'
import Projects from './projects'
import Skills from './skills'
import Works from './works'

const Body = () => {
    return (
        <div className="body">
           <section id='about'>
               <About/>
           </section>

           <section id='project'>
               <Projects/>
           </section>

           <section id='skills'>
              <Skills/>
           </section>

           <section id='work'>
              <Works/>
           </section>

            <section id='contact'>
              <Contact/>
           </section>

        </div>
    )
}

export default Body
