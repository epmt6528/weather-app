import './styles.less'
import { WeatherIcon } from '../../molecules'
import { convertKelvinToCelsius } from '../../../services/formatter/temperture'
import { convertUtcTimeToLocal, getDay } from '../../../services/formatter/dateAndTime'
import { Component } from 'react'

type WeatherCardSmallProps = {
  data: any,
}

class WeatherCardSmall extends Component<WeatherCardSmallProps> {
  private weather: any
  private temperture: number
  private date: string

  constructor(props: WeatherCardSmallProps) {
    super(props);
    this.weather = this.props.data.weather[0].main
    this.temperture = convertKelvinToCelsius(this.props.data.main.temp)
    this.date = getDay(convertUtcTimeToLocal(this.props.data.dt_txt))
  }

  render() {
    return (
      <div className={'weather-card-small-root'}>
        <h2 className={'weather-card-small-heading'}>{this.date}</h2>
        <WeatherIcon weather={this.weather} className={'weather-card-small-icon'} />
        <p className={'temperture weather-card-small-temperture'}>{this.temperture}°</p>
      </div>
    )
  }
}

export default WeatherCardSmall