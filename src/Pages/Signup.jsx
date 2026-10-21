import "./Signup.css"
import {Link} from "react-router-dom";
function Signup() {
    return (
        <>
        <div className='signup-container'>
            <h2>Create Your Account</h2>
            <form action="" className='form'>
                <input type="text" placeholder='Full Name' />
                <input type='email' placeholder='Email address' />
                <input type="number" placeholder='Phone Number' />
                <input type="password" placeholder='Password' />
                <input type="password" placeholder='Confirm Password' />
                <Link to= "/" className='button'> Sign Up</Link>
                <Link className='anc'>Already have an account? Login</Link>
            </form>
        </div>
        </>
    )
}
export default Signup
