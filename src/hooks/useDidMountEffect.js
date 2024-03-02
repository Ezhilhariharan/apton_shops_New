import React, { useEffect, useRef } from 'react';

const useDidMountEffect = (func, dependencies) => {
  const didMount = useRef(false);

  useEffect(() => {
    let unmount;
    if (didMount.current) unmount = func();
    else didMount.current = true;

    return () => {
      didMount.current = false;
      unmount && unmount();
    };
  }, dependencies);
};

export default useDidMountEffect;
