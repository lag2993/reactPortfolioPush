import React, { useState } from 'react';
import Project from './project';


function Showcase(){
     // Replace links with deployed projects and GitHub repos
  const [projects] = useState([
    {
      projName: "JoyRide",
      description: "Biker Route Application",
      deploylink: "https://smcgarr13.github.io/JoyRide/",
      repolink: "https://github.com/smcgarr13/JoyRide"
    },
    {
      projName: 'Randy Booth Database Extension',
      description: 'mySQL App to track production process',
      deploylink: "https://randys-booth-co.herokuapp.com/",
      repolink: "https://github.com/smcgarr13/Randys-Booth-Co"
    },
    {
      projName: 'Ticket-System',
      description: 'GraphQL MERN App for Questions Queries',
      deploylink: "https://ticket-system.herokuapp.com/",
      repolink: "https://github.com/smcgarr13/Ticket-System"
    },
  ]);
  return (
    <div>
      <div className="flex-row">
        {projects.map((project) => (
          <Project
            project={project}
            key={"project"}
          />
        ))}
      </div>
    </div>
  );
};

export default Showcase
