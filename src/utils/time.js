const toMinutes = (timeString) => {
  const t = timeString.split(':');
  return parseInt(t[0])*60 + parseInt(t[1]);
}
const toTimeString = (minutes) => {
  let hours = 0;
  while (minutes >= 60) {
    minutes -= 60;
    hours++;
  }
  if (minutes === 0) minutes = '00';
  if (hours < 10) hours = '0' + hours.toString();
  return hours + ':' + minutes;
}

const SEC = 1000;
const MIN = 60000;
const HOUR = 3600000;
const DAY = 86400000;

export { toMinutes, toTimeString, SEC, MIN, HOUR, DAY };