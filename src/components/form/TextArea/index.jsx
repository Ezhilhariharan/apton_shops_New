// import React from 'react';
// import { Input } from 'antd';
// import './styles.css';

// const { TextArea } = Input;
// const CustomTextArea = ({
//   value,
//   showCount,
//   maxLength,
//   customCount,
//   autoSize,
//   placeholder,
//   rows,
//   className,
//   padding = 'pr-16',
//   onChange = () => {},
//   readOnly,
//   textAreaClass,
// }) => {
//   return (
//     <div className={`relative ${className}`}>
//       <TextArea
//         placeHolder
//         value={value}
//         showCount={showCount}
//         rows={rows}
//         maxLength={maxLength}
//         onChange={onChange}
//         autoSize={autoSize}
//         readOnly={readOnly ? true : false}
//         placeholder={placeholder}
//         // className={`textArea ${padding} ${value?.length === maxLength ? 'alert' : ''}`}
//         className={` ${textAreaClass ? textAreaClass : 'textAre'} ${padding} ${
//           value?.length === maxLength ? 'alert' : ''
//         }`}
//       />
//       {customCount && (
//         <div className='customCount'>
//           {value ? value.length : 0}/{maxLength}
//         </div>
//       )}
//     </div>
//   );
// };

// export default CustomTextArea;

import React from 'react';
import { Input } from 'antd';
import './styles.css';

const { TextArea } = Input;
const CustomTextArea = ({
  value,
  showCount,
  maxLength,
  customCount,
  autoSize,
  placeholder,
  rows,
  className,
  textAreaClass,
  padding = 'pr-16',
  onChange = () => {},
  type = 'textArea',
  ...rest
}) => {
  return (
    <div className={`relative ${className}`}>
      {type === 'textArea' ? (
        <TextArea
          placeHolder
          value={value}
          showCount={showCount}
          rows={rows}
          maxLength={maxLength}
          onChange={onChange}
          autoSize={autoSize}
          placeholder={placeholder}
          className={` ${textAreaClass ? textAreaClass : 'textArea'} ${padding} ${
            value?.length === maxLength ? 'alert' : ''
          }`}
          {...rest}
        />
      ) : (
        <input
          placeHolder
          onChange={onChange}
          value={value}
          className='textInput'
          maxLength={maxLength}
          {...rest}
        />
      )}
      {customCount && (
        <div className='customCount'>
          {value ? value.length : 0}/{maxLength}
        </div>
      )}
    </div>
  );
};

export default CustomTextArea;
