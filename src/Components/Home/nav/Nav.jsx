import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './nav.css';

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const location = useLocation();
  
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // دالة للتحقق من الصفحة النشطة
  const isActive = (path) => {
    console.log('Current Path:', location.pathname, '| Checking:', path, '| Match:', location.pathname === path);
    return location.pathname === path;
  };

  useEffect(() => {
    const isColorDark = (color) => {
      let r, g, b;
      
      if (color.startsWith('rgb')) {
        const rgbValues = color.match(/\d+/g);
        if (rgbValues && rgbValues.length >= 3) {
          r = parseInt(rgbValues[0]);
          g = parseInt(rgbValues[1]);
          b = parseInt(rgbValues[2]);
        }
      } else {
        r = 128;
        g = 128;
        b = 128;
      }

      const brightness = (r * 0.299 + g * 0.587 + b * 0.114);

      return brightness < 128;
    };

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsHidden(true);
      } else {
        setIsHidden(false);
      }
      setLastScrollY(currentScrollY);
      updateNavbarColor(currentScrollY);
    };
    
    const updateNavbarColor = (scrollTop) => {
      const sections = document.querySelectorAll('section');
      const navbarHeight = document.querySelector('.Nav-Cont')?.offsetHeight || 0;
      const navContainer = document.querySelector('.Nav-Cont');
      
      for (let i = 0; i < sections.length; i++) {
        const section = sections[i];
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        
        if (scrollTop >= sectionTop - navbarHeight && scrollTop < sectionTop + sectionHeight) {
          const sectionBgColor = window.getComputedStyle(section).backgroundColor;
          
          document.documentElement.style.setProperty('--nav-bg', sectionBgColor);
          
          const isDarkBackground = isColorDark(sectionBgColor);
          
          if (isDarkBackground) {
            navContainer.classList.add('dark-background');
          } else {
            navContainer.classList.remove('dark-background');
          }
          
          break; 
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    const initializeNavbarColor = () => {
      const sections = document.querySelectorAll('section');
      const navContainer = document.querySelector('.Nav-Cont');
      if (sections.length > 0) {
        const firstSectionColor = window.getComputedStyle(sections[0]).backgroundColor;
        document.documentElement.style.setProperty('--nav-bg', firstSectionColor);
        const isDarkBackground = isColorDark(firstSectionColor);
        if (isDarkBackground) {
          navContainer?.classList.add('dark-background');
        } else {
          navContainer?.classList.remove('dark-background');
        }
      }
    };

    window.addEventListener('load', initializeNavbarColor);
    
    initializeNavbarColor();
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('load', initializeNavbarColor);
    };
  }, [lastScrollY]); 
      
  return (
    <div className={`Nav-Cont ${isHidden ? 'hidden' : ''}`}>
      <nav className="navbar">
        <div className="navbar-container">
          <div className="logo">
            <Link to="/" className="logo-link">
              <span className="logo-text">CodeSphere</span>
            </Link>
          </div>
          
          <div className={`menu-icon ${menuOpen ? 'active' : ''}`} onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
          </div>
  
          <div className={`nav-content ${menuOpen ? 'active' : ''}`}>
            <ul className={`nav-menu ${menuOpen ? 'active' : ''}`}>
              <li className="nav-item dropdown">
                <Link to="/" className={`nav-link ${isActive('/') ? 'active' : ''}`}>
                  Home
                  <svg className="dropdown-arrow" width="12" height="12" viewBox="0 0 24 24">
                    <path d="M7 10l5 5 5-5H7z"/>
                  </svg>
                </Link>
              </li>
              <li className="nav-item dropdown">
                <Link to="/Service" className={`nav-link ${isActive('/Service') ? 'active' : ''}`}>
                  Services
                  <svg className="dropdown-arrow" width="12" height="12" viewBox="0 0 24 24">
                    <path d="M7 10l5 5 5-5H7z"/>
                  </svg>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/Template" className={`nav-link ${isActive('/Template') ? 'active' : ''}`}>Templates</Link>
              </li>
              <li className="nav-item dropdown">
                <Link to="/AboutUs" className={`nav-link ${isActive('/AboutUs') ? 'active' : ''}`}>
                  About Us
                  <svg className="dropdown-arrow" width="12" height="12" viewBox="0 0 24 24">
                    <path d="M7 10l5 5 5-5H7z"/>
                  </svg>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/FAQ" className={`nav-link ${isActive('/FAQ') ? 'active' : ''}`}>FAQ</Link>
              </li>
              <li className="nav-item">
                <Link to="/Contact" className={`nav-link ${isActive('/Contact') ? 'active' : ''}`}>Contact Us</Link>
              </li>
              {/* <Link to="/signup" className="signup-btn">Sign up</Link> */}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}