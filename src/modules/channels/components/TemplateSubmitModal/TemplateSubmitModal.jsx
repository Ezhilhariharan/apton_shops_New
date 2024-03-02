import React, { useState, useEffect } from 'react';

import './styles.css';

import { Button } from '../../../../components/form/Button/Button';
import CheckBox from '../../../../components/form/checkBox/checkBox';

import CloseIcon from '../../../../assets/customSVG/Close';
import { ICONS } from '../../../../assets/icons';

const TemplateSubmitModal = ({
  setShowSubmitModal,
  selectedLanguages,
  submit,
  fieldValidateLang,
}) => {
  const [languageList, setLanguageList] = useState([]);

  useEffect(() => {
    let list = [];
    fieldValidateLang?.map((eachLanguage) => {
      for (let property in eachLanguage) {
        if (Object.keys(eachLanguage[property]).length > 0) {
          for (const [key, value] of Object.entries(eachLanguage[property])) {
            if (typeof value === 'object') {
              for (const [childKey, childValue] of Object.entries(value)) {
                if (typeof childValue === 'object') {
                  for (const [nestedChildKey, nestedChildValue] of Object.entries(childValue)) {
                    const checkField = isPropertyValueEmpty(childValue, nestedChildValue);
                    checkField
                      ? list.push({ language: property, selected: false, fieldError: true })
                      : '';
                  }
                } else {
                  const checkField = isPropertyValueEmpty(value, childValue);
                  checkField
                    ? list.push({ language: property, selected: false, fieldError: true })
                    : '';
                }
              }
            } else {
              const checkField = isPropertyValueEmpty(eachLanguage[property], value);
              checkField
                ? list.push({ language: property, selected: false, fieldError: true })
                : '';
            }
          }
        } else {
          list.push({ language: property, selected: false, fieldError: true });
        }
      }
    });

    fieldValidateLang?.map((each) => {
      let filterErrorList = list?.filter((item) => item?.language === Object.keys(each).toString());
      if (filterErrorList?.length === 0) {
        list.push({ language: Object.keys(each).toString(), selected: true, fieldError: false });
      }
    });
    setLanguageList(list);
  }, [fieldValidateLang]);

  const isPropertyValueEmpty = (obj, propertyName) => {
    return (
      obj.hasOwnProperty(propertyName) &&
      (obj[propertyName] === null ||
        obj[propertyName] === undefined ||
        (typeof obj[propertyName] === 'string' && obj[propertyName].trim() === '') ||
        (Array.isArray(obj[propertyName]) && obj[propertyName].length === 0))
    );
  };

  const selectedLang = (e) => {
    setLanguageList((prev) => {
      const newState = prev?.map((prevItem) => {
        if (e.target.value === prevItem?.language && !prevItem?.fieldError) {
          return prevItem?.selected
            ? { ...prevItem, selected: false }
            : { ...prevItem, selected: true };
        } else {
          return { ...prevItem };
        }
      });
      return newState;
    });
  };
  return (
    <>
      <div className='blackBg'></div>
      <div className='templateSubmitModalContainer'>
        <div className='popupTitle'>
          <div className='font-large weight-bold'>Confirm which languages you're submitting</div>
          <p className='popupDesc'>
            You can't submit languages where the message body is incomplete or the content has
            errors.
          </p>
          <span
            onClick={() => {
              setShowSubmitModal(false);
            }}
            className='closeIcon'>
            <CloseIcon
              stroke='#fff'
              fill='#616874'
            />
          </span>
        </div>
        <div className='modalPopupList'>
          <div className='popupList'>
            {languageList.map((listItem) => (
              <div className='popupItem'>
                <div>
                  {listItem?.language}
                  <div className='flex-row'>
                    <img
                      src={listItem?.fieldError ? ICONS?.fieldError : ICONS?.checkSquare}
                      alt='check'
                    />
                    {listItem?.fieldError
                      ? 'Required fields inCompleted'
                      : 'Required fields completed'}
                  </div>
                </div>
                <CheckBox
                  checked={listItem?.selected}
                  value={listItem?.language}
                  disabled={listItem?.fieldError}
                  onChangeClicked={selectedLang}
                />
              </div>
            ))}
          </div>
        </div>
        <div className='confirmationModalBottom'>
          <Button
            className='btn cancelBtn'
            size={'medium'}
            label='Cancel'
            onClick={() => {
              setShowSubmitModal(false);
            }}
          />

          <Button
            className={`btn continueBtn enableBtn`}
            size={'medium'}
            label='Submit'
            onClick={() => {
              setShowSubmitModal(false);
              submit(languageList);
            }}
          />
        </div>
      </div>
    </>
  );
};

export default TemplateSubmitModal;
