import React, { useState, useEffect } from 'react';
import './HeaderDropDown.css';

import { ICONS } from '../../../assets/icons/index';
import RadioButton from '../../form/radio/RadioButton';

import { useAspSelector, useAspDispatch } from '../../../test/jest-redux-hooks';
import { updateSignUpSteps } from '../../../reduxToolkit/authSlice';
import { updateCurrentBrand } from '../../../reduxToolkit/appSlice';
import { Popover } from 'antd';

const HeaderDropDown = () => {
 const [isDropdownOpen, setIsDropdownOpen] = useState(false);
 const [selectedBrand, setSelectedBrand] = useState('');
 const [brandList, setBrandList] = useState([]);

 const dispatch = useAspDispatch();
 const { currentUser, currentBrand } = useAspSelector((state) => state.app);

 useEffect(() => {
   setBrandList(currentUser?.brands);
   if (!currentBrand?.hasOwnProperty('id')) {
     currentUser?.brands?.length > 0 && dispatch(updateCurrentBrand(currentUser?.brands[0]));
     currentUser?.brands?.length > 0 && setSelectedBrand(currentUser?.brands[0]?.name);
   } else {
     setSelectedBrand(currentBrand?.name);
   }
 }, [currentUser]);

 const toggleDropdown = () => {
   setIsDropdownOpen(!isDropdownOpen);
 };

 const handleBrandSelect = (brand) => {
   dispatch(updateCurrentBrand(brand));
   setSelectedBrand(brand?.name);
   setIsDropdownOpen(false);
 };

 const handleVisibleChange = (visible) => {
   if (!visible) {
     setIsDropdownOpen(false);
   }
 };

  const PopupContent = () => {
    return (
      <div className='header-popup'>
        <span className='create-brand-wrap'>
          <span>Brand Workspace</span>
          <img
            src={ICONS.createBrandIcon}
            alt='create'
          />
        </span>
        {brandList?.map((brand) => (
          <div
            key={brand?.id}
            className='menu-wrapper'
            onClick={() => handleBrandSelect(brand)}>
            <div className='item-wrapper'>
              <div className='initial-label'>{brand?.name?.slice(0, 1)}</div>
              <div
                key={brand?.id}
                className='dropdown-item'>
                <h4>{brand?.name}</h4>
                <div className='plan-wrap'>
                  <span>Free plan</span>
                  <span>6 members</span>
                </div>
              </div>
            </div>
            {brand?.name === selectedBrand && <RadioButton selected={true} />}
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className='drop-down-wrapper'>
      <Popover
        content={<PopupContent />}
        trigger='click'
        arrow={false}
        placement='bottomLeft'
        open={isDropdownOpen}
        onOpenChange={handleVisibleChange}>
        <div
          className={`dropdown-toggle ${selectedBrand ? 'selected-brand' : 'default-brand'}`}
          onClick={toggleDropdown}>
          {selectedBrand ? (
            <>
              <div className='initial-label-top'>{selectedBrand?.charAt(0)?.toUpperCase()}</div>
              <div className='ellipsis-text'>{selectedBrand?.substring(0, 25)}</div>
            </>
          ) : (
            'Select Brand'
          )}
          <img
            src={ICONS.dropDownIcon}
            alt='dropdown'
            className={`dropdown-icon ${isDropdownOpen ? 'open' : ''}`}
          />
        </div>
      </Popover>
    </div>
  );
};

export default HeaderDropDown;
