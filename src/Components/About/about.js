import React from 'react'
import './about.css'
import myphoto from "../../assets/photo_2024-06-10_19-18-45-fotor-bg-remover-2024061019213.png"

const About = () => {
  return (
    <section id='about'>
      <div className="about">
        <div className="left">
          <h1>Who Am i?</h1>
          <p>I'm a fourth year Adama Science and Technology student currently taking my computer science and engineering degree I'm a professional with a variety of skills who specializes in graphic design, and front end development.
          </p>
          <p className='p2'>
            I'm a seasoned professional with a diverse skill set, specializing in both graphic design and front-end development.<br /><br /> My expertise in graphic design allows me to create visually stunning and impactful designs that resonate with audiences and elevate brand identities.<br /><br /> I have a keen eye for detail and a deep understanding of design principles, ensuring that every project I undertake is both aesthetically pleasing and functionally effective.
          </p>
        </div>
        <div className="right">
          <div className="img-container2">
            <img src={myphoto} className="framed-img polaroid" alt="my name" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default About