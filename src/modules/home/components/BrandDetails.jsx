import React, { useRef, useState } from 'react';
import '../styles/Brand.css';

import { Button } from '../../../components/form/Button/Button';
import Select from '../../../components/form/select/Select';
import { Form } from 'antd';

import Label from '../../../components/form/label/label';
import { Input } from '../../../components/form/Input/Input';

import { brandCategory } from '../../../constant/app/dashboard/DashboardExtended';

import { ICONS } from '../../../assets/icons/index';

const BrandDetails = () => {
  const fileInputRef = useRef(null);

  const [selectedValue, setValue] = useState('');
  const [files, setFiles] = useState([]);
  const [openUpload, setOpenUpload] = useState(false);

  const handleClick = () => {
    fileInputRef.current.click();
    // setOpenUpload(true);
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
    <div className='brand-details-main-container'>
      <div className='brand-details-container flex-row space-between'>
        <div className='flex-row '>
          {files?.length > 0 ? (
            <div className=''>
              {files?.map((file) => (
                <>
                  {
                    <div
                      className='brand-upload-image flex-row pointer'
                      key={file?.id}>
                      <img
                        src={URL?.createObjectURL(file)}
                        alt='File'
                        className='brand-uploaded-image'
                      />
                      <img
                        className='brand-popup-exit pointer'
                        src={ICONS.ExitIcon}
                        alt='popup'
                        onClick={() => {
                          handleDelete(file?.name);
                        }}
                      />
                    </div>
                  }
                </>
              ))}
            </div>
          ) : (
            <div
              className='right-step1 pointer'
              onClick={handleClick}>
              <label
                htmlFor='fileInputType'
                className='custom-file-upload1 flex-row align-center justify-center pointer '>
                <input
                  // className='input'
                  type='file'
                  id='fileInputTypes'
                  ref={fileInputRef}
                  onChange={handleChange}
                  accept=' .jpg, .jpeg, .png'
                />
                <img
                  src={ICONS?.BillingUploadIcon}
                  alt='upload'
                  //   onDragOver={handleDrag}
                  //   onDrop={handleDrop}
                />

                <p>Gochew Grill</p>
              </label>
            </div>
          )}
        </div>

        <Form
          //   onFinish={onFinish}
          className='left-step1'
          autoComplete='off'>
          <Form.Item name='Brand Name'>
            <Label
              title='Brand Name'
              className='brand-label'
            />
            <Input
              type='text'
              placeholder={'Enter brand name'}
              // size={'small'}
              style={{ height: '4.5vh', width: '25vw' }}
            />
          </Form.Item>
          <div style={{ marginTop: '7px' }} />
          <Form.Item
            name='Category'
            style={{ width: '100%' }}>
            <Label
              title='Category'
              className='category-label'
            />
            <Select
              value={selectedValue}
              onChange={(val) => setValue(val)}
              options={brandCategory}
              placeholder={'Select a category'}
              style={{ width: '100%' }}></Select>
          </Form.Item>
        </Form>
      </div>
      <div className='create-brand flex-row align-right flex-end pointer'>
        <Button
          label={'Save'}
          size={'small'}
        />
      </div>
    </div>
  );
};

export default BrandDetails;
