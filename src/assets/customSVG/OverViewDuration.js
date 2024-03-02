import React from 'react'

const OverViewDuration = ({ color, fill }) => {
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
          d='M13.8125 20.9151V20.8571M17.1875 20.9151V20.8571M17.1875 17.7714V17.7134M20.1875 17.7714V17.7134M11.5625 14.6857H22.0625M12.9196 10.25V11.4073M20.5625 10.25V11.4071M20.5625 11.4071H13.0625C11.8199 11.4071 10.8125 12.4433 10.8125 13.7214V21.4357C10.8125 22.7139 11.8199 23.75 13.0625 23.75H20.5625C21.8051 23.75 22.8125 22.7139 22.8125 21.4357L22.8125 13.7214C22.8125 12.4433 21.8051 11.4071 20.5625 11.4071Z'
          stroke={fill}
          stroke-width='1.5'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
      </svg>
    </div>
  );
};

export default OverViewDuration