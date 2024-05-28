import React, { useState, useEffect } from 'react';
import MenuCard from '../components/MenuCard';

const FoodItems = () => {
  const [items, setItems] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch('../data/feeds.json', {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    })
    .then(response => response.json())
    .then(data => setItems(data));
  }, []);

  const handleAdd = (item) => {
    setCart([...cart, item]);
  };

  const handleRemove = (item) => {
    setCart(cart.filter(i => i.name !== item.name));
  };

  return (
    <div className="food-items">
      {items.map(item => (
        <MenuCard key={item.name} item={item} onAdd={handleAdd} onRemove={handleRemove} />
      ))}
    </div>
  );
};

export default FoodItems;
