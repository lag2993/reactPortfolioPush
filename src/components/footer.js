import React from "react";

function Footer() {
    const links = [
        {   
            name: "Lag2993 Github",
            link:"https://github.com/lag2993" 
        },
        {
            name:"Luis Guillen Linked In",
            link:"https://www.linkedin.com/in/luis-guillen-981625112/" 
        },


    ]

    return (
        <footer className="flex-row px-1">
          {links.map(link => (
            <a href={link.link} key={link.name} target="_blank" rel="noopener noreferrer">
              {link.name}
            </a>
          ))}
        </footer>
      );
    }
    export default Footer
