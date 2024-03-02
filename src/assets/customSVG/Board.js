import React from 'react';

function Board({ color }) {
  return (
    <svg
      width='15'
      height='15'
      viewBox='0 0 16 16'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'>
      <path
        d='M5.33366 2.6665H4.00033C3.26395 2.6665 2.66699 3.26346 2.66699 3.99984V11.9998C2.66699 12.7362 3.26395 13.3332 4.00033 13.3332H5.33366C6.07004 13.3332 6.66699 12.7362 6.66699 11.9998V3.99984C6.66699 3.26346 6.07004 2.6665 5.33366 2.6665Z'
        stroke={color}
        stroke-width='1.5'
        stroke-linecap='round'
        stroke-linejoin='round'
      />
      <path
        d='M12.0007 2.6665H10.6673C9.93094 2.6665 9.33398 3.26346 9.33398 3.99984V7.99984C9.33398 8.73622 9.93094 9.33317 10.6673 9.33317H12.0007C12.737 9.33317 13.334 8.73622 13.334 7.99984V3.99984C13.334 3.26346 12.737 2.6665 12.0007 2.6665Z'
        stroke={color}
        stroke-width='1.5'
        stroke-linecap='round'
        stroke-linejoin='round'
      />
    </svg>
  );
}

export default Board;
