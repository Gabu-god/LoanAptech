import './Loan.css'
import { Link } from 'react-router-dom'
function Loan() {
    return (
        <>
         <div className='loan-container'>
            <h2>Our Loan Products</h2>
            <p className='loan-para'>Fexible borrowing options designned for your needs.</p>
            <div className='loan-box'>
                <h3>Personal Loan</h3>
                <h2>₦500 - ₦10,000</h2>
                <li><p>12-48 months terms</p></li>
                <li><p>No collateral required</p></li>
                <li><p>Fixed monthly payments</p></li>
                <Link to='/' className='lb-link'>Apply Now</Link>
            </div>
            <div className='loan-box'>
                <p style={{fontWeight: 700}}>Most Popular </p>
                <h3>Fast Cash Loan</h3>
                <h2>₦100 - ₦2,000</h2>
                <li><p>Same-day funding</p></li>
                <li><p>No credit check option</p></li>
                <li><p>Paid back on payday</p></li>
                <Link to='/' className='lb-link'>Apply Now</Link>
            </div>
            <div className='loan-box'>
                <h3>Installation Loan</h3>
                <h2>₦2,500 - ₦25,000</h2>
                <li><p>Up to 60 months</p></li>
                <li><p>Lower monthly payment</p></li>
                <li><p>Build your credits</p></li>
                <Link to='/' className='lb-link'>Apply Now</Link>
            </div>
         </div>
        </>
    )
}
export default Loan