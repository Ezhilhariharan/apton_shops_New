import React, { useState, useEffect } from 'react';
import './connectionPopup.css';

import CloseIcon from '../../../../assets/customSVG/Close';
import { ICONS } from '../../../../assets/icons';
import { images } from '../../../../assets/images';

import { useLocation, useNavigate } from 'react-router-dom';

import { Modal } from 'antd';

import TitleAndDescription from '../../../../components/commonComponents/Title/TitleAndDescription';
import RadioButton from '../../../../components/form/radio/RadioButton';
import { Button } from '../../../../components/form/Button/Button';
import Tooltip from '../../../../components/commonComponents/tooltip/Tooltip';

import {
  fbPageConnectionStep2,
  fbPageSelectedList,
  fbGroupConnectionStep2,
  fbGroupSelectedList,
  linkedinPageStep2,
  pinterestStep2,
  pinterestStep3,
  linkedinPageStep3,
  whatsAppStep2,
  whatsAppStep3,
  whatsAppStep4,
  whatsAppStep5,
} from '../../api/Api';

import { useAspSelector, useAspDispatch } from '../../../../test/jest-redux-hooks';
import { updateToggleToast, updateGlobalLoader } from '../../../../reduxToolkit/appSlice';
import { updateWhatsUpData } from '../../../../reduxToolkit/channelSlice';

const maskStyle = { background: 'rgba(45, 48, 54, 0.25)' };

function Popup() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [responseData, setResponseData] = useState({});
  const [selectedAccount, setSelectedAccount] = useState();
  const [selectedChannelsDetails, setSelectedChannelsDetails] = useState({});
  const [pathToken, setPathToken] = useState('');
  const [listError, setListError] = useState(false);
  const [pathState, setPathState] = useState('');
  //whatsUp
  const [whatsUpListDetails, setWhatsUpListDetails] = useState([]);
  const [whatsUpListName, setWhatsUpListName] = useState('Business List');
  const [whatsUpListSections, setWhatsUpListSections] = useState(2);

  const dispatch = useAspDispatch();
  const { toggleToast, currentBrand } = useAspSelector((state) => state.app);
  const { whatsUpAuthData } = useAspSelector((state) => state.Channel);

  const { pathname } = useLocation();
  const navigate = useNavigate();

  const currentChannelName = pathname?.split('/')[3];
  let accessToken;
  let state;
  let code, expirationTime, expiresIn;

  useEffect(() => {
    dispatch(updateWhatsUpData({}));
    setIsModalVisible(true);
    initialApiCalls();
  }, []);

  const handleSelected = (item) => setSelectedAccount(item);

  const initialApiCalls = () => {
    const windowLink = window.location.href;
    if (currentChannelName == 'pinterest' || currentChannelName == 'linkedinpage') {
      const trim = windowLink?.split('?');
      trim[1]?.split('&')?.map((item) => {
        if (item?.split('=')[0] == 'code') {
          code = item?.split('=')[1];
        } else if (item?.split('=')[0] == 'state') {
          state = item?.split('=')[1];
        }
      });
    } else if (currentChannelName == 'whatsapp') {
      const trim = windowLink?.split('#');
      trim[1]?.split('&')?.map((item) => {
        if (item?.split('=')[0] == 'access_token') {
          accessToken = item?.split('=')[1];
          setPathToken(item?.split('=')[1]);
        } else if (item?.split('=')[0] == 'state') {
          state = item?.split('=')[1];
          setPathState(state);
        } else if (item?.split('=')[0] == 'data_access_expiration_time') {
          expirationTime = item?.split('=')[1];
        } else if (item?.split('=')[0] == 'expires_in') {
          expiresIn = item?.split('=')[1];
        }
      });
    } else {
      const trim = windowLink?.split('#');
      trim[1]?.split('&')?.map((item) => {
        if (item?.split('=')[0] == 'access_token') {
          accessToken = item?.split('=')[1];
          setPathToken(item?.split('=')[1]);
        } else if (item?.split('=')[0] == 'state') {
          state = item?.split('=')[1];
        }
      });
    }

    const access_Token = `access_token=${accessToken}`;
    const states = `&state=${state}`;
    const codes = `code=${code}`;
    const expirationTimes = `data_access_expiration_time${expirationTime}`;
    const expiresIns = `expires_in${expiresIn}`;

    // dispatch(updateGlobalLoader(true));

    switch (currentChannelName) {
      case 'facebookpage':
        fbPageConnectionStep2(`${access_Token}${states}`).then((res) => {
          if (res?.status === 200) {
            setResponseData(res?.data);
            dispatch(updateGlobalLoader(false));
            setListError(true);
          } else {
            setListError(true);
          }
        });
        setSelectedChannelsDetails({
          brandLogo: ICONS?.facebookSquareIcon,
          brandHeader: 'Select a Facebook page',
          pageName: 'Facebook Page',
        });
        break;
      case 'facebookgroup':
        fbGroupConnectionStep2(`${access_Token}${states}`).then((res) => {
          if (res?.status === 200) {
            setResponseData(res?.data);
            dispatch(updateGlobalLoader(false));
          } else {
            setListError(true);
          }
        });
        setSelectedChannelsDetails({
          brandLogo: ICONS?.meta,
          brandHeader: 'Select Facebook group',
          pageName: 'Facebook Group',
        });
        break;
      case 'twitter':
        setSelectedChannelsDetails({
          brandLogo: ICONS?.twitterSquareIcon,
          brandHeader: 'Select twitter profile',
          pageName: 'Twitter',
        });
        break;
      case 'instagram':
        fbPageConnectionStep2(`${access_Token}${states}`).then((res) => {
          if (res?.status === 200) {
            setResponseData(res?.data);
            dispatch(updateGlobalLoader(false));
          } else {
            setListError(true);
          }
        });
        setSelectedChannelsDetails({
          brandLogo: ICONS?.instagramSquareIcon,
          brandHeader: 'Select an Instagram account',
          pageName: 'Instagram',
        });
        break;
      case 'whatsapp':
        whatsAppStep2(`${access_Token}${states}${expirationTimes}${expiresIns}`).then((res) => {
          if (res?.status === 200) {
            setResponseData(res?.data);
            setWhatsUpListName('Business List');
            dispatch(updateGlobalLoader(false));
          } else {
            setListError(true);
          }
        });
        setSelectedChannelsDetails({
          brandLogo: ICONS?.Whatsapp,
          brandHeader: 'Connecting WhatsApp Cloud API',
          pageName: 'Whatsapp',
        });
        break;
      case 'pinterest':
        pinterestStep2(`${codes}${states}`).then((res) => {
          if (res?.status === 200) {
            setResponseData(res?.data);
            dispatch(updateGlobalLoader(false));
          } else {
            setListError(true);
          }
        });
        setSelectedChannelsDetails({
          brandLogo: ICONS?.pinterestSquareIcon,
          brandHeader: 'Select pinterest board',
          pageName: 'Pinterest',
        });
        break;
      case 'linkedinpage':
        linkedinPageStep2(`${codes}${states}`).then((res) => {
          if (res?.status === 200) {
            setResponseData(res?.data);
            dispatch(updateGlobalLoader(false));
          } else {
            setListError(true);
          }
        });
        setSelectedChannelsDetails({
          brandLogo: ICONS?.linkedinSquareIcon,
          brandHeader: 'Select linkedIn page',
          pageName: 'Linkedin',
        });
        break;
      case 'linkedinprofile':
        setSelectedChannelsDetails({
          brandLogo: ICONS?.linkedinSquareIcon,
          brandHeader: 'Select linkedIn profile',
          pageName: 'Linkedin Profile',
        });
        break;
      default:
        break;
    }
  };

  const handleCancel = () => {
    setIsModalVisible(false);
    navigate(`/user/channels/${currentChannelName}`);
  };
  const selectPageOrGrp = () => {
    dispatch(updateGlobalLoader(true));
    switch (currentChannelName) {
      case 'facebookpage':
      case 'instagram':
        const payingLoad = {
          reference_url: responseData?.reference_url,
          page_id: selectedAccount?.id,
          smh_id: responseData?.smh_id,
          page_name: selectedAccount?.name,
        };
        fbPageSelectedList(payingLoad).then((res) => handleResponse(res));
        break;
      case 'facebookgroup':
        const payLoad = {
          reference_url: responseData?.reference_url,
          group_id: selectedAccount?.id,
          group_name: selectedAccount?.name,
          smh_id: responseData?.smh_id,
          access_token: pathToken,
        };
        fbGroupSelectedList(payLoad).then((res) => handleResponse(res));
        break;
      case 'linkedinpage':
        const linkedinPayLoad = {
          brand_id: currentBrand?.id,
          reference_url: responseData?.reference_url,
          page_id: selectedAccount?.id,
          vanity_name: selectedAccount?.vanityName,
          page_name: selectedAccount?.localizedName,
        };
        linkedinPageStep3(linkedinPayLoad).then((res) => handleResponse(res));
        break;
      case 'pinterest':
        const pinterestPayLoad = {
          reference_url: responseData?.reference_url,
          board_id: selectedAccount?.id,
          board_name: selectedAccount?.name,
          board_privacy: selectedAccount?.privacy,
          smh_id: responseData?.smh_id,
        };
        pinterestStep3(pinterestPayLoad).then((res) => handleResponse(res));
        break;
      case 'whatsapp':
        const access_Token = `access_token=${pathToken}`;
        if (whatsUpListSections === 2) {
          const business_id = `&business_id=${selectedAccount?.id}`;
          dispatch(
            updateWhatsUpData(
              Object.assign({}, whatsUpAuthData, {
                business_id: selectedAccount?.id,
                reference_url: responseData?.reference_url,
              }),
            ),
          );

          whatsAppStep3(`${access_Token}${business_id}`).then((res) => handleWhatsUpResponse3(res));
        } else if (whatsUpListSections === 3) {
          const business_id = `&business_account_id=${selectedAccount?.id}`;
          const states = `&state=${pathState}`;
          dispatch(
            updateWhatsUpData(
              Object.assign({}, whatsUpAuthData, {
                business_account_id: selectedAccount?.id,
                mt_namespace: selectedAccount?.message_template_namespace,
              }),
            ),
          );
          whatsAppStep4(`${access_Token}${business_id}${states}`).then((res) =>
            handleWhatsUpResponse4(res),
          );
        } else if (whatsUpListSections === 4) {
          const whatsappPayLoad = {
            access_token: pathToken,
            business_id: whatsUpAuthData?.business_id,
            reference_url: whatsUpAuthData?.reference_url,
            business_account_id: whatsUpAuthData?.business_account_id,
            display_phone_number: selectedAccount?.display_phone_number,
            phone_number_id: selectedAccount?.id,
            code_verification_status: selectedAccount?.code_verification_status,
            quality_rating: selectedAccount?.quality_rating,
            verified_name: selectedAccount?.verified_name,
            mt_namespace: whatsUpAuthData?.mt_namespace,
            brand_id: currentBrand?.id,
          };
          whatsAppStep5(whatsappPayLoad).then((res) => handleWhatsUpResponse5(res));
        }
        break;
      default:
        console.log('error');
        break;
    }
  };

  const handleWhatsUpResponse3 = (res) => {
    setSelectedAccount({});
    setResponseData({});
    if (res?.status === 200) {
      dispatch(updateGlobalLoader(false));
      setWhatsUpListSections(3);
      setWhatsUpListName('Business Accounts');
      setWhatsUpListDetails(res?.data?.business_accounts);
    } else {
      responseError(res?.response?.data?.error);
    }
  };
  const handleWhatsUpResponse4 = (res) => {
    setSelectedAccount({});
    if (res?.status === 200) {
      dispatch(updateGlobalLoader(false));
      setWhatsUpListName('Business Numbers');
      setWhatsUpListSections(4);
      setWhatsUpListDetails(res?.data?.business_numbers);
    } else {
      responseError(res?.response?.data?.error);
    }
  };
  const handleWhatsUpResponse5 = (res) => {
    setSelectedAccount({});
    if (res?.status === 200) {
      dispatch(updateGlobalLoader(false));
      window.location.href = res?.data?.reference_url;
    }
  };

  const responseError = (error) => {
    setListError(true);
    setWhatsUpListDetails([]);
    setResponseData({});
    dispatch(updateGlobalLoader(false));
    dispatch(
      updateToggleToast([
        ...toggleToast,
        {
          id: toggleToast?.length + 1,
          content: error,
          status: 'Error',
          duration: '',
        },
      ]),
    );
  };

  const handleResponse = (res) => {
    if (res?.status === 200) {
      dispatch(updateGlobalLoader(false));
      window.location.href = res?.data?.reference_url;
      dispatch(
        updateToggleToast([
          ...toggleToast,
          {
            id: toggleToast?.length + 1,
            content: 'Connected',
            status: 'Success',
          },
        ]),
      );
    } else {
      responseError(res?.response?.data?.error);
    }
  };
  return (
    <Modal
      open={isModalVisible}
      footer={null}
      className={'asp-modal-popup-channels'}
      closable={false}
      keyboard={false}
      maskClosable={false}
      maskStyle={maskStyle}
      centered={true}
      // onCancel={handleCancel}
    >
      <>
        <div className='popupTitle'>
          <div className='popupHeader flex-row space-between p-10'>
            <div className='flex-row align-center'>
              <img
                src={selectedChannelsDetails?.brandLogo}
                alt='dropdown'
                className='mr-5'
              />
              <TitleAndDescription
                size={'medium'}
                title={selectedChannelsDetails?.brandHeader}
              />
            </div>
            <span
              onClick={() => handleCancel()}
              className='closeIcon'>
              <CloseIcon
                stroke='#fff'
                fill='#616874'
              />
            </span>
          </div>
          <p className='popupDesc'>
            Select the business account you would like to connect with this brand.
          </p>
        </div>
        <div className='popup-body'>
          <div className='popupListContainer'>
            {responseData?.list?.length > 0 ? (
              <div className='popupList'>
                {responseData?.list?.map((listItem) => {
                  let itemName =
                    typeof listItem?.name === 'string' ? listItem?.name : listItem?.localizedName;
                  return (
                    <div
                      className='popupItem'
                      onClick={() => handleSelected(listItem)}>
                      <TitleAndDescription
                        gap='4px'
                        size='small'
                        title={itemName}
                        descClass='text-xs'
                        description={selectedChannelsDetails?.pageName}
                      />
                      {(itemName === selectedAccount?.name ||
                        itemName === selectedAccount?.localizedName) && (
                        <RadioButton selected={true} />
                      )}
                    </div>
                  );
                })}
              </div>
            ) : (
              <>
                {(whatsUpListDetails?.length > 0 || responseData?.businesses?.length > 0) && (
                  <div className='mb-5'>
                    <TitleAndDescription
                      size={'medium'}
                      title={whatsUpListName}
                    />
                  </div>
                )}
                {/* <div className='popupList'> */}
                {whatsUpListDetails?.length > 0 ? (
                  <div className='popupList'>
                    {whatsUpListDetails?.map((listItem) => {
                      let targetName =
                        typeof listItem?.name === 'string'
                          ? listItem?.name
                          : listItem?.display_phone_number;
                      return (
                        <div
                          className='popupItem'
                          onClick={() => handleSelected(listItem)}>
                          <TitleAndDescription
                            gap='4px'
                            size='small'
                            title={listItem?.name || listItem?.display_phone_number}
                            descClass='text-xs'
                            description={selectedChannelsDetails?.pageName}
                          />
                          {(targetName === selectedAccount?.name ||
                            targetName === selectedAccount?.display_phone_number) && (
                            <RadioButton selected={true} />
                          )}
                        </div>
                      );
                    })}
                  </div>
                ) : (
                  responseData?.businesses?.length > 0 &&
                  responseData?.businesses?.map((listItem) => {
                    return (
                      <div
                        className='popupItem'
                        onClick={() => handleSelected(listItem)}>
                        <TitleAndDescription
                          gap='4px'
                          size='small'
                          title={listItem?.name}
                          descClass='text-xs'
                          description={selectedChannelsDetails?.pageName}
                        />
                        {listItem?.name === selectedAccount?.name && (
                          <RadioButton selected={true} />
                        )}
                      </div>
                    );
                  })
                )}
                {/* </div> */}
              </>
            )}
            {listError && (
              <div className='noListWrapper flex-column align-center justify-center'>
                <img
                  src={images?.noList}
                  alt='noList'
                  className='noListImg'
                />
                <div className='title mt-5'>No List </div>
                <div className='para mt-5'>
                  No List have been found. Click the button below to create one.
                </div>
              </div>
            )}
          </div>
        </div>
        {(responseData?.list?.length > 0 ||
          responseData?.businesses?.length > 0 ||
          whatsUpListDetails?.length > 0) && (
          <div className='confirmationModalBottom'>
            {
              <Button
                className='btn cancelBtn'
                size={'medium'}
                label='Cancel'
                onClick={() => handleCancel()}
              />
            }
            {selectedAccount?.hasOwnProperty('id') ? (
              <Button
                className={`btn continueBtn enableBtn`}
                size={'medium'}
                label='Done'
                onClick={() => selectPageOrGrp()}
              />
            ) : (
              <Tooltip title={'Kindly Select'}>
                <Button
                  className={`btn continueBtn enableBtn`}
                  size={'medium'}
                  label='Done'
                />
              </Tooltip>
            )}
          </div>
        )}
      </>
    </Modal>
  );
}

export default Popup;
