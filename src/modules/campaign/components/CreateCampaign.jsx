import React, { useEffect, useState } from 'react';

import { campaignPopup, keyResults, inputCalendar } from '../../../constant/app/campaign/campaign';
import { ICONS } from '../../../assets/icons/index';

import { Input } from '../../../components/form/Input/Input';
import Divider from '../../../components/commonComponents/divider/Divider';
import ModalHeader from '../../../components/commonComponents/modal/header';
import { Button } from '../../../components/form/Button/Button';
import SelectCampaignType from './SelectCampaignType';
import FooterSection from './FooterSection';
import Select from '../../../components/form/select/Select';
import Calendar from '../../../components/commonComponents/calendar/Calendar';

import moment from 'moment';
import { campaignCreatedApi, createCampaignApi } from '../api/Api';
import { useAspDispatch, useAspSelector } from '../../../test/jest-redux-hooks';
import { updateToggleToast } from '../../../reduxToolkit/appSlice';
import { updateGlobalLoader } from '../../../reduxToolkit/appSlice';

const popup = {
  padding: '10px 10px',
};

function CreateCampaign({ handleCancel }) {
  const [inputCalenderData, setInputCalender] = useState(inputCalendar);
  const { toggleToast, currentBrand } = useAspSelector((state) => state.app);
  const dispatch = useAspDispatch();

  const [campaign, setCampaign] = useState({
    color_code: '',
    c_type: null,
    start_date: null,
    end_date: null,
    name: '',
    budget: null,
    status: true,
    draft: false,
  });

  const [campaignError, setCampaignError] = useState({
    c_type: '',
    name: '',
    color: '',
  });

  const handleCreateCampaign = (key, value) => {
    let prev = { ...campaign };
    prev[key] = value;
    setCampaign(prev);
  };

  const handleColorChange = (newColor) => {
    const roundedR = Math?.floor(newColor?.metaColor?.r);
    const roundedG = Math?.floor(newColor?.metaColor?.g);
    const roundedB = Math?.floor(newColor?.metaColor?.b);

    setCampaign((prev) => {
      return { ...prev, color_code: `rgb(${roundedR},${roundedG},${roundedB})` };
    });
  };

  const handleCreateTask = (draftData) => {
    let isValid = true;

    if (!campaign?.c_type) {
      setCampaignError((prev) => {
        return { ...prev, c_type: 'Campaign type is required' };
      });
      isValid = false;
    } else {
      setCampaignError((prev) => ({ ...prev, c_type: '' }));
    }

    if (!campaign?.name?.trim()) {
      setCampaignError((prev) => {
        return { ...prev, name: 'Campaign name is required' };
      });
      isValid = false;
    } else {
      setCampaignError((prev) => ({ ...prev, name: '' }));
    }

    if (!campaign?.color_code) {
      setCampaignError((prev) => {
        return { ...prev, color: 'Please choose color' };
      });
      isValid = false;
    } else {
      setCampaignError((prev) => ({ ...prev, color: '' }));
    }

    if (isValid) {
      dispatch(updateGlobalLoader(true));

      let campaignPayload = Object.assign(campaign, { draft: draftData });

      createCampaignApi(currentBrand?.id, campaignPayload).then((createCampaignResponse) => {
        dispatch(updateGlobalLoader(false));
        if (createCampaignResponse?.status === 200) {
          dispatch(
            updateToggleToast([
              ...toggleToast,
              {
                id: toggleToast?.length + 1,
                content: 'Campaign created successfully',
                status: 'Success',
                duration: '',
              },
            ]),
          );

          handleCancel();
        } else {
          dispatch(
            updateToggleToast([
              ...toggleToast,
              {
                id: toggleToast?.length + 1,
                content:
                  createCampaignResponse?.response?.data?.error || 'Campaign creation failed',
                status: 'Error',
                duration: '',
              },
            ]),
          );
        }
      });
    }
  };
  const setFromAndToValues = (from, to) => {
    const parseDate = (dateString) => {
      if (typeof dateString === 'object') {
        const parsedDate = moment(dateString, 'DD-MM-YYYY h:mm:ss');
        const newDate = parsedDate.isValid() ? parsedDate.toDate().getTime() : null;
        return newDate / 1000 + 19800;
      } else {
        return null;
      }
    };

    const today = moment();
    let startTimestamp;
    const endTimestamp = parseDate(to);

    if (new Date(today).toDateString() === new Date(from)?.toDateString())
      startTimestamp = parseDate(today);
    else startTimestamp = parseDate(from);

    setCampaign((prev) => {
      return {
        ...prev,
        start_date: startTimestamp,
        end_date: endTimestamp,
      };
    });

    setInputCalender((prev) => {
      const newState = prev?.map((item) => {
        if (item?.label === 'From') {
          return { ...item, value: from ? moment(from).format('ll') : '' };
        } else if (item?.label === 'To') {
          return { ...item, value: to ? moment(to).format('ll') : '' };
        }
      });
      return newState;
    });
  };

  return (
    <>
      <ModalHeader
        handleCancel={handleCancel}
        title='Create Campaign'
      />
      <div className='popup-body'>
        <SelectCampaignType
          onSelectCampaignType={handleCreateCampaign}
          selectedCampaignType={campaign?.c_type}
          campaignTypeError={campaignError?.c_type}
        />
        <Divider
          color={'var( --border-50)'}
          width='100%'
        />
        <div className='flex-row mt-10 mb-10'>
          <div className=' w-60 pr-10'>
            {campaignPopup?.map((item) => (
              <div
                key={item?.id}
                className='mt-5 campaignFormWrapper '>
                <div className='flex-row align-center'>
                  <div
                    className='createCampaignLabel 
                '>
                    {item?.name}
                  </div>
                  {item?.name === 'Budget' && <span className='optional'>(Optional)</span>}
                </div>
                <div className='inputFieldWrapper'>
                  {item?.name === 'Campaign' ? (
                    <Input
                      iconPrefix={item.icon}
                      placeholder='Enter campaign name'
                      style={popup}
                      maxLength='25'
                      pattern=''
                      onChange={(e) => {
                        const newValue = e?.target?.value?.replace(/[^A-Za-z0-9]/g, ' ');
                        handleCreateCampaign('name', newValue);
                      }}
                      value={campaign?.name}
                      required
                    />
                  ) : item?.name === 'Budget' ? (
                    <Input
                      iconPrefix={item?.icon}
                      placeholder='Enter budget'
                      style={popup}
                      rightDropDown
                      value={campaign?.budget}
                      onChange={(e) => {
                        const newValue = e?.target?.value?.replace(/[^0-9]/g, '');
                        handleCreateCampaign('budget', newValue?.replace(/^0+([1-9])?/, '$1'));
                      }}
                    />
                  ) : (
                    <Select
                      iconPrefix={item.icon}
                      // options={keyResults}
                      placeholder={'Default'}
                      className='campaign-select-blur'
                      disabled={true}
                    />
                  )}
                </div>

                {item?.name === 'Campaign' && (
                  <div className='explain-error'>{campaignError?.name}</div>
                )}
              </div>
            ))}
          </div>

          <div className=' w-40 '>
            <Calendar
              heading='Select duration'
              fromTo={setFromAndToValues}
              style={{ width: '100%', minWidth: '350px', height: '220px ' }}
            />
            <div className='flex-row space-around mt-5'>
              {inputCalenderData?.map((item) => (
                <div
                  className='w-40'
                  key={item?.id}>
                  <div className='createCampaignLabel'>{item?.label} </div>
                  <Input
                    iconPrefix={ICONS.CalendarIcon}
                    readOnly={true}
                    style={popup}
                    value={item?.value}
                    iconPrefixStyle={{ width: '17px', height: '17px' }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
        <Divider
          color={'var( --border-50)'}
          width='100%'
        />
        <FooterSection
          onColorChange={handleColorChange}
          campaignColorError={campaignError?.color}
          color_code={campaign.color_code}
        />
      </div>
      <span className='popup-footer flex-row flex-end align-center'>
        <div
          className='draft  pointer'
          onClick={() => handleCreateTask(true)}>
          Draft
        </div>
        <Button
          label={'Let’s Create Campaign'}
          size={'small'}
          onClick={() => handleCreateTask(false)}
        />
      </span>
    </>
  );
}

export default CreateCampaign;
