import { Link } from "react-router-dom";
import './Contact.css'
function Contact() {
    return (
        <>
        <div className="contact-container">
            <h2>Contact Us</h2>
            <p>We're here to help! Reach out anytime.</p>
            <div className="contact">
                <p className="words"><span>Email:</span>support@loanapp.com</p>
                <p className="words"><span>Phone:</span>+1 (555) 123-4567</p>
                <p className="words"><span>Hours:</span>Mon-Fri 9AM-6PM EST</p>
            </div>
            <form action="" className="contact-form">
                <input type="text" placeholder="Your Name" className="contact-input" />
                <input type="text" placeholder="Your Email"  className="contact-input"/>
                <textarea ame="textarea" id="" placeholder="Your Message" rows={8}></textarea>
                <Link to="/" className="contact-btn">Send Message</Link>
            </form>
        </div>
        </>
    )
}
export default Contact