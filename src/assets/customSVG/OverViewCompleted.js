import React from 'react'

const OverViewCompleted = ({ color, fill }) => {
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
          d='M7 17C7 11.4772 11.4772 7 17 7C22.5228 7 27 11.4772 27 17C27 22.5228 22.5228 27 17 27C11.4772 27 7 22.5228 7 17Z'
          fill={color}
        />
        <path
          d='M20.4911 14.7589L15.75 19.5L14.1339 17.8839M17 7C11.4772 7 7 11.4772 7 17C7 22.5228 11.4772 27 17 27C22.5228 27 27 22.5228 27 17C27 11.4772 22.5228 7 17 7Z'
          stroke={fill}
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
      </svg>
    </div>
  );
};

export default OverViewCompleted