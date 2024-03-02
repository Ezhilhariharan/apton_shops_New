import React from 'react'

const MessagePlus = ({ color }) => {
  return (
    <div>
      <svg
        width='18'
        height='18'
        viewBox='0 0 20 21'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'>
        <path
          d='M7.99902 8.5L9.49902 10L12.999 6.5M9.73815 14.3261L5.56424 18.5V14.3261H3.99902C2.89445 14.3261 1.99902 13.4307 1.99902 12.3261V4.5C1.99902 3.39543 2.89445 2.5 3.99902 2.5H15.999C17.1036 2.5 17.999 3.39543 17.999 4.5V12.3261C17.999 13.4307 17.1036 14.3261 15.999 14.3261H9.73815Z'
          stroke={color}
          stroke-width='1.66667'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
      </svg>
    </div>
  );
};

export default MessagePlus