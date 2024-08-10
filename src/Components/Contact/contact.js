import React from 'react'
import "./contactStyles.css"

const Contact = () => {
  return (
    <section id='contact'>
      <div className='form'>
        <h2 className='contact-me'>Contact me</h2>
        <form>
            <label>Your Name</label>
            <input type="text"></input>
            <label>Email</label>
            <input type="email"></input>
            <label>Subject</label>
            <input type="text"></input>
            <label>Message</label>
            <textarea rows="6" placeholder="Type your message here"/>
            <button className="btn">Submit</button>
        </form>
      </div>
    </section>
  )
}

export default Contact