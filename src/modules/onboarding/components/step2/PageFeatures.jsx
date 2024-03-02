import React from 'react';
import '../../style/Dashboard.css';

export const PageFeatures = ({ title, image, content, label, buttonColor, ...prop }) => {
  return (
    <div className='page-features flex-row align-center space-between'>
      <div className='left-actions flex-row align-center'>
        {image && (
          <img
            alt={title}
            src={image}
          />
        )}
        {title && <h2 className='card-title'>{title}</h2>}
      </div>
      <div className='right-actions flex-row align-center flex-end'>
        {content && <p>{content}</p>}
        <button style={{ backgroundColor: buttonColor }}>{label}</button>
      </div>
    </div>
  );
};
