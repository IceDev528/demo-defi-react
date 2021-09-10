import logo from './logo.svg';
import './App.css';
import Defi from './components/Defi';
localStorage.setItem('balance',5000);

function App() {
  return (
    <div className="App">
      <Defi></Defi>
    </div>
  );
}

export default App;
