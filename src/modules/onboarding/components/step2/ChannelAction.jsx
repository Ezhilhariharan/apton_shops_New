import React from 'react';
import '../../style/Dashboard.css';

export const ChannelAction = ({ title, image, content, key, ...prop }) => {
  return (
    <div
      className='channel-action flex-column align-center justify-center'
      key={key}>
      {image && (
        <img
          alt={title}
          src={image}
        />
      )}

      {title && <h2 className=''>{title}</h2>}
    </div>
  );
};
