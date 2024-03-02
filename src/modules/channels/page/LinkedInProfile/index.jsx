import React, { useEffect, useState } from 'react';

import { useNavigate } from 'react-router-dom';

import ChartCard from '../../components/chartCard';
import EventCard from '../../components/eventCard';
import PictureUploader from '../../components/PictureUploader';
import { Button } from '../../../../components/form/Button/Button';
import Avatar from '../../../../components/commonComponents/avatar/Avatar';
import Cards from '../../../../components/commonComponents/CardsNew/cardsNew';
import CustomLineChart from '../../../../components/commonComponents/lineChart';
import PostCardList from '../../../../components/commonComponents/postCard/postCard';

import { images } from '../../../../assets/images';
import { ICONS } from '../../../../assets/icons';

import { kFormatter } from '../../../../helper';

import { LinkedInProfilePerformanceList } from '../../../../constant/app/channel';
import { lineChartData } from '../../../../constant/app/channel';
import { BROADCAST_DATA } from '../../constant';
import { Line } from 'recharts';

import { linkedinMetrics } from '../../api/Api';

import { useAspSelector, useAspDispatch } from '../../../../test/jest-redux-hooks';
import TitleAndDescription from '../../../../components/commonComponents/Title/TitleAndDescription';
const BrandStyle = {
  width: `calc(100% / 4)`,
};
const LinkedInProfile = () => {
  const [overviewList, setOverviewList] = useState(LinkedInProfilePerformanceList);

  const navigate = useNavigate();

  const { currentBrand } = useAspSelector((state) => state.app);
  const { channelList } = useAspSelector((state) => state?.Channel);

  useEffect(() => {
    const selectedTab = channelList?.filter((list) => list?.label === 'linkedinProfile');
    if (selectedTab?.length > 0 && selectedTab[0]?.apiData?.status === 1) {
      linkedinMetrics(currentBrand?.id).then((res) => assignData(res));
    }
  }, [currentBrand, channelList]);

  const assignData = (res) => {
    if (res?.status === 200) {
      const overViewList = LinkedInProfilePerformanceList?.map((item) => {
        if (item?.title === 'Connections') {
          return { ...item, content: Math.ceil(res?.data?.connections) };
        }
        // else if (item?.title === 'Followers') {
        //   return { ...item, content: Math.ceil(res?.data?.stats?.shareMentionsCount) };
        // } else if (item?.title === 'Published post') {
        //   return { ...item, content: Math.ceil(res?.data?.stats?.clickCount) };
        // } else if (item?.title === 'Scheduled post') {
        //   return { ...item, content: Math.ceil(res?.data?.stats?.engagement) };
        // } else if (item?.title === 'Rejected post') {
        //   return { ...item, content: Math.ceil(res?.data?.stats?.uniqueImpressionsCount) };
        // }
        else {
          return { ...item };
        }
      });
      setOverviewList(overViewList);
    }
  };

  return (
    <div className='whatsappDashboard'>
      <div className='pinterestHeaderContainer'>
        <div className='pinterestCoverContainer'>
          <div className='pinterestCoverImage'>
            <PictureUploader defaultImage={images?.UserTestBackground} />

            <div className='userProfile'>
              <div className='flex-row align-center'>
                <div className='my-auto'>
                  <Avatar
                    src={images?.UserTestProfile}
                    className='profileAvatar'
                  />
                </div>
                {/* <div>Gochew Grill</div>
                <img
                  src={ICONS?.blueTick}
                  alt='BlueTick'
                /> */}
              </div>
            </div>
          </div>

          <div className='postCardListContainer'>
            <PostCardList />
          </div>
        </div>

        <div class='w-50 h-100'>
          <ChartCard
            header='Connections'
            isLegend
            legend={
              <div className='w-100 px-1 pt-0.5 rounded-lg text-[0.78vw] text-[var(--TextPrimary)]'>
                (Last 28 days)
              </div>
            }>
            <CustomLineChart
              data={lineChartData}
              onClick={(data) => {}}
              xAxisLine={false}
              yAxisLine={false}
              isVertical={true}
              graphLabel='Connections'>
              <Line
                dataKey='value'
                stroke='var(--TextPrimary)'
              />
            </CustomLineChart>
          </ChartCard>
        </div>
      </div>

      <EventCard
        tagLength={100 / overviewList?.length}
        list={overviewList}
      />

      {/* <div className='recentPostsContainer'>
        <div className='w-50 '>
          <div className='flex-row space-between align-center mb-15'>
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
                  <div className='flex-row flex-center align-center'>
                    <img
                      src={ICONS?.instagramNotify}
                      alt='share'
                    />
                    <div className='viewsCount'>{kFormatter(each.views?.like)}</div>
                  </div>
                  <div className='flex-row flex-center align-center'>
                    <img
                      src={ICONS?.instagramComments}
                      alt='share'
                    />
                    <div className='viewsCount'>{kFormatter(each.views?.watch)}</div>
                  </div>
                  <div className='flex-row flex-center align-center'>
                    <img
                      src={ICONS?.instagramShare}
                      alt='share'
                      className=' w-4 h-4'
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
            <div className='font-large weight-bold'>Upcoming posts</div>

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
                  <div className='viewsCount'>Scheduled @</div>
                  <img
                    src={ICONS?.CalendarIcon}
                    alt='calender'
                  />
                  <div className='font-medium weight-semibold'>Oct, 19 - 03:30 PM</div>
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
                  src={ICONS?.LinkedInCommentICon}
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
                  src={ICONS?.instagramShare}
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

export default LinkedInProfile;
