import './styles.less'
import { text } from '../../../consts/texts'
import { convertKelvinToCelsius } from '../../../services/formatter/temperture'
import { WeatherIcon } from '../../molecules'
import { Component } from 'react'

type WeatherCardLargeProps = {
  data: any
}

class WeatherCardLarge extends Component<WeatherCardLargeProps> {
  private weather: string
  private temperture: number

  constructor(props: WeatherCardLargeProps) {
    super(props);
    this.weather = this.props.data.weather[0].main
    this.temperture = convertKelvinToCelsius(this.props.data.main.temp)
  }

  render() {
    return (
      <div className='weather-card-large-root'>
        <h2 className='weather-card-large-heading'>{text.today}</h2>
        <div className='weather-card-large-body'>
          <WeatherIcon weather={this.weather} className='weather-card-large-icon' />
          <div className='weather-card-large-text-div'>
            <p className='temperture'>{this.temperture}°</p>
            <p>{this.weather}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default WeatherCardLarge