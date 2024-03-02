import React, { useState } from 'react';

import '../styles/Task.css';

import ModalHeader from '../../../components/commonComponents/modal/header';

import SubTask from './SubTask';
import TaskList from './TaskList';
import SelectCampaign from './SelectCampaign';
import Description from '../../campaign/components/Description';
import StatusHeader from './StatusHeader';
import Attachment from './Attachment';
import { Button } from '../../../components/form/Button/Button';

const CreateTask = ({ handleCancel }) => {
  return (
    <>
      <ModalHeader
        handleCancel={handleCancel}
        title='Create Task'
      />
      <div className='create-task-container'>
        <SelectCampaign />
      </div>
      <div className='taskBody'>
        <StatusHeader />

        {/* <input
        type='text'
        placeholder='Name Your Task...'
        className='task-input'
        maxLength={100}
      /> */}

        <Description />
        <TaskList />
        <Attachment />
        <SubTask />
        <div className='subtask-button  flex-row flex-end p-10 align-center '>
          <div>
            <button className='  mr-10'>Cancel</button>
          </div>
          <Button
            label={'Create Task'}
            size={'medium'}
          />
        </div>
      </div>
    </>
  );
};

export default CreateTask;
