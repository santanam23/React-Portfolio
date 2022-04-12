import React from "react";

function Nav() {
  return (
    <header>
      <div className="navbar">
        <h2>
          <a data-testid="link" href="/">
            {/* <span role="img" aria-label="camera"></span>  */}
            Miriams Portfolio
          </a>
        </h2>
        <nav>
          <ul className="flex-row">
            <li className="mx-2">
              <a data-testid="home" href="#home">
                Home
              </a>
            </li>
            <li className="mx-2">
              <a data-testid="about" href="#about">
                About me
              </a>
            </li>
            <li className="mx-2">
              <a data-testid="contact" href="#contact">
                Contact
              </a>
            </li>
            <li className="mx-2">
              <a data-testid="project" href="#project">
                Project
              </a>
            </li>
            <li className="mx-2">
              <a data-testid="resume" href="#resume">
                Resume
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
export default Nav;
