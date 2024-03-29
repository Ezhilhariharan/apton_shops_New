import React from 'react';

function Menu({ color, height, width }) {
  return (
    <svg
      width={width}
      height={height}
      viewBox='0 0 16 4'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'>
      <path
        d='M13 2C13 1.44772 13.4477 1 14 1C14.5523 1 15 1.44772 15 2C15 2.55228 14.5523 3 14 3C13.4477 3 13 2.55228 13 2Z'
        stroke={color}
        stroke-width='2'
        stroke-linecap='round'
        stroke-linejoin='round'
      />
      <path
        d='M7 2C7 1.44772 7.44772 1 8 1C8.55228 1 9 1.44772 9 2C9 2.55228 8.55228 3 8 3C7.44772 3 7 2.55228 7 2Z'
        stroke={color}
        stroke-width='2'
        stroke-linecap='round'
        stroke-linejoin='round'
      />
      <path
        d='M1 2C1 1.44772 1.44772 1 2 1C2.55228 1 3 1.44772 3 2C3 2.55228 2.55228 3 2 3C1.44772 3 1 2.55228 1 2Z'
        stroke={color}
        stroke-width='2'
        stroke-linecap='round'
        stroke-linejoin='round'
      />
    </svg>
  );
}

export default Menu;
