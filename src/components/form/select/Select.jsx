// import React, { useState, useEffect } from 'react';
// import './select.css';

// import { ICONS } from '../../../assets/icons/index';

// import Radio from '../radio/RadioButton';

// function Select({
//   iconPrefix,
//   options,
//   readOnly,
//   placeholder,
//   value,
//   onChange,
//   className,
//   parentName,
//   disabled,
// }) {
//   const [selectedOption, setSelectedOption] = useState();
//   const [inputActive, setInputActive] = useState(false);

//   const selectingOption = (item) => {
//     setSelectedOption(item);
//     setInputActive(false);
//     onChange(item);
//   };

//   useEffect(() => {
//     if (parentName === 'template') {
//       setSelectedOption({
//         label: value,
//         value: value,
//       });
//     }
//   }, [value]);

//   return (
//     <div className={`selectWrapper ${className}`}>
//       <div className='selectInputWrapper'>
//         {iconPrefix && (
//           <img
//             alt='leftImage'
//             className='leftImage'
//             src={iconPrefix}
//           />
//         )}
//         <input
//           className='selectInput'
//           onFocus={() => setInputActive(!inputActive)}
//           // onBlur={() => setInputActive(false)}
//           placeholder={placeholder}
//           //   onChange={onChange}
//           value={selectedOption?.value ? selectedOption?.value : value}
//           //   disabled={disabled}
//           readOnly={readOnly}
//           //   aria-label={name}
//           //   data-testid={name}
//           //   type={type === 'password' ? (showEye ? 'text' : 'password') : type}
//           //   {...props}
//           disabled={disabled}
//         />
//         <img
//           alt='rightImage'
//           className='rightImage'
//           src={ICONS.SelectDropdown}
//           onClick={() => setInputActive(!inputActive)}
//         />
//       </div>

//       {inputActive && !disabled && (

//       {inputActive && (

//         <div className='selectOptionWrapper'>
//           {options?.map((item) => (
//             <div
//               className={`selectOptions flex-row align-center space-between ${
//                 selectedOption?.value === item?.value ? 'selectedOption' : ''
//               }`}
//               key={item?.id}
//               onClick={() => selectingOption(item)}>
//               <div className=' flex-row '>
//                 {item?.icon && (
//                   <img
//                     className='optionIcon'
//                     src={item?.icon}
//                     alt={item?.value}
//                   />
//                 )}
//                 {item?.value}
//               </div>
//               {selectedOption?.value === item?.value && <Radio selected={true} />}
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// }

// export default Select;

import React, { useState, useEffect } from 'react';
import './select.css';

import { ICONS } from '../../../assets/icons/index';

import Radio from '../radio/RadioButton';

function Select({
  iconPrefix,
  options,
  readOnly,
  placeholder,
  value,
  onChange,
  className,
  parentName,
  disabled,
}) {
  const [selectedOption, setSelectedOption] = useState();
  const [inputActive, setInputActive] = useState(false);

  const selectingOption = (item) => {
    setSelectedOption(item);
    setInputActive(false);
    onChange(item);
  };

  useEffect(() => {
    if (parentName === 'template') {
      setSelectedOption({
        label: value,
        value: value,
      });
    }
  }, [value]);

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
          value={selectedOption?.value ? selectedOption?.value : value}
          //   disabled={disabled}
          readOnly={readOnly}
          //   aria-label={name}
          //   data-testid={name}
          //   type={type === 'password' ? (showEye ? 'text' : 'password') : type}
          //   {...props}
          disabled={disabled}
        />
        <img
          alt='rightImage'
          className='rightImage'
          src={ICONS.SelectDropdown}
          onClick={() => setInputActive(!inputActive)}
        />
      </div>

      {inputActive && options && (
        <div className='selectOptionWrapper'>
          {options?.map((item) => (
            <div
              className={`selectOptions flex-row align-center space-between ${
                selectedOption?.value === item?.value ? 'selectedOption' : ''
              }`}
              key={item?.id}
              onClick={() => selectingOption(item)}>
              <div className=' flex-row '>
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
