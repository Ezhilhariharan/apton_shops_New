import React from 'react';

function navInbox({ color, height, width }) {
  return (
    <svg
      width={width}
      height={height}
      viewBox='0 0 24 25'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'>
      <path
        d='M3 13.6429V18.2143C3 19.4767 4.00736 20.5 5.25 20.5H18.75C19.9926 20.5 21 19.4767 21 18.2143V13.6429M3 13.6429L5.82751 5.98315C6.15683 5.09102 6.99635 4.5 7.93425 4.5H16.0657C17.0037 4.5 17.8432 5.09102 18.1725 5.98315L21 13.6429M3 13.6429H7.5L9 15.2429H15L16.5 13.6429H21'
        stroke={color}
        stroke-width='2'
        stroke-linecap='round'
        stroke-linejoin='round'
      />
    </svg>
  );
}

export default navInbox;
