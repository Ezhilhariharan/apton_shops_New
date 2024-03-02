import React, { useState, useEffect } from 'react';
import './instagram.css';

import { Bar } from 'recharts';

import { useNavigate } from 'react-router-dom';

import PostCardList from '../../../../components/commonComponents/postCard/postCard';
import Barchart from '../../../../components/commonComponents/barChart/barchart';
import Cards from '../../../../components/commonComponents/CardsNew/cardsNew';
import Legend from '../../../../components/commonComponents/Legand/legand';
import { Button } from '../../../../components/form/Button/Button';
import ChartCard from '../../components/chartCard';
import EventCard from '../../components/eventCard';

import { ICONS } from '../../../../assets/icons';
import { images } from '../../../../assets/images';

import { kFormatter } from '../../../../helper';

import { posterlist } from '../../../../constant/app/channel';
import { instaPagePerformanceList } from '../../../../constant/app/channel';

import { barChartLegend, barChartMockData } from '../../../../constant/app/channel';
import { BROADCAST_DATA } from '../../constant';
import PictureUploader from '../../components/PictureUploader';
import CustomTextArea from '../../../../components/form/TextArea';

import { useAspSelector, useAspDispatch } from '../../../../test/jest-redux-hooks';
import { instagramAnalytics } from '../../api/Api';

const Instagram = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [descriptionValue, setDescriptionValue] = useState(null);
  const [overviewList, setOverviewList] = useState(instaPagePerformanceList);
  const [graphData, setGraphData] = useState(barChartMockData);

  const dispatch = useAspDispatch();
  const { currentBrand } = useAspSelector((state) => state.app);
  const { channelList } = useAspSelector((state) => state?.Channel);

  const navigate = useNavigate();

  useEffect(() => {
    const selectedTab = channelList?.filter((list) => list?.label === 'instagram');

    if (selectedTab?.length > 0 && selectedTab[0]?.apiData?.status === 1) {
      instagramAnalytics(currentBrand?.id).then((res) => assignData(res));
    }
  }, [currentBrand, channelList]);

  const getData = (list, targetData) => {
    let count = 0;

    const data = list?.filter((item) => item?.name === targetData);
    data[0]?.values?.forEach((item) => (count += item?.value));

    return count;
  };

  const assignData = (res) => {
    if (res?.status === 200) {
      const list = instaPagePerformanceList?.map((data) => {
        if (data?.title === 'Follower') {
          return { ...data, content: res?.data?.bio?.followers_count };
        } else if (data?.title === 'Reach') {
          const count = getData(res?.data?.analytics, 'reach');
          return { ...data, content: count };
        } else if (data?.title === 'Profile visits') {
          const count = getData(res?.data?.analytics, 'profile_views');
          return { ...data, content: count };
        } else if (data?.title === 'Impression') {
          const count = getData(res?.data?.analytics, 'impressions');
          return { ...data, content: count };
        } else if (data?.title === 'Tags') {
          return { ...data, content: res?.data?.tags };
        } else {
          return { ...data };
        }
      });
      const getGraphData = res?.data?.audience?.map((item) => {
        return { name: item?.dimension_values?.toString(), value: item?.value };
      });
      setDescriptionValue(res?.data?.bio?.biography);
      setGraphData(getGraphData);
      setOverviewList(list);
    }
  };

  const xAxisLabel = (props) => {
    const { x, y, payload } = props;
    const labelText = `${payload?.value}%`;
    return (
      <g>
        <text
          className='text-[10px]'
          x={x - 22}
          y={y + 5}>
          {labelText}
        </text>
      </g>
    );
  };

  return (
    <div className='whatsappDashboard'>
      <div className='instagramHeaderContainer'>
        <div className='imageDescPostContainer'>
          <div className='imageDescContainer'>
            <div className='imageUploadBox'>
              <PictureUploader
                selectedImage={selectedImage}
                setSelectedImage={setSelectedImage}
                defaultImage={images?.EmptyImage}
              />
            </div>
            <div className='descContainer'>
              <div className='font-large weight-bold'>Bio</div>

              <CustomTextArea
                value={descriptionValue}
                maxLength={512}
                autoSize={{ minRows: 3, maxRows: 3 }}
                onChange={(e) => setDescriptionValue(e?.target?.value)}
                placeholder={'Enter bio'}
                customCount
                readOnly={true}
                textAreaClass={'instaTextArea'}
              />
              {/* <div className='flex-row flex-end mt-5'>
                <Button
                  label={'Save'}
                  size={'medium'}
                  onClick={() => {}}
                />
              </div> */}
            </div>
          </div>

          <div className='postCardListContainer'>
            <PostCardList list={posterlist} />
          </div>
        </div>

        <div class='chatContainer'>
          <ChartCard
            header='Audience Demographic'
            isLegend>
            <Barchart
              data={graphData}
              yAxisTick={xAxisLabel}
              onClick={(data) => {}}
              xAxisLine={false}
              yAxisLine={false}
              isVertical={true}>
              <Bar
                dataKey='value'
                barSize={30}
                fill='var(--TextPrimary)'
              />
            </Barchart>
          </ChartCard>
        </div>
      </div>

      <EventCard
        tagLength={100 / overviewList?.length}
        list={overviewList}
      />

      <div className='recentPostsContainer'>
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
      </div>
    </div>
  );
};

export default Instagram;
