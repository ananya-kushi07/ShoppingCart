

import React from 'react';

const ProductCard = ({ product, addToCart, handleQuantityChange, getQuantity }) => {
  return (
    <div key={product.id} className="product-card">
      <img src={product.image} alt={product.name} />
      <div className="product-info">
        <h3>{product.name}</h3>
        <p>${product.price}</p>
        <p>Rating: {product.rating}</p>
        <div className="quantity-controls">
          <button onClick={() => handleQuantityChange(product.id, 'increment')}>+</button>
          <span>{getQuantity(product.id)}</span>
          <button onClick={() => handleQuantityChange(product.id, 'decrement')}>-</button>
        </div>
        <button onClick={() => addToCart(product)}>Add to Cart</button>
      </div>
    </div>
  );
};

export default ProductCard;