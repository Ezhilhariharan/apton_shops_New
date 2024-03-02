import React, { useState } from 'react';
import '../../styles/WorkSpace/SocialMedia.css';

import { ICONS } from '../../../../assets/icons/index';
import { useAspDispatch } from '../../../../test/jest-redux-hooks';

import Comment from './Comment';
import ScheduleDate from './ScheduleDate';
import { Button } from '../../../../components/form/Button/Button';
import label from '../../../../components/commonComponents/Label/index';
import RadioButton from '../../../../components/form/radio/RadioButton';

const WorkArea = () => {
  const [value, setValue] = useState('');
  const [files, setFiles] = useState([]);
  const [openUpload, setOpenUpload] = useState(false);

  const [isRotated, setRotated] = useState(false);

  const rotationClass = isRotated ? 'rotate' : '';

  const handleClick = () => {
    setOpenUpload(!openUpload);
    setRotated(!isRotated);
  };

  const handleChange = (e) => {
    const selectedFiles = e?.target?.files;
    const newFiles = Array.from(selectedFiles);

    setFiles((prevFiles) => [...prevFiles, ...newFiles]);
  };

  const handleDelete = (name) => {
    const updatedFiles = files?.filter((file) => file?.name !== name);
    setFiles(updatedFiles);
  };

  const dispatch = useAspDispatch();

  const initialText = `Write a content / Press ‘space’ for GG`;

  return (
    <div className='work-area-main-container flex-column'>
      <div className='work-area-button flex-row flex-end'>
        <Button
          size={'xl'}
          label={'Save'}
        />
      </div>
      <div className='work-area-container flex-column align-end space-between'>
        <textarea
          placeholder={initialText}
          value={value}
          onChange={(e) => setValue(e?.target?.value)}
          maxLength={2200}
          className='workArea-text'
        />
        <span className='maximum-length'>0/2200</span>
      </div>
      <>
        <div className='work-area-main-wrapper flex-column'>
          <div className='work-area-wrapper flex-row space-between pointer'>
            <div className='flex-row'>
              <span
                className='workArea-name pr-10'
                onClick={handleClick}>
                Add Media
              </span>
              {files?.length > 0 && <RadioButton selected={true} />}
            </div>
            <img
              src={ICONS?.WorkSpaceRight}
              alt='WorkSpaceRight'
              className={`rotating-image ${rotationClass}`}
              onClick={handleClick}
            />
          </div>
          <div className='work-area-wrapper1 flex-row align-center '>
            {files?.slice(0, 10)?.map((file) => (
              <div className='work-area-wrap'>
                {files && openUpload && (
                  <div
                    className='work-area-uploaded-image flex-row'
                    key={file?.id}>
                    {file.type.startsWith('image/') && (
                      <img
                        src={URL?.createObjectURL(file)}
                        alt='Image'
                      />
                    )}
                    {file.type.startsWith('video/') && (
                      <video
                        src={URL?.createObjectURL(file)}
                        alt='Video'
                        autoPlay
                        // controls
                      />
                    )}
                    <img
                      className='popup-exit1 pointer'
                      src={ICONS.ExitIcon}
                      alt='popup'
                      onClick={() => {
                        handleDelete(file?.name);
                      }}
                    />
                  </div>
                )}
              </div>
            ))}

            {openUpload && (
              <div className='upload-icon-wrapper'>
                <label
                  htmlFor='fileInputType'
                  className='custom-file-input'>
                  <img
                    src={ICONS?.step3UploadIcon}
                    alt='upload'
                  />
                </label>
                <input
                  type='file'
                  id='fileInputType'
                  style={{ display: 'none' }}
                  onChange={(e) => {
                    handleChange(e);
                  }}
                  accept='.mp4, .avi, .mkv, .jpg, .jpeg, .png'
                />
              </div>
            )}
          </div>
          <div className='border-work-area' />
          <Comment />
          {/* <EditOptions /> */}
          <ScheduleDate />
        </div>
      </>
    </div>
  );
};

export default WorkArea;
