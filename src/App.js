import logo from './logo.png';
import './App.css';
import Dictionary from './Dictionary';

export default function App() {
  return (
    <div>
      <div className="header">
        <div className="App">
        <img src={logo} className="App-icon" alt="logo" />   
        </div>
      </div>
      <Dictionary />

      <footer>
        Coded by Berl
      </footer>
    </div>
    
  );
}

 
