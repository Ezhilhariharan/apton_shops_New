import React from 'react';
import './styles.css';

import { Line } from 'recharts';

import { useNavigate } from 'react-router-dom';

import PostCardList from '../../../../components/commonComponents/postCard/postCard';
import CustomLineChart from '../../../../components/commonComponents/lineChart';
import Cards from '../../../../components/commonComponents/CardsNew/cardsNew';
import Avatar from '../../../../components/commonComponents/avatar/Avatar';
import { Button } from '../../../../components/form/Button/Button';
import PictureUploader from '../../components/PictureUploader';
import ChartCard from '../../components/chartCard';
import EventCard from '../../components/eventCard';

import { images } from '../../../../assets/images';
import { ICONS } from '../../../../assets/icons';

import { kFormatter } from '../../../../helper';

import { twitterPagePerformanceList } from '../../../../constant/app/channel';
import { lineChartData } from '../../../../constant/app/channel';
import { posterlist } from '../../../../constant/app/channel';
import { BROADCAST_DATA } from '../../constant';
import TitleAndDescription from '../../../../components/commonComponents/Title/TitleAndDescription';
const BrandStyle = {
  width: `calc(100% / 4)`,
};
const TwitterView = () => {
  const navigate = useNavigate();
  return (
    <div className='whatsappDashboard'>
      <div className='twitterHeaderContainer'>
        <div className='twitterCoverContainer'>
          <div className='twitterCoverImage'>
            <PictureUploader defaultImage={images?.UserTestBackground} />

            <div className='userProfile'>
              <div className='flex-row align-center'>
                <Avatar
                  src={images?.UserTestProfile}
                  className='profileAvatar'
                />
                {/* 
                <div>Gochew Grill</div>

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
            header='Followers'
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
              graphLabel='Followers'>
              <Line
                dataKey='value'
                stroke='var(--TextPrimary)'
              />
            </CustomLineChart>
          </ChartCard>
        </div>
      </div>

      <EventCard
        tagLength={100 / twitterPagePerformanceList?.length}
        list={twitterPagePerformanceList}
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

export default TwitterView;
