import React, { useState } from 'react';
import '../../styles/WorkSpace/whatsapp.css';

import { images } from '../../../../assets/images/index';
import { ICONS } from '../../../../assets/icons';

const FileDownload = ({ fileName, prospects }) => {
  const [cancelAction, setCancelAction] = useState(true);

  const handleClose = () => {
    setCancelAction(false);
  };
  return (
    <>
      {cancelAction && (
        <div className='File-container flex-row align-center space-between'>
          <div className=' File-wrapper flex-column'>
            <div className='flex-row align-center pointer'>
              <img
                src={images?.WhatsappCsvIcon}
                alt='csv icon'
              />
              <p>{fileName}</p>
              <img
                src={ICONS?.TaskDownload}
                alt='downloadIcon'
              />
            </div>
            <div className='flex-row'>
              <span>{prospects} prospects</span>
            </div>
          </div>

          <img
            src={ICONS?.cancelX}
            alt='close'
            onClick={() => handleClose()}
            className='pointer'
          />
        </div>
      )}
    </>
  );
};

export default FileDownload;
