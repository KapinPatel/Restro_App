import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <h1>Food's Restaurant</h1>
      <nav>
        <Link to="/menu">Menu</Link>
        <Link to="/order-summary">Order Summary</Link>
      </nav>
    </header>
  );
};

export default Header;
