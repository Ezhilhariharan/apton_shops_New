import React from 'react';

function customFlag({ color, width, height }) {
  return (
    <svg
      width={width}
      height={height}
      viewBox='0 0 31 21'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'>
      <rect
        x='0.142578'
        y='0.666504'
        width='30'
        height='20'
        rx='5'
        fill='#F6A723'
      />
      <path
        d='M10.4756 12H19.8089L16.8089 9L19.8089 6H10.4756V16.6667'
        fill='white'
      />
      <path
        d='M10.4756 12H19.8089L16.8089 9L19.8089 6H10.4756V16.6667'
        stroke='white'
        stroke-width='1.5'
        stroke-linecap='round'
        stroke-linejoin='round'
      />
    </svg>
  );
}

export default customFlag;
