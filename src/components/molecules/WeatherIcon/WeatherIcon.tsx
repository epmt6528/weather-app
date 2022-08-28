import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { weatherIconList } from '../../../assets/weatherIconList';
import './styles.less'

interface WeatherIconProps  {
  weather: string
}

const WeatherIcon = (props: WeatherIconProps) => {
  const { weather } = props

  return (
    <FontAwesomeIcon icon={weatherIconList[weather]} className={'weather-icon-root'} />
  )
}

export default WeatherIcon