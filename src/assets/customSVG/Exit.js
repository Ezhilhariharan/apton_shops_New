import React from 'react';

function Exit({ color }) {
  return (
    <svg
      width='9'
      height='9'
      viewBox='0 0 10 10'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'>
      <path
        d='M9 1L1 9M9 9L1 0.999998'
        stroke={color}
        stroke-width='1.5'
        stroke-linecap='round'
      />
    </svg>
  );
}

export default Exit;
