import React from 'react';

function Task({ color, height, width }) {
  return (
    <svg
      width={width}
      height={height}
      viewBox='0 0 24 25'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'>
      <path
        d='M21 12.5C21 17.4706 16.9706 21.5 12 21.5C7.02944 21.5 3 17.4706 3 12.5C3 7.52944 7.02944 3.5 12 3.5C13.4121 3.5 14.7482 3.82519 15.9375 4.40476M19.3125 6.875L11.4375 14.75L9.1875 12.5'
        stroke={color}
        stroke-width='2'
        stroke-linecap='round'
        stroke-linejoin='round'
      />
    </svg>
  );
}

export default Task;
