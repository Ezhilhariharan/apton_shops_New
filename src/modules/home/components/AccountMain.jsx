import React, { useRef, useState } from 'react';
import '../styles/account.css';

import { ICONS } from '../../../assets/icons/index';
import { Button } from '../../../components/form/Button/Button';

const AccountMain = () => {
  const fileInputRef = useRef(null);
  const [files, setFiles] = useState([]);
  const [openUpload, setOpenUpload] = useState(false);

  const handleClick = () => {
    fileInputRef.current.click();
    setOpenUpload(openUpload);
    //  setRotated(!isRotated);
  };

  const handleChange = (e) => {
    const selectedFiles = e?.target?.files;
    const newFiles = Array.from(selectedFiles);

    setFiles(() => [...newFiles]);
  };

  const handleDelete = (name) => {
    const updatedFiles = files?.filter((file) => file?.name !== name);
    setFiles(updatedFiles);
  };
  return (
    <div className='AccountPage-container'>
      <div className='AccountPage_wrapper'>
        <div className='AccountProfile flex-row align-center space-between'>
          <div className='flex-row align-center'>
            {files?.length > 0 ? (
              <div className=''>
                {files?.map((file) => (
                  <>
                    {files  && (
                      <div
                        className='Account-uploaded-image flex-row '
                        key={file?.id}>
                        <img
                          src={URL?.createObjectURL(file)}
                          alt='File'
                        />
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
                  </>
                ))}
              </div>
            ) : (
              <span className='flex-row justify-center align-center '>VD</span>
            )}

            <div className='flex-column'>
              <p className='pl-10'>Profile Picture</p>
              <span>Uploads must be in either .jpg or .png formats.</span>
            </div>
          </div>
          <div className='upload-icon-wrapper'>
            <label
              htmlFor='fileInputType'
              className='custom-file-input
              '>
              <Button
                label={'Upload'}
                size={'medium'}
                onClick={handleClick}
              />
            </label>
            <input
              type='file'
              id='fileInputType'
              ref={fileInputRef}
              style={{ display: 'none' }}
              onChange={handleChange}
              accept='.jpg, .jpeg, .png'
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountMain;
