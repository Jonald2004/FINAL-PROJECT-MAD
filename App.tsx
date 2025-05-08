import React from 'react';
import AppNavigator from './IboxApps/navigation/AppNavigator';
import './IboxApps/config/firebase'; // Firebase configuration
import {CartProvider} from './IboxApps/contexts/CartContext'; // Import CartProvider

const App = () => {
  return (
    <CartProvider>
      {/* Membungkus aplikasi dengan CartProvider untuk akses keranjang di seluruh aplikasi */}
      <AppNavigator />
    </CartProvider>
  );
};

export default App;
