import React from 'react'
import './Projects.css';

const ProjectCard = ({ title, description, imageUrl }) => {
    return (
        <div className='project-card'>
            <img src={imageUrl} alt='title' />
            <div className='project-info'>
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
        </div>
    )
}

export default ProjectCard