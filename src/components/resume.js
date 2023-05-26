import React from "react";

function Resume() {
  const resumeUrl = "https://docs.google.com/document/d/1X1yJxqNMPmS_zQejO7BmKeyCFB6sCtFEMHGqsHJNvyI/edit?usp=sharing";

  return (
    <div className="resume">
      <h1>Luis Guillen</h1>
      <h2>Rising Developer</h2>

      <section>
        <h3>Education</h3>
        <ul>
          <li>University of Minnesota Coding Bootcamp - Dec 2022 - May 2023</li>
          <li>University of Hartford - Aug 2014 - Dec 2015</li>
          <li>Rochester Institute of Technology - Aug 2010 - 2014</li>
        </ul>
      </section>

      <section>
        <h3>Experience</h3>
        <ul>
          <li>Freelance Web Developer</li>
          <li>Freelance Video Editor</li>
          <li>Small format team trainer</li>
        </ul>
      </section>

      <section>
        <h3>Skills</h3>
        <ul>
          <li>Web Development Technologies: Javascript | SQL | NPM | React | MongoDB | CSS | Git | CSS | RESTful APIs(server side  and third party) | Node, JSX  | Express.js | jQuery</li>
          <li>Video Editing: , Adobe Creative Suite tools | DaVinci Color Correction | Pro Tools | Avid</li>
          <li>Languages: Fluent in Spanish, and English | Intermediate in French</li>
        </ul>
      </section>

      <section>
        <h3>Resume</h3>
        <p>
          View my resume:{" "}
          <a href={resumeUrl} target="_blank" rel="noopener noreferrer">
            Click Here
          </a>
        </p>
      </section>
    </div>
  );
}

export default Resume;
