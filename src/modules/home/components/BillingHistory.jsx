import React from 'react';
import '../styles/Brand.css';

import { ICONS } from '../../../assets/icons/index';

import { BillingCardList } from '../../../constant/app/Brand/brand';

const BillingHistory = () => {
  return (
    <div className=' Billing-history-container flex-column'>
      <div className='flex-row'>
        <p>Billing history</p>
      </div>
      <div className='Billing-history-wrapper flex-column '>
        <div className=' billing-title flex-row  space-between p-5'>
          <p className=' invoice '>Invoice</p>
          <div className='Billing-subtitle flex-row space-evenly'>
            <p>Billing date</p>
            <p>Plan</p>
            <p>Amount</p>
          </div>
        </div>

        <div className='aa'>
          {BillingCardList?.map((item) => (
            <div className='Billing-card flex-column align-center justify-center '>
              <div
                className='flex-row align-center'
                key={item?.id}>
                <div className=' Billing-right flex-row align-center '>
                  <div className='Billing-icon flex-row  align-center pointer'>
                    <div>
                      <img
                        src={ICONS?.BillingPdfIcon}
                        alt='pdfIcon'
                      />
                    </div>
                    <p>{item?.name}</p>
                  </div>
                  <div className=' Billing-image flex-row w-20 space-between align-center pointer'>
                    <img
                      src={ICONS?.campaignEye}
                      alt='EyeIcon'
                    />
                    <img
                      src={ICONS?.TaskDownload}
                      alt='download'
                    />
                  </div>
                </div>
                <div className=' Billing-card-left flex-row space-evenly'>
                  <p>{item?.Billing_date}</p>
                  <p>{item?.plan_name}</p>
                  <p>{item?.amt}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BillingHistory;
