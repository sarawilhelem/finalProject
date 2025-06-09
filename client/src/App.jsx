import React from 'react';
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Invitations from './components/Invitations';
import { CartProvider } from './components/tools/CartContext';
import ShoppingCart from './components/ShoppingCart';
import Navigation from './components/Navigation'; 

function App() {
  return (
    <CartProvider>
      <Router>
      <Navigation />
        <Routes>
            {/* <Route path="/" element={<Navigate to="/home" />} /> */}
            {/* <Route path='/*' element={<Page404 />} /> */}
             {/* <Route path="/" element={<Invitations />} /> */}
             <Route path="/shoppingCart" element={<ShoppingCart />} /> 
            <Route path="/" element={<Invitations />} /> 

        </Routes>

      </Router>
      </CartProvider>
  )
}

export default App