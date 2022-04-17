import React from "react";

function NavTabs({ currentPage, handlePageChange }) {
  return (
    <header>
      <div className="navbar">
        <h2>
          <a data-testid="link" href="/">
            Miriams Portfolio
          </a>
        </h2>
        <nav>
          <ul className="flex-row">
            <li className="mx-2">
              <a
                href="#home"
                onClick={() => handlePageChange("Home")}
                className={
                  currentPage === "Home" ? "nav-link active" : "nav-link"
                }
              >
                Home
              </a>
            </li>
            <li className="mx-2">
              <a
                href="#about"
                onClick={() => handlePageChange("About")}
                className={
                  currentPage === "About" ? "nav-link active" : "nav-link"
                }
              >
                About me
              </a>
            </li>
            <li className="mx-2">
              <a
                href="#contact"
                onClick={() => handlePageChange("Contact")}
                className={
                  currentPage === "Contact" ? "nav-link active" : "nav-link"
                }
              >
                Contact
              </a>
            </li>
            <li className="mx-2">
              <a
                href="#project"
                onClick={() => handlePageChange("Project")}
                className={
                  currentPage === "Project" ? "nav-link active" : "nav-link"
                }
              >
                Project
              </a>
            </li>
            <li className="mx-2">
              <a
                href="#resume"
                onClick={() => handlePageChange("Resume")}
                className={
                  currentPage === " Resume" ? "nav-link active" : "nav-link"
                }
              >
                Resume
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
export default NavTabs;
