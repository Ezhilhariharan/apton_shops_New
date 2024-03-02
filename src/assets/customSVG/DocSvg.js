import React from "react";

const DocSvg = ({ color, bgColor }) => {
  return (
    <svg
      width="44"
      height="44"
      viewBox="0 0 44 44"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="44" height="44" rx="10" fill={bgColor} />
      <path
        d="M18.4003 17.1999H25.6003M18.4003 20.7999H25.6003M18.4003 24.3999H22.0003M16.6 12.3999H27.4003C28.7258 12.3999 29.8003 13.4744 29.8003 14.7999L29.8 29.2C29.8 30.5254 28.7254 31.5999 27.4 31.5999L16.5999 31.5998C15.2745 31.5998 14.1999 30.5253 14.2 29.1998L14.2 14.7999C14.2001 13.4744 15.2746 12.3999 16.6 12.3999Z"
        stroke={color}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default DocSvg;
