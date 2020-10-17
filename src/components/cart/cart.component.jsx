import React from 'react';
import { useSelector } from 'react-redux';
import CartItem from './cart-item/cart-item.component';

import './cart.styles.css';

const Cart = () => {
  const cart = useSelector((state) => state.cart.cartItems);
  return (
    <div className="cart-dropdown">
      <p style={{ fontWeight: 'bold' }}>Cart Items</p>
      <div className="cart-items">
        {cart.map((book) => {
          return (
            <CartItem
              imageUrl={book.imageUrl}
              name={book.name}
              quantity={book.quantity}
              price={book.price}
              key={book.id}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Cart;
