import { fetcher } from '../fetcher/fetcher'
import { base_url } from '../../consts/apiUrl'
import { selectedCity } from '../../components/molecules/Navigation/Navigation'

export const fetchOpenWeatherMap = async (selectedCity: selectedCity) => {
  const API_KEY = process.env.REACT_APP_OPEN_WEATHER_API_KEY
  return await fetcher(`${base_url}?id=${selectedCity.id}&APPID=${API_KEY}`)
}