import React, { useState } from 'react';
import '../../styles/WorkSpace/SocialMedia.css';

import { ICONS } from '../../../../assets/icons';

const ImageUploading = () => {
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFileInputActive, setIsFileInputActive] = useState(true);

  const handleFileChange = (e) => {
    const files = e?.target?.files;
    if (files && files.length > 0) {
      setSelectedFiles([...selectedFiles, ...files]);
    }
  };

  

  const handleIconClick = (direction) => {
    setIsFileInputActive(false);

    if (direction === 'prev') {
      setCurrentIndex((prevIndex) => (prevIndex === 0 ? selectedFiles.length - 1 : prevIndex - 1));
    } else if (direction === 'next') {
      setCurrentIndex((prevIndex) => (prevIndex === selectedFiles.length - 1 ? 0 : prevIndex + 1));
    }

    setTimeout(() => {
      setIsFileInputActive(true);
    }, 100);
  };

  return (
    <div className='imageUploading-image-container'>
      <label
        htmlFor='fileInput'
        className='imageUploading-image-container'>
        {selectedFiles.length > 0 ? (
          <div className='posted-image1 flex-row align-center justify-center '>
            {selectedFiles[currentIndex]?.type?.startsWith('image/') ? (
              <img
                src={URL.createObjectURL(selectedFiles[currentIndex])}
                alt='SelectedImage'
                className='image-uploaded'
              />
            ) : (
              <video
                src={URL.createObjectURL(selectedFiles[currentIndex])}
                alt='SelectedVideo'
                className='video-uploaded'
                autoPlay
                // controls
              />
            )}
            <div className='image-prev-next-icon flex-row space-between'>
              <img
                src={ICONS?.carouselLeft}
                alt='WorkSpaceRight'
                className={'prev'}
                onClick={() => handleIconClick('prev')}
              />

              <img
                src={ICONS?.carouselRight}
                alt='WorkSpaceRight'
                className={'next'}
                onClick={() => handleIconClick('next')}
              />
            </div>
          </div>
        ) : (
          <div className='imageUploading-image-container'>
            <img
              src={ICONS?.SocialMediaUpload}
              alt='SocialMediaUpload'
            />
            <div className='text-overlay'>Click or Drag & Drop here to add images or videos</div>
          </div>
        )}
      </label>
      {isFileInputActive && (
        <input
          type='file'
          id='fileInput'
          style={{ display: 'none' }}
          onChange={(e) => {
            handleFileChange(e);
          }}
          accept='.mp4, .avi, .mkv, .jpg, .jpeg, .png'
          // multiple
        />
      )}
    </div>
  );
};

export default ImageUploading;
