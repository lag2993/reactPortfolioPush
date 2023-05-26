import React from "react";

function Project({ project }) {
    const { projName, description, deploylink, repolink } = project;
    return (
        <div className="project" key={projName}>
            <div className="project-text">
                <h3>
                    <a href={deploylink}>
                        {projName}
                        <a href={repolink}></a>
                    </a>
                </h3>
                <p>{description}</p>

            </div>

        </div>
    )
}

export default Project