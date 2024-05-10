import React from 'react'
import './Projects.css'
const Projects = () => {
  return (
    <section id="Projects">
        <h2 className="projectstitle">My projects</h2>
       <div className="projectsimgs">
       <img src="./img/img2.jpg" alt="" className="projectsimg" />
       <img src="./img/img3.jpg" alt="" className="projectsimg" />
        <img src="public/img/img4.jpg" alt="" className="projectsimg" />
        
       </div>
       <button className="projectsbtn">SEE MORE PROJECTS</button>
    </section>
  )
}

export default Projects