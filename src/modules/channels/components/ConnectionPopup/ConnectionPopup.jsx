import React, { useState } from 'react';

import './connectionPopup.css';

import CloseIcon from '../../../../assets/customSVG/Close';
import { ICONS } from '../../../../assets/icons';

import TitleAndDescription from '../../../../components/commonComponents/Title/TitleAndDescription';
import RadioButton from '../../../../components/form/radio/RadioButton';
import { Button } from '../../../../components/form/Button/Button';
import Popup from './popup';

const ConnectionPopup = ({
  showPopup,
  setShowPopup,
  selectedBrandLogo,
  selectedBrandHeader,
  setConnected,
  options,
  isDropdownOpen,
  setIsDropdownOpen,
  selectedAccount,
  setSelectedAccount,
  buttonName,
  activeTab,
  connectMeta,
}) => {
  const [showFbVerifyModal, setShowFbVerifyModal] = useState(false);

  return (
    <div className='confirmationModal'>
      {showPopup ? (
        <>
          {!showFbVerifyModal ? (
            <Popup
              selectedBrandLogo={selectedBrandLogo}
              options={options}
              isDropdownOpen={isDropdownOpen}
              setIsDropdownOpen={setIsDropdownOpen}
              setSelectedAccount={setSelectedAccount}
              activeTab={activeTab}
              selectedBrandHeader={selectedBrandHeader}
              selectedAccount={selectedAccount}
            />
          ) : (
            <FacebookGroupModal
              selectedAccount={selectedAccount}
              setConnected={setConnected}
              setShowPopup={setShowPopup}
              setShowFbVerifyModal={setShowFbVerifyModal}
            />
          )}
        </>
      ) : (
        <div className='btnContainer'>
          <div>
            You have not connected any account yet, <br />
            click on the button to get started.
          </div>
          <Button
            onClick={() => connectMeta(buttonName)}
            className='connectButton'
            size={'medium'}
            label={buttonName}
          />
        </div>
      )}
    </div>
  );
};

export default ConnectionPopup;

export const FacebookGroupModal = ({
  selectedAccount,
  setConnected,
  setShowPopup,
  setShowFbVerifyModal,
}) => {
  return (
    <div className='popupContainer'>
      <div className='popupTitle'>
        <div className='popupHeader'>
          <img
            src={ICONS?.ArrowLeft}
            alt='rightarrow'
            className='pointer'
            onClick={() => {
              setShowFbVerifyModal(false);
              setShowPopup(true);
            }}
          />

          <TitleAndDescription
            size={'medium'}
            title={'Add GogrowX app to your Facebook group(s)'}
          />
        </div>
        <TitleAndDescription
          size={'medium'}
          descClass='desc'
          gap={'7px'}
          description="In order to publish content to your Facebook group(s), you must perform this step where you'll add GogrowX app to your Facebook group settings."
        />
        <TitleAndDescription
          size={'medium'}
          descClass='desc'
          gap={'7px'}
          description="Upon clicking the 'Add GogrowX App' button, you'll be taken to a page on Facebook where you need to search for GogrowX app and add it."
        />
        <TitleAndDescription
          size={'medium'}
          descClass='desc'
          gap={'7px'}
          description="And in order to check if the App is added in the facebook group, please click on the 'Verify' button."
        />
        <span
          className='closeIcon'
          onClick={() => {
            setShowPopup(false);
            setConnected(false);
            setShowFbVerifyModal(false);
          }}>
          <CloseIcon
            stroke='#fff'
            fill='#616874'
          />
        </span>
      </div>
      <div className='popupListContainer'>
        <div className='popupListHeader'>
          <TitleAndDescription
            gap='4px'
            size='medium'
            title={selectedAccount}
          />
        </div>
        <div className='popupList'>
          <div className='confirmationModalBottom verifyBtnContainer'>
            <Button
              className='btn verifyBtn'
              size={'medium'}
              label='Verify'
              onClick={() => {
                setConnected(true);
                setShowFbVerifyModal(false);
              }}
            />

            <Button
              className={`btn continueBtn enableBtn`}
              size={'medium'}
              label='Add GogrowX app'
              onClick={() => {
                setConnected(true);
                setShowFbVerifyModal(false);
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
