import React from 'react';

const CategoryButton = ({ category, active, onClick }) => {
  return (
    <button
      className={`category-btn ${active ? 'active' : ''}`}
      onClick={() => onClick(category)}>
      {category}
    </button>
  );
};
export default CategoryButton;