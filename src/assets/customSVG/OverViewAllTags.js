import React from 'react';

const OverViewAllTags = ({ color, fill }) => {
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
          d='M23.75 17C23.75 20.7279 20.7279 23.75 17 23.75C13.2721 23.75 10.25 20.7279 10.25 17C10.25 13.2721 13.2721 10.25 17 10.25C18.059 10.25 19.0611 10.4939 19.9531 10.9286M22.4844 12.7812L16.5781 18.6875L14.8906 17'
          stroke={fill}
          stroke-width='1.5'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
      </svg>
    </div>
  );
};

export default OverViewAllTags;
