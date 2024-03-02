import React from 'react';
import './Title.css';

export const Title = ({ paragraph, backgroundColor, content }) => {
  // const mode = primary ? 'storybook-Title--primary' : 'storybook-Title--secondary';

  return (
    <div
      className={`storybook-Title-container`}
      style={{ backgroundColor }}>
      <h3 className='Title-title'>
        Gogrow<span style={{ color: '#25C277' }}>X</span>
      </h3>
      {content && <h1 className='Title-content'>{content}</h1>}
      {paragraph !== '' && <h1 className='Title-paragraph'>{paragraph}</h1>}
    </div>
  );
};
