import './styles.less'
import { text } from '../../../consts/texts'
import { convertKelvinToCelsius } from '../../../services/formatter/temperture'
import { WeatherIcon } from '../../molecules'

type WeatherCardLargeProps = {
  data: any
}

const WeatherCardLarge = (props: WeatherCardLargeProps): JSX.Element => {
  const { data } = props
  const weather = data.weather[0].main
  const temperture = convertKelvinToCelsius(data.main.temp)

  return (
    <div className='weather-card-large-root'>
      <h2 className='weather-card-large-heading'>{text.today}</h2>
      <div className='weather-card-large-body'>
        <WeatherIcon weather={weather} className='weather-card-large-icon' />
        <div className='weather-card-large-text-div'>
          <p className='temperture'>{temperture}°</p>
          <p>{weather}</p>
        </div>
      </div>
    </div>
  )
}

export default WeatherCardLarge