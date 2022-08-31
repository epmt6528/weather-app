import './styles.less'
import { Card } from '../../atoms'
import { Navigation } from '../../molecules'
import { WeatherList } from '../../organisms'
import useOpenWeatherMap from '../../../services/api/useOpenWeatherMap'


const Home = (): JSX.Element => {
  const {data, error, fiveDaysData} = useOpenWeatherMap()

  return (
    <div className={'home-root'}>
      <Navigation />
      <Card className={'home-card'}>
        {
          error
            && <h2>Something went wrong. Please reload the page.</h2>
        }
        {
          data && fiveDaysData.length
            ? <WeatherList data={fiveDaysData} />
            : <h2>Loading...</h2>
        }
      </Card>
    </div>
  )
}

export default Home