import React from 'react';

function Leads({ fill, bg }) {
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
        d='M31 14H13L20 22.46V29L24 31V22.46L31 14Z'
        stroke={fill}
        stroke-width='2'
        stroke-linecap='round'
        stroke-linejoin='round'
      />
    </svg>
  );
}

export default Leads;
