import React from "react"
import ProfileImg1 from "../img/profileimg_1.jpg"
import ProfileImg2 from "../img/profileimg_2.jpg"

export default function MainPage(props) {
    return (
        <main className={props.darkMode ? "dark" : ""}>
            <div
                style={{display: props.MainDisplay ? "" : "none"}}
                className="main--div"
                id={props.slider ? "slider" : ""}
            >
                <div className="main--firstColumn">
                    <h1 className="main--titles">About-me</h1>
                    <div className="profilepics">
                        <img 
                            src={ProfileImg1}
                            alt="The page owner looking to the camera with a laboratory coat"
                        />
                        <img
                            src={ProfileImg2}
                            alt="The page owner looking to the camera"
                        />
                    </div>

                    <div className="main--about-me">
                        <p> 
                            Hello! My name is João Vitor and i'm a lover of technologies, 
                            innovations and now, programming. I started in the technological area with the assembly 
                            and maintenance of computers and later graphic development, always focusing on punctuality, 
                            communication, and customer experience and satisfaction.
                        </p>
                        <p>
                            Currently I have studied and practiced in the area of Web Design, where I created my own portfolio (this), 
                            focusing mainly on Front-End in line with my graphic design knowledge, and with that, 
                            i was able to learn HTML5, CSS3, JavaScript, React.JS, and a bit of TypeScript.
                        </p>
                        <p>
                            I'am graduated in T.I. (2016-2017) and in Chemistry Degree (2018-2022), 
                            and now i want to get into the programming area, as a developer.
                        </p>
                    </div>
                    
                </div>

                <div className="main--secondColumn">
                    <h1 className="main--titles">Professional Experience</h1>
                    <ul className={props.darkMode ? "dark" : ""}>
                        <li>Started as a Graphic Designer in a local print shop for a year, making new ideas and concepts using
                            Adobe Photoshop.
                            <p className="space"/>
                            Later, worked as a freelancer doing the assembly and maintence of PCs, performing graphic arts 
                            using Photoshop and editing videos in Vegas Pro, always focusing on the customer satisfaction.
                        </li>
                        <li>In my College Degree, i made 4 internships and worked as a researcher in the laboratory of Biology 
                            of my campus, in some health areas, for example, water and soil analysis, and 
                            interactions and effects of pesticides in humans and other living beings.
                            <p className="space"/>
                            I also worked in a 6 months T.I. internship.
                        </li>
                        <li>Today, I work as an Administrative Auxiliar in a land sales company,
                            doing the legal documentation, management of social media and 
                            all the others office bureaucracy.
                        </li>
                        <li>
                            Also made solo programming projects, using the following technologies:
                            <ul>
                                <li> HTML5 and CSS3 / SASS </li>
                                <li> JavaScript, ReactJS and TypeScript </li>
                            </ul>
                        </li>
                    </ul>
                </div>

                <div className="main--thirdColumn">
                    <h1 className="main--titles">Abilities and Differentials</h1>
                    <ul className={props.darkMode ? "dark" : ""}>
                        <li>
                            Easy Adaptation and Self Autonomy.
                        </li>
                        <li>
                            Proactive and Comunicative.
                        </li>
                        <li>
                            Graphic Design Experience - Knowledge in features like Photoshop and Vegas Pro.
                            <p className="space"/>
                            Experience with Figma - Most of the courses that i made used Figma as base
                            graphic editor, providing the projects models.
                        </li>
                        <li>
                            Fluent Portuguese - Native Language.
                            <p className="space"/>
                            Advanced English - Good understanding and reading, Speaks and Write Reasonably.
                        </li>
                        <li>
                            A/B Driver's license
                        </li>
                    </ul>
                </div>
            </div>
        </main>
    )
}