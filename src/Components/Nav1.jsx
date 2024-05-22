import React from 'react';
import { Link } from 'react-router-dom';

export const Nav1 = () => {
  return (
    <div>
      <nav>
        <Link to = '/'>Inicio</Link> <bt />
        <Link to = '/contacto'>Contacto</Link> <bt />
        <Link to = 'about'>About Us</Link>
      </nav>
    </div>
  );
};
