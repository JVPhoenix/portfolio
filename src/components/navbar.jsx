import React, { useEffect, useState } from "react"
import reactLogo from "../img/react-icon-small.png"
import linkedInIcon from "../img/linkedin_icon.png"
import gitHubIcon from "../img/github_icon.png"
import contactIcon from "../img/contact_icon.png"
import homepageIcon from "../img/homepage_icon.png"
import projectsIcon from "../img/projects_icon.png"
import menuBtn from "../img/menu-btn.png"

export default function Navbar(props) {
    const [styles, setStyles] = useState()
    useEffect(() => {
        function handleReSize(){
            if(window.innerWidth <= 1280 && props.darkMode){
                setStyles({
                    backgroundColor: "#474747",
                    border: "2px solid #61DAFB",
                    borderRadius: "10px"
                })
            }else if(window.innerWidth <= 1280 && !props.darkMode){
                setStyles({
                    backgroundColor: "#D5D4D8",
                    border: "2px solid #0f48dc",
                    borderRadius: "10px"
                })
            }else{
                setStyles({
                    backgroundColor: " ",
                    border: " ",
                    borderRadius: " "
                })
            }
        }
        window.addEventListener("resize", handleReSize)
        handleReSize()
        return () => window.removeEventListener("resize", handleReSize)
    }, [props.darkMode])

    return (
        <nav className={props.darkMode ? "dark": ""}>
            <div className="nav--containner">
                <div className="react_logo">
                    <img 
                        className={props.darkMode ? "dark" : ""}
                        src={reactLogo}
                        alt="Blue_React_Logo"
                    />
                    <h3>React Portfolio</h3>
                </div>
                
                <div className="nav--dropdown">
                    <img 
                    className={props.darkMode ? "darkbtn" : "lightbtn"}
                    id="nav--menuBtn"
                    src={menuBtn} 
                    alt="menu-btn"
                    />
                    
                    <div 
                        className="nav--infos" 
                        id="nav--infos"
                        style={styles}
                    >
                        <div
                            className={props.darkMode ? "dark" : "light"}
                            onClick={() => window.open('https://www.linkedin.com/in/jvbo/', '_blank', 'noopener, noreferrer')}
                        >
                            <img 
                            className={props.darkMode ? "dark" : "light"}
                            src={linkedInIcon}
                            alt="LinkedIn_Logo"
                            />
                            <h3>Linked-In</h3>
                        </div>

                        <div 
                            className={props.darkMode ? "dark" : "light"}
                            onClick={() => window.open('https://github.com/JVPhoenix', '_blank', 'noopener, noreferrer')}
                            >
                            <img
                            className={props.darkMode ? "dark" : "light"}
                            src={gitHubIcon}
                            alt="GitHub_Logo"
                            />
                            <h3>GitHub</h3>
                        </div>

                        <div
                            className={props.darkMode ? "dark" : "light"}
                            onClick={props.toggleProjects}
                        >
                            <img
                            className={props.darkMode ? "dark" : "light"}
                            src={props.animationProjects === "fadeInProjects" ? homepageIcon : projectsIcon}
                            alt="ProjectsCog_Logo"
                            />
                            <h3> {props.animationProjects === "fadeInProjects" ? "Back to Home Page" : "Projects"} </h3>
                        </div>

                        <div 
                            className={props.darkMode ? "dark" : "light"}
                            onClick={props.toggleContacts}
                        >
                            <img
                            className={props.darkMode ? "dark" : "light"}
                            src={props.animationContacts === "fadeInContacts" ? homepageIcon : contactIcon}
                            alt="email_Logo"
                            />
                            <h3>{props.animationContacts === "fadeInContacts" ? "Back to Home Page" : "Contact-me"}</h3>
                        </div>

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