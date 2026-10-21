import "./Login.css"
import {Link} from "react-router-dom";
function Login() {
    return (
        <>
        <div className="login-container">
            <h2>Welcome Back</h2>
            <form action="" className="fill">
                <input type="email" placeholder="Email address" />
                <input type="password" placeholder="Password" />
                <Link to= "/" className='button'> Login</Link>
                <Link className='anc'>Don't have an account/ Sign up</Link>
            </form>
        </div>
        </>
    )
}
export default Login