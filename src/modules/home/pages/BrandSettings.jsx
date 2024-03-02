import React from 'react';
import '../styles/Brand.css';

import BrandDetails from '../components/BrandDetails';
import SubscriptionPlan from '../components/SubscriptionPlan';
import BillingInfo from '../components/BillingInfo';
import BillingHistory from '../components/BillingHistory';
import BrandInvite from '../components/BrandInvite';
import InviteMember from '../components/InviteMember';

const BrandSettings = () => {
  return (
    <div className='brand-settings-main-container space-between '>
      <div className=' brand-setting-wrapper flex-row space-between'>
        <BrandDetails />
        <SubscriptionPlan />
      </div>
      <div className=' brand-setting-wrapper flex-row space-between '>
        <BillingInfo />
        <BillingHistory />
      </div>
      <BrandInvite />
      <InviteMember />
    </div>
  );
};

export default BrandSettings;
