import React from 'react';

function Sales({ fill, bg }) {
  return (
    <svg
      width='35'
      height='35'
      viewBox='0 0 44 44'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'>
      <rect
        width='44'
        height='44'
        rx='10'
        fill={bg}
      />
      <path
        d='M14 26H30V30C30 30.5523 29.5523 31 29 31H15C14.4477 31 14 30.5523 14 30V26Z'
        stroke={fill}
        stroke-width='2'
        stroke-linejoin='round'
      />
      <path
        d='M13 17H31V24C31 25.1046 30.1046 26 29 26H15C13.8954 26 13 25.1046 13 24V17Z'
        stroke={fill}
        stroke-width='2'
        stroke-linejoin='round'
      />
      <path
        d='M18 15C18 13.8954 18.8954 13 20 13H24C25.1046 13 26 13.8954 26 15V17H18V15Z'
        stroke={fill}
        stroke-width='2'
        stroke-linejoin='round'
      />
      <path
        d='M22 23H22.002V23.002H22V23Z'
        stroke={fill}
        stroke-width='2'
        stroke-linecap='round'
        stroke-linejoin='round'
      />
    </svg>
  );
}

export default Sales;
