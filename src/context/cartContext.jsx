import { createContext, useState } from 'react';
import PropTypes from 'prop-types';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addItemToCart = item => {
    setCartItems(prevItems => [...prevItems, item]);
  };

  const removeItemFromCart = id => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== id));
  };

  const totalItems = cartItems.length || 0;

  return (
    <CartContext.Provider
      value={{ cartItems, addItemToCart, removeItemFromCart, totalItems }}
    >
      {children}
    </CartContext.Provider>
  );
};

CartProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
