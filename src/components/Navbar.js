import React from 'react';
import '../styles/Navbar.css';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-success">
      <a className="navbar-brand text-white" href="/">GreenGuardian</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <a className="nav-link text-white" href="#upload">Report Garbage</a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-white" href="#office-finder">Find Office</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
