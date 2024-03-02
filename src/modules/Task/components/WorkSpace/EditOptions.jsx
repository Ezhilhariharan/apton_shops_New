import React, { useState } from 'react';
import { ICONS } from '../../../../assets/icons';

const EditOptions = () => {
  const [openComment, setOpenComment] = useState(false);

  const [isRotated, setRotated] = useState(false);

  const rotationClass = isRotated ? 'rotate' : '';

  const handleClick = () => {
    setOpenComment(!openComment);
    setRotated(!isRotated);
  };
  return (
    <div className='schedule-container flex-row align-center space-between'>
      <span className='workArea-name mt-10'>Edit Options</span>
      <img
        src={ICONS?.WorkSpaceRight}
        alt='WorkSpaceRight'
        onClick={handleClick}
        className={`rotating-image ${rotationClass}`}
      />
    </div>
  );
};

export default EditOptions;
