import React from "react";
import { NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaPhone, FaPaperPlane, FaFacebookF, FaTwitter, FaInstagram, FaDribbble } from "react-icons/fa";

export default function Navbar() {
  const linkClass = ({ isActive }) =>
    isActive ? "nav-link active text-success" : "nav-link";

  return (
    <>
      {/* Top contact bar */}
      <div className="bg-success text-white py-1">
        <div className="container d-flex justify-content-between align-items-center">
          <div>
            <FaPhone className="me-2" /> +00 1234 567
            <FaPaperPlane className="ms-3 me-2" /> youremail@email.com
          </div>
          <div>
            <FaFacebookF className="me-3" />
            <FaTwitter className="me-3" />
            <FaInstagram className="me-3" />
            <FaDribbble />
          </div>
        </div>
      </div>

      {/* Main navbar */}
      <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm">
        <div className="container">
          <NavLink to="/" className="navbar-brand fw-bold">Counselor</NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <NavLink to="/" className={linkClass} end>Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/about" className={linkClass}>About</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/counselor" className={linkClass}>Counselor</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/services" className={linkClass}>Services</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/pricing" className={linkClass}>Pricing</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/blogs" className={linkClass}>Blog</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/contact" className={linkClass}>Contact</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
