import React, { useState } from 'react';

import { ICONS } from '../../../../assets/icons/index';
import RadioButton from '../../../../components/form/radio/RadioButton';

const Comment = () => {
  const [openComment, setOpenComment] = useState(false);
  const [value, setValue] = useState('');

  const [isRotated, setRotated] = useState(false);

  const rotationClass = isRotated ? 'rotate' : '';

  const handleClick = () => {
    setOpenComment(!openComment);
    setRotated(!isRotated);
  };

  const initialText = `Write a content / Press ‘space’ for GG`;

  return (
    <>
      <div className='comment-main-container flex-column'>
        <div className='comment-wrapper flex-row align-center space-between pointer'>
          <div className='flex-row'>
            <span
              className='workArea-name pr-10'
              onClick={handleClick}>
              Follow up comments
            </span>
            {value && <RadioButton selected={true} />}
          </div>
          <img
            src={ICONS?.WorkSpaceRight}
            alt='WorkSpaceRight'
            className={`rotating-image ${rotationClass}`}
            onClick={handleClick}
          />
        </div>
        {openComment && (
          <div className='comment-container flex-row align-center'>
            <textarea
              placeholder={initialText}
              value={value}
              onChange={(e) => setValue(e?.target?.value)}
              maxLength={2200}
              className='comment-container-text flex-row align-center justify-center'
            />
            <img
              src={ICONS?.step3EmojiIcon}
              alt='emoji'
              // onClick={handleClick}
            />
          </div>
        )}
      </div>
      <div className='border-work-area' />
    </>
  );
};

export default Comment;
