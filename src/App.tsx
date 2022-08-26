import './styles/styles.less';
import { Card } from './components/atoms'
import { WeatherCardLarge } from './components/organisms'


function App() {
  return (
    <div className="App">
      <Card>
        <WeatherCardLarge />
      </Card>
    </div>
  );
}

export default App;
