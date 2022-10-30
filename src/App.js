import React, { useState } from "react";
import Navbar from "./components/navbar.js";
import MainPage from "./components/main.js";

export default function App() {
    // DARK MODE FUNCTION
    const [darkMode, setDarkMode] = useState(true)
    function toggleDM(){
        setDarkMode(prevMode => !prevMode)
    }

    // SLIDE EFFECT FUNCTION
    const [slider, setSlider] = useState(false)
    function toggleSlider(){
        setSlider(prevMode => !prevMode)
    }

    return (
        <div className="container">
            <Navbar
                toggleDarkMode = {toggleDM}
                darkMode = {darkMode}

                toggleSlider = {toggleSlider}
                slider = {slider}
            />

            <MainPage
                slider = {slider}
                darkMode = {darkMode}
            />
        </div>

    )
}