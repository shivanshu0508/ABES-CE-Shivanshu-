import React from 'react';
import './Login.css';

function Login() {
  return (
    <div className="login-container">
      <form className="login-form">
        <h2>Login</h2>
        <label>User ID:</label>
        <input type="text" placeholder="Enter your user ID" />

        <label>Password:</label>
        <input type="password" placeholder="Enter your password" />

        <button type="submit">Login</button>
        
      </form>
    </div>
  );
}

export default Login;
