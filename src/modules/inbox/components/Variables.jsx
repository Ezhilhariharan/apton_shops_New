import React, { useState } from 'react';
import '../styles/inboxExtended.css';

import { inboxVariables, inboxVariablesSample } from '../../../constant/app/inbox/Inbox';

const Variables = () => {
  const [inputValues1, setInputValues1] = useState(
    inboxVariables?.reduce((acc, item) => {
      acc[item?.id] = item.placeholder;
      return acc;
    }, {}),
  );

  const [inputValues2, setInputValues2] = useState(
    inboxVariablesSample?.reduce((acc, item) => {
      acc[item?.id] = item.placeholder;
      return acc;
    }, {}),
  );

  const handleInputChange = (e, id, setValues) => {
    const { value } = e.target;
    setValues((prevValues) => ({
      ...prevValues,
      [id]: value,
    }));
  };

  return (
    <div>
      <div className='variables-container-middle'>
        <div className='variables-heading flex-row space-between'>
          <span>Variable</span>
          <span>Add sample content</span>
        </div>
        <div className='variables-main-wrapper flex-row space-between'>
          <div>
            {inboxVariables?.map((item) => (
              <div
                key={item.id}
                className='variables-wrapper'>
                <span>{item?.placeholder}</span>
              </div>
            ))}
          </div>
          <div>
            {inboxVariablesSample?.map((item) => (
              <div
                key={item.id}
                className='variables-wrapper1 '>
                <input
                  type='text'
                  placeholder={inputValues2[item.id]}
                  onChange={(e) => handleInputChange(e, item.id, setInputValues2)}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Variables;
