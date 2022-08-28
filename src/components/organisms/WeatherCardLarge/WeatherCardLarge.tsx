import './styles.less'
import { text } from '../../../consts/texts'
import { convertKelvinToCelsius } from '../../../services/formatter/temperture'
import WeatherIcon from '../../molecules/WeatherIcon/WeatherIcon'

interface WeatherCardLargeProps  {
  data: any
}

const WeatherCardLarge = (props: WeatherCardLargeProps) => {
  const { data } = props
  // TODO Adjust time difference
  const weather = data.list[0].weather[0].main
  const temperture = convertKelvinToCelsius(data.list[0].main.temp)

  return (
    <div className='weather-card-large-root'>
      <h2>{text.today}</h2>
      <div className={'weather-card-large-body'}>
        <WeatherIcon weather={weather} />
        <div className={'weather-card-large-text-div'}>
          <p className={'temperture'}>{temperture}°</p>
          <p>{weather}</p>
        </div>
      </div>
    </div>
  )
}

export default WeatherCardLarge