import React, { useState, useEffect } from 'react';
import '../../styles/WorkSpace/whatsapp.css';

import { Modal } from 'antd';

import { whatsappHeader } from '../../../../constant/app/campaign/campaignExtended';

import { Button } from '../../../../components/form/Button/Button';
import { ICONS } from '../../../../assets/icons/index';

import SelectTemplate from './SelectTemplate';
import WhatsappHeader from './WhatsappHeader';
import SelectFile from './Selectfile';
import Existing from './Existing';
// import Follow from './Follow';
import TemplateStatus from './TemplateStatus';
import MarketTemplate from './MarketTemplate';
import AddProspects from './AddProspects';
import ModalHeader from '../../../../components/commonComponents/modal/header';
import { selectPhoneNumber } from '../../../../constant/app/campaign/whatsappCampaign';
import Select from '../../../../components/form/select/Select';
import { convertingDateAndTime } from '../../../../helper/convertingDate';

import { sendMessageApi, campaignTaskCreate } from '../../../campaign/api/Api';
import { campaignTaskList } from '../../../../modules/campaign/api/Api';

import { useParams, useNavigate } from 'react-router-dom';

import { updateToggleToast, updateGlobalLoader } from '../../../../reduxToolkit/appSlice';

import {
  updateTemplatePreview,
  updateTaskTitle,
  updateSavedTaskId,
} from '../../../../reduxToolkit/CampaignSlice';

import { useAspSelector, useAspDispatch } from '../../../../test/jest-redux-hooks';

const maskStyle = { background: 'rgba(45, 48, 54, 0.25)' };

const Whatsappcampigan = () => {
  const [open, setOpen] = useState('');
  const [status, setStatus] = useState(false);
  const [valueAction, SetValueAction] = useState('');
  const [toggle, setToggle] = useState('Select file');
  const [activeCard, setActiveCard] = useState('header');
  const [selectedTemplate, setSelectedTemplate] = useState({});
  const [response, setResponse] = useState({});
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [sendMsg, setSendMsg] = useState('');
  const [selectedTaskList, setSelectedTaskList] = useState({});
  const [selectedValue, setValue] = useState('');

  const navigate = useNavigate();
  // const [click, SetClick] = useState(false);  for following and reply logic

  const { toggleToast, currentBrand } = useAspSelector((state) => state.app);
  const { taskTitle } = useAspSelector((state) => state.Campaign);
  const dispatch = useAspDispatch();

  let { campaignId, taskId } = useParams();

  useEffect(() => {
    if (campaignId && taskId) {
      dispatch(updateGlobalLoader(true));
      campaignTaskList(campaignId)
        .then((res) => {
          if (res?.status === 200) {
            const filteredList = res?.data?.response?.filter((item) => item?.id == taskId);
            if (filteredList?.length > 0) {
              setSelectedTaskList(filteredList);
              setResponse({
                templateId: filteredList[0]?.details?.template_id,
                startDate: convertingDateAndTime(filteredList[0]?.start_date),
                file_path: filteredList[0]?.details?.file_path,
                prospectsCount: filteredList[0]?.total_transaction,
                fileName: filteredList[0]?.details?.file_path?.split('/')?.slice(-1)?.toString(),
              });
              filteredList[0]?.template_details &&
                dispatch(updateTemplatePreview(filteredList[0]?.template_details));
              dispatch(updateTaskTitle(filteredList[0]?.title));
              dispatch(updateGlobalLoader(false));
            }
          }
        })
        .finally(() => {
          dispatch(updateGlobalLoader(false));
        });
    } else {
      setResponse({});
    }
  }, []);

  const handleHeaderClick = (data) => setActiveCard(data);

  const handleItemClick = (item) => {
    setToggle(item?.name);
  };
  const setClick = () => {
    setOpen(!open);
    setStatus(false);
  };
  const handleStatusClick = () => {
    setStatus(!status);
  };
  const handleClick = (item) => {
    SetValueAction(item?.Template_name);
    setOpen(false);
    setSelectedTemplate(item);
    setResponse({ ...response, templateId: item?.id });
    dispatch(updateTemplatePreview(item));
  };
  const handleDelete = () => {
    SetValueAction('');
  };
  const handleMarketClick = (item) => {
    SetValueAction(item);
    setOpen(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const handleSend = () => {
    const payLoad = {
      to_number: `91${sendMsg}`,
      template_id: 10,
    };
    sendMessageApi(payLoad).then((res) => {
      responseAction(res);
    });
  };

  const campaignTaskCreateFunc = () => {
    const payLoad = {
      title: taskTitle,
      file_path: response?.file_path,
      start_date: response?.startDate.getTime() / 1000 + 19800,
      template_id: response?.templateId,
    };
    if (response?.file_path && response?.startDate && response?.templateId) {
      dispatch(updateGlobalLoader(true));
      campaignTaskCreate(36, payLoad)
        .then((res) => {
          responseAction(res);
          if (res?.status === 200) {
            dispatch(updateSavedTaskId(res?.data?.id));
            dispatch(updateGlobalLoader(false));
          }
        })
        .finally(() => {
          dispatch(updateGlobalLoader(false));
        });
    } else {
      dispatch(
        updateToggleToast([
          ...toggleToast,
          {
            id: toggleToast?.length + 1,
            content: 'Fill the required field',
            status: 'Error',
            duration: '',
          },
        ]),
      );
    }
  };

  const responseAction = (res) => {
    if (res?.status === 200) {
      dispatch(
        updateToggleToast([
          ...toggleToast,
          {
            id: toggleToast?.length + 1,
            content: res?.data?.message ? res?.data?.message : 'CampaignTask created successfully',
            status: 'Success',
            duration: '',
          },
        ]),
      );
    } else {
      dispatch(
        updateToggleToast([
          ...toggleToast,
          {
            id: toggleToast?.length + 1,
            content: res?.response?.data?.error,
            status: 'Error',
            duration: '',
          },
        ]),
      );
    }
  };

  // const valueAction = useMemo(() => {
  //   return valueAction;
  // }, [valueAction]);

  return (
    <div className='whatsapp-container '>
      <div
        className='work-area-button flex-row flex-end '
        style={{ paddingBottom: '15px' }}>
        <Button
          size={'xl'}
          label={'Save'}
          onClick={() => campaignTaskCreateFunc()}
        />
      </div>
      <div className='containerWrapper'>
        <div
          className='main_container'
          onClick={() => handleHeaderClick('header')}>
          <WhatsappHeader
            setResponse={setResponse}
            response={response}
          />
          {activeCard === 'header' && (
            <>
              <div className='menu-container flex-row align-center'>
                {whatsappHeader?.map((item) => (
                  <div
                    key={item?.id}
                    className={`menu-container-main flex-row align-center ${
                      toggle === item?.name
                        ? 'menu-container-main-focused flex-row align-center'
                        : ''
                    }`}
                    onClick={() => handleItemClick(item)}>
                    {toggle === item?.name && item?.icon1 ? (
                      <img
                        src={item?.icon1}
                        alt='select'
                      />
                    ) : (
                      <img
                        src={item?.icon}
                        alt='select'
                      />
                    )}

                    {item?.name && (
                      <span
                        className={`menu-container-main flex-row align-center ${
                          toggle === item?.name ? 'menu_container_main_focused' : ''
                        }`}>
                        {item?.name}
                      </span>
                    )}

                    {item?.name === 'Select file' && (
                      <div
                        className='status-color'
                        style={{
                          background: 'var(--lightGrey)',
                        }}></div>
                    )}
                  </div>
                ))}
              </div>

              {toggle === 'Select file' && (
                <SelectFile
                  setResponse={setResponse}
                  response={response}
                />
              )}

              {toggle === 'Existing List' && (
                <Existing
                  campaignId={campaignId}
                  setResponse={setResponse}
                  response={response}
                />
              )}
            </>
          )}
          {activeCard === 'footer' && <AddProspects response={response} />}
        </div>

        <div className='Arrow flex-row align-center justify-center'>
          <img
            src={ICONS?.WhatsappArrowIcon}
            alt='arrow icon'
          />
        </div>

        <div
          className='select-container-main'
          onClick={() => handleHeaderClick('footer')}>
          <div className='search-popover flex-column'>
            {open && (
              <div className='search-template-menu flex-column '>
                <SelectTemplate
                  SetVariableAction={handleClick}
                  setAddStatusClick={handleMarketClick}
                  handleHeaderClick={handleHeaderClick}
                />
              </div>
            )}
          </div>
        </div>

        {valueAction !== '' ? (
          <TemplateStatus
            handleStatusClick={handleStatusClick}
            SetDeleteClick={handleDelete}
            Status={status}
            selectedTemplate={selectedTemplate}
            handleHeaderClick={handleHeaderClick}
            sendMessageAction={() => setIsModalVisible(true)}
            response={response}
          />
        ) : (
          <MarketTemplate
            setAction={setClick}
            handleHeaderClick={handleHeaderClick}
            setResponse={setResponse}
            response={response}
          />
        )}
      </div>

      {/* <div className='Arrow flex-column align-center justify-center'>
        <img
          src={ICONS?.WhatsappArrowIcon}
          alt='arrow icon'
        />
      </div> */}
      {/* <div>
        <Follow
          SetAddClick={AddClick}
          StateClick={click}
        />
      </div> */}
      <Modal
        open={isModalVisible}
        footer={null}
        className={'asp-modal-popup-small'}
        closable={false}
        maskStyle={maskStyle}
        centered={true}
        onCancel={handleCancel}>
        <>
          <ModalHeader
            handleCancel={handleCancel}
            title='Send test message'
          />
          <div className='sendMsgWrapper flex-row align-center justify-center'>
            {/* <div className='borderNumber flex-row align-center justify-center'>+91</div>
             */}
            <div className='sendMsgWrapper-parent-wrapper'>
              <Select
                // iconPrefix={item.icon}
                options={selectPhoneNumber}
                placeholder={'IN +91'}
                onChange={(val) => setValue(val)}
                className='sendMsgWrapper-input-wrapper'
              />
            </div>

            <input
              type='text'
              className='sendMessage'
              placeholder='EX:- 0000 000 000'
              value={sendMsg}
              maxLength={10}
              onChange={(e) => {
                const newValue = e?.target?.value?.replace(/[^0-9]/g, '');
                // const enterValue = newValue?.replace(/^0+([1-9])?/, '$1');
                // console.log('enterValue', newValue);
                // enterValue && setSendMsg(enterValue);
                setSendMsg(e?.target?.value);
              }}
            />
          </div>
          <span className='sendMSgFooter w-100 flex-row flex-end align-center'>
            <div
              className='draft  pointer'
              onClick={handleCancel}>
              cancel
            </div>
            <Button
              label={'send'}
              size={'small'}
              onClick={handleSend}
            />
          </span>
        </>
      </Modal>
    </div>
  );
};

export default Whatsappcampigan;
