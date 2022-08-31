import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { weatherIconList } from '../../../assets/weatherIconList';
import './styles.less'

type WeatherIconProps = {
  weather: string,
  className?: string
}

const WeatherIcon = (props: WeatherIconProps): JSX.Element => {
  const { weather, className } = props

  return (
    <FontAwesomeIcon icon={weatherIconList[weather]} className={`weather-icon-root ${className}`} />
  )
}

export default WeatherIcon