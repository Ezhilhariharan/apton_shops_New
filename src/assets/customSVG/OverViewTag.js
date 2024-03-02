import React from 'react'

const OverViewTag = ({ color, fill }) => {
  return (
    <div>
      <svg
        width='28'
        height='28'
        viewBox='0 0 35 34'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'>
        <rect
          x='0.666016'
          width='34'
          height='34'
          rx='10'
          fill={color}
        />
        <path
          d='M20.9323 13.7397L20.9275 13.7396M23.3087 10.1388L18.9584 9.8042C18.5727 9.77453 18.1933 9.91488 17.9198 10.1884L10.8549 17.2533C10.3374 17.7708 10.3374 18.6098 10.8549 19.1273L15.5398 23.8122C16.0573 24.3297 16.8963 24.3297 17.4138 23.8122L24.4787 16.7473C24.7522 16.4738 24.8926 16.0944 24.8629 15.7087L24.5283 11.3584C24.4781 10.7067 23.9603 10.189 23.3087 10.1388Z'
          stroke={fill}
          stroke-width='1.5'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
      </svg>
    </div>
  );
};

export default OverViewTag