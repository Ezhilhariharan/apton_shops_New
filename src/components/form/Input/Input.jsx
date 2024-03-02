import React, { useState } from 'react';
import './Input.css';

import { ICONS } from '../../../assets/icons/index';

import { budgetSmallDropdown } from '../../../constant/app/campaign/campaign';

export const Input = ({
  primary,
  backgroundColor,
  size,
  placeholder,
  iconPrefix,
  iconPrefixStyle,
  iconSuffix,
  iconSuffixPassword,
  onChange,
  value,
  type,
  readOnly,
  disabled,
  name,
  rightDropDown,
  handleChange,
  ...props
}) => {
  const [showEye, setShowEye] = useState(false);
  const [selectedDropdown, setSelectedDropdown] = useState(budgetSmallDropdown[0]);

  return (
    <div
      className={`storybook-input-container`}
      style={{ backgroundColor }}>
      {iconPrefix && (
        <img
          alt='leftImage'
          className='leftImage'
          src={iconPrefix}
          style={iconPrefixStyle}
        />
      )}
      <input
        className='storybook-input'
        placeholder={placeholder}
        onChange={onChange}
        value={value}
        disabled={disabled}
        readOnly={readOnly}
        aria-label={name}
        data-testid={name}
        type={type === 'password' ? (showEye ? 'text' : 'password') : type}
        {...props}
      />
      {iconSuffix && (
        <img
          alt='rightImage'
          className='rightImage'
          src={iconSuffix}
          onChange={handleChange}
        />
      )}
      {iconSuffixPassword && (
        <img
          alt='rightImage'
          className='rightImage'
          src={showEye ? iconSuffixPassword : ICONS.passwordEyeClose}
          onClick={() => setShowEye(!showEye)}
        />
      )}
      {rightDropDown && (
        <div className='smallDropdownWrapper'>
          <div className='selectedValue flex-row space-between'>
            <div className=' flex-row align-center'>
              <img
                src={selectedDropdown?.icon}
                alt='dropDown'
                className='dollarAndMoney'
              />
              {selectedDropdown?.name}
            </div>
            <img
              src={ICONS?.SelectDropdown}
              alt='dropDown'
              className='smallDropdown mr-5'
            />
          </div>
          {/* <div className='dropDownList'>
            {budgetSmallDropdown?.map((item) => (
              <div
                key={item?.id}
                className='options flex-row align-center'
                onClick={() => setSelectedDropdown(item)}>
                <img
                  src={item?.icon}
                  alt='dropDown'
                  className='dollarAndMoney'
                />
                {item?.name}
              </div>
            ))}
          </div> */}
        </div>
      )}
    </div>
  );
};
