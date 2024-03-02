import React, { useState, useEffect } from 'react';
import './styles.css';

import { useNavigate } from 'react-router-dom';

import PostCardList from '../../../../components/commonComponents/postCard/postCard';
import EventCard from '../../components/eventCard';
import PictureUploader from '../../components/PictureUploader';
import Cards from '../../../../components/commonComponents/CardsNew/cardsNew';
import { Button } from '../../../../components/form/Button/Button';

import { ICONS } from '../../../../assets/icons';
import { images } from '../../../../assets/images';

import { kFormatter } from '../../../../helper';

import { BROADCAST_DATA } from '../../constant';
import { faceBookGroupPerformanceList } from '../../../../constant/app/channel';
import CustomTextArea from '../../../../components/form/TextArea';

import { useAspSelector, useAspDispatch } from '../../../../test/jest-redux-hooks';
import { fbGroupAnalytics } from '../../api/Api';
import TitleAndDescription from '../../../../components/commonComponents/Title/TitleAndDescription';
const BrandStyle = {
  width: `calc(100% / 4)`,
};

const FaceBookGroup = () => {
  const [descriptionValue, setDescriptionValue] = useState({
    description: '',
  }); // description filed added to mari bro futher implementation do change it
  const [analyticsData, setAnalyticsData] = useState({});
  const [overviewList, setOverviewList] = useState(faceBookGroupPerformanceList);

  const dispatch = useAspDispatch();
  const { currentBrand } = useAspSelector((state) => state.app);
  const { channelList } = useAspSelector((state) => state?.Channel);

  const navigate = useNavigate();

  useEffect(() => {
    const selectedTab = channelList?.filter((list) => list?.label === 'facebookGroup');
    if (selectedTab?.length > 0 && selectedTab[0]?.apiData?.status === 1) {
      fbGroupAnalytics(currentBrand?.id).then((res) => assignData(res));
    }
  }, [currentBrand, channelList]);

  const assignData = (res) => {
    if (res?.status === 200) {
      setAnalyticsData(res?.data);
      // setDescriptionValue(res?.data?.description);
      const list = faceBookGroupPerformanceList?.map((data) => {
        if (data?.title === 'Members count') {
          return { ...data, content: res?.data?.member_count };
        } else {
          return { ...data };
        }
      });
      setOverviewList(list);
    }
  };

  return (
    <div className='whatsappDashboard'>
      <div className='facebookHeaderContainer'>
        <div className='fbDescContainer'>
          <PictureUploader
            defaultImage={
              analyticsData?.picture?.data?.url
                ? analyticsData?.picture?.data?.url
                : images?.UserTestBackground
            }
          />
        </div>

        <div class='fbDescContainer fbDescContainerRight'>
          <div className='font-large weight-bold mt-10'>Description</div>
          <CustomTextArea
            value={descriptionValue?.description}
            maxLength={512}
            autoSize={{ minRows: 3, maxRows: 3 }}
            onChange={(e) =>
              setDescriptionValue({ ...descriptionValue, description: e?.target?.value })
            }
            placeholder={'Enter bio'}
            textAreaClass='fbgroupDescInput'
            customCount
          />
          <div className='saveBtn '>
            <Button
              label={'Save'}
              size={'medium'}
              onClick={() => {}}
            />
          </div>
        </div>
      </div>

      {/* <div
        className='createPostContainer'
        style={{ width: '100%', border: '1px solid red' }}>
        <PostCardList />
      </div> */}
      <div className='createPost flex-row align-center '>
        <div>
          <img
            src={ICONS?.PostIcon}
            alt='postIcon'
            style={{ width: '18px', height: '18px' }}
          />
        </div>
        <p> Create Post</p>
      </div>

      <EventCard
        tagLength={100 / overviewList?.length}
        list={overviewList}
      />

      {/* <div className='recentPostsContainer'>
        <div className='w-50'>
          <div className='flex-row space-between align-center mb-10'>
            <div className='font-large weight-bold'>Recent posts</div>
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
                title={each.description}>
                <div className='cardDescription'>
                  <div className='flex-row'>
                    <img
                      src={ICONS?.like}
                      alt='share'
                    />
                    <div className='viewsCount'>{kFormatter(each.views?.like)}</div>
                  </div>

                  <div className='flex-row'>
                    <img
                      src={ICONS?.faceBookComment}
                      alt='share'
                    />
                    <div className='viewsCount'>{kFormatter(each.views?.watch)}</div>
                  </div>
                </div>
              </Cards>
            ))}
          </div>
        </div>

        <div className='w-50'>
          <div className='flex-row space-between align-center mb-5'>
            <div className='font-large weight-bold'>Upcoming Posts</div>

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
                title={each.description}>
                <div className='cardDescription'>
                  <div className='viewsCount flex-row'>Scheduled @</div>
                  <div className='flex-row'>
                    <img
                      src={ICONS?.CalendarIcon}
                      alt='calender'
                      style={{ marginRight: '5px' }}
                    />
                  </div>
                  <div
                    className='font-medium weight-semibold flex-row'
                    style={{ border: '1px solid red' }}>
                    Oct, 19 - 03:30 PM
                  </div>
                </div>
              </Cards>
            ))}
          </div>
        </div>
      </div> */}
      <div
        className='flex-row w-100 space-between '
        style={{ padding: '24px 0px 16px 0px' }}>
        <div
          className='  flex-row space-between align-center'
          style={{ width: '49%' }}>
          <TitleAndDescription
            className=''
            title={'Recent posts'}
            size={'medium'}
          />
          <Button
            className='viewAllBtn'
            size={'medium'}
            label='View All'
            onClick={() => navigate('/user/calender')}
          />
        </div>

        <div
          className=' flex-row space-between align-center'
          style={{ width: '49%' }}>
          <TitleAndDescription
            title={'Upcoming posts'}
            size={'medium'}
          />
          <Button
            className='viewAllBtn'
            size={'medium'}
            label='View All'
            onClick={() => navigate('/user/calender')}
          />
        </div>
      </div>

      <div
        className='flex-row w-100 space-between '
        style={{ height: 'auto' }}>
        {BROADCAST_DATA.map((each) => (
          <Cards
            className='cards'
            style={BrandStyle}
            key={each?.id}
            image={each.image}
            title={each.description}>
            <div className='cards-container flex-row w-100 space-between align-center   '>
              <div className=' flex-row align-center'>
                <img
                  src={ICONS?.like}
                  alt='share'
                  style={{ width: '17px', height: '17px' }}
                />
                <div
                  className='flex-row align-center'
                  style={{ paddingLeft: '5px' }}>
                  {kFormatter(each?.views?.like)}
                </div>
              </div>
              <div className='  flex-row align-center'>
                <img
                  src={ICONS?.faceBookComment}
                  alt='share'
                  style={{ width: '15px', height: '15px' }}
                />
                <div
                  className='flex-row '
                  style={{ paddingLeft: '5px' }}>
                  {kFormatter(each?.views?.watch)}
                </div>
              </div>
              <div className=' flex-row align-center'>
                <img
                  src={ICONS?.faceBookShare}
                  alt='share'
                  style={{ width: '15px', height: '15px' }}
                />
                <div
                  className=''
                  style={{ paddingLeft: '5px' }}>
                  {kFormatter(each?.views?.share)}
                </div>
              </div>
            </div>
          </Cards>
        ))}

        {BROADCAST_DATA.map((each) => (
          <Cards
            className='cards'
            style={BrandStyle}
            image={each.image}
            title={each.description}>
            <div className='scheduled-container flex-row align-center '>
              <div
                className=' flex-row align-center font-medium '
                style={{ color: 'var(--whatsapptext)' }}>
                Scheduled @
              </div>
              <div
                className='flex-row align-center '
                style={{ marginLeft: '10px' }}>
                <img
                  src={ICONS?.CalendarIcon}
                  alt='calender'
                />
                <div className='flex-row'>Oct, 19 - 03:30 PM</div>
              </div>
            </div>
          </Cards>
        ))}
      </div>
    </div>
  );
};

export default FaceBookGroup;
