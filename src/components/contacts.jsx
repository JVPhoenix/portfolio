import React from "react";

export default function Contacts(props){
    return(
        <div id="contacts" className={props.animationContacts}>
            <h1 onClick={
                () => {
                    navigator.clipboard.writeText("JVP#9352")
                }} 
                className={props.darkMode ? "" : "black"}
            >
                Message-me on Discord: JVP#9352
            </h1>

            <h1 onClick={
                () => {
                    navigator.clipboard.writeText("jvitorcocal@hotmail.com")
                }} 
                className={props.darkMode ? "" : "black"}
            >
                Or just email-me in: jvitorcocal@hotmail.com
            </h1>
        </div>
    )
}