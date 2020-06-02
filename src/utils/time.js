import moment from 'moment';
// eslint-disable-next-line
import duration from 'moment-duration-format';
export const msToTime = (unix_timestamp) =>
  moment
    .duration(unix_timestamp, 'ms')
    .format('HH:mm:ss')
    .padStart(8, '00:00:0');
