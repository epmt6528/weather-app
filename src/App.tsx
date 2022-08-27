import './styles/styles.less';
import SelectedCityContextWrapper from './context/SelectedCityContextWrapper'
import { Home } from './components/templates'

function App() {
  return (
    <SelectedCityContextWrapper>
      <div className="App">
          <Home />
      </div>
    </SelectedCityContextWrapper>
  );
}

export default App;
