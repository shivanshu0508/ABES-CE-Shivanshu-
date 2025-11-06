import React from 'react';
import './Signup.css'; 

function Signup() {
  return (
    <div className="signup-container">
      <form className="signup-form">
        <h2>Sign Up</h2>

        <label>Full Name:</label>
        <input type="text" placeholder="Enter your name" />

        <label>Email:</label>
        <input type="email" placeholder="Enter your email" />

        <label>User ID:</label>
        <input type="text" placeholder="Create a user ID" />

        <label>Password:</label>
        <input type="password" placeholder="Create a password" />

        <label>Confirm Password:</label>
        <input type="password" placeholder="Confirm your password" />

        <button type="submit">Sign Up</button>

        <p className="login-link">
          Already have an account? <a href="/login">Login here</a>
        </p>
      </form>
    </div>
  );
}

export default Signup;
