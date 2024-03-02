import React from 'react';

const OverViewCreated = ({ color, fill }) => {
  return (
    <div>
      <svg
        width='28'
        height='28'
        viewBox='0 0 34 34'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'>
        <rect
          width='34'
          height='34'
          rx='10'
          fill={color}
        />
        <path
          d='M16.3238 10.8528H12.0589C10.6457 10.8528 9.5 11.9984 9.5 13.4116V21.9412C9.5 23.3544 10.6457 24.5 12.0589 24.5H20.5887C22.0019 24.5 23.1476 23.3544 23.1476 21.9412L23.1476 17.6764M13.7649 20.2352L16.8683 19.6099C17.033 19.5767 17.1843 19.4956 17.3031 19.3767L24.2503 12.4259C24.5834 12.0926 24.5832 11.5524 24.2498 11.2194L22.7782 9.74948C22.4449 9.41664 21.905 9.41687 21.572 9.74999L14.6241 16.7015C14.5055 16.8202 14.4245 16.9711 14.3913 17.1355L13.7649 20.2352Z'
          stroke={fill}
          stroke-width='1.5'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
      </svg>
    </div>
  );
};

export default OverViewCreated;
