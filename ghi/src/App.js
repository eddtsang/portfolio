import logo from './logo.svg';
import './App.css';
import Nav from './nav/nav';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Nav />
      </header>
      <body>
        <img src={logo} className="App-logo" alt="logo" />
          <p>Test</p>
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
      </body>
      <footer>
        <h3>Test Footer</h3>
      </footer>
    </div>
  );
}

export default App;
