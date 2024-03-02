import React, { useEffect, useState } from 'react';
import '../../styles/channel.css';
import '../FacebookGroup/styles.css';

import { Outlet, useNavigate } from 'react-router-dom';

import { ICONS } from '../../../../assets/icons';
import { images } from '../../../../assets/images';
import { BROADCAST_DATA } from '../../constant';
import { barChartLegend, barChartMockData, lineChartData } from '../../../../constant/app/channel';
import { posterlist } from '../../../../constant/app/campaign/campaignExtended';
import { faceBookPagePerformanceList } from '../../../../constant/app/campaign/campaign';

import PostCardList from '../../../../components/commonComponents/postCard/postCard';
import Barchart from '../../../../components/commonComponents/barChart/barchart';
import { Bar, Line } from 'recharts';
import ChartCard from '../../components/chartCard';
import Legend from '../../../../components/commonComponents/Legand/legand';
import EventCard from '../../components/eventCard';
import PictureUploader from '../../components/PictureUploader';
import Avatar from '../../../../components/commonComponents/avatar/Avatar';
import TitleAndDescription from '../../../../components/commonComponents/Title/TitleAndDescription';
import Cards from '../../../../components/commonComponents/CardsNew/cardsNew';
import { kFormatter } from '../../../../helper';
import { Button } from '../../../../components/form/Button/Button';

import { useAspSelector, useAspDispatch } from '../../../../test/jest-redux-hooks';
import { fbPageMetrics, fbPageAnalytics } from '../../api/Api';
import { updateToggleToast } from '../../../../reduxToolkit/appSlice';

const BrandStyle = {
  width: `calc(100% / 4)`,
};

const FaceBookPage = () => {
  const [analyticsData, setAnalyticsData] = useState([]);
  const [overviewMetrics, setOverviewMetrics] = useState(faceBookPagePerformanceList);
  const [pageDetails, setPageDetails] = useState({});
  const [graphLegend, setGraphLegend] = useState(barChartLegend);

  const dispatch = useAspDispatch();
  const { currentBrand, toggleToast } = useAspSelector((state) => state.app);
  const { channelList } = useAspSelector((state) => state?.Channel);

  const navigate = useNavigate();

  useEffect(() => {
    const selectedTab = channelList?.filter((list) => list?.label === 'facebook');

    if (selectedTab?.length > 0 && selectedTab[0]?.apiData?.status === 1) {
      fbPageMetrics(currentBrand?.id).then((res) => assignMetricData(res));
      fbPageAnalytics(currentBrand?.id).then((res) => assignAnalyticData(res));
    }
  }, [currentBrand, channelList]);

  const assignAnalyticData = (res) => {
    let newArray = [];
    if (res?.status === 200) {
      res?.data?.result?.map((analytic) => {
        const newObj = {
          name: analytic?.age,
          male: analytic?.gender?.male,
          female: analytic?.gender?.female,
        };
        newArray.push(newObj);
      });
      const legendGraph = barChartLegend?.map((item) => {
        if (item?.name === 'Male') {
          return { ...item, value: res?.data?.male };
        } else if (item?.name === 'Female') {
          return { ...item, value: res?.data?.female };
        }
      });
      setGraphLegend(legendGraph);
      setAnalyticsData(newArray);
    } else responseError(res?.response?.data?.error);
  };

  const assignMetricData = (res) => {
    if (res?.status === 200) {
      setPageDetails(res?.data?.page_detail);
      let metricsObject = res?.data;
      setOverviewMetrics((prev) => {
        const newState = prev?.map((metric) => {
          let newObj;
          Object.keys(metricsObject).map((key) => {
            if (metric?.apiTitle === key) return (newObj = { name: key, val: metricsObject[key] });
          });
          if (metric?.apiTitle === newObj?.name) {
            return { ...metric, content: newObj?.val };
          } else {
            return { ...metric };
          }
        });
        return newState;
      });
    } else responseError(res?.response?.data?.error);
  };

  const responseError = (error) => {
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
  // console.log('analyticsData', analyticsData);
  // console.log('graphLegend', graphLegend);
  return (
    <div className='whatsappDashboard  '>
      <div className='channelInfoSection w-100 flex-row space-between '>
        <div className='channelInfoSection-left h-100 flex-column space-between'>
          <div className='w-100 h-70 relative border'>
            <PictureUploader defaultImage={pageDetails?.cover?.source} />
            <div className={`userProfile flex-row`}>
              <div className='my-auto'>
                <Avatar
                  src={pageDetails?.picture?.data?.url || images?.UserTestProfile}
                  className='profileAvatar'
                />
              </div>
              {/* <div className=' ml-10 my-auto'>Gochew Grill</div>
              <img
                src={ICONS?.blueTick}
                alt='BlueTick'
                className='my-auto'
              /> */}
            </div>
          </div>
          <div className='w-100 h-30 flex-column flex-end   '>
            <PostCardList list={posterlist} />
          </div>
        </div>
        <div className='w-50 h-100 '>
          <ChartCard
            header='Audience Demographic'
            isLegend
            legend={<Legend data={graphLegend} />}>
            <Barchart
              data={analyticsData}
              yAxisTick={xAxisLabel}
              onClick={(data) => {}}
              xAxisLine={false}
              yAxisLine={false}
              isVertical={true}>
              <Bar
                dataKey='Male'
                barSize={10}
                fill='var(--TextPrimary)'
              />
              <Bar
                dataKey='Female'
                barSize={10}
                fill='var(--a)'
              />
            </Barchart>
          </ChartCard>
        </div>
      </div>
      <div className='w-100  '>
        <EventCard
          tagLength={100 / overviewMetrics?.length}
          list={overviewMetrics}
        />
      </div>
      {/* <div className='mt-10 flex-row '>
        <div className='w-50 mr-6'>
          <div className='flex-row justify-between align-center font-large font-bold '>
            <TitleAndDescription
              title={'Recent posts'}
              size={'medium'}
              gap={'2px'}
            />
            <Button
              className='viewAllBtn'
              size={'medium'}
              label='View All'
              onClick={() => navigate('/user/calender')}
            />
          </div>

          <div className='flex-row  mt-1 gap-8 '>
            {BROADCAST_DATA.map((each) => (
              <Cards
                key={each?.id}
                image={each.image}
                title={each.description}>
                <div className='flex-row p-2 space-between align-center '>
                  <div className=' cardDescription flex-row justify-center align-center '>
                    <img
                      src={ICONS?.like}
                      alt='share'
                    />
                    <div className='viewsCount'>{kFormatter(each?.views?.like)}</div>
                  </div>
                  <div className='cardDescription flex-row justify-center align-center '>
                    <img
                      src={ICONS?.faceBookComment}
                      alt='share'
                    />
                    <div className='viewsCount'>{kFormatter(each?.views?.watch)}</div>
                  </div>
                  <div className='cardDescription flex-row justify-center align-center '>
                    <img
                      src={ICONS?.faceBookShare}
                      alt='share'
                    />
                    <div className='viewsCount'>{kFormatter(each?.views?.share)}</div>
                  </div>
                </div>
              </Cards>
            ))}
          </div>
        </div>
        <div className='w-50 ml-10 '>
          <div className='flex-row justify-between align-center '>
            <TitleAndDescription
              title={'Upcoming posts'}
              size={'medium'}
              gap={'2px'}
            />
            <Button
              className='viewAllBtn'
              size={'medium'}
              label='View All'
              onClick={() => navigate('/user/calender')}
            />
          </div>
          <div className='cardDescription gap-8 mt-1 flex-row '>
            {BROADCAST_DATA.map((each) => (
              <Cards
                image={each.image}
                title={each.description}>
                <div className='flex-row p-2  align-center '>
                  <div className='viewsCount flex-row'>Scheduled @</div>
                  <div className='Scheduled flex-row pl-6'>
                    <img
                      src={ICONS?.CalendarIcon}
                      alt='calender'
                    />
                    <div className=''>Oct, 19 - 03:30 PM</div>
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

export default FaceBookPage;
