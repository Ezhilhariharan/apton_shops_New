import React from 'react';
import './Terms.css';

export const Terms = () => {
  return (
    <>
      <div className='Terms-container'>
        <a
          href={'https://www.aptonshops.com/privacypolicy.html'}
          target='_blank'
          rel='noreferrer'>
          Terms & Conditions
        </a>
        <span style={{ color: '#D1D3D8', margin: '0 20px' }}>|</span>
        <a
          href={'https://www.aptonshops.com/privacypolicy.html'}
          target='_blank'
          rel='noreferrer'>
          Privacy & Policy
        </a>
      </div>
    </>
  );
};
