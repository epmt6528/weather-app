import { fetcher } from '../fetcher/fetcher'
import useSWR from 'swr'
import { base_url } from '../../consts/apiUrl'
import { useContext } from 'react'
import { SelectedCityContext } from '../../context/SelectedCityContextWrapper'

const useOpenWeatherMap = () => {
  // @ts-ignore
  const { selectedCityContext } = useContext(SelectedCityContext)
  const [selectedCity,] = selectedCityContext
  const API_KEY = process.env.REACT_APP_OPEN_WEATHER_API_KEY
  const { data, error } = useSWR(`${base_url}?id=${selectedCity.id}&APPID=${API_KEY}`, fetcher)

  return { data, error }
}

export default useOpenWeatherMap