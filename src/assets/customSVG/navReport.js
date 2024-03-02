import React from 'react';

function navReport({ color, height, width }) {
  return (
    <svg
      width={width}
      height={height}
      viewBox='0 0 24 25'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'>
      <path
        d='M8.40057 7.6999H15.6006M8.40057 11.2999H15.6006M8.40057 14.8999H12.0006M6.60029 2.8999H17.4005C18.726 2.8999 19.8005 3.97445 19.8005 5.29995L19.8002 19.7C19.8002 21.0254 18.7257 22.0999 17.4002 22.0999L6.60019 22.0998C5.2747 22.0998 4.20019 21.0253 4.2002 19.6998L4.20029 5.29989C4.2003 3.97441 5.27481 2.8999 6.60029 2.8999Z'
        stroke={color}
        stroke-width='2'
        stroke-linecap='round'
        stroke-linejoin='round'
      />
    </svg>
  );
}

export default navReport;
