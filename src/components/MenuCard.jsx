import React from 'react';

const MenuCard = ({ item, onAdd, onRemove }) => {
  return (
    <div className="menu-card">
      <img src={item.image} alt={item.name} />
      <h3>{item.name}</h3>
      <p>Price: {item.price}</p>
      <div>
        <button onClick={() => onAdd(item)}>+</button>
        <button onClick={() => onRemove(item)}>-</button>
      </div>
    </div>
  );
};

export default MenuCard;
