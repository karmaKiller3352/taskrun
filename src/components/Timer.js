import { useEffect, useState, useRef } from 'react';
import { msToTime } from '../utils/time';

function Timer({ status, spentTime, start, getTime }) {
  const startTime = spentTime
    ? Date.now() - start + spentTime
    : !spentTime && !start
    ? 0
    : Date.now() - start;

  const [time, setTime] = useState(startTime);

  const timerId = useRef(false);
  useEffect(() => {
    return () => clearInterval(timerId.current);
  }, []);
  if (getTime) getTime(time);

  switch (status) {
    case 'IN_WORK': {
      timerId.current = setTimeout(() => {
        setTime((prevTime) => prevTime + 1000);
      }, 1000);
      return msToTime(time);
    }
    default: {
      clearInterval(timerId.current);
      return msToTime(time);
    }
  }
}

export default Timer;
