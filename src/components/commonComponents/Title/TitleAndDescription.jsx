import React from 'react';
import './Title.css';

function TitleAndDescription({ size, title, description, gap, margin, paragraphLeft }) {
  return (
    <div style={{ margin: margin ? margin : '' }}>
      {title && <h1 className={`Title--${size}`}>{title}</h1>}
      <div style={{ marginTop: gap }} />
      {description !== '' && (
        <div className='flex-row align-center'>
          {paragraphLeft && <div style={{ marginLeft: paragraphLeft }} />}
          <p className={`description--${size}`}>{description}</p>
        </div>
      )}
    </div>
  );
}

export default TitleAndDescription;
