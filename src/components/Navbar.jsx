import { Fragment } from "react";

function Navbar() {
  return (
    <Fragment>
      <div className="navbar">
        <hr />
        <a href="#home">Home</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </div>
    </Fragment>
  )
}

export default Navbar
