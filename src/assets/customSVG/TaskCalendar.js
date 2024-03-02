import React from 'react';
function TaskCalendar() {
    return (
      <svg
        width='32'
        height='32'
        viewBox='0 0 32 32'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'>
        <path
          d='M11.1667 13.9428H20.5M12.373 10V11.0287M19.1667 10V11.0286M21.1667 12.8286V20.2C21.1667 21.1941 20.3707 22 19.3889 22H12.2778C11.2959 22 10.5 21.1941 10.5 20.2V12.8286C10.5 11.8345 11.2959 11.0286 12.2778 11.0286H19.3889C20.3707 11.0286 21.1667 11.8345 21.1667 12.8286Z'
          stroke='#898E99'
          stroke-width='1.5'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
        <rect
          x='1'
          y='1'
          width='30'
          height='30'
          rx='15'
          stroke='#898E99'
          stroke-width='1.5'
          stroke-linecap='round'
          stroke-dasharray='4 4'
        />
      </svg>
    );
}
export default TaskCalendar