import React from 'react';
import BreadCrumbs from './BreadCrumbs';

import { campaignBreadCrumbs } from '../../../constant/app/campaign/campaignExtended';
import { TaskBreadCrumbs } from '../../../constant/app/task/task';

const Crumbs = () => {
  return (
    <div>
      <BreadCrumbs data={TaskBreadCrumbs} />
      <BreadCrumbs data={campaignBreadCrumbs}  />
    </div>
  );
};

export default Crumbs;
