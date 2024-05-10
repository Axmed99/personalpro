import "./Contact.css"
function Contact(){
  return(
        <section id="Contact" >
            <div>
            <h1 className="H">Contact  Me </h1>
           <div className="contactContianer">
            <input type="text" placeholder="Full Name"></input>
            <input type="text" placeholder="Email"></input>
            <textarea placeholder="Message.."></textarea>
            <button className="SEND">SEND</button>
           </div>
            </div>
         
        </section>

    )
}
export default Contact