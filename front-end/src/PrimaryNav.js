import React from 'react'
import './PrimaryNav.css'
import { Link } from 'react-router-dom'

const PrimaryNav = (props) => {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/search">Search</Link>
      <Link to="/profile">Profile</Link>
      <Link to="/faq">FAQ</Link>
      <Link to="/about">About</Link>
      <Link to="/animals">Animals</Link>
    </nav>
  )
}

export default PrimaryNav
