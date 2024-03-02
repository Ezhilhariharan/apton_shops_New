import React from "react";

const PencilIcon = ({ width, height, color }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10.0859 5.21382L12.7859 7.91382M3.33594 14.6638L6.61043 14.004C6.78426 13.969 6.94387 13.8834 7.06922 13.758L14.3995 6.4237C14.7509 6.07206 14.7507 5.50207 14.3989 5.15073L12.8461 3.59967C12.4945 3.24847 11.9248 3.24871 11.5735 3.6002L4.24251 10.9352C4.1174 11.0604 4.03197 11.2197 3.99691 11.3932L3.33594 14.6638Z"
        stroke={color}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default PencilIcon;
