import React from 'react'
import './Header.css'
import logo from '../../assets/logo.png';
const Header = () => {
  return (
    <div className="header">
        <img className='logo-+' src={logo} alt="logo" />
        <ul className='header-menu'>
            <li  >Home</li>
            <li>Programs</li>
            <li>Why us</li>
            <li>Testimonials</li>
        </ul>
    </div>
  )
}

export default Header
