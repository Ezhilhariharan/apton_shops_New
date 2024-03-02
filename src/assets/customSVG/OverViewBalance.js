import React from 'react';

const OverViewBalance = ({ color, fill }) => {
  return (
    <div>
      <svg
        width='28'
        height='28'
        viewBox='0 0 35 34'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'>
        <rect
          x='0.333984'
          width='34'
          height='34'
          rx='10'
          fill={color}
        />
        <path
          d='M10.1328 13.6551L10.1363 22.9251C10.1363 23.9855 10.9959 24.8451 12.0563 24.8451H22.6164C23.6768 24.8451 24.5364 23.9855 24.5364 22.9251V15.2451C24.5364 14.3614 23.8201 13.6451 22.9364 13.6451H10.1469C10.1406 13.6451 10.1349 13.6491 10.1328 13.6551ZM10.1328 13.6551C10.1334 13.4753 20.9364 9.15503 20.9364 9.15503V13.2051M20.7089 19.0726L20.6964 19.0851'
          stroke={fill}
          stroke-width='1.50001'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
      </svg>
    </div>
  );
};

export default OverViewBalance;
