import React from 'react';

function Engagement({ fill, bg }) {
  return (
    <svg
      width='35'
      height='35'
      viewBox='0 0 44 44'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'>
      <rect
        width='44'
        height='44'
        rx='10'
        fill={bg}
      />
      <path
        d='M14.9998 21C14.9998 16.5817 18.5813 13 22.9992 13C27.4171 13 30.9985 16.5817 30.9985 21C30.9985 22.15 30.7558 23.2434 30.319 24.2316L31 28.9992L26.9146 27.9778C25.7572 28.6287 24.4215 29 22.9992 29M13.0009 26C13.0009 26.7188 13.1526 27.4021 13.4256 28.0198L13 30.9995L15.5531 30.3611C16.2764 30.768 17.1111 31 18.0001 31C20.761 31 22.9992 28.7614 22.9992 26C22.9992 23.2386 20.761 21 18.0001 21C15.2391 21 13.0009 23.2386 13.0009 26Z'
        stroke={fill}
        stroke-width='2'
        stroke-linecap='round'
        stroke-linejoin='round'
      />
    </svg>
  );
}

export default Engagement;
