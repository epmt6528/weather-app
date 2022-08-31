import { Component } from 'react'
import './styles.less'
import { Card } from '../../atoms'
import { Navigation } from '../../molecules'
import { WeatherList } from '../../organisms'
import { cityList } from '../../../consts/cityList'
import { selectedCity } from '../../molecules/Navigation/Navigation'
import { fetchOpenWeatherMap } from '../../../services/api/fetchOpenWeatherMap'
import { formatFetchedWeatherData } from '../../../services/formatter/weatherData'

type state = {
  data: any[],
  error: boolean,
  fiveDaysData: any[],
  selectedCity: selectedCity
}

class Home extends Component<{}, state> {

  constructor(props: {} | state) {
    super(props);
    this.state = {
      data: [],
      error: false,
      fiveDaysData: [],
      selectedCity: cityList[0]
    };
    this.setSelectedCity = this.setSelectedCity.bind(this)
    this.setData = this.setData.bind(this)
    this.setError = this.setError.bind(this)
    this.setFiveDaysData = this.setFiveDaysData.bind(this)
  }

  setSelectedCity(selectedCity: selectedCity) {
    if(JSON.stringify(this.state.selectedCity) !== JSON.stringify(selectedCity)){
      this.setState({
        ...this.state,
        selectedCity
      })
      this.getWeatherData(selectedCity)
    }
  }

  setData(data: any) {
    this.setState({
      ...this.state,
      data
    })
  }

  setFiveDaysData(data: any[]) {
    this.setState({
      ...this.state,
      fiveDaysData: data
    })
  }

  setError(boolean: boolean) {
    this.setState({
      ...this.state,
      error: boolean
    })
  }

  async getWeatherData(selectedCity: selectedCity) {
    try{
      const res = await fetchOpenWeatherMap(selectedCity)
      this.setData(res)
      this.setFiveDaysData(formatFetchedWeatherData(res))
    }catch (e){
      console.log(e)
      this.setError(true)
    }
  }

  componentDidMount() {
    this.getWeatherData(this.state.selectedCity)
  }

  render() {
    return (
      <div className={'home-root'}>
        <Navigation selectedCity={this.state.selectedCity} setSelectedCity={this.setSelectedCity} />
        <Card className={'home-card'}>
          {
            this.state.error
            && <h2>Something went wrong. Please reload the page.</h2>
          }
          {
            this.state.data && this.state.fiveDaysData.length
              ? <WeatherList data={this.state.fiveDaysData} />
              : <h2>Loading...</h2>
          }
        </Card>
      </div>
    )
  }
}

export default Home