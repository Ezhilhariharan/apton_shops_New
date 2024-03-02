import React, { useEffect, useState } from 'react';

import './style.css';

import { Line } from 'recharts';

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

import { pinterestPagePerformanceList } from '../../../../constant/app/channel';
import { lineChartData } from '../../../../constant/app/channel';
import { posterlist } from '../../../../constant/app/channel';
import { BROADCAST_DATA } from '../../constant';

import { useAspSelector, useAspDispatch } from '../../../../test/jest-redux-hooks';
import { pinterestMetrics } from '../../api/Api';

import { divideArray } from '../../../../helper/index';

import moment from 'moment';
import TitleAndDescription from '../../../../components/commonComponents/Title/TitleAndDescription';
const BrandStyle = {
  width: `calc(100% / 4)`,
};

const PinterestView = () => {
  const [graphData, setGraphData] = useState(lineChartData);
  const [overviewList, setOverviewList] = useState(pinterestPagePerformanceList);
  const [pinterestProfile, setPinterestProfile] = useState('');

  const dispatch = useAspDispatch();
  const { currentBrand } = useAspSelector((state) => state.app);
  const { channelList } = useAspSelector((state) => state?.Channel);

  const navigate = useNavigate();

  const selectedTab = channelList?.filter((list) => list?.label === 'pinterest');

  useEffect(() => {
    if (selectedTab?.length > 0 && selectedTab[0]?.apiData?.status === 1) {
      setPinterestProfile(selectedTab[0]?.apiData?.configuration?.profile_picture);
      pinterestMetrics(currentBrand?.id).then((res) => assignData(res));
    }
  }, [currentBrand, channelList]);

  const assignData = (res) => {
    if (res?.status === 200) {
      const dividedArray = divideArray(res?.data?.daily_metrics, 4);
      let retrievedData = [];
      dividedArray?.map((list) => {
        retrievedData.unshift({
          name: moment(list[0]?.date).format('MMM D'),
          value: list[0]?.metrics?.IMPRESSION,
        });
      });
      setGraphData(retrievedData);
      setOverviewList((prev) => {
        const newState = pinterestPagePerformanceList?.map((item) => {
          if (item?.title === 'Profile visits') {
            return { ...item, content: res?.data?.summary_metrics?.VIDEO_10S_VIEW };
          } else if (item?.title === 'Follower') {
            return { ...item, content: selectedTab[0]?.apiData?.configuration?.followers };
          } else if (item?.title === 'Following') {
            return { ...item, content: selectedTab[0]?.apiData?.configuration?.following };
          } else if (item?.title === 'Engagement') {
            return { ...item, content: res?.data?.summary_metrics?.ENGAGEMENT };
          } else if (item?.title === 'Outbound clicks') {
            return { ...item, content: res?.data?.summary_metrics?.OUTBOUND_CLICK };
          }
        });
        return newState;
      });
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
                <Avatar
                  src={pinterestProfile}
                  className='profileAvatar'
                />
                {/* <div>Gochew Grill</div>
                <img
                  src={ICONS?.blueTick}
                  alt='BlueTick'
                /> */}
              </div>
            </div>
          </div>

          <div className='postCardListContainer'>
            <PostCardList list={posterlist} />
          </div>
        </div>

        <div class='w-50 h-100'>
          <ChartCard
            header='Impressions'
            legend={
              <div className='w-100 px-1 pt-0.5 rounded-lg text-[0.78vw] text-[var(--TextPrimary)]'>
                (Last 28 days)
              </div>
            }>
            <CustomLineChart
              data={graphData}
              onClick={(data) => {}}
              xAxisLine={false}
              yAxisLine={false}
              isVertical={true}
              Connections='Impressions'>
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
                  src={ICONS?.instagramNotify}
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
                  src={ICONS?.instagramComments}
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

export default PinterestView;
