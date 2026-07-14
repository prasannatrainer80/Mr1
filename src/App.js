import logo from './logo.svg';
import './App.css';
import First from './components/first/first';
import Second from './components/second/second';
import Third from './components/third/third';
import Four from './components/four/four';
import Five from './components/five/five';
import Six from './components/six/six';

function App() {
  return (
    <div className="App">
      <First />
      <p>
        <Second />
      </p>
      <p>
        <Third firstName="Raj" lastName="Kishore" />
      </p>
      <p>
        <Four />
      </p>
      <p>
        <Five />
      </p>
      <p>
        <Six />
      </p>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
