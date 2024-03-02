import React from 'react';
import './Index.css';

function Index({ Width, Height, loaderBg, loaderColor }) {
  return (
    <div
      className='loader'
      style={{
        width: Width,
        height: Height,
        border: loaderBg,
        borderTop: loaderColor,
      }}></div>
  );
}

export default Index;
