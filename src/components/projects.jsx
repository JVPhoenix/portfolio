import React from "react";

export default function Projects(props){
    return(
        <div id="projects" className={props.animationProjects}>
            <h1 
                onClick={() => window.open(
                                'https://loteamentormartins.netlify.app/',
                                '_blank',
                                'noopener, noreferrer'
                                )
                }> website of my actual job
            </h1> 
        </div>
    )
}