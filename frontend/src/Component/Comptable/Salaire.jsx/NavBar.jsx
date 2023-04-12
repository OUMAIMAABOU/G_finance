import React from "react";
import { Link } from "react-router-dom";

export default function NavBar() {
  function logOut() {
    localStorage.clear();
  }
  return (
    <div>
      <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between p-3 border-bottom navba">
        <div className="col-md-3 mb-2 mb-md-0">
          <a
            href="/"
            className="d-inline-flex link-body-emphasis text-decoration-none"
          >
            <svg
              className="bi"
              width="40"
              height="32"
              role="img"
              aria-label="Bootstrap"
            >
              <img src={require("../../../Edit.png")} />{" "}
            </svg>
          </a>
        </div>

        <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0 ">
          <li>
            <a href="#" className="nav-link px-2 text-light">
              Home
            </a>
          </li>
          <li>
            <Link to="/employer" className="nav-link px-2 text-light">
              Emplyer
            </Link>
            
          </li>
          <li>
            <a href="#" className="nav-link px-2 text-light">
              Pricing
            </a>
          </li>
          <li>
            <a href="#" className="nav-link px-2 text-light">
              FAQs
            </a>
          </li>
          <li>
            <a href="#" className="nav-link px-2 text-light">
              About
            </a>
          </li>
        </ul>

        <div className="col-md-3 text-end">
          <button type="text" className="btn bg-transparent  text-light ">
            OUMAIMA
          </button>
          <Link to="/" onClick={logOut}>
            <button
              type="button"
              className="btn  border border-light bg-transparent  text-light me-2"
            >
              Log out
            </button>
          </Link>
        </div>
      </header>
    </div>
  );
}
