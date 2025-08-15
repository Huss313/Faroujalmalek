import React from 'react';

const MenuItem = ({ item }) => {
  // Format price based on currency
  const formatPrice = () => {
    if (item.currency === '$') {
      // For dollars: remove decimal places
      return `${Math.floor(item.price)} $`;
    } else {
      // For L.L: format with Arabic numerals and commas
      const arabicNumerals = new Intl.NumberFormat('en-LB').format(item.price);
      return `${arabicNumerals} L.L`;
    }
  };

  return (
    <div className="menu-item">
      <div className="item-details">
        <h3>{item.name}</h3>
        {item.description && <p>{item.description}</p>}
        <div className="item-footer">
          <span className="price" dir="rtl">
            {formatPrice()}
          </span>
        </div>
      </div>
    </div>
  );
};

export default MenuItem;