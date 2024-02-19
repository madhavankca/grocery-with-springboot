import './App.css'
import CartPage from './components/CartPage';
import Inventory from './components/Inventory';
// import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
// import LoginPage from './components/LoginPage';

function App() {
  return (
    <div className="App">
      <header className="App-header">

          <Inventory />

          <CartPage />  

      </header>
    </div>
  );
}

export default App;
