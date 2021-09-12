import { Fragment } from "react";
import githubPNG from "../assets/GitHub-Mark-Light-32px.png"
import linkedinPNG from "../assets/linkedin-icon.png"

function Navbar() {
  return (
    <Fragment>
      <div className="navbar">
        <a href="https://github.com/DeryckJackson">
          <img src={githubPNG} alt="github icon" rel="noopener noreferrer" />
        </a>
        <a href="https://www.linkedin.com/in/deryckjackson/">
          <img src={linkedinPNG} alt="linkedin icon" rel="noopener noreferrer" />
        </a>
        <div className="links">
          <a href="mailto:dgjackson01@gmail.com">Contact</a>
        </div>
      </div>
    </Fragment>
  )
}

export default Navbar
