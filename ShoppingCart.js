

import React from 'react';

const ShoppingCart = ({ cart }) => {
  return (
    <aside className="cart">
      <h2>Shopping Cart:</h2>
      <ul>
        {cart.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </aside>
  );
};

export default ShoppingCart;