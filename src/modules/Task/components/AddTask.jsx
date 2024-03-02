import React, { useState } from 'react';

import TaskCreation from './SubTaskRight';

function AddTask({ createTask }) {
  const [value, setValue] = useState('');

  const handleDelete = () => {};
  return (
    <div className='flex-row justify-center '>
      <div className='createTaskCard flex-column space-between'>
        <input
          type='text'
          placeholder={'Name your task...'}
          onChange={(e) => setValue(e.target.value)}
          value={value}
          aria-label='createTask'
          data-testid='createTask'
          className='createTaskInput'
          maxLength={100}
        />
        <div className='TaskCreation mt-5 w-100'>
          <TaskCreation
            assigneeWidth='22px'
            assigneeHeight='22px'
            handleDelete={handleDelete}
          />
        </div>
      </div>
    </div>
  );
}

export default AddTask;
