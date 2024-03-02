import React from 'react';
function Warning() {
    return (
      <svg
        width='24'
        height='24'
        viewBox='0 0 24 24'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'>
        <rect
          width='24'
          height='24'
          rx='7'
          fill='#FF543E'
        />
        <path
          d='M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z'
          fill='white'
        />
        <path
          d='M13.5 16C13.5 16.8284 12.8284 17.5 12 17.5C11.1716 17.5 10.5 16.8284 10.5 16C10.5 15.1716 11.1716 14.5 12 14.5C12.8284 14.5 13.5 15.1716 13.5 16Z'
          fill='#FF543E'
        />
        <path
          d='M12 12L12 8'
          stroke='#FF543E'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
      </svg>
    );
}
export default Warning;