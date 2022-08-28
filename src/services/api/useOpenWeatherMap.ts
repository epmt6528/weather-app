import { fetcher } from '../fetcher/fetcher'
import useSWR from 'swr'
import { base_url } from '../../consts/apiUrl'
import { useContext, useEffect } from 'react'
import { SelectedCityContext } from '../../context/SelectedCityContextWrapper'
import { convertUtcTimeToLocal, getTomorrowDate } from '../formatter/dateAndTime'

const useOpenWeatherMap = () => {
  // @ts-ignore
  const { selectedCityContext } = useContext(SelectedCityContext)
  const [selectedCity,] = selectedCityContext
  const API_KEY = process.env.REACT_APP_OPEN_WEATHER_API_KEY
  const { data, error } = useSWR(`${base_url}?id=${selectedCity.id}&APPID=${API_KEY}`, fetcher)
  // const [fiveDaysData, setFiveDaysData] = useState([])
  const tomorrowDate = getTomorrowDate()
  console.log()

  useEffect(()=>{
    if(data){
      const weatherDataList = data.list
      let fiveDaysDataTemp = []
      fiveDaysDataTemp.push(weatherDataList[0].dt_txt)

      const tomorrowDataIndex = weatherDataList.findIndex((weatherData: any) => convertUtcTimeToLocal(weatherData.dt_txt) === tomorrowDate)
      console.log(tomorrowDataIndex)
    }
  }, [data])

  // console.log(data&&data.list&&data.list[0].dt_txt)
  // console.log(data&&data.list&&data.list[7].dt_txt)
  // console.log(data&&data.list&&data.list[15].dt_txt)
  // console.log(data&&data.list&&data.list[23].dt_txt)
  // console.log(data&&data.list&&data.list[31].dt_txt)
  // console.log(data&&data.list&&data.list[39].dt_txt)

  return { data, error }
}

export default useOpenWeatherMap