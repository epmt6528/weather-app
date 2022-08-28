import { text } from '../../../consts/texts'
import WeatherIcon from '../../molecules/WeatherIcon/WeatherIcon'
import { convertKelvinToCelsius } from '../../../services/formatter/temperture'

interface WeatherCardSmallProps  {
  data: any
}

const WeatherCardSmall = (props: WeatherCardSmallProps) => {
  const { data } = props
  // TODO Adjust time difference
  const weather = data.list[0].weather[0].main
  const temperture = convertKelvinToCelsius(data.list[0].main.temp)

  return (
    <div className={'weather-card-small-root'}>
      <h2>{text.today}</h2>
      <WeatherIcon weather={weather} />
      <p className={'temperture'}>{temperture}°</p>
    </div>
  )
}

export default WeatherCardSmall