import React from 'react';
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './components/tools/CartContext';
import ShoppingCart from './components/ShoppingCart';
import Navigation from './components/Navigation'; 
import DisplayItems from './components/DisplayItems'; 
import Home from './components/Home';
import CurrentInvitation from './components/currentItem/CurrentInvitation';


function App() {
  return (
    <CartProvider>
      <Router>
      <Navigation />
        <Routes>
             <Route path="/" element={<Home />} />
             <Route path="/shoppingCart" element={<ShoppingCart />} /> 
            <Route path="/:category" element={<DisplayItems />} /> 
            <Route path="/:category/current/:id" element={<CurrentInvitation />} />
        </Routes>

      </Router>
      </CartProvider>
  )
}

export default App