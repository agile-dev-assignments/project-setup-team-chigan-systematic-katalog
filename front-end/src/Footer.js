import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'
import { Navbar, NavItem, NavDropdown, MenuItem, Nav, Form, FormControl, Button } from 'react-bootstrap';
import { FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return(
      <div>
        <Navbar className="nav-space" sticky="bottom" variant="dark" expand="lg">
          <Navbar.Brand href="/">Katalog &copy; 2021.</Navbar.Brand>
            <div className="icon">
              <a href="https://www.twitter.com/katalogwebapp/" target="_blank" className="twitter">
                <FaTwitter size="35px"/>
              </a>
              <a href="https://www.instagram.com/katalogwebapp/" target="_blank" className="instagram">
                <FaInstagram size="35px"/>
              </a>
            </div>

        </Navbar>
      </div>
  )
}

export default Footer;
