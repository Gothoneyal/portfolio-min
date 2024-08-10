import React from 'react'
import './intro.css'
import { Link } from 'react-scroll'
import btnImg from '../../assets/hireme.png'
import myphoto from '../../assets/photo_2024-06-10_19-18-45-fotor-bg-remover-2024061019213.png'

const Intro = () => {
  return (
    <section id='intro'>
        <div className='introContent'>
            <span className='hello'> Hello</span>
            <span className='introText'>I'm <span className='introName'>Gothoneyal</span><br/>Web/App Designer</span>
            <p className='introPara'>a passionate programmer with expertise in web development and mobile app development</p>
            <Link><button className='btn'><img className='btnImg' src={btnImg} alt='hire me' /> Hire Me</button></Link>
        </div>
        <div className="img-container">
            <img src={myphoto} className="framed-img polaroid" alt="my name"/>
          </div>
    </section>
  )
}

export default Intro