import React, {useState} from 'react'
import './header.css'
import Mobile from './mobile'
import Web from './web'

const  Header= ({dark,theme,change}) => {
  const [isOpen,setIsOpen]= useState(false);
    return (
        <div className="header">
           <div className="logo">Portafolio</div>
           <div className="menu">
             <div className="web-menu">
               <Web  dark={dark} theme={theme} change={change} />
             </div>
             <div className="mobile-menu">
               <div onClick={()=>setIsOpen(!isOpen)}>
                 <i className="fi-rr-apps menu-icon"></i>
               </div>
               {isOpen&&<Mobile isOpen={isOpen}  setIsOpen={setIsOpen}/>}
             </div>
           </div>
        </div>
    )
}

export default Header
