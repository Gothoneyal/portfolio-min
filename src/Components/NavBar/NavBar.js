import React, { useState } from 'react'
import {Link} from 'react-router-dom';
import "./navBar.css"
import {Link as ScrollLink} from 'react-scroll';
import contactImg from '../../assets/contact.png';
import menu from "../../assets/menu.png";

const NavBar = () => {
  const [showMenu, setShowMenu]= useState(false);
  return (
    <div>
        <nav className='navbar'>
            <Link to='/admin' className='logo'>Gotho</Link>
            <div className='desktopMenu'>
              <ScrollLink activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className='desktopMenuListItem'>Home</ScrollLink>
              <ScrollLink activeClass='active' to='about' spy={true} smooth={true} offset={-100} duration={500} className='desktopMenuListItem'>About</ScrollLink>
              <ScrollLink activeClass='active' to='skills' spy={true} smooth={true} offset={-100} duration={500} className='desktopMenuListItem'>Skills</ScrollLink>
              <ScrollLink activeClass='active' to='projects' spy={true} smooth={true} offset={-100} duration={500} className='desktopMenuListItem'>Projects</ScrollLink>
            </div>
            <button className='desktopMenuBtn' onClick={() =>{
              document.getElementById('contact').scrollIntoView({behavior: 'smooth'});
            }}>
                <img src={contactImg} alt='' className='navMenuImg'/>
                contact me
            </button>
            <img src={menu} alt='Menu' className='mobileMenu' onClick={()=>setShowMenu(!showMenu)}/>
            <div className='navMenu' style={{display: showMenu? 'flex': 'none'}}>
              <ScrollLink activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className='ListItem' onClick={()=>setShowMenu(false)}>Home</ScrollLink>
              <ScrollLink activeClass='active' to='about' spy={true} smooth={true} offset={-100} duration={500} className='ListItem' onClick={()=>setShowMenu(false)}>About</ScrollLink>
              <ScrollLink activeClass='active' to='skills' spy={true} smooth={true} offset={-100} duration={500} className='ListItem' onClick={()=>setShowMenu(false)}>Skills</ScrollLink>
              <ScrollLink activeClass='active' to='projects' spy={true} smooth={true} offset={-100} duration={500} className='ListItem' onClick={()=>setShowMenu(false)}>Projects</ScrollLink>
              <ScrollLink activeClass='active' to='contact' spy={true} smooth={true} offset={-100} duration={500} className='ListItem' onClick={()=>setShowMenu(false)}>Contact</ScrollLink>
            </div>
        </nav>
    </div>
  )
}

export default NavBar