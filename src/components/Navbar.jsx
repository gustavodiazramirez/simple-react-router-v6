import React from 'react'
import { Link, NavLink } from 'react-router-dom';
export const Navbar = () => {
  return (
    <div className='navbar navbar-dark bg-dark'>
        <NavLink to="/" className='btn btn-outline-primary'>Inicio</NavLink>
        <NavLink to="/contacto" className='btn btn-outline-primary'>Contacto</NavLink>
        <NavLink to="/blog" className='btn btn-outline-primary'>Blog</NavLink>

    </div>
  )
}
export default Navbar;