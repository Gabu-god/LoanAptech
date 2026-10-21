import { Link } from "react-router-dom"
function Header() {
    return (
        <>
            <header style={{backgroundColor:"white", 
                display:"flex",
                color:"blue", 
                width:"100%",
                height:"30px", 
                padding:"10px"}}><div>LoanAptech</div> 
                <div style={{display:"flex", gap:"20px", color:"white", marginLeft:"auto",}}>
                    <Link to="/" style={{textDecoration: "none", color: "black"}}>Home</Link>
                    <Link to="/loan" style={{textDecoration: "none", color: "black"}}>Loans</Link>
                    <Link to="/about" style={{textDecoration: "none", color: "black"}}>About</Link>
                    <Link to="/contact" style={{textDecoration: "none", color: "black"}}>Contact</Link>
                    <Link to="/login" style={{textDecoration: "none", color: "black"}}>Login</Link>
                    <Link to="/signup" style={{backgroundColor:"blue", width:"70px", borderRadius: "10px", textDecoration: "none", color: "white"}}>Sign Up</Link>
                </div>
            </header>
        </>
    )
}
export default Header