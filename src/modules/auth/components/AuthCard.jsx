import React from 'react';
import '../../../components/commonComponents/Cards/Card.css';

import RadioButton from '../../../components/form/radio/RadioButton';

export const AuthCard = ({ title, content, selected, image, onClick, radio, cardItem }) => {
  return (
    <>
      <div className='storybook-card'>
        {image && (
          <img
            alt={title}
            className='card-image'
            src={image}
          />
        )}

        <div className='card'>
          {title && <h2 className='card-title'>{title}</h2>}
          {content && <p className='card-content'>{content}</p>}
        </div>
      </div>
      <div className='radio'>
        {radio && (
          <RadioButton
            title={title}
            value={cardItem.value}
            onClick={onClick}
            selected={selected}
          />
        )}
      </div>
    </>
  );
};
