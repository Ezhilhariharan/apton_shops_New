import { useState, useEffect } from 'react';

import { listDrawerHeader } from '../constant/app/campaign/campaign';

export default function useAssignee() {
  const [assigneeList, setAssigneeList] = useState([]);

  useEffect(() => {
    setAssigneeList(listDrawerHeader);
  }, []);

  const SelectList = (item) => {
    setAssigneeList((prev) => {
      const newState = prev?.map((prevItem) => {
        if (prevItem?.name === item?.name) {
          return prevItem?.selected
            ? { ...prevItem, selected: false }
            : { ...prevItem, selected: true };
        } else {
          return { ...prevItem };
        }
      });
      return newState;
    });
  };

  return [assigneeList, SelectList];
}
