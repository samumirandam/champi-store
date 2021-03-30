import React from 'react';

import logo from '../assets/images/logo.transparent.tiny.png';
import '../assets/styles/components/header.scss';

const Header = () => (
  <header className="Header">
    <figure className="Header__figure">
      <img className="Header__img" src={logo} alt="Logo de Champi" />
    </figure>
  </header>
);

export default Header;
