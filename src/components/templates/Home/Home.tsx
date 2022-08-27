import { Navigation } from '../../molecules'
import { Card } from '../../atoms'
import { WeatherCardLarge } from '../../organisms'
import './styles.less'
import useOpenWeatherMap from '../../../services/api/useOpenWeatherMap'

const Home = () => {
  const {data, error} = useOpenWeatherMap()
  console.log(data, error)

  return (
    <div className={'home-root'}>
      <Navigation />
      <Card>
        <WeatherCardLarge />
      </Card>
    </div>
  )
}

export default Home