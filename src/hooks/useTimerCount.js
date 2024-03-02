import { useState, useEffect } from 'react';

export default function useTimerCount(minutes, seconds) {

  const initialMinutes = minutes;
  const initialSeconds = seconds;

  const [remainingMinutes, setRemainingMinutes] = useState(initialMinutes);
  const [remainingSeconds, setRemainingSeconds] = useState(initialSeconds);

  useEffect(() => {
    const interval = setInterval(() => {
      if (remainingMinutes === 0 && remainingSeconds === 0) {
        clearInterval(interval);
      } else {
        if (remainingSeconds === 0) {
          setRemainingMinutes(prevMinutes => prevMinutes - 1);
          setRemainingSeconds(59);
        } else {
          setRemainingSeconds(prevSeconds => prevSeconds - 1);
        }
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [remainingMinutes, remainingSeconds]);

  return [remainingMinutes, remainingSeconds, setRemainingMinutes, setRemainingSeconds];
}
