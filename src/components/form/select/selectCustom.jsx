import React, { useState } from 'react';
import './select.css';

import { ICONS } from '../../../assets/icons/index';

import Radio from '../radio/RadioButton';

function Select({ value, iconPrefix, options, readOnly, placeholder, onChange, className }) {
  const [selectedOption, setSelectedOption] = useState(value);
  const [inputActive, setInputActive] = useState(false);

  const selectingOption = (item) => {
    onChange(item);
    setSelectedOption(item);
    setInputActive(false);
  };
  return (
    <div className={`selectWrapper ${className}`}>
      <div className='selectInputWrapper'>
        {iconPrefix && (
          <img
            alt='leftImage'
            className='leftImage'
            src={iconPrefix}
          />
        )}
        <input
          className='selectInput'
          onFocus={() => setInputActive(!inputActive)}
          // onBlur={() => setInputActive(false)}
          placeholder={placeholder}
          //   onChange={onChange}
          value={selectedOption?.value}
          //   disabled={disabled}
          readOnly={readOnly}
          //   aria-label={name}
          //   data-testid={name}
          //   type={type === 'password' ? (showEye ? 'text' : 'password') : type}
          //   {...props}
        />
        <img
          alt='rightImage'
          className='rightImage'
          src={ICONS.SelectDropdown}
          onClick={() => setInputActive(!inputActive)}
        />
      </div>
      {inputActive && (
        <div className='selectOptionWrapper'>
          {options?.map((item) => (
            <div
              className={`selectOptions flex-row align-center space-between ${
                selectedOption?.value === item?.value ? 'selectedOption' : ''
              }`}
              key={item?.id}
              onClick={(e) => {
                e.stopPropagation();
                if (!item?.disabled) {
                  selectingOption(item);
                }
              }}>
              <div className={`${item?.disabled ? 'optionsDisabled' : ''} text-black flex-row `}>
                {item?.icon && (
                  <img
                    className='optionIcon'
                    src={item?.icon}
                    alt={item?.value}
                  />
                )}
                {item?.value}
              </div>
              {selectedOption?.value === item?.value && <Radio selected={true} />}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Select;
