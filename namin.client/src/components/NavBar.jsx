import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';
import logo from '../assets/logo.png';
import LanguageSwitcher from './LanguageSwitcher';
import { useLanguage } from '../contexts/LanguageContext';

const NavBar = () => {
    const { t } = useLanguage();

    return (
        <nav className="navbar">
            <ul className="navbar-list">
                <li className="navbar-item left">
                    <Link to="/namintax/">
                        <img
                            src={logo}
                            alt="Namin Tax Accounting Logo"
                            style={{ display: 'block', margin: '0 auto 0.8rem auto', maxWidth: 50, height: 'auto' }}
                        />NAMIN
                    </Link>
                </li>
                <div className="navbar-right">
                    <li className="navbar-item">
                        <Link to="/namintax/about">{t.navAbout}</Link>
                    </li>
                    <li className="navbar-item">
                        <Link to="/namintax/services">{t.navServices}</Link>
                    </li>
                    <li className="navbar-item">
                        <Link to="/namintax/contact">{t.navContact}</Link>
                    </li>
                    <li className="navbar-item">
                        <LanguageSwitcher />
                    </li>
                </div>
            </ul>
        </nav>
    );
};

export default NavBar;


//import React from 'react';
//import { Link } from 'react-router-dom';
//import './NavBar.css';
//import logo from '../assets/logo.png';
//import LanguageSwitcher from './LanguageSwitcher'; // Import the switcher

//const NavBar = () => (
//    <nav className="navbar">
//        <ul className="navbar-list">
//            <li className="navbar-item left">
//                <Link to="/"><img
//                    src={logo}
//                    alt="Namin Tax Accounting Logo"
//                    style={{ display: 'block', margin: '0 auto 1rem auto', maxWidth: 50, height: 'auto' }}
//                /></Link>
//            </li>
//            <div className="navbar-right">
//                <li className="navbar-item">
//                    <Link to="/about">About</Link>
//                </li>
//                <li className="navbar-item">
//                    <Link to="/services">Services</Link>
//                </li>
//                <li className="navbar-item">
//                    <Link to="/contact">Contact</Link>
//                </li>
//                <li className="navbar-item">
//                    <LanguageSwitcher />
//                </li>
//            </div>
//        </ul>
//    </nav>
//);

//export default NavBar;


//import React from 'react';
//import { Link } from 'react-router-dom';
//import './NavBar.css';
//import logo from '../assets/logo.png';

//const NavBar = () => (
//    <nav className="navbar">
//        <ul className="navbar-list">
//            <li className="navbar-item left">
//                <Link to="/"><img
//                    src={logo}
//                    alt="Namin Tax Accounting Logo"
//                    style={{ display: 'block', margin: '0 auto 1 rem auto', maxWidth: 50, height: 'auto' }}
//                /></Link>
//            </li>
//            <div className="navbar-right">
//                <li className="navbar-item">
//                    <Link to="/about">About</Link>
//                </li>
//                <li className="navbar-item">
//                    <Link to="/services">Services</Link>
//                </li>
//                <li className="navbar-item">
//                    <Link to="/contact">Contact</Link>
//                </li>
//            </div>
//        </ul>
//    </nav>
//);

//export default NavBar;

