
import React, { useState } from 'react';
import './App.css';
import Header from './componenets/Header';
import ProductCard from './componenets/ProductCard';
import ShoppingCart from './componenets/ShoppingCart';

const productsData = [
  {
    id: 1,
    name: 'Peacock designed clock',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSG1OpNZE2oi1QxMFvprY7YX55XlgqOU3HmJg&usqp=CAU',
    price: 4.9,
    rating: 4.2,
  },
  {
    id: 2,
    name: 'Wooden cupboard',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuHcTiGeKCsPk19bJr0FWL9TcSAxgHwAzMEA&usqp=CAU',
    price: 5.2,
    rating: 4.1,
  },
  {
    id: 3,
    name: 'Black Embroidery Kurtha',
    image: 'https://rukminim2.flixcart.com/image/832/832/xif0q/kurta/p/4/m/m-chikanakri-shree-ramkrishna-fab-original-imagpuf2kmyqxfzy.jpeg?q=70&crop=false',
    price: 3.9,
    rating: 4.0,
  },
  {
    id: 4,
    name: 'Plain Pink Color Maxi Dress',
    image: 'https://img101.urbanic.com/v1/goods-pic/8f3bae0e64d546688cd472e799595d8fUR_w1440_q90.webp',
    price: 4.7,
    rating: 4.4,
  },
];

const App = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const handleQuantityChange = (productId, action) => {
    const updatedCart = cart.map(item => {
      if (item.id === productId) {
        return {
          ...item,
          quantity: action === 'increment' ? item.quantity + 1 : Math.max(item.quantity - 1, 0)
        };
      }
      return item;
    });
    setCart(updatedCart);
  };

  const getQuantity = (productId) => {
    const cartItem = cart.find(item => item.id === productId);
    return cartItem ? cartItem.quantity : 0;
  };


  return (
    <div className="App">
      <Header />
      <main>
        {<section className="filters">
          <h2>Categories:</h2>
        </section>}
        <section className="products">
          {productsData.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              addToCart={addToCart}
              handleQuantityChange={handleQuantityChange}
              getQuantity={getQuantity}
            />
          ))}
        </section>
      </main>
      <ShoppingCart cart={cart} />
    </div>
  );
};

export default App;