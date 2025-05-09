import React, { useState, useEffect } from "react";
import "../styles/Navbar.css";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Toggle mobile menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={`navbar ${scrolled ? "navbar-scrolled" : ""}`}>
      <div className="navbar-container">
        {/* Logo */}
        <div className="navbar-logo">
          <div className="logo-container">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" width="40" height="40"><rect width="256" height="256" fill="none"/><circle cx="176" cy="148" r="16"/><path d="M64.19,95.74A28,28,0,0,1,68,40L188,96a28,28,0,0,0,0-56" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><line x1="92" y1="133.33" x2="92" y2="215.46" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><polyline points="48.94 156.3 132 112 132 224" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><path d="M199.46,180A80,80,0,1,1,120.23,64.37" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/></svg>
          </div>
          <span className="logo-text">TVS Credit</span>
        </div>

        {/* Desktop Navigation */}
        <div className="navbar-links-container">
          <ul className="navbar-links">
            <li className="nav-item">
              <a href="#" className="nav-link active">Home</a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">Offers</a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">Products</a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">About</a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">Contact</a>
            </li>
          </ul>
        </div>

        {/* Mobile Menu Button */}
        <div className="navbar-mobile-menu-button" onClick={toggleMenu}>
          <div className={`hamburger ${isMenuOpen ? "active" : ""}`}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`navbar-mobile-menu ${isMenuOpen ? "active" : ""}`}>
          <ul className="mobile-links">
            <li className="mobile-item">
              <a href="#" className="mobile-link active">Home</a>
            </li>
            <li className="mobile-item">
              <a href="#" className="mobile-link">Offers</a>
            </li>
            <li className="mobile-item">
              <a href="#" className="mobile-link">Products</a>
            </li>
            <li className="mobile-item">
              <a href="#" className="mobile-link">About</a>
            </li>
            <li className="mobile-item">
              <a href="#" className="mobile-link">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;