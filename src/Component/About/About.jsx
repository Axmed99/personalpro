import "./About.css"
function About(){
  return(
    <section id="About">
    <h1 className="H1">About Me </h1>
    <div className="TextImg">
      <div>
      <img src="./img/img1.jpg"  alt=" Image"></img>
      </div>

     <div>
     <p className="P">
     Lorem Ipsum is simply dummy text of the 
printing and typesetting industry. Lorem 
Ipsum has been the industry's standard 
dummy text ever since the 1500sd 
     </p>
  
     <button className="ReadMore">Read More</button>
        
        </div>
 


    </div>
</section>

  )
}
export default About;