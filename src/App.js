import logo from './logo.svg';
import './App.css';
import notify from './notify';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p onClick={() => import('./notify').then(result => result.notify2())}>
        {/* <p onClick={() => notify()}> */}
          Hello React
        </p>
      </header>
    </div>
  );
}

export default App;
