import React from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import GithubIcon from "@mui/icons-material/GitHub";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home">
      <div className="about">
        <h2> Hi, I am Akhand</h2>
        <div className="prompt">
          <p>A frontend developer with a passion for learning, creating and problem-solving.</p>
          <a href="https://www.linkedin.com/in/akhand-pr-singh/" target="_blank"><LinkedInIcon /></a>
          <a href="https://www.linkedin.com/in/akhand-pr-singh/" target="_blank"><EmailIcon /></a>
          <a href="https://github.com/akhand-pr-singh" target="_blank"><GithubIcon /></a>
        </div>
      </div>
      <div className="skills">
        <h1> Skills</h1>
        <ol className="list">
          <li className="item">
            <h2> Front-End</h2>
            <span>
              ReactJS, Redux, @reduxtoolkit, HTML5, CSS, SASS, LESS, NPM, BootStrap, StyledComponents
            </span>
          </li>
          <li className="item">
            <h2>Back-End</h2>
            <span>
              NodeJS, ExpressJS, MySQL, MongoDB
            </span>
          </li>
          <li className="item">
            <h2>Languages</h2>
            <span>JavaScript, Java, TypeScript</span>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Home;