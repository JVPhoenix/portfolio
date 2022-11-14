import React from "react"
import ProfileImg1 from "../img/profileimg_1.jpg"
import ProfileImg2 from "../img/profileimg_2.jpg"

export default function MainPage(props) {
    return (
        <main className={props.darkMode ? "dark" : ""}>
            <div 
                className="main--div"
                id={props.slider ? "slider" : ""}
            >
                <div className="main--firstColumn">
                    <h1 className="main--titles">About-me</h1>
                    <div className="main--profilepics">
                        <img 
                            className="main--first-img"
                            src={ProfileImg1}
                            alt="The page owner looking to the camera with laboratory coat"
                        />
                        <img 
                            className="main--first-img"
                            src={ProfileImg2}
                            alt="The page owner looking to the camera"
                        />
                    </div>

                    <div className="main--about-me">
                        <p> 
                            Hello! My name is João Vitor, or just JV. I'm from brazil, graduated in TI (2016-2017) and in Chemistry Degree
                            on IFPI (2018-2022) with some internships as a full professor and assistant.
                        </p>
                        <p>
                            Also, worked as a researcher in the laboratory of Biology of my campus, in some health areas, for example, 
                            water and soil analysis, and interactions and effects of pesticides in humans and other living beings.
                        </p>
                        <p>
                            Now, i want to get into the programming area, as a developer, aiming to work in other regions
                            of my country, via home-office or in person.
                        </p>
                    </div>
                    
                </div>

                <div className="main--secondColumn">
                    <h1 className="main--titles">Professional Experience</h1>
                    <ul className={props.darkMode ? "dark" : ""}>
                        <li>Graphic Designer in a local print shop for a year, making new ideas and concepts using
                            Adobe Photoshop.
                            <p className="space"/>
                            Also worked as a freelancer performing graphic arts using Photoshop
                            and editing videos in Vegas Pro.
                        </li>
                        <li>In my College Degree, i made 4 internships, as well as 3 PIBICs (Scientific Initiations),
                            where i worked with several areas within the laboratory.
                            <p className="space"/>
                            I also worked in a 6 months TI internship.
                        </li>
                        <li>Today, I work as an Administrative Auxiliar in a land sales company,
                            doing the legal documentation, management of social media and 
                            all the others office bureaucracy.
                        </li>
                        <li>
                            In the free time, i deepen my programming habilities, fucused on the FrontEnd area, learning
                            through courses.
                            <p className="space"/>
                            For practice, i made solo projects like this, made with my actual 
                            understanding of HTML5, CSS3, JavaScript and React.JS.
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
                            Knowledge in Graphic Design features, that helps in many areas.
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
            <div
                className={props.animation}
                id="contacts"
            >
                <h1 onClick={
                    () => {
                        navigator.clipboard.writeText("JVP#9352")
                    }} 
                    id="unlinked--contacts"
                >
                    Message-me on Discord: JVP#9352
                </h1>

                <h1 onClick={
                    () => {
                        navigator.clipboard.writeText("jvitorcocal@hotmail.com")
                    }} 
                    id="unlinked--contacts"
                >
                    Or just email-me in: jvitorcocal@hotmail.com
                </h1>
            </div>
        </main>
    )
}