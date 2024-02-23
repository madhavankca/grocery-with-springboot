import axios from 'axios';
import React, { useState } from 'react'

export default function Login({ onLogin }) {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const requestData = {
    username: username,
    password: password
  }
  const handleLogin = async () => {
    try {
      const loginResponse = await axios.post("http://localhost:8080/login", requestData);

      onLogin();

      if (loginResponse.status === 200) {
        try {
          const deleteResponse = await axios.delete("http://localhost:8080/deleteAllItems");
        } catch (error) {
          console.error("Could not remove items" + error);
        }
      }

    } catch (error) {
      console.error("Error Response from server" + error);
    }
  };

  return (
    <div>
      <h1>Welcome</h1>
      <label>Username:</label>
      <input type='text' placeholder='Enter your username' value={username} onChange={(e) => setUsername(e.target.value)} />
      <br />

      <label>Password:</label>
      <input type='text' placeholder='Enter your password' value={password} onChange={(e) => setPassword(e.target.value)} />
      <br />

      <button onClick={handleLogin}>Log In</button>

    </div>
  )
}
