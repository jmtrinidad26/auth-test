import './App.css';
import logo from './logo.svg';

import AuthComponent from './authComponent';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <AuthComponent />
      </header>
    </div>
  );
}

export default App;
