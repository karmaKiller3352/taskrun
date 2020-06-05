import moment from 'moment';
// eslint-disable-next-line
import duration from 'moment-duration-format';
export const msToTime = (timestamp) =>
  moment.duration(timestamp, 'ms').format('HH:mm:ss').padStart(8, '00:00:0');

export function createMarkup(html) {
  return { __html: html };
}

export const unixToTime = (timestamp) =>
  moment(timestamp * 1).format('MMM Do,  HH:mm:ss');

export const unixToShortTime = (timestamp) =>
  moment(timestamp * 1).format('HH:mm:ss');

export const unixToDetailDate = (timestamp) =>
  moment(timestamp * 1).format('dddd, DD MMM');
