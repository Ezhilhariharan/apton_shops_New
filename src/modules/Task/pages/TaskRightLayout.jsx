import React, { useState } from 'react';
import '../styles/Task.css';

import { TaskBreadCrumbs } from '../../../constant/app/task/task';

import TaskHeader from '../components/TaskHeader';
import BreadCrumbs from '../../../components/commonComponents/breadCrumbs/BreadCrumbs';
import SocialMedia from '../components/WorkSpace/SocialMedia';
import FbAnalytics from '../components/WorkSpace/FbAnalytics';
import InstaAnalytics from '../components/WorkSpace/InstaAnalytics';
import WhatsappAnalytics from '../components/WorkSpace/WhastappAnalytics';
import { useEffect } from 'react';

function TaskRightLayout() {
  const [showFlagImage, setShowFlagImage] = useState(true);
  const [selectedTab, setSelectedTab] = useState('Workspace');
  const [selected, setSelected] = useState('whatsapp');

  // const handleClick = (iconName) => setSelected(iconName);
  const handleClick = (iconName) => setSelected('whatsapp');

  return (
    <>
      <div className='taskWrapper'>
        <BreadCrumbs data={TaskBreadCrumbs} />
        <TaskHeader setSelectedTab={setSelectedTab} />
        {/* {selectedTab === 'Task' && (
          <div className='flex-row '>
            <div className='w-60'>
              <StatusHeader showFlagImage={showFlagImage} />
              <TaskList />
              <Attachment />
              <SubTask /> 
            </div>
            <div className='w-40'>
              <Activity />
            </div>
          </div>
        )} */}
      </div>
      {selectedTab === 'Workspace' && (
        <div className='socialMediaWrapper flex-row  space-between w-100'>
          <SocialMedia
            handleClick={handleClick}
            selected={selected}
          />
          {selected === 'facebook' && <FbAnalytics />}
          {selected === 'instagram' && <InstaAnalytics />}
          {selected === 'whatsapp' && <WhatsappAnalytics />}
        </div>
      )}
    </>
  );
}

export default TaskRightLayout;
