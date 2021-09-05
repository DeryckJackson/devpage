import { Fragment } from "react";

function Navbar() {
  return (
    <Fragment>
      <div className="navbar">
        <hr />
        <div className="links">
          <a href="#home">Home</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
      </div>
    </Fragment>
  )
}

export default Navbar
