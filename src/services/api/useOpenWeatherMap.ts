import useSWR from 'swr'
import { fetcher } from '../fetcher/fetcher'
import { base_url } from '../../consts/apiUrl'
import { useContext, useEffect, useState } from 'react'
import { SelectedCityContext } from '../../context/SelectedCityContextWrapper'
import { convertUtcTimeToLocal, getTomorrowDate } from '../formatter/dateAndTime'

const useOpenWeatherMap = () => {
  const { selectedCityContext } = useContext(SelectedCityContext)
  const [selectedCity,] = selectedCityContext
  const API_KEY = process.env.REACT_APP_OPEN_WEATHER_API_KEY
  const { data, error } = useSWR(`${base_url}?id=${selectedCity.id}&APPID=${API_KEY}`, fetcher)
  const [fiveDaysData, setFiveDaysData] = useState<any[]>([])
  const tomorrowDate = getTomorrowDate()

  useEffect(()=>{
    if(data){
      const weatherDataList = data.list
      let fiveDaysDataTemp: any[] = []
      fiveDaysDataTemp.push(weatherDataList[0])
      const tomorrowDataIndex = weatherDataList.findIndex((weatherData: any) => convertUtcTimeToLocal(weatherData.dt_txt) === tomorrowDate)

      for(let i = 1; i < 5; i++){
        fiveDaysDataTemp.push(weatherDataList[tomorrowDataIndex + i*7])
      }

      setFiveDaysData(fiveDaysDataTemp)
    }
  }, [data])

  return { data, error, fiveDaysData }
}

export default useOpenWeatherMap