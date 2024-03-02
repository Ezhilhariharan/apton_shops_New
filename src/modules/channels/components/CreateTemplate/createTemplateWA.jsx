import React, { useEffect, useState } from 'react';

import { useNavigate } from 'react-router-dom';

import { Select } from 'antd';

import './styles.css';

import { Button } from '../../../../components/form/Button/Button';
import RadioOption from '../../../../components/form/RadioButton/radioOption';
import CustomTextArea from '../../../../components/form/TextArea';

import SpeakerPhone from '../../../../assets/customSVG/SpeakerPhone';
import Bell from '../../../../assets/customSVG/Bell';

import { LANGUAGE_OPTIONS } from '../../constant';

import { checkTemplateExits } from '../../api/Api';

import { useAspSelector, useAspDispatch } from '../../../../test/jest-redux-hooks';
import { updateTemplateDetails } from '../../../../reduxToolkit/channelSlice';

const CreateTemplateWA = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState('');
  const [templateName, setTemplateName] = useState('');
  const [selectedLanguages, setSelectedLanguages] = useState([]);
  const [enableRedirection, setEnableRedirection] = useState(false);
  const [templateNameError, setTemplateNameError] = useState(false);

  const { currentBrand } = useAspSelector((state) => state.app);
  const templateField = useAspSelector((state) => state?.Channel?.templateDetails);
  const dispatch = useAspDispatch();

  const handleRadioChange = (value) => {
    setSelectedCategory(value);
    dispatch(
      updateTemplateDetails({
        ...templateField,
        category: value === 'custom' || value === 'forms' ? 'marketing' : 'utility',
      }),
    );
  };
  const handleContinue = () => {
    if (enableRedirection) {
      navigate('template-details', {
        state: {
          selectedCategory: selectedCategory === 'utility' ? selectedCategory : 'marketing',
          templateName,
          selectedLanguages,
        },
      });
    }
  };

  useEffect(() => {
    if (selectedCategory && templateName && selectedLanguages?.length) {
      setEnableRedirection(true);
    } else {
      setEnableRedirection(false);
    }
  }, [selectedCategory, templateName, selectedLanguages]);

  const checkingTemplate = (val) => {
    setTemplateName(val);
    dispatch(
      updateTemplateDetails({
        ...templateField,
        templateName: val,
      }),
    );
    checkTemplateExits(currentBrand?.id, val).then((res) => {
      if (res?.status === 200) {
        setTemplateNameError(res?.data?.exists);
      }
    });
  };

  const updateLanguage = (value) => {
    let addingLanguage = [];
    value?.map((language) => {
      addingLanguage = [...addingLanguage, { [language]: {} }];
    });
    dispatch(updateTemplateDetails({ ...templateField, language: addingLanguage }));
    setSelectedLanguages(value);
  };

  return (
    <div className='createTemplateContainer'>
      <div className='templateHeader'>
        <div className='templateTitle'>New message template</div>
        <div className='templateButtonContainer'>
          <Button
            className='btn cancelBtn'
            size={'medium'}
            label='Cancel'
            onClick={() => navigate('/user/channels/whatsapp')}
          />

          <Button
            className={`btn continueBtn ${enableRedirection ? 'enableBtn' : ''}`}
            size={'medium'}
            label='Continue'
            onClick={handleContinue}
          />
        </div>
      </div>

      <div className='templateCategories'>
        <div className='categoryTextContainer'>
          <div className='font-normal weight-bold'>Category</div>
          <div
            style={{ color: 'var(--font-400)' }}
            className='font-sm weight-medium'>
            Choose a category that best describes your message template.
          </div>
        </div>
        <div
          className={`marketingContainer ${
            ['custom', 'forms'].includes(selectedCategory) ? 'marketingContainerSelected' : ''
          }`}>
          <div className='flex-row align-center'>
            <div
              className={`w-8 h-8 ${
                ['custom', 'forms'].includes(selectedCategory) ? 'bg-[#25c277]' : 'bg-white'
              } rounded-full flex items-center justify-center `}>
              <SpeakerPhone
                width='20'
                height='20'
                stroke={['custom', 'forms'].includes(selectedCategory) ? '#fff' : '#616874'}
              />
            </div>
            <div className='flex-column ml-10'>
              <div className='font-normal weight-bold'>Marketing</div>
              <div
                style={{ color: 'var(--font-400)' }}
                className='font-xs weight-medium'>
                Promotions or information about your business, products or services Or any message
                that isn't utility or authentication.
              </div>
            </div>
          </div>

          <div className='flex gap-4 items-center mt-3 ml-12'>
            <RadioOption
              value='custom'
              selectedValue={selectedCategory}
              onChange={handleRadioChange}
              id='custom'
              name='category'
            />
            <label
              htmlFor='custom'
              className='cursor-pointer'>
              <div className='font-medium weight-bold'>Custom</div>
              <div
                style={{ color: 'var(--font-400)' }}
                className='font-xs weight-medium'>
                Send promotional offers, announcements and more to increase awareness and
                engagement.
              </div>
            </label>
          </div>

          <div className='flex gap-4 items-center mt-3 ml-12'>
            <RadioOption
              value='forms'
              selectedValue={selectedCategory}
              onChange={handleRadioChange}
              id='forms'
              name='category'
            />
            <label
              htmlFor='forms'
              className='cursor-pointer'>
              <div className='font-medium weight-bold'>Forms</div>
              <div
                style={{ color: 'var(--font-400)' }}
                className='font-xs weight-medium'>
                Promotions or information about your business, products or services Or any message
                that isn't utility or authentication.
              </div>
            </label>
          </div>
        </div>

        <div
          className={`marketingContainer mt-4 flex items-center gap-3 cursor-pointer
          ${['utility'].includes(selectedCategory) ? 'marketingContainerSelected' : ''}`}
          onClick={() => handleRadioChange('utility')}>
          <div
            className={`w-8 h-8 ${
              ['utility'].includes(selectedCategory) ? 'bg-[#25c277]' : 'bg-white'
            }  rounded-full flex items-center justify-center `}>
            <Bell
              width='20'
              height='20'
              color={['utility'].includes(selectedCategory) ? '#fff' : '#616874'}
            />
          </div>
          <div className='flex-column '>
            <div className='font-normal weight-bold'>Utility</div>
            <div
              style={{ color: 'var(--font-400)' }}
              className='font-xs weight-medium'>
              Messages about a specific transaction, account, order or customer request.
            </div>
          </div>
        </div>
      </div>
      <div className='templateCategories'>
        <div className='font-normal weight-bold'>Template Name</div>
        <div
          style={{ color: 'var(--font-400)' }}
          className='font-sm weight-medium mt-15 mb-20'>
          Add a title or choose which type of media you'll use for this header.
        </div>
        <CustomTextArea
          placeholder={'message template name...'}
          maxLength={512}
          className='mt-2'
          rows={1}
          customCount={true}
          value={templateName}
          onChange={(e) => checkingTemplate(e.target.value)}
          autoSize={{ maxRows: 1 }}
          textAreaClass='createTemplateTextArea'
        />
        {templateNameError && <div className='TemplateError pt-5 pl-5'>Name already exits</div>}
      </div>
      <div className='templateCategories'>
        <div className='font-normal weight-bold'>Languages</div>
        <div
          style={{ color: 'var(--font-400)' }}
          className='font-sm weight-medium mt-15 mb-20'>
          Choose languages for your message template. You can delete or add more languages later.
        </div>

        <Select
          className='language-select'
          mode='multiple'
          showSearch
          placeholder='Select Languages'
          options={LANGUAGE_OPTIONS}
          value={selectedLanguages}
          onChange={(value) => updateLanguage(value)}
        />
      </div>
    </div>
  );
};

export default CreateTemplateWA;
