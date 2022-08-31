import './styles/styles.less';
import { Component } from 'react'
import { Home } from './components/templates'

class App extends Component {

  render() {
    return (
      <div className="App">
        <Home />
      </div>
    );
  }
}

export default App;
