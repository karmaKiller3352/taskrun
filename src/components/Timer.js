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
    if (status === 'IN_WORK') {
      timerId.current = setTimeout(() => {
        setTime((prevTime) => prevTime + 1000);
      }, 1000);
    } else {
      clearTimeout(timerId.current);
    }

    return () => {
      clearTimeout(timerId.current);
    };
  }, [status, time]);

  if (getTime) getTime(time);

  if (status === 'PAUSED' || status === 'FINISHED') {
    return msToTime(spentTime);
  }
  return msToTime(time);
}

export default Timer;
