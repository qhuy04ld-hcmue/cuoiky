import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://www.youtube.com/@huy_pc04official/videos"
          target="_blank"
          rel="no opener"
        >
          Learn React
        </a>
        <table>
          <tr>
            <td>Tra sua</td>
            <td>Ca phe</td>
          </tr>
          <tr>
            <td>10k</td>
            <td>20K</td>
          </tr>
        </table>
      </header>
    </div>
  );
}

export default App;
