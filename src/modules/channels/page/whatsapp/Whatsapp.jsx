import React, { useState, useEffect } from 'react';
import './style.css';

import { Form } from 'antd';

import { useNavigate } from 'react-router-dom';

import ChannelTabView from '../../components/ChannelTabView';
import PictureUploader from '../../components/PictureUploader';
import Select from '../../../../components/form/select/Select';
import CustomTextArea from '../../../../components/form/TextArea';
import { Button } from '../../../../components/form/Button/Button';
import TransactionWidgets from '../../components/TransactionWidget';
import Cards from '../../../../components/commonComponents/CardsNew/cardsNew';

import { ICONS } from '../../../../assets/icons';
import defaultImage from '../../../../assets/images/content.svg';
import { BROADCAST_DATA, WHATSAPP_CATEGORY_OPTIONS } from '../../constant';

import { kFormatter } from '../../../../helper';

import { whatsAppProfileDetails, updateProfile } from '../../api/Api';

import { useAspSelector, useAspDispatch } from '../../../../test/jest-redux-hooks';

const WhatsApp = () => {
  const [filter, setFilter] = useState({
    category: '',
    description: '',
    image: '',
  });
  const [selectedImage, setSelectedImage] = useState(null);
  const [profileDetails, setProfileDetails] = useState({});

  const { currentBrand } = useAspSelector((state) => state.app);
  const { channelList } = useAspSelector((state) => state?.Channel);

  const navigate = useNavigate();


  const selectedTab = channelList?.filter((list) => list?.label === 'whatsapp');

  useEffect(() => {
    if (selectedTab?.length > 0 && selectedTab[0]?.apiData?.status === 1) {
      whatsAppProfileDetails(currentBrand?.id).then((res) => {
        if (res?.status === 200) {
          setSelectedImage(res?.data?.response?.profile_picture_url);
          setFilter({
            ...filter,
            category: res?.data?.response?.vertical,
            description: res?.data?.response?.description,
          });
        }
      });
    }
  }, [currentBrand, channelList]);

  const updateProfileDetails = () => {
    const payLoad = {
      description: filter?.description,
      profile_picture_url: filter?.image,
      vertical: filter?.category,
    };
    updateProfile(payLoad).then((res) => {
      // console.log('updateProfile', res);
    });
  };
  return (
    <div className='whatsappDashboard'>
      <div className='whatsappHeaderContainer'>
        <div className='categoryImageDescContainer'>
          <div className='WAPhotoUploaderContainer'>
            <div className='WAPhotoUploader'>
              <PictureUploader
                selectedImage={selectedImage}
                setSelectedImage={setSelectedImage}
                defaultImage={defaultImage}
              />
            </div>
            <div className='categoryDescContainer'>
              <div className='font-large weight-bold'>Category</div>
              <Select
                value={filter?.category}
                onChange={(val) => {
                  setFilter({ ...filter, category: val?.value });
                }}
                options={WHATSAPP_CATEGORY_OPTIONS}
                placeholder={'Select a category'}></Select>

              <div className='font-large weight-bold mt-10'>Description</div>
              <CustomTextArea
                value={filter?.description}
                maxLength={512}
                autoSize={{ minRows: 3, maxRows: 3 }}
                onChange={(e) => setFilter({ ...filter, description: e?.target?.value })}
                placeholder={'Enter description'}
                textAreaClass='WADescriptionTextArea'
                customCount
              />
            </div>
          </div>

          <div className='flex-row flex-end '>
            <Button
              label={'Save'}
              size={'medium'}
              onClick={() => updateProfileDetails()}
            />
          </div>
        </div>

        <div className='w-50'>
          <TransactionWidgets />
        </div>
      </div>

      <div className='recentPostsContainer'>
        <div className='w-50 '>
          <div className='flex-row space-between align-center mb-15'>
            <div className='font-large weight-bold'>Recent broadcast</div>

            <Button
              className='viewAllBtn'
              size={'medium'}
              label='View All'
              onClick={() => navigate('/user/calender')}
            />
          </div>

          <div className='cardsContainer '>
            {BROADCAST_DATA.map((each) => (
              <Cards
                image={each.image}
                title={each.description}
              className='pointer'>
                <div className='cardDescription '>
                  <div className='flex-row space-center align-center'>
                    <img
                      src={ICONS?.DoubleTickIcon}
                      alt='share'
                    />
                    <div className='viewsCount'>{kFormatter(each.views?.like)}</div>
                  </div>

                  <div className='flex-row space-center align-center'>
                    <img
                      src={ICONS?.DoubleTickIcon}
                      alt='share'
                    />
                    <div className='viewsCount'>{kFormatter(each.views?.watch)}</div>
                  </div>
                  <div className='flex-row space-center align-center'>
                    <img
                      src={ICONS?.MagnetIcon}
                      alt='share'
                    />
                    <div className='viewsCount'>{kFormatter(each.views?.share)}</div>
                  </div>
                </div>
              </Cards>
            ))}
          </div>
        </div>

        <div className='w-50'>
          <div className='flex-row space-between align-center mb-15'>
            <div className='font-large weight-bold'>Upcoming broadcast</div>

            <Button
              className='viewAllBtn'
              size={'medium'}
              label='View All'
              onClick={() => navigate('/user/calender')}
            />
          </div>
          <div className='cardsContainer'>
            {BROADCAST_DATA.map((each) => (
              <Cards
                image={each.image}
                title={each.description} className='pointer'>
                <div className='scheduled-cardDescription flex-row'>
                  <div className='viewsCount'>Scheduled @</div>

                  <div className='font-medium weight-semibold flex-row align-center pl-10'>
                    <img
                      src={ICONS?.CalendarIcon}
                      alt='calender'
                      className='mr-5'
                    />
                    Oct, 19 - 03:30 PM
                  </div>
                </div>
              </Cards>
            ))}
          </div>
        </div>
      </div>

      <ChannelTabView />
    </div>
  );
};

export default WhatsApp;
