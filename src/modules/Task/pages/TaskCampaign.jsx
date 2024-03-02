import React, { useState } from 'react';
import '../styles/Task.css';

import { TaskBreadCrumbs, leftTaskList } from '../../../constant/app/task/task';
import TaskHeader from '../components/TaskHeader';
import StatusHeader from '../components/StatusHeader';
import TaskList from '../components/TaskList';
import LeftList from '../../../components/commonComponents/leftListLayout/Index';
import TaskRight from './TaskRightLayout';
import TabView from '../../../components/commonComponents/TabView/TabView';
import BreadCrumbs from '../../../components/commonComponents/breadCrumbs/BreadCrumbs';
import Activity from '../../../components/commonComponents/activity/Activity';
import Attachment from '../components/Attachment';
import SubTask from '../components/SubTask';

const TaskCampaign = () => {
  return (
    <div className='flex-row appWrapper'>
      <LeftList list={leftTaskList} />
      <div className='task-rightLayout'>
        {/* <TabView />
        <TaskRight /> */}
      </div>
    </div>
  );
};

export default TaskCampaign;
