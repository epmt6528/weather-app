import './styles.less'
import { WeatherCardLarge, WeatherCardSmall } from '../index'
import { Component } from 'react'

type WeatherListProps = {
  data: any
}

class WeatherList extends Component<WeatherListProps> {

  render() {
    return(
      <div className={'weather-list-root'}>
        {
          this.props.data.map((weatherData: any, index: number)=>{
            if(index === 0) return <WeatherCardLarge key={weatherData.dt_txt} data={weatherData} />
            return <WeatherCardSmall key={weatherData.dt_txt} data={weatherData} />
          })
        }
      </div>
    )
  }
}

export default WeatherList