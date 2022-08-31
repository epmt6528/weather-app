import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { weatherIconList } from '../../../assets/weatherIconList';
import './styles.less'
import { Component } from 'react'

type WeatherIconProps = {
  weather: string,
  className?: string
}

class WeatherIcon extends Component<WeatherIconProps>{

  render() {
    return (
      <FontAwesomeIcon icon={weatherIconList[this.props.weather]} className={`weather-icon-root ${this.props.className}`} />
    )
  }
}

export default WeatherIcon