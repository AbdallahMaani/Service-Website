import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  FaBars, FaTimes, FaTools, FaCogs, FaWrench, FaBolt, FaClipboardList,
  FaLightbulb, FaPuzzlePiece, FaChartLine, FaShieldAlt, FaUsers
} from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './Header.css';

const Header = ({ isMenuOpen, toggleMenu, onContactClick }) => {
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Dropdown items for Services and Solutions with icons, names, and descriptions
  const servicesDropdown = [
    {
      name: 'Consultation',
      icon: <FaLightbulb />,
      description: 'Expert advice for your needs',
      path: '/services/consultation'
    },
    {
      name: 'Repair',
      icon: <FaTools />,
      description: 'Fixing and restoring equipment',
      path: '/services/repair'
    },
    {
      name: 'Installation',
      icon: <FaWrench />,
      description: 'Professional setup and install',
      path: '/services/installation'
    },
    {
      name: 'Maintenance',
      icon: <FaCogs />,
      description: 'Regular checkups and servicing',
      path: '/services/maintenance'
    },
    {
      name: 'Custom Request',
      icon: <FaClipboardList />,
      description: 'Tailored solutions for you',
      path: '/services/custom'
    },
  ];
  const solutionsDropdown = [
    {
      name: 'Integration',
      icon: <FaPuzzlePiece />,
      description: 'Seamless system integration',
      path: '/solutions/integration'
    },
    {
      name: 'Automation',
      icon: <FaBolt />,
      description: 'Automate your workflows',
      path: '/solutions/automation'
    },
    {
      name: 'Analytics',
      icon: <FaChartLine />,
      description: 'Data-driven insights',
      path: '/solutions/analytics'
    },
    {
      name: 'Security',
      icon: <FaShieldAlt />,
      description: 'Protect your assets',
      path: '/solutions/security'
    },
    {
      name: 'Team Training',
      icon: <FaUsers />,
      description: 'Upskill your workforce',
      path: '/solutions/training'
    },
  ];

  const navItems = [
    { name: 'Services', path: '/services', dropdown: servicesDropdown },
    { name: 'Solutions', path: '/solutions', dropdown: solutionsDropdown },
    { name: 'Clients', path: '/clients' },
    { name: 'About', path: '/about' },
  ];

  const handleHomeClick = (e) => {
    e.preventDefault();
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => window.scrollTo({ top: 0, behavior: 'smooth' }), 100);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    if (isMenuOpen) toggleMenu();
  };

  const handleNavClick = () => {
    setActiveDropdown(null);
    if (isMenuOpen) toggleMenu();
  };

  const handleDropdownHover = (itemName) => {
    setActiveDropdown(itemName);
  };

  const handleDropdownLeave = () => {
    setActiveDropdown(null);
  };

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="header-content">
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="logo-motion"
          >
            <Link to="/" className="logo" onClick={handleHomeClick}>
              <span>Maani</span> Services
            </Link>
          </motion.div>

          <motion.nav
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className={`nav ${isMenuOpen ? 'open' : ''}`}
          >
            <ul>
              {navItems.map((item, index) => (
                <li
                  key={index}
                  className={item.dropdown ? 'has-dropdown' : ''}
                  onMouseEnter={() => item.dropdown && handleDropdownHover(item.name)}
                  onMouseLeave={handleDropdownLeave}
                >
                  <Link
                    to={item.path}
                    onClick={handleNavClick}
                    className={activeDropdown === item.name ? 'active-nav-item' : ''}
                  >
                    {item.name}
                    {item.dropdown && (
                      <span className="dropdown-arrow">▾</span>
                    )}
                  </Link>
                  {item.dropdown && activeDropdown === item.name && (
                    <motion.ul 
                      className="dropdown-menu"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      {item.dropdown.map((drop, i) => (
                        <motion.li 
                          key={i}
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <Link to={drop.path} onClick={handleNavClick} className="dropdown-link">
                            <span className="dropdown-icon">{drop.icon}</span>
                            <span className="dropdown-texts">
                              <span className="dropdown-title">{drop.name}</span>
                              <span className="dropdown-desc">{drop.description}</span>
                            </span>
                          </Link>
                        </motion.li>
                      ))}
                    </motion.ul>
                  )}
                </li>
              ))}
            </ul>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn contact-btn"
              onClick={onContactClick}
              style={{ fontWeight: '850' }}
            >
              Contact Us
            </motion.button>
          </motion.nav>

          <button className="menu-toggle" onClick={toggleMenu}>
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;