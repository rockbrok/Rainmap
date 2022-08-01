import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h3>Hello world!</h3>
        <Card />
      </header>
    </div>
  );
}

const Card = () => (
  <div>
    <h2>Rain of the day</h2>
    <button>Play audio</button>
    <button>Copy audio link</button>
  </div>
)

export default App;
