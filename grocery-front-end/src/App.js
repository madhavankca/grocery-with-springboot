import './App.css'
import React, {useState} from 'react';
import CartPage from './components/CartPage';
import Inventory from './components/Inventory';
import {BrowserRouter as Router, Routes, Route, Switch} from 'react-router-dom';
// import LoginPage from './components/LoginPage';
// import { Route, Router,Routes} from 'react-router-dom';



  const App = () => {
    const [isLoggedIn, setLoggedIn] = useState(false);

    const handleLogin = () => {
      // Assume a successful login
      setLoggedIn(true);
    };

  return (
    <div className="App">
      <header className="App-header">
          {/* <Routes>
            <Route path="/" element={<Login onLogin={handleLogin} />} />
            <Route
              path="/inventory"
              element={isLoggedIn ? <Inventory /> : <Navigate to="/" />}
            />
            <Route path="/cart" element={isLoggedIn ? <CartPage /> : <Navigate to="/" />} />
          </Routes> */}

          <Routes>
            <Route path='/' element={<Inventory />} />
            <Route path='/cart-page' element={<CartPage />} />
          </Routes>
      </header>
    </div>
  );
}

export default App;
