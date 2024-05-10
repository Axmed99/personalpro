import React from 'react'
import './Home.css'
const Home = () => {
  return (
   <section id="Home">
    
    <div className='Homecontent'>
    <img src='public/img/img1.jpg' alt="profile"  className='img'/>
        <span className="Hello">Hello</span>
        <span className="HometextSpan">I'm  Mohamed website Designer</span>
        <p className="HomePara">I'm  web design and Develper</p>

        <button   className="btn">START A PROJECT</button>
        
    </div>
   
   </section>
  )
}

export default Home