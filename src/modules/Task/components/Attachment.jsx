import React, { useEffect, useState } from 'react';
import '../styles/Task.css';

// import { attachmentDropDown } from '../../../constant/app/campaign/campaignExtended';
import { ICONS } from '../../../assets/icons/index';

import { Button } from '../../../components/form/Button/Button';
// import DropDown from '../../../components/commonComponents/DropDown/DropDown';
import Avatar from '../../../components/commonComponents/avatar/Avatar';

export const Icon = [
  {
    id: 1,
    name: 'R',
    color: 'var(--backgroundRed)',
  },
];

const Attachment = () => {
  const [files, setFiles] = useState([]);
  const [uploadDates, setUploadDates] = useState([]);
  const [uploadIcon, setUploadIcon] = useState(false);
  // const [action, setAction] = useState(false);

  const handleFileChange = (e) => {
    const selectedFiles = e?.target?.files;
    function formatDateToShortString(date) {
      const today = new Date();
      const yesterday = new Date(today);
      yesterday.setDate(yesterday.getDate() - 1);

      if (date.toDateString() === today.toDateString()) {
        return 'Today';
      } else if (date.toDateString() === yesterday.toDateString()) {
        return 'Yesterday';
      } else {
        const options = { month: 'short', day: 'numeric' };
        return date.toLocaleDateString(undefined, options);
      }
    }

    const currentDate = new Date();
    const formattedDate = formatDateToShortString(currentDate);

    setUploadDates((prevUploadDates) => [
      ...prevUploadDates,
      ...Array(selectedFiles?.length)?.fill(formattedDate),
    ]);
    setFiles((prevFiles) => [...prevFiles, ...Array?.from(selectedFiles)]);
  };
  const handleDelete = (name) => {
    const updatedFiles = files?.filter((file) => file?.name !== name);
    setFiles(updatedFiles);
  };
  const formatFileSize = (size) => {
    if (size < 1024) {
      return `${size} B`;
    } else if (size < 1024 * 1024) {
      return `${(size / 1024).toFixed(2)} KB`;
    } else {
      return `${(size / (1024 * 1024)).toFixed(2)} MB`;
    }
  };

  const handleDownload = (file) => {
    const blob = new Blob([file], { type: 'application/octet-stream' });
    const url = URL?.createObjectURL(blob);
    const a = document?.createElement('a');
    a.href = url;
    a.download = file?.name;
    document?.body?.appendChild(a);
    a?.click();
    document?.body?.removeChild(a);

    URL?.revokeObjectURL(url);
  };

  // const onClick = () => {
  // setUploadIcon(true);
  // setAction(false);
  // };

  // const handleMouseLeave = () => {
  //   if (action) {
  //     setAction(false);
  //   }
  // };

  return (
    <>
      <div className='attachment-container flex-row align-center'>
        <img
          src={ICONS?.AttachmentIcon}
          alt='AttachmentIcon'
        />
        <span className='attachmentDropDown-name'>Attachment</span>
        <div className='attachmentDropDown-button p-relative pl-10'>
          <Button
            label={'Add'}
            size={'xm'}
            iconPrefix={ICONS.addSquareIcon}
            onClick={() => {
              setUploadIcon(true);
            }}
          />
          {/* {action && (
            <div className='attachmentDropDown-container pointer'>
              {attachmentDropDown?.map((item) => (
                <React.Fragment key={item?.id}>
                  <div className='attachmentDropDown-wrapper'>
                    <DropDown
                      iconPrefix={item?.iconPrefix}
                      title={item?.attachmentName}
                      onClick={onClick}
                    />
                  </div>
                  <div className='attachment-line border-b'></div>
                </React.Fragment>
              ))}
            </div>
          )} */}
        </div>
      </div>

      <div className='upload-icon-container flex-row align-center'>
        {files?.map((file) => (
          <>
            {files && (
              <div
                className='uploaded-image flex-row'
                key={file?.id}>
                <img
                  src={URL?.createObjectURL(file)}
                  alt='File'
                />
                <div className='uploaded-image-details flex-column space-between'>
                  <div className='flex-column'>
                    <span className='uploaded-image-name'>{file?.name}</span>
                    <span className='uploaded-image-size'>{formatFileSize(file?.size)}</span>
                  </div>
                  <span className='uploaded-image-date'>{uploadDates[file?.id]}</span>

                  <div className='download-icon'>
                    <div className='flex-row'>
                      <img
                        src={ICONS?.TaskDownload}
                        alt='TaskDownload'
                        onClick={() => handleDownload(file)}
                        className='pointer'
                      />
                      <img
                        src={ICONS?.trashCampaignIcon}
                        alt='trashCampaignIcon'
                        className='trashCampaignIcon-upload'
                        onClick={() => {
                          handleDelete(file?.name);
                        }}
                      />
                    </div>
                    <div className='task-avatar'>
                      {Icon?.map((avatar) => (
                        <Avatar
                          key={avatar?.id}
                          name={avatar?.name}
                          style={{
                            backgroundColor: avatar?.color,
                            width: '18px',
                            height: '18px',
                            color: 'white',
                            fontSize: '0.6vw',
                          }}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </>
        ))}
        {uploadIcon && (
          <div className='upload-icon-wrapper'>
            <label
              htmlFor='fileInput'
              className='custom-file-input'>
              <img
                src={ICONS?.step3UploadIcon}
                alt='upload'
              />
            </label>
            <input
              type='file'
              id='fileInput'
              style={{ display: 'none' }}
              onChange={(e) => {
                handleFileChange(e);
              }}
              accept='.pdf, .doc, .docx, .ppt, .pptx, .xls, .xlsx, .mp4, .avi, .mkv, .jpg, .jpeg, .png'
            />
          </div>
        )}
      </div>
    </>
  );
};

export default Attachment;
