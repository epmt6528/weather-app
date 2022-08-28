import { Navigation } from '../../molecules'
import { Card } from '../../atoms'
import { WeatherCardLarge } from '../../organisms'
import './styles.less'
import useOpenWeatherMap from '../../../services/api/useOpenWeatherMap'

const Home = () => {
  const {data, error} = useOpenWeatherMap()

  return (
    <div className={'home-root'}>
      <Navigation />
      <Card>
        {
          error
            && <h1>Something went wrong. Please reload the page.</h1>
        }
        {
          data
            ? <WeatherCardLarge data={data} />
            : <h1>Loading...</h1>
        }
      </Card>
    </div>
  )
}

export default Home