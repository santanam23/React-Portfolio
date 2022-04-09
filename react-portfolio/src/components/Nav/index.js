import React from 'react';

function Nav() {

  return (
    <header>
    <h2>
      <a  data-test-id="link" href="/">
        <span role="img" aria-label="camera"></span> Miriams Portfolio
      </a>
    </h2>
    <nav>
      <ul className="flex-row">
        <li className="mx-2">
          <a data-testid="about" href="#about">
            About me
          </a>
        </li>
        <li>
          <a data-testid="contact" href="#contact" >
            Contact
          </a>
        </li>
        <li>
          <a data-testid="project" href="#project">
            Project
          </a>
        </li>
        <li>
          <a data-testid="resume" href="#resume">
            Resume
            </a>
        </li>
      </ul>
    </nav>
    </header>
  );
}
export default Nav;