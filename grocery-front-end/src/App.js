import './App.css'
import React, {useState ,render} from 'react';
import CartPage from './components/CartPage';
import Inventory from './components/Inventory';
import {BrowserRouter as Router, Routes, Route, Navigate, useNavigate} from 'react-router-dom';
import Login from './components/Login';

  const App = () => {
    const [loggedIn, setLoggedIn] = useState(false);
    const navigate = useNavigate();
    const handleLogin = () => {
      console.log("Logged in");
      setLoggedIn(true);
    };

  return (
    <div className="App">
      <header className="App-header">

          <Routes>
            <Route exact path='/' element = {loggedIn ? <Inventory /> : <Login onLogin = {handleLogin} />} />
          <Route path='/cart-page' element={loggedIn ? <CartPage /> : <Login onLogin={handleLogin} />} />
          </Routes>

{/*
        <Routes>
          <Route path='/login' element={<Login onLogin={handleLogin} />} />
          <Route path='/inventory' element={<Inventory />} />
          <Route path='/cart-page' element={<CartPage /> } />
        </Routes> */}
      </header>
    </div>
  );
}
export default App;
