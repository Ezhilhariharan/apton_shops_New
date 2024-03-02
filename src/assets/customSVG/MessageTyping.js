import React from 'react'

const MessageTyping = ({ color }) => {
  return (
    <div>
      <svg
        width='18'
        height='18'
        viewBox='0 0 21 21'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'>
        <path
          d='M6.66406 8.57519V8.5M10.6641 8.57519V8.5M14.6641 8.57519V8.5M10.4032 14.3261L6.22928 18.5V14.3261H4.66406C3.55949 14.3261 2.66406 13.4307 2.66406 12.3261V4.5C2.66406 3.39543 3.55949 2.5 4.66406 2.5H16.6641C17.7686 2.5 18.6641 3.39543 18.6641 4.5V12.3261C18.6641 13.4307 17.7686 14.3261 16.6641 14.3261H10.4032Z'
          stroke={color}
          stroke-width='1.66667'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
      </svg>
    </div>
  );
}; 

export default MessageTyping