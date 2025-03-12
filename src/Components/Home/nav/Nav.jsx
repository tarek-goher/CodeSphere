import  { useState } from 'react';
import './nav.css';

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className='Nav-Cont'>
    <nav className="navbar">
      <div className="navbar-container">
        <div className="logo">
          <a href="/" className="logo-link">
            <span className="logo-text">Codewave</span>
          </a>
        </div>
        
        <div className={`menu-icon ${menuOpen ? 'active' : ''}`} onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>

        <div className={`nav-content ${menuOpen ? 'active' : ''}`}>
          <ul className={`nav-menu ${menuOpen ? 'active' : ''}`}>
            <li className="nav-item dropdown">
              <a href="#platform" className="nav-link">
                Platform
                <svg className="dropdown-arrow" width="12" height="12" viewBox="0 0 24 24">
                  <path d="M7 10l5 5 5-5H7z"/>
                </svg>
              </a>
            </li>
            <li className="nav-item dropdown">
              <a href="#solutions" className="nav-link">
                Solutions
                <svg className="dropdown-arrow" width="12" height="12" viewBox="0 0 24 24">
                  <path d="M7 10l5 5 5-5H7z"/>
                </svg>
              </a>
            </li>
            <li className="nav-item">
              <a href="#integrations" className="nav-link">Integrations</a>
            </li>
            <li className="nav-item dropdown">
              <a href="#start-building" className="nav-link">
                Start Building
                <svg className="dropdown-arrow" width="12" height="12" viewBox="0 0 24 24">
                  <path d="M7 10l5 5 5-5H7z"/>
                </svg>
              </a>
            </li>
            <li className="nav-item">
              <a href="#docs" className="nav-link">Docs</a>
            </li>
            <li className="nav-item">
              <a href="#pricing" className="nav-link">Pricing</a>
            </li>
          </ul>
          
          <div className="nav-right">
            <div className="search-icon">
              <svg width="20" height="20" viewBox="0 0 24 24">
                <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
              </svg>
            </div>
            <a href="#contact" className="nav-link">Contact</a>
            <a href="#login" className="nav-link">Log in</a>
            <a href="#signup" className="signup-btn">Sign up</a>
          </div>
        </div>
      </div>
    </nav>
    </div>
  );
}