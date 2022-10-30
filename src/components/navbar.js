import React from "react"
import reactLogo from "../img/react-icon-small.png"
import linkedInIcon from "../img/linkedin_icon.png"
import gitHubIcon from "../img/github_icon.png"
import contactIcon from "../img/contact_icon.png"
import homepageIcon from "../img/homepage_icon.png"

export default function Navbar(props) {
    return (
        <nav className={props.darkMode ? "dark": ""}>
            <div className="nav--containner">
                <div className="nav--react_logo">  
                    <img 
                        className={props.darkMode ? "dark" : ""}
                        src={reactLogo}
                        alt="Blue_React_Logo"
                    />
                    <h3>React Portfolio</h3>
                </div>
                    <div className="nav--infos">
                        <div
                            className="nav--infos_div"
                            id={props.darkMode ? "dark" : "light"}
                            onClick={() => window.open('https://www.linkedin.com/in/jvbo/', '_blank', 'noopener, noreferrer')}
                        >
                            <img 
                            className={props.darkMode ? "dark" : ""}
                            src={linkedInIcon}
                            alt="LinkedIn_Logo"
                            />
                            <h3>Linked-In</h3>
                        </div>

                        <div 
                            className="nav--infos_div"
                            id={props.darkMode ? "dark" : "light"}
                            onClick={() => window.open('https://github.com/JVPhoenix', '_blank', 'noopener, noreferrer')}
                        >
                            <img
                            className={props.darkMode ? "dark" : ""}
                            src={gitHubIcon}
                            alt="GitHub_Logo"
                            />
                            <h3>GitHub</h3>
                        </div>

                        <div 
                            className="nav--infos_div" 
                            id={props.darkMode ? "dark" : "light"}
                            onClick={props.toggleSlider}
                        >
                            <img
                            className={props.darkMode ? "dark" : ""}
                            src={!props.slider ? contactIcon : homepageIcon}
                            alt="email_Logo"
                            />
                            <h3>{!props.slider ? "Contact-me" : "Back to Home Page"}</h3>
                        </div>
                </div>

                <div className="toggler">
                    <p className="toggler--light">Light</p>
                    <div 
                        className="toggler--slider"
                        onClick={props.toggleDarkMode}
                    >
                        <div className="toggler--slider--circle"></div>
                    </div>
                    <p className="toggler--dark">Dark</p>
                </div>
            </div>
        </nav>
    )
}