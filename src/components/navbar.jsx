import React, { useState } from "react";
import {Link} from 'react-router-dom'
import "./navbar.css";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-brand">My Notes</div>

        <div className={`navbar-links ${isOpen ? "active" : ""}`}>
          <Link className="btn" to='/login'>Login     </Link>
          <Link className="btn" to='/register'> Signup</Link>
        </div>

        <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </div>
    </nav>
  );
}
