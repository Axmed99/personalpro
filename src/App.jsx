
import './App.css'
import About from './Component/About/About'
import Contact from './Component/Contact/Contact'
import Home from './Component/Home/Home'
import Projects from './Component/Projects/Projects'
import Skils from './Component/Skills/Skils'

function App() {

  return (
    <>
    <nav>
      <h1>mohamed</h1>
      <ul>
        <li><a href="#Home">Home</a></li>
        <li><a href="#About">About</a></li>
        <li><a href="#Contact">Contact</a></li>
        <li><a href="#Projects">Project</a></li>
        <li><a href="#Skils">Skils</a></li>
      </ul>
    </nav>
    <Home/>
    <About/>
    <Contact/>
    <Skils/>
    <Projects/>
    
    </>
  )
}

export default App
