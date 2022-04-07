import logo from './obeid_young.jpeg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>

        </p>
        <p>
          Welcome to Scruvy Mango
          {/*Edit <code>src/App.js</code> and save to reload.*/}
        </p>
        <a
          className="App-link"
          href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
          target="_blank"
          rel="noopener noreferrer"
        >
          Open App
        </a>
        <a
          className="App-link2"
          href="https://isip.piconepress.com/courses/temple/ece_3824/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Click here for fun
        </a>
      </header>
    </div>
  );
}

export default App;
