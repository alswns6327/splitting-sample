import logo from './logo.svg';
import './App.css';
import notify from './notify';
import { Component } from 'react';
// import SplitMe from './SplitMe';

class App extends Component {

  state = {
    SplitMe : null
  }

  render(){
    const {SplitMe} = this.state;
    
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          {/* <p onClick={() => import('./notify').then(result => result.notify2())}> */}
          <p onClick={async () => {
            const loadModule = await (await import('./SplitMe'))
            this.setState({SplitMe : loadModule.default})
          }}>
          {/* <p onClick={() => notify()}> */}
            Hello React
          </p>
          {SplitMe && <SplitMe/>}
        </header>
      </div>
    );
  }
}

export default App;
