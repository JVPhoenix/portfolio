import React from "react";

export default function Projects(props){
    return(
        <div
        id="projects"
        className={props.animationProjects}
        >
            <h1> Projecs that i developed </h1>
            <div>
                <div
                    className="first-project"
                    onClick={() => window.open(
                        'https://loteamentormartins.netlify.app/',
                                    '_blank',
                                    'noopener, noreferrer'
                                    )
                    }
                    alt="First Project gif"
                />

                <div
                    className="second-project"
                    onClick={() => window.open(
                                    'https://loteamentormartins.netlify.app/',
                                    '_blank',
                                    'noopener, noreferrer'
                                    )
                    }
                    alt="Second Project gif"
                />
                {/* <div
                    className="third-project"
                    onClick={() => window.open(
                                    'https://loteamentormartins.netlify.app/',
                                    '_blank',
                                    'noopener, noreferrer'
                                    )
                    }
                    alt="third Project gif"
                /> */}
            </div>
            <p> All the projects source-codes are available on my GitHub.</p>
        </div>
    )
}