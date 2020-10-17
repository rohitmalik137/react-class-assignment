import React, { useState } from 'react';
import Cart from '../cart/cart.component';

import './header.styles.css';

const Header = () => {
  const [toggleCart, setToggleCart] = useState(false);
  return (
    <div className="headerCOntainer">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <p className="navbar-brand">BookStore</p>
        <div
          style={{
            marginLeft: 'auto',
            fontSize: 'larger',
            cursor: 'pointer',
            position: 'relative',
          }}
          id="navbarSupportedContent"
        >
          <span onClick={() => setToggleCart(!toggleCart)}>&#128722;</span>
          {toggleCart && <Cart />}
        </div>
      </nav>
    </div>
  );
};

export default Header;
