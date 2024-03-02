import React, { useEffect, useState } from 'react';

import { Popover } from 'antd';

import '../HeaderDropDown/HeaderDropDown.css';

import { Button } from '../../form/Button/Button';
import RadioButton from '../../form/radio/RadioButton';
import ModelComponent from '../ModelComponent';
import Avatar from '../avatar/Avatar';
import CopyLink from '../copyLink';
import LabelText from '../Label';

import { userConnectOption } from '../../../constant/app/channel';

import { ICONS } from '../../../assets/icons/index';

import { useAspSelector, useAspDispatch } from '../../../test/jest-redux-hooks';

const ChannelHeaderDropDown = ({
  accountInformation,
  Image,
  avatarClass,
  isTagMenu,
  miniImage,
  activeTab,
  src,
}) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [dropDownOption, setDropDownOption] = useState([]);
  const [selectedBrand, setSelectedBrand] = useState(accountInformation?.[0]);
  const [secondaryText, setSecondaryText] = useState();
  const [menuOpen, setMenuOpen] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedChannel, setSelectedChannel] = useState();

  const { channelList } = useAspSelector((state) => state?.Channel);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  useEffect(() => {
    setSelectedBrand(accountInformation?.[0]);
    if (accountInformation[0]?.secondaryOptions?.length) {
      setSecondaryText(accountInformation[0]?.secondaryOptions[0]);
    }
  }, [accountInformation]);

  useEffect(() => {
    const selectedItem = channelList?.filter((item) => item?.name == activeTab);
    selectedItem?.length > 0 && setSelectedChannel(selectedItem[0]);
  }, [activeTab, channelList]);

  const handleBrandSelect = (user) => {
    setSelectedBrand(user);
    setIsDropdownOpen(false);
  };
  const handleModel = (brand) => {
    setIsModalVisible(true);
  };
  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const reDirect = (data) => data?.page_link && window.open(data?.page_link, '_blank');

  const LinkUser = ({ data, onClick }) => {
    return (
      <div className='dropdown-menu w-[150px]'>
        {activeTab === 'WhatsApp' ? (
          <>
            {data?.map((brand, i) => (
              <div
                key={i}
                className='p-3 border-b-[1px]'
                onClick={() => brand?.name === 'Configuration' && handleModel(brand)}>
                <div className='item-wrapper'>
                  <img
                    src={brand?.icon}
                    alt={brand?.name}
                  />
                  <h4 className='pl-5'>{brand?.name}</h4>
                </div>
                {brand?.name === selectedBrand?.name && <RadioButton selected={true} />}
              </div>
            ))}
          </>
        ) : (
          <div className='flex-row p-2 '>
            <img
              src={ICONS?.LoopIcon}
              alt='icon'
            />
            <h4 className='pl-10'>Sync</h4>
          </div>
        )}
      </div>
    );
  };

  return (
    <div className='drop-down-wrapper'>
      <div className={`h-100 staticHeaderContainer  selected-brand`}>
        <div className={`mt-5  avatarContainer ${selectedBrand?.statusColor}AvatarBorder`}>
          <Avatar
            src={Image}
            className={`avatarImg ${avatarClass}`}
          />
          {miniImage && (
            <img
              alt='miniImg'
              src={miniImage}
              className='childImage'
            />
          )}
        </div>
        {/* flex-row items-center gap-2 */}
        <div
          className='h-100 flex-column justify-center '
          style={{ padding: ' 0px 10px' }}>
          <div className='flex-row align-center '>
            <div>
              {selectedChannel?.apiData?.configuration?.business_name && (
                <div className='font-large weight-bold mb-5'>
                  {selectedChannel?.apiData?.configuration?.business_name}
                </div>
              )}
              <div
                onClick={() => reDirect(selectedChannel?.apiData?.configuration)}
                className='font-large weight-bold pointer'>
                {selectedChannel?.apiData?.configuration?.page_name ||
                  selectedChannel?.apiData?.configuration?.name ||
                  selectedChannel?.apiData?.configuration?.phone_number}
              </div>
            </div>
            {selectedChannel?.apiData?.configuration?.verification === 'VERIFIED' && (
              <div>
                <img
                  src={ICONS?.StarGreenTick}
                  alt='GreenTick'
                />
              </div>
            )}
            {accountInformation?.length > 1 && (
              <div
                onClick={() => toggleDropdown()}
                className='cursor-pointer'>
                <img
                  src={ICONS.dropDownIcon}
                  alt='dropdown'
                  className={`${isDropdownOpen ? 'open' : ''}`}
                />
              </div>
            )}
            <div className='ml-5 mb-5'>
              <LabelText
                text={selectedBrand?.status}
                variety={selectedBrand?.statusColor + ' rounded capitalize'}
                padding='4px 7px'
                fontSize='0.65vw'
              />
            </div>
            {isTagMenu && (
              <div
                className='cursor-pointer'
                onClick={() => setMenuOpen(!menuOpen)}>
                <Popover
                  open={menuOpen}
                  content={() => <LinkUser data={userConnectOption} />}
                  trigger='click'
                  onClick={() => setMenuOpen(false)}>
                  <span className='multipleIcons'>
                    <img
                      src={ICONS?.DotMenu}
                      alt={'menu'}
                    />
                  </span>
                </Popover>
              </div>
            )}
          </div>
          {/* {selectedBrand?.desc && (
            <div className='flex-row items-center gap-2'>
              <div>
                <div className='ml-1 text-xs font-semibold'>{selectedBrand?.desc}</div>
              </div>
              <div>
                <LabelText
                  padding='3px'
                  text={selectedBrand?.title}
                  variety='inreview capitalize'
                />
              </div>
            </div>
          )} */}
          {selectedBrand?.secondaryOptions?.length && (
            <div className='secondaryTextContainer'>
              <img
                src={ICONS?.lock}
                alt='secondary'
              />
              <LabelText
                padding='3px'
                text={secondaryText?.label}
                variety='secondaryText'
              />
              <img
                src={ICONS?.dropDownIcon}
                className='pointer'
                alt='dropdown'
                style={{ marginLeft: '15px' }}
                onClick={() => {
                  if (dropDownOption?.length) {
                    setDropDownOption([]);
                  } else {
                    setDropDownOption(selectedBrand?.secondaryOptions);
                  }
                }}
              />
            </div>
          )}
        </div>
      </div>

      {!!dropDownOption?.length && (
        <div className='dropdown-menu smallerWidth'>
          {dropDownOption?.map((option) => (
            <div
              className='menu-wrapper'
              onClick={() => {
                setSecondaryText(option);
                setDropDownOption([]);
              }}>
              <div className='item-wrapper'>{option?.label}</div>
              {secondaryText?.label === option?.label && <RadioButton selected={true} />}
            </div>
          ))}
        </div>
      )}

      {isDropdownOpen && (
        <div className='dropdown-menu'>
          {accountInformation?.map((brand) => (
            <div
              key={brand?.id}
              className='border-b-[1px] menu-wrapper'
              onClick={() => handleBrandSelect(brand)}>
              <div className='item-wrapper'>
                <div
                  key={brand?.id}
                  className='dropdown-item'>
                  <h4 className='!font-bold'>{brand?.name}</h4>
                  <div className='plan-wrap'>
                    <span className='!font-medium'>{brand?.desc}</span>
                  </div>
                </div>
              </div>
              {brand?.name === selectedBrand?.name && <RadioButton selected={true} />}
            </div>
          ))}
        </div>
      )}
      <ModelComponent
        isOpen={isModalVisible}
        title='Connecting WhatsApp cloud API'
        handleCancel={handleCancel}>
        <div className='flex-column gap-2 pt-3'>
          <div className='flex-column gap-3'>
            <div>
              <div
                style={{ color: 'var(--font-400)' }}
                className='font-sm weight-medium ml-15'>
                Add the following field in WhatsApp configuration page.
              </div>
            </div>

            <div className='copyBtnContainer'>
              <div
                style={{ color: 'var(--font-600)' }}
                className='font-sm weight-medium'>
                Callback URL.
              </div>

              <CopyLink text={'https://example.aptonshops.com/webhook/26539'} />
            </div>

            <div className='copyBtnContainer'>
              <div
                style={{ color: 'var(--font-600)' }}
                className='font-sm weight-medium'>
                Verify token
              </div>
              <CopyLink text={'example_webhook_26539'} />
            </div>
          </div>
          <div className='flex-row flex-end  mr-15'>
            <Button
              onClick={handleCancel}
              label={'Done'}
              size={'small'}
            />
          </div>
        </div>
      </ModelComponent>
    </div>
  );
};

export default ChannelHeaderDropDown;
