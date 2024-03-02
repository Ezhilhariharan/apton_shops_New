import React, { useState } from 'react';
import '../../style/DashboardCenter.css';

import Label from '../../../../components/form/label/label';
import { Input } from '../../../../components/form/Input/Input';
import { Button } from '../../../../components/form/Button/Button';

import { brandCategory } from '../../../../constant/app/dashboard/DashboardExtended';
import { images } from '../../../../assets/images/index';

import { Form } from 'antd';

import { useAspDispatch } from '../../../../test/jest-redux-hooks';
import { updateSteps } from '../../../../reduxToolkit/dashboardSlice';

import Select from '../../../../components/form/select/Select';

const input = {
  padding: '7px 8px',
  borderRadius: '20px',
};

const DashboardStep1 = ({ onBackClick }) => {
  const [selectedValue, setValue] = useState('');
  const dispatch = useAspDispatch();

  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const type = e.dataTransfer.files[0]?.type;
    }
    // console.log('file', e.dataTransfer.files);
    dragDropChange(e.dataTransfer.files[0]);
  };
  const handleChange = async (event) => {
    const file = event.target.files[0];
    const mediaUrl = await getBase64(file);
  };

  const dragDropChange = async (file) => {
    const mediaUrl = await getBase64(file);
  };
  const getBase64 = (file) => {
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.addEventListener('load', (event) => {
        const _loadedImageUrl = event.target.result;
        // if (value === 'Image') {
        //   const image = document.createElement('img');
        //   image.src = _loadedImageUrl;
        //   resolve(_loadedImageUrl);
        // } else if (value === 'Video') {
        //   const video = document.createElement('video');
        //   video.preload = 'metadata';
        //   video.onloadedmetadata = function () {
        //     resolve(_loadedImageUrl);
        //   };
        //   video.src = URL.createObjectURL(file);
        // }
        // let fileSize = file.size / (1024 * 1024);
        // if (value === 'Image') {
        //   if (fileSize <= 5) {
        //   }
        // } else if (value === 'Video') {
        //   if (fileSize <= 16) {
        // } else if (value === 'Document') {
        //   if (fileSize <= 100) {
        // }
      });

      reader.onerror = (error) => reject(error);
    });
  };

  const onFinish = () => {};

  return (
    <>
      <h2 className='brand-details'>Brand Details</h2>
      <div className='brandWrapper flex-row space-between'>
        <Form
          onFinish={onFinish}
          className='left-step1'
          autoComplete='off'>
          <Form.Item name='Brand Name'>
            <Label
              title='Brand Name'
              required
              className='brand-label'
            />
            <Input
              type='text'
              placeholder={'Enter brand name'}
              size={'medium'}
              style={input}
            />
          </Form.Item>
          <div style={{ marginTop: '7px' }} />
          <Form.Item
            name='Category'
            style={{ width: '100%' }}>
            <Label
              title='Category'
              required
              className='category-label'
            />
            <Select
              value={selectedValue}
              onChange={(val) => setValue(val)}
              options={brandCategory}
              placeholder={'Select a category'}>
              {/* {brandCategory?.map((item) => (
                <div
                  key={item?.id}
                  value={item?.categoryName}>
                  <div className='customOption'>
                    <img
                      src={item?.icon}
                      alt={item?.categoryName}
                    />
                    <span>{item?.categoryName}</span>
                  </div>
                </div>
              ))} */}
            </Select>
          </Form.Item>
        </Form>
        <div className='right-step1'>
          <span className='flex-row align-center'>Brand Logo</span>

          <label className='custom-file-upload flex-row pointer'>
            <input
              className='input'
              type='file'
              onChange={handleChange}
              // accept={fileRestriction}
            />
            <img
              src={images?.imageUpload}
              alt='upload'
              onDragOver={handleDrag}
              onDrop={handleDrop}
            />
          </label>
          {/* <div className='regenrate'>
            <img
              src={ICONS?.regenerateIcon}
              alt='upload'
            />
            <span1>Regenerate</span1>
          </div> */}
        </div>
      </div>
      <div className='create-brand flex-row align-right flex-end pointer'>
        <h5 onClick={onBackClick}>Back</h5>
        <Button
          label={'Create Brand'}
          size={'small'}
          onClick={() => dispatch(updateSteps(2))}
        />
      </div>
    </>
  );
};

export default DashboardStep1;
