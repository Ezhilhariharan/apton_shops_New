import React from "react";

const LocationIcon = ({ width, height, color, background }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="40" height="40" rx="10" fill={background} />
      <path
        d="M20.0003 29.6C20.0003 29.6 27.5134 22.9217 27.5134 17.913C27.5134 13.7637 24.1497 10.4 20.0003 10.4C15.851 10.4 12.4873 13.7637 12.4873 17.913C12.4873 22.9217 20.0003 29.6 20.0003 29.6Z"
        stroke={color}
        stroke-width="2"
      />
      <path
        d="M22.4007 17.6001C22.4007 18.9256 21.3261 20.0001 20.0007 20.0001C18.6752 20.0001 17.6007 18.9256 17.6007 17.6001C17.6007 16.2747 18.6752 15.2001 20.0007 15.2001C21.3261 15.2001 22.4007 16.2747 22.4007 17.6001Z"
        stroke={color}
        stroke-width="2"
      />
    </svg>
  );
};

export default LocationIcon;
