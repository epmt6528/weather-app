import './styles.less'
import { english } from '../../../consts/texts/english'

const WeatherCardLarge = () => {
  return (
    <div className='weather-card-large-root'>
      <h2>{english.today}</h2>

    </div>
  )
}

export default WeatherCardLarge