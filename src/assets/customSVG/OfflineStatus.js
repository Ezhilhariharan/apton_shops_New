import React from 'react';

function OfflineStatus({ fill, bg }) {
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
        fill-rule='evenodd'
        clip-rule='evenodd'
        d='M21.9631 18.3801C23.9291 18.3801 25.5228 19.974 25.5228 21.9397C25.5228 23.9057 23.9291 25.4993 21.9631 25.4993C19.9973 25.4993 18.4033 23.9057 18.4033 21.9397C18.4033 19.974 19.9973 18.3801 21.9631 18.3801ZM29.1103 13.1719C33.9274 17.9888 33.9274 25.8909 29.1103 30.7075L27.578 29.1748C31.5526 25.201 31.5526 18.6787 27.578 14.7045L29.1103 13.1719ZM26.7084 16.1042C29.9141 19.3102 29.9141 24.5695 26.7084 27.7751L25.1757 26.2428C27.5393 23.8793 27.539 20.0001 25.1757 17.6365L26.7084 16.1042ZM16.3481 14.7045C12.3738 18.6787 12.3735 25.2006 16.3481 29.1748L14.8158 30.7075C9.99873 25.8905 9.99908 17.9888 14.8158 13.1719L16.3481 14.7045ZM18.7508 17.6365C16.3871 20.0004 16.3871 23.8793 18.7508 26.2428L17.2181 27.7751C14.0124 24.5695 14.0124 19.3102 17.2181 16.1042L18.7508 17.6365ZM19.9009 23.1695L21.1307 21.9397L19.9009 20.7102L20.7336 19.8779L21.9631 21.1074L23.1926 19.8779L24.0252 20.7102L22.7954 21.9397L24.0252 23.1695L23.1929 24.0018L21.9631 22.772L20.7332 24.0018L19.9009 23.1695Z'
        fill={fill}
      />
    </svg>
  );
}

export default OfflineStatus;
