import './styles/styles.less';
import { Card } from './components/atoms'
import { WeatherCardLarge } from './components/organisms'
import SelectedCityContextWrapper from './context/SelectedCityContextWrapper'


function App() {
  return (
    <div className="App">
      <SelectedCityContextWrapper>
        <Card>
          <WeatherCardLarge />
        </Card>
      </SelectedCityContextWrapper>
    </div>
  );
}

export default App;
