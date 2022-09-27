import React from "react";
import "./prince.css";
export default function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            Text Analyzer
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="./Developer.html">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link develpoer" href="https://www.linkedin.com/in/princeraj2001/" target=" ">
                  Develope By
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link dev" href="https://www.linkedin.com/in/princeraj2001/" target=" ">
                  Contact Us
                </a>
              </li>
              <form class="d-flex" role="search">
                <input
                  class="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                ></input>
                <button class="btn btn-success" type="submit">
                  Search
                </button>
              </form>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
