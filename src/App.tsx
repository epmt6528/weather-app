import './styles/styles.less';
import { Card } from './components/atoms'
import { WeatherCardLarge } from './components/organisms'
import SelectedCityContextWrapper from './context/SelectedCityContextWrapper'
import { Navigation } from './components/molecules'


function App() {
  return (
    <SelectedCityContextWrapper>
      <div className="App">
          <Navigation />
          <Card>
            <WeatherCardLarge />
          </Card>
      </div>
    </SelectedCityContextWrapper>
  );
}

export default App;
