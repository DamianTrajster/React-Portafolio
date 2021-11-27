import React from 'react'
import './web.css'

/* material */
import {  IconButton } from '@material-ui/core'
import Brightness6Icon from '@material-ui/icons/Brightness6'
import Brightness7Icon from '@material-ui/icons/Brightness7'
import { ThemeProvider } from '@material-ui/core/styles'

const Web = ({dark,theme,change}) => {

  return (
        <ThemeProvider theme={theme}>
        <div className="web">
         <div className="web-option">
             <a style={{color: theme.palette.primary.main}}  href='#project'>
                <i className="fi-rr-edit-alt option-icon"></i>Proyectos
             </a>
         </div>
         <div  className="web-option">
             <a style={{color: theme.palette.primary.main}} href="#skills">
             <i className="fi-rr-laptop option-icon"></i>Skills
             </a>
         </div>
         <div className="web-option">
             <a style={{color: theme.palette.primary.main}}  href="#work">
             <i className="fi-rr-briefcase option-icon"></i>Experiencia
             </a>
         </div>
         <div className="web-option">
             <a  style={{color: theme.palette.primary.main}}  href="#contact">
             <i className="fi-rr-user option-icon"></i>Contacto
             </a>
         </div>
         <div className="darkmode">
         <IconButton edge='start' color='inherit' onClick={change}>
			{dark ? <Brightness7Icon/> :<Brightness6Icon /> }
		</IconButton>
        <label >{dark ? 'light mode' : 'dark mode'}</label>
        </div>
        </div>
        </ThemeProvider>
    )
}

export default Web
