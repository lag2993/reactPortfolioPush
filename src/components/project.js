import React from "react";

function Project({ project }) {
    const { projName, description, deploylink, repolink } = project;
    return (
        <div className="project" key={projName}>
            <div className="project-text">
                <h3>
                    <a href={deploylink}>
                        {projName}
                    </a>
                </h3>
                <h2>
                <a href={repolink}>Repo</a>
                </h2>
                
                <p>{description}</p>

            </div>

        </div>
    )
}

export default Project