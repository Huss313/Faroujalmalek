import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { menuData } from './data';
import Navbar from './components/Navbar';
import CategoryButton from './components/CategoryButton';
import MenuItem from './components/MenuItem';
import Contact from './components/Contact';
//import MyComponent from './components/MyComponent'; // Add this import
import './App.css';

function App() {
  const [activeCategory, setActiveCategory] = useState('All');
  
  const formatPrice = (price, currency) => {
    if (currency === '$') {
      return `${Math.floor(price)} $`;
    } else {
      const formatted = new Intl.NumberFormat('ar-LB').format(price);
      return `${formatted} L.L`;
    }
  };

  const filteredItems = activeCategory === 'All' 
    ? menuData.items 
    : menuData.items.filter((item) => item.category === activeCategory);

  const itemsWithFormattedPrices = filteredItems.map(item => ({
    ...item,
    displayPrice: formatPrice(item.price, item.currency)
  }));

  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={
            <>
              <div className="container">
                <div className="menu-header">
                  <div className="category-buttons">
                    <CategoryButton
                      category="All"
                      active={activeCategory === 'All'}
                      onClick={setActiveCategory}
                    />
                    {menuData.categories.map((category) => (
                      <CategoryButton
                        key={category}
                        category={category}
                        active={activeCategory === category}
                        onClick={setActiveCategory}
                      />
                    ))}
                  </div>
                </div>
                <div className="menu-items">
                  {itemsWithFormattedPrices.map((item) => (
                    <MenuItem key={item.id} item={item} />
                  ))}
                </div>
              </div>
            </>
          } />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;