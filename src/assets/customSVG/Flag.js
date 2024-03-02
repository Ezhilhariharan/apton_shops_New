import React from 'react';

const Flag = ({ color,style }) => {
  return (
    <div>
      <svg
        width='17'
        height='16'
        viewBox='0 0 17 16'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
        style={style}>
        <path
          d='M3.83301 9.33301H13.1663L10.1663 6.33301L13.1663 3.33301H3.83301V13.9997'
          fill={color}
        />
        <path
          d='M3.83301 9.33301H13.1663L10.1663 6.33301L13.1663 3.33301H3.83301V13.9997'
          stroke={color}
          stroke-width='1.5'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
      </svg>
    </div>
  );
};

export default Flag;
