import React from "react";

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto m-auto">
          <li className="nav-item active">
            <p className="nav-link">Characters</p>
          </li>
          <li className="nav-item">
            {" "}
            <p className="nav-link">Episodes</p>
          </li>
          <li className="nav-item">
            {" "}
            <p className="nav-link">Locations</p>
          </li>
        </ul>
      </div>
    </nav>
  );
};
export default Header;
