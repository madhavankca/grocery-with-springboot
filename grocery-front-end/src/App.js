import './App.css'
import React, { useState} from 'react';
import CartPage from './components/CartPage';
import Inventory from './components/Inventory';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Login from './components/Login';

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const handleLogin = () => {
    setLoggedIn(true);
  };

  return (
    <div className="App">
      <header className="App-header">

        <Routes>
          <Route exact path='/' element={loggedIn ? <Inventory /> : <Login onLogin={handleLogin} />} />
          <Route path='/cart-page' element={loggedIn ? <CartPage /> : <Login onLogin={handleLogin} />} />
        </Routes>
      </header>
    </div>
  );
}
export default App;
