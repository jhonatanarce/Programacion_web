import React from 'react';
import '../Styles/navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">Mi Panadería</div>
      <ul className="nav-links">
        <li className="nav-link">Inicio</li>
        <li className="nav-link">Productos</li>
        <li className="nav-link">Contacto</li>
        <li className="nav-link">Acerca de</li>
      </ul>
    </nav>
  );
}

export default Navbar;
