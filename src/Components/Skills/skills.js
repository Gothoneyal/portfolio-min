import React from 'react'
import './skills.css'
import UIDesign from '../../assets/ui-design.png'
import WebDesign from '../../assets/website-design.png'
import AppDesign from '../../assets/app-design.png'

const Skills = () => {
  return (
    <section id='skills'>
        <span className='skillTitle'>My Skills</span>
        <span className='skillDesc'>I thrive on solving complex problems and creating efficient, user-friendly solutions. With a strong foundation in JavaScript, I enjoy turning innovative ideas into reality.</span>
        <div className='skillBars'>
            <div className='skillBar'>
                <img className='skillBarImg' src={UIDesign} alt=''/>
                <div className='skillBarText'>
                    <h2>UI/UX Design</h2>
                    <p>Demo text</p>
                </div>
            </div>
            <div className='skillBar'>
                <img className='skillBarImg' src={WebDesign} alt=''/>
                <div className='skillBarText'>
                    <h2>WebDesign</h2>
                    <p>Demo</p>
                </div>
            </div>
            <div className='skillBar'>
                <img className='skillBarImg' src={AppDesign} alt=''/>
                <div className='skillBarText'>
                    <h2>AppDesign</h2>
                    <p>Demo</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Skills