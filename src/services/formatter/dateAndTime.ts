import dayjs from 'dayjs';

import timezone from 'dayjs/plugin/timezone';
dayjs.extend(timezone);

export const convertUtcTimeToLocal = (utcTime: string) => {
  const localTimeZone = dayjs.tz.guess();

  return dayjs(utcTime).tz(localTimeZone).format('YYYY-MM-DD 00:00:00')
}

export const getTomorrowDate = () => {
  const localTimeZone = dayjs.tz.guess();
  dayjs.tz.setDefault(localTimeZone);
  const now = dayjs()

  return now.add(1, 'd').format('YYYY-MM-DD 00:00:00')
}
