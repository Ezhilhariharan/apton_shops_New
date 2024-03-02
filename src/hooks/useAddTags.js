import { useState } from 'react';

function useAddTags() {
  const [addingTags, setAddingTags] = useState([]);

  const addTags = (item) => {
    addingTags?.length > 0 ? setAddingTags([...addingTags, item]) : setAddingTags([item]);
  };
  return [addingTags, addTags];
}

export default useAddTags;
