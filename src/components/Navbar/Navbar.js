import React from "react";

function Navbar({ currentPage, handlePageChange }) {
  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto justify-content-center">
          <li className="nav-item">
            <a
              href="#home"
              onClick={() => handlePageChange('Home')}
              // This is a conditional (ternary) operator that checks to see if the current page is "Home"
              // If it is, we set the current page to 'nav-link-active', otherwise we set it to 'nav-link'
              className={currentPage === 'Home' ? 'nav-link active' : 'nav-link'}
            >
              Home
            </a>
          </li>
          <li className="nav-item">
            <a
              href="#aboutus"
              onClick={() => handlePageChange('AboutUs')}
              className={currentPage === 'AboutUs' ? 'nav-link active' : 'nav-link'}
            >
              About Us
            </a>
          </li>
          <li className="nav-item">
            <a
              href="#contactus"
              onClick={() => handlePageChange('ContactUs')}
              // Check to see if the currentPage is `Blog`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
              className={currentPage === 'ContactUs' ? 'nav-link active' : 'nav-link'}
            >
              Contact Us
            </a>
          </li>
          <li className="nav-item">
            <a
              href="#services"
              onClick={() => handlePageChange('Services')}
              // Check to see if the currentPage is `Contact`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
              className={currentPage === 'Services' ? 'nav-link active' : 'nav-link'}
            >
              Services
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
