import React from 'react';

import './cart-item.styles.css';

const CartItem = ({ imageUrl, name, quantity, price }) => {
  return (
    <div className="cartItemContainer">
      <img className="cartImage" src={imageUrl} alt="book" />
      <div style={{ textAlign: 'left' }}>
        <p style={{ margin: '10px 0 0' }}>{name}</p>
        <p>
          {quantity} x ${price}
        </p>
      </div>
    </div>
  );
};

export default CartItem;
