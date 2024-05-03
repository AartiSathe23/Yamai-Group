import React, { useState } from 'react';
import './Navbar.css';
import logo from '../Assets/Yamai.png';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
   const [menu, setMenu] = useState("home");
   const [contactMenuOpen, setContactMenuOpen] = useState(false);
   const [quoteButtonActive, setQuoteButtonActive] = useState(false);

   const toggleContactMenu = () => {
      setContactMenuOpen(!contactMenuOpen);
   };

   const handleContactItemClick = (menuItem) => {
      setMenu(menuItem);
      setContactMenuOpen(false); // Close the dropdown menu after clicking an item
   };

   const handleQuoteButtonClick = () => {
      setQuoteButtonActive(true); // Set the quote button as active when clicked
   };

   return (
    <div className='navbar' style={{ position: 'sticky', top: '0', zIndex: '1000' }}>
        <div className='nav-logo'>
            <img src={logo} alt="Logo" />
        </div>
        <ul className='nav-menu'>
            <li className={menu === "home" ? "active" : ""} onClick={()=> setMenu("home")}><a href="/#home">Home</a> </li>
            <li className={menu === "about" ? "active" : ""} onClick={()=> setMenu("about")}><a href="/#about">About Us</a> </li>
            <li className={menu === "service" ? "active" : ""} onClick={()=> setMenu("service")}><a href="/#services">Services</a> </li>
            <li className="dropdown" onClick={toggleContactMenu}>
                <div className='contact'>Contact Us <FontAwesomeIcon icon={faAngleDown} /></div>
                {contactMenuOpen && (
                  <>
                  <ul className="dropdown-menu">
                    <li onClick={() => handleContactItemClick("enquiry")}>
                      <Link style={{ textDecoration: 'none' }} to='/enquiry'>Enquiry at</Link>
                    </li>
                    <li onClick={() => handleContactItemClick("visit")}>
                      <Link style={{ textDecoration: 'none' }} to='/visit'>Visit Us</Link>
                    </li>
                    <li onClick={() => handleContactItemClick("quotation")}>
                      <Link style={{ textDecoration: 'none' }} to='/quotation'>Get Quotation </Link>
                    </li>
                  </ul>
                  </>
                )}
            </li>
        </ul>
        <div className='nav-quote'>
          <button type="submit" className={quoteButtonActive ? 'quote active' : 'quote'} onClick={handleQuoteButtonClick}>
            <Link to='/quotation'>Get Quote</Link>
          </button> 
        </div>
    </div>
  );
}

export default Navbar;
