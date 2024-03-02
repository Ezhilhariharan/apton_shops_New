import React from 'react';

function navHome({ color, height, width }) {
  return (
    <svg
      width={width}
      height={height}
      viewBox='0 0 24 25'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'>
      <path
        d='M3 9.91605C3 9.54666 3.18802 9.2001 3.50457 8.98603L11.3046 3.71117C11.7209 3.42961 12.2791 3.42961 12.6954 3.71117L20.4954 8.98603C20.812 9.2001 21 9.54665 21 9.91605V19.7882C21 20.7336 20.1941 21.5 19.2 21.5H4.8C3.80589 21.5 3 20.7336 3 19.7882V9.91605Z'
        stroke={color}
        stroke-width='2'
      />
      <path
        d='M14.25 13.625C14.25 14.8676 13.2426 15.875 12 15.875C10.7574 15.875 9.75 14.8676 9.75 13.625C9.75 12.3824 10.7574 11.375 12 11.375C13.2426 11.375 14.25 12.3824 14.25 13.625Z'
        stroke={color}
        stroke-width='2'
      />
    </svg>
  );
}

export default navHome;
