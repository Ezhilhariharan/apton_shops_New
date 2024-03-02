import React, { useEffect, useState } from 'react';
import { images } from '../../../assets/images/index';
import '../styles/pictureUploader.css';

import CloseIcon from '../../../assets/customSVG/Close';
import { uploadFile } from '../../../helper/uploadFile';

const PictureUploader = ({ selectedImage, setSelectedImage, defaultImage }) => {
  const [image, setImage] = useState(defaultImage);

  useEffect(() => setImage(defaultImage), [defaultImage]);

  const handleImageChange = (e) => {
    let fileType = e.target.files[0]?.name?.split('.').pop();

    uploadFile(fileType, e.target.files[0]);
    if (e.target.files[0]) {
      setImage(URL?.createObjectURL(e.target.files[0]));
      setSelectedImage(URL?.createObjectURL(e.target.files[0]));
    } else {
      setImage(defaultImage);
      setSelectedImage(null);
    }
  };

  const handleDeleteImage = () => {
    setSelectedImage(null);
    setImage(defaultImage);
  };
  return (
    <div className='pictureUploaderContainer'>
      <img
        src={selectedImage ? selectedImage : image ? image : images?.coverError}
        alt='Profile'
        className='imageContainer'
        onError={(e) => {
          e.target.src = images?.coverError;
          e.target.onerror = null;
        }}
        onClick={() => {
          if (!selectedImage) {
            document.getElementById('fileInput').click();
          }
        }}
      />
      <input
        id='fileInput'
        type='file'
        accept='image/*'
        style={{ display: 'none' }}
        onChange={handleImageChange}
      />
      {selectedImage && (
        <span
          onClick={handleDeleteImage}
          className='closeIcon'>
          <CloseIcon
            stroke='#fff'
            fill='#616874'
          />
        </span>
      )}
    </div>
  );
};

export default PictureUploader;
