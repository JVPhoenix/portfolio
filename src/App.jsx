import React, { useState } from "react";
import Navbar from "./components/navbar.jsx";
import MainPage from "./components/main.jsx";
import Contacts from "./components/contacts.jsx";
import Projects from "./components/projects.jsx";

export default function App() {
    // DARK MODE FUNCTION
    const [darkMode, setDarkMode] = useState(true)
    function toggleDM(){
        setDarkMode(prevMode => !prevMode)
    }

    // SLIDE EFFECTS
    const [slider, setSlider] = useState(false)
    const [MainDisplay, setMainDisplay] = useState(true)
    const invert = () => {
        setSlider(prevMode => !prevMode)
        if (!slider) {
            setTimeout(() => {
                setMainDisplay(prevMode => !prevMode)
            }, 1000);
        } else {
            setMainDisplay(prevMode => !prevMode)
        }
    }

    const [animationContacts, setAnimationContacts] = useState("display_none")
    const [animationProjects, setAnimationProjects] = useState("display_none")


    // OPEN CONTACTS PAGE
    function toggleContacts(){
        if (slider && animationProjects === "fadeInProjects") {
            setAnimationProjects("fadeOutProjects")
            setTimeout(() => {
                setAnimationProjects("display_none")
            }, 1000);

            setAnimationContacts("fadeInContacts")
        }

        else if(!slider){
            invert()
            setAnimationContacts("fadeInContacts")
        }

        else{
            invert()
            setAnimationContacts("fadeOutContacts")
            setTimeout(() => {
                setAnimationContacts("display_none")        
            }, 1000);
        }
    }

    // OPEN PROJECTS PAGE
    function toggleProjects(){
        if (slider && animationContacts === "fadeInContacts") {
            setAnimationContacts("fadeOutContacts")
            setTimeout(() => {
                setAnimationContacts("display_none")        
            }, 1000);

            setAnimationProjects("fadeInProjects")
        }

        else if (!slider){
            invert()
            setAnimationProjects("fadeInProjects")
        }

        else {
            invert()
            setAnimationProjects("fadeOutProjects")
            setTimeout(() => {
                setAnimationProjects("display_none")
            }, 1000);
        }
    }

    return (
        <div className="container">
            <Navbar
                toggleDarkMode = {toggleDM}
                darkMode = {darkMode}

                toggleContacts = {toggleContacts}
                animationContacts = {animationContacts}

                toggleProjects = {toggleProjects}
                animationProjects = {animationProjects}

                slider = {slider}
            />

            <MainPage
                slider = {slider}
                darkMode = {darkMode}
                MainDisplay = {MainDisplay}
                animationContacts = {animationContacts}
            />
            <Contacts
                animationContacts = {animationContacts}
                darkMode = {darkMode}
            />
            <Projects
                animationProjects = {animationProjects}
                darkMode = {darkMode}
            />
        </div>

    )
}