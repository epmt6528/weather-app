import { convertUtcTimeToLocal, getTomorrowDate } from './dateAndTime'

export const formatFetchedWeatherData = (data: any) => {
  const weatherDataList = data.list
  const tomorrowDate = getTomorrowDate()
  let fiveDaysDataTemp: any[] = []
  fiveDaysDataTemp.push(weatherDataList[0])
  const tomorrowDataIndex = weatherDataList.findIndex((weatherData: any) => convertUtcTimeToLocal(weatherData.dt_txt) === tomorrowDate)

  for(let i = 1; i < 5; i++){
    fiveDaysDataTemp.push(weatherDataList[tomorrowDataIndex + i*7])
  }

  return fiveDaysDataTemp
}