import React from 'react';

import RightBrandParagraphs from './common/RightBrandParagraphs';
import ChannelDetails from './step2/ChannelDetails';
import PostDetails from './step3/PostDetails';

import { useAspSelector } from '../../../test/jest-redux-hooks';

function Right() {
  const { steps } = useAspSelector((state) => state.dashBoard);
  return (
    <>
      {steps === 1 && <RightBrandParagraphs />}
      {steps === 2 && <ChannelDetails />}
      {steps === 3 && <PostDetails />}
      {steps === 4 && <RightBrandParagraphs />}
    </>
  );
}

export default Right;
