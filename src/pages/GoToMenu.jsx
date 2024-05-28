import React from 'react';
import { Link } from 'react-router-dom';

const GoToMenu = () => {
  return (
    <div className="go-to-menu">
      <h2>Welcome to Food's Restaurant</h2>
      <Link to="/food-items">Go to Menu</Link>
    </div>
  );
};

export default GoToMenu;
