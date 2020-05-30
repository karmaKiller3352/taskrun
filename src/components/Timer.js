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
    return () => {
      clearTimeout(timerId.current);
    };
  }, []);
  if (getTime) getTime(time);

  switch (status) {
    case 'FINISHED': {
      clearTimeout(timerId.current);
      return msToTime(spentTime);
    }
    case 'PAUSED': {
      clearTimeout(timerId.current);
      return msToTime(spentTime);
    }
    case 'IN_WORK': {
      timerId.current = setTimeout(() => {
        console.log(timerId.current);
        setTime((prevTime) => prevTime + 1000);
      }, 1000);
      return msToTime(time);
    }
    default: {
      clearTimeout(timerId.current);
      return msToTime(time);
    }
  }
}

export default Timer;
