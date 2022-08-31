import './styles.less'
import { WeatherIcon } from '../../molecules'
import { convertKelvinToCelsius } from '../../../services/formatter/temperture'
import { convertUtcTimeToLocal, getDay } from '../../../services/formatter/dateAndTime'

type WeatherCardSmallProps = {
  data: any,
}

const WeatherCardSmall = (props: WeatherCardSmallProps): JSX.Element => {
  const { data } = props
  const weather = data.weather[0].main
  const temperture = convertKelvinToCelsius(data.main.temp)
  const date = getDay(convertUtcTimeToLocal(data.dt_txt))

  return (
    <div className={'weather-card-small-root'}>
      <h2 className={'weather-card-small-heading'}>{date}</h2>
      <WeatherIcon weather={weather} className={'weather-card-small-icon'} />
      <p className={'temperture weather-card-small-temperture'}>{temperture}°</p>
    </div>
  )
}

export default WeatherCardSmall