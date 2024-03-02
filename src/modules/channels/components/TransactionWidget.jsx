import React, { useState, useEffect } from 'react';
import '../styles/transactionWidget.css';

import { DatePicker } from 'antd';
import dayjs from 'dayjs';

import Report from './reportCard';

import {
  charges,
  creditLimits,
  freeConversations,
  paidConversations,
} from '../../../constant/app/channel';

import { metaLimits } from '../api/Api';

import { useAspSelector, useAspDispatch } from '../../../test/jest-redux-hooks';
import { ICONS } from '../../../assets/icons';

const { RangePicker } = DatePicker;

const TransactionWidgets = () => {
  const [scrolled, setScrolled] = useState(false);
  const [metaLimit, setMetaLimits] = useState({});

  const { currentBrand } = useAspSelector((state) => state.app);
  const { channelList } = useAspSelector((state) => state?.Channel);

  const selectedTab = channelList?.filter((list) => list?.label === 'whatsapp');
  const dateFormat = 'YYYY-MM-DD';

  useEffect(() => {
    const defaultStartDate = dayjs().subtract(28, 'day')?.$d?.getTime() / 1000 + 19800;
    const defaultEndDate = dayjs()?.$d?.getTime() / 1000 + 19800;
    if (selectedTab?.length > 0 && selectedTab[0]?.apiData?.status === 1) {
      limitsUpdate(defaultStartDate, defaultEndDate);
    }
  }, [currentBrand, channelList]);

  const limitsUpdate = (start, end) => {
    metaLimits(currentBrand?.id, `start_date=${start}&end_date=${end}`).then((res) => {
      if (res?.status === 200) {
        const creditLimit = creditLimits?.map((item) => {
          if (item?.name === 'Total credit') {
            return { ...item, value: res?.data?.credit_limit?.total_credit || 0 };
          } else if (item?.name === 'Spent') {
            return { ...item, value: res?.data?.credit_limit?.spent || 0 };
          } else if (item?.name === 'Balance') {
            return { ...item, value: res?.data?.credit_limit?.balance || 0 };
          } else {
            return { ...item };
          }
        });
        const marketing = res?.data?.analytics?.filter((item) => item?.category === 'MARKETING');
        const freeTier = res?.data?.analytics?.filter((item) => item?.category === 'FREE_TIER');
        const utility = res?.data?.analytics?.filter((item) => item?.category === 'UTILITY');
        const freeEntryPoint = res?.data?.analytics?.filter(
          (item) => item?.category === 'FREE_ENTRY_POINT',
        );
        const authentication = res?.data?.analytics?.filter(
          (item) => item?.category === 'AUTHENTICATION',
        );
        const service = res?.data?.analytics?.filter((item) => item?.category === 'SERVICE');

        const paidConversation = paidConversations.map((item) => {
          if (item?.name === 'Marketing') {
            return { ...item, value: marketing?.length > 0 ? marketing[0]?.conversations : 0 };
          } else if (item?.name === 'Utility') {
            return { ...item, value: utility?.length > 0 ? utility[0]?.conversations : 0 };
          } else if (item?.name === 'Authentication') {
            return {
              ...item,
              value: authentication?.length > 0 ? authentication[0]?.conversations : 0,
            };
          } else if (item?.name === 'Service') {
            return { ...item, value: service?.length > 0 ? service[0]?.conversations : 0 };
          } else {
            return { ...item };
          }
        });

        const freeConversation = freeConversations.map((item) => {
          if (item?.name === 'Free tier') {
            return { ...item, value: freeTier?.length > 0 ? freeTier[0]?.conversations : 0 };
          } else if (item?.name === 'Free entry point') {
            return {
              ...item,
              value: freeEntryPoint?.length > 0 ? freeEntryPoint[0]?.conversations : 0,
            };
          } else {
            return { ...item };
          }
        });

        const charge = charges.map((item) => {
          if (item?.name === 'Marketing') {
            return { ...item, value: marketing?.length > 0 ? marketing[0]?.cost : 0 };
          } else if (item?.name === 'Utility') {
            return { ...item, value: utility?.length > 0 ? utility[0]?.cost : 0 };
          } else if (item?.name === 'Authentication') {
            return {
              ...item,
              value: authentication?.length > 0 ? authentication[0]?.cost : 0,
            };
          } else if (item?.name === 'Service') {
            return { ...item, value: service?.length > 0 ? service[0]?.cost : 0 };
          } else {
            return { ...item };
          }
        });

        setMetaLimits({
          creditLimits: creditLimit,
          paidConversation: paidConversation,
          freeConversation: freeConversation,
          charge: charge,
        });
      }
    });
  };

  const handleScroll = (e) => {
    if (e.target.scrollTop > 0) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  const onCalendarChange = (dates) => {
    const startDate = dates && dates[0]?.$d?.getTime() / 1000 + 19800;
    const endDate = dates && dates[1]?.$d?.getTime() / 1000 + 19800;
    limitsUpdate(startDate, endDate);
  };

  const addData = (list) => {
    let count = 0;
    list?.forEach((item) => (count += item?.value));
    return count;
  };

  return (
    <div className='transactionReportsContainer'>
      <RangePicker
        allowClear={false}
        className='w-50 h-20'
        defaultValue={[dayjs().subtract(28, 'day'), dayjs()]}
        format={dateFormat}
        onCalendarChange={onCalendarChange}
      />
      <div
        className='scrollableContainer'
        onScroll={handleScroll}>
        <div className='reportCardContainer'>
          <Report
            className='card'
            header={'Credit limit'}
            button
            report={metaLimit?.creditLimits}
          />
          <Report
            className='card'
            header={'Paid conversations'}
            headerValue={addData(metaLimit?.paidConversation)}
            report={metaLimit?.paidConversation}
          />
          <Report
            className='card'
            header={'Free conversations'}
            headerValue={addData(metaLimit?.freeConversation)}
            report={metaLimit?.freeConversation}
          />
          <Report
            header={'Charges'}
            headerValue={addData(metaLimit?.charge)}
            className='card'
            report={metaLimit?.charge}
          />
        </div>
      </div>
    </div>
  );
};

export default TransactionWidgets;
