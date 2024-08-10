import './/project.css';
import React, {useEffect, useState} from 'react';

const Project = () => {
    const [projects, setProjects] = useState([]);
    useEffect(() => {
        fetch('/projects.json')
          .then(response => response.json())
          .then(data => setProjects(data))
          .catch(error => console.error('Error fetching projects:', error));
      }, []);
  return (
    <div id='projectsContainer'>
        {projects.map(project =>(
            <div key={project.id} className='project'>
                <h2>{project.title}</h2>
                <img src={project.image} alt={project.title} style={{width:'200px',height:'auto'}}/>
                <p>{project.description}</p>
                <a href={project.link} className='button'>View more</a>
            </div>
        ))

        }
    </div>  )
}

export default Project;