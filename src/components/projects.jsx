import React from "react";

export default function Projects(props){
    return(
        <div
        id="projects"
        className={props.animationProjects}
        >
            <h1 className={props.darkMode ? "" : "black"}> 
                Projecs that i developed 
            </h1>
            <div>
                <div
                    className="first-project"
                    onClick={() => 
                        window.open(
                            'https://jvphoenixportfolio.netlify.app/',
                            '_blank',
                            'noopener, noreferrer'
                        )
                    }
                    alt="First Project"
                />

                <div
                    className="second-project"
                    onClick={() => 
                        window.open(
                            'https://loteamentormartins.netlify.app/',
                            '_blank',
                            'noopener, noreferrer'
                        )
                    }
                    alt="Second Project"
                />
                {/* <div
                    className="third-project"
                    onClick={() => 
                        window.open(
                            'https://loteamentormartins.netlify.app/',
                            '_blank',
                            'noopener, noreferrer'
                            )
                    }
                    alt="Third Project"
                /> */}
            </div>
            <p className={props.darkMode ? "" : "black"}> 
                All the projects source-codes are available on my GitHub.
            </p>
        </div>
    )
}