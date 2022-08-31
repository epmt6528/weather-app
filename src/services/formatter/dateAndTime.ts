import dayjs from 'dayjs';

import timezone from 'dayjs/plugin/timezone';
import utc from 'dayjs/plugin/utc';
import { dayArray } from '../../consts/texts/english'
dayjs.extend(timezone);
dayjs.extend(utc);

export const convertUtcTimeToLocal = (utcTime: string) => {
  const localTimeZone = dayjs.tz.guess();
  return dayjs.utc(utcTime).tz(localTimeZone).format('YYYY-MM-DD HH:mm:ss')
}

export const getTomorrowDate = () => {
  const localTimeZone = dayjs.tz.guess();
  dayjs.tz.setDefault(localTimeZone);
  const now = dayjs()

  return now.add(1, 'd').format('YYYY-MM-DD 02:00:00')
}

export const getDay = (date: string) => {
  const dayIndex = dayjs(date).day()
  return dayArray[dayIndex]
}
