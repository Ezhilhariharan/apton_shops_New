import React, { Children } from 'react';
import './styles.css';

const Cards = ({ title, image, children, className }) => {
  return (
    <div className={`cardContainer ${className}`}>
      <div className='imageContainer'>
        <div
          style={{
            backgroundImage: `url(${image})`,
          }}></div>
        <p className='cardHeader'>{title}</p>
      </div>
      {children}
    </div>
  );
};

export default Cards;
