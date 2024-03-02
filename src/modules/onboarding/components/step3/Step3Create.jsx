import React, { useState } from 'react';
import '../../style/DashboardCenter.css';
// import { Picker } from 'emoji-mart';
// import 'emoji-mart/css/emoji-mart.css';

import { Step3CreatePost } from '../../../../constant/app/dashboard/DashboardExtended';
import { ICONS } from '../../../../assets/icons';

import { Button } from '../../../../components/form/Button/Button';

import { useAspDispatch } from '../../../../test/jest-redux-hooks';
import { updateSteps } from '../../../../reduxToolkit/dashboardSlice';
import GoGrowInput from '../../../../components/commonComponents/GoGrowX/GoGrowInput';
import Select from '../../../../components/form/select/Select';

const Step3Create = () => {
  const [value, setValue] = useState('');
  const [ggOpen, setggopen] = useState(false);
  // const [showEmojiPicker, setShowEmojiPicker] = useState(false);

  const handleClick = () => {
    setggopen(true);
  };

  const dispatch = useAspDispatch();

  // const handleClick = () => {
  //   setShowEmojiPicker(true);
  // };

  // const handleEmojiClick = (emojiObject) => {
  //   setValue(value + emojiObject.native);
  //   setShowEmojiPicker(false);
  // };
  const initialText = `Write a content / Press ‘space’ for GG`;
  return (
    <>
      <div className='step3-wrapper'>
        <img
          src={ICONS?.step3PlusIcon}
          alt='create'
        />
        {Step3CreatePost?.map((item) => (
          <div className='step3-connected-channles'>
            <img
              src={item?.icon}
              alt='create'
            />
          </div>
        ))}
        <img
          src={ICONS?.step3ExitIcon}
          alt='create'
        />
      </div>
      <div
        className='step3-write-content'
        onClick={handleClick}>
        {ggOpen ? (
          <>
            <GoGrowInput
              value={value}
              onChange={(e) => setValue(e.target.value)}
            />
            {/* <Select /> */}
          </>
        ) : (
          <div className='step3-textarea'>
            <textarea
              placeholder={initialText}
              value={value}
              // onChange={(e) => setValue(e.target.value)}
            />
          </div>
        )}
        <div className='step3-write-content-footer'>
          <img
            src={ICONS?.step3UploadIcon}
            alt='upload'
          />
          <img
            src={ICONS?.step3EmojiIcon}
            alt='emoji'
            // onClick={handleClick}
          />
          {/* {showEmojiPicker && (
            <Picker
              onSelect={handleEmojiClick}
              emojiSize={24} 
            />
          )} */}
        </div>
      </div>

      <div className='step3-button'>
        <h5
          onClick={() => dispatch(updateSteps(4))}
          className='pointer'>
          Skip
        </h5>
        <Button
          size={'medium'}
          label={'Publish'}
          onClick={() => dispatch(updateSteps(4))}
        />
      </div>
    </>
  );
};

export default Step3Create;
