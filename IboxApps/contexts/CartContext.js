import React, {createContext, useContext, useState} from 'react';

// Create a Context for Cart State
const CartContext = createContext();

// CartProvider component to provide cart state to the app
export const CartProvider = ({children}) => {
  const [cart, setCart] = useState({
    items: [],
  });

  const addToCart = (product, quantity) => {
    // Add or update the product in the cart
    const updatedItems = [...cart.items];
    const existingProductIndex = updatedItems.findIndex(
      item => item.product === product,
    );

    if (existingProductIndex !== -1) {
      updatedItems[existingProductIndex].quantity += quantity; // Update quantity if the item exists
    } else {
      updatedItems.push({product, quantity});
    }

    setCart({items: updatedItems});
  };

  return (
    <CartContext.Provider value={{cart, addToCart}}>
      {children}
    </CartContext.Provider>
  );
};

// Custom hook to use the cart context
export const useCart = () => useContext(CartContext);
