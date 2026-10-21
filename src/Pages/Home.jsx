import "./Home.css"
import {Link} from "react-router-dom";
export default function Home() {
    return (
        <div className="home-container">
            <h2>Welcome to Loan Aptech </h2>
            <p>Get instant personal loans up to $50,000 with low interest rates and flexible <br /> repayment options.</p>
            <Link to="/apply" className="btn">Apply Now, It's Free</Link>
            <div className="box">
                <div className="card1">
                    <h3>
                        Lightening <br />Fast
                    </h3>
                    <h4>
                        Lightening Fast <br />Approval
                    </h4>
                    <p>
                        Get decision in under 10 minutes
                    </p>
                </div>
                <div className="card1">
                    <h3>
                        No <br />Paperwork
                    </h3>
                    <h4>
                        No Paperwork <br />Required
                    </h4>
                    <p>100% digital & hassle-free <br /> process</p>
                </div>
                <div className="card1">
                    <h3>
                        Best <br /> Rates
                    </h3>
                    <h4>
                        Lowest Interest <br /> Rates
                    </h4>
                    <p>Starting from just 8.89% p.a</p>
                </div>
            </div>
            <p className="para">
                Already applied?
                <Link to="/signup" style={{color:"blue"}}>Check Loan Status</Link>
                <div className="dot"></div>
                <Link to="/Dashboard" style={{color: "blue"}}>Go to Dashboard</Link>
            </p>
        </div>
    )
}