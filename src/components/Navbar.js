import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
  const [isActive, setIsActive] = useState(false)

  return (
    <nav className='navbar is-danger' role='navigation' aria-label='main navigation'>
      <div className="navbar-brand">
          <Link className="navbar-item" to="/">
            Pokedex
          </Link>

        {/* navbar burger */}
        <div role="button" onClick={() => setIsActive(!isActive)} data-target="navMenu" className={`navbar-burger ${isActive ? 'is-active' : ""}`} aria-label="menu" aria-expanded="false">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </div>
      </div>

      <div className={`navbar-menu ${isActive ? 'is-active' : ""}`}  id="navMenu" >
        {/* Navbar start */}
        <div className="navbar-start">
          <NavLink className="navbar-item" to="/">
            Home
          </NavLink>
        </div>

        {/* Navbar End */}
        <div className="navbar-end">
        <Link className='navbar-item' to="/">
          Search
        </Link>
        <Link className='navbar-item' to="/favorites">
          Favorites
        </Link> 
        </div>
      </div>
    </nav>
  )
}

export default Navbar;