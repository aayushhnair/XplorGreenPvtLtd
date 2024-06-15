import React from 'react';
import { Link } from 'react-router-dom';
import './Category.css';

const CategoryItem = ({ category }) => {
  return (
    <div className='item'>
      <Link to={{ pathname: `/details`}}>
        <h2>{category.title}</h2>
        <img src={category.image} alt={category.title} />
      </Link>
    </div>
  );
};

export default CategoryItem;
