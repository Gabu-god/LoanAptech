import './footer.css'
import { Link } from 'react-router-dom';
function Footer() {
    return (
        <>
            <footer>
                <div className="box-1">
                    <div className="row-1">
                        <h2 style={{color: 'blue'}}>LoanAptech</h2>
                        <p>Your trusted partner for fast, transparent, <br /> and affordable laon solutions</p>
                    </div>
                    <div className="row-2">
                        <h3>Quick Links</h3>
                        <Link to="/home">Home</Link>
                        <a href="#">Loan Products</a>
                        <a href="#">Apply Now</a>
                        <a href="#">About Us</a>
                    </div>
                    <div className="row-3">
                        <h3>Support</h3>
                        <a href="#">Contact Us</a>
                        <a href="#">FAQ</a>
                        <a href="#">Privacy Policy</a>
                        <a href="#">Terms of Service</a>
                    </div>
                    <div className="row-4">
                        <h3>Get in Touch</h3>
                        <a href="#">support@loanaptech.com</a>
                        <p>+1 (555) 123-4567</p>
                        <p>Mon-Fri: 5AM-6PM EST</p>
                    </div>
                </div>
                <div className="box-2">
                    <p>© 2026 LoanAptech. All rights reserved.</p>
                    <p>Licensed by relevant financial authorities.</p>
                </div>
            </footer>    
        </>
    )
}
export default Footer;