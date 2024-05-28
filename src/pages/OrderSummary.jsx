import React from 'react';

const OrderSummary = ({ cart, onAdd, onRemove }) => {
  const getTotal = () => {
    return cart.reduce((total, item) => total + item.price, 0);
  };

  return (
    <div className="order-summary">
      <h2>Order Summary</h2>
      {cart.map(item => (
        <div key={item.name} className="cart-item">
          <span>{item.name}</span>
          <span>{item.price}</span>
          <button onClick={() => onAdd(item)}>+</button>
          <button onClick={() => onRemove(item)}>-</button>
        </div>
      ))}
      <div className="total">
        <span>Total: {getTotal()}</span>
      </div>
      <button onClick={() => alert('Checkout process')}>Save and Checkout</button>
    </div>
  );
};

export default OrderSummary;
