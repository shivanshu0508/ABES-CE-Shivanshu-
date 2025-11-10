import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";

function Nav({ cartCount }) {
  return (
    <nav className="navbar">
      <div className="nav-logo">📚 BookApp</div>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/signup">Signup</Link></li>
        <li>
          <Link to="/">🛒 Cart ({cartCount})</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
