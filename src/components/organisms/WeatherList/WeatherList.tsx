import './styles.less'
import { WeatherCardLarge, WeatherCardSmall } from '../index'

type WeatherListProps = {
  data: any
}

const WeatherList = (props: WeatherListProps): JSX.Element => {
  const { data } = props

  return(
    <div className={'weather-list-root'}>
      {
        data.map((weatherData: any, index: number)=>{
          if(index === 0) return <WeatherCardLarge key={weatherData.dt_txt} data={weatherData} />
          return <WeatherCardSmall key={weatherData.dt_txt} data={weatherData} />
        })
      }
    </div>
  )
}

export default WeatherList