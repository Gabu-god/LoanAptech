import "./About.css"
export default function About() {
    return (
        <div className="about-container">
            <h1>About Us</h1>
            <p>
                We are a trusted financial platform dedicated to making loan access simple, fast and transparent. Our mission is to <br /> 
                empower individuals and small businesses with flexible financing options without the hassle of traditional banking <br />
                bureaucracy.
            </p>
            <div className="house">
                <div className="room1">
                    <h3>
                        Fast Approval
                    </h3>
                    <h4>
                        Get decisions in minutes, <br /> not weeks
                    </h4>
                </div>
                <div className="room1">
                    <h3>
                        No Hidden Fees
                    </h3>
                    <h4>
                        100% free to apply <br /> no hidden charges
                    </h4>
                </div>
                <div className="room1">
                    <h3>
                        Secure & Private
                    </h3>
                    <h4>
                        Your data is encryptes and <br /> never shared
                    </h4>
                </div>
            </div>
        </div>
    )
}