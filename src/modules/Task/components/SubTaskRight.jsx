import React from 'react';

import { ICONS } from '../../../assets/icons/index';

import { Button } from '../../../components/form/Button/Button';
import Assignee from '../../../components/commonComponents/assignee/Index';

function SubTaskRight({ handleDelete, handleSaveClick, item, id, assigneeWidth, assigneeHeight }) {
  return (
    <div className='w-100 flex-row justify-between align-center'>
      <img
        src={ICONS?.Taskcalendar}
        alt='Calendar'
      />
      <img
        src={ICONS?.SubTaskPriority}
        alt='TaskPriority'
      />

      <Assignee
        width={assigneeWidth}
        height={assigneeHeight}
      />

      <img
        src={ICONS?.CloseCircle}
        alt='close'
        className='deleteSubTask'
        onClick={() => handleDelete(id, item)}
      />

      <Button
        label={'Save'}
        size={'xm'}
        onClick={() => handleSaveClick(item)}
      />
    </div>
  );
}

export default SubTaskRight;
