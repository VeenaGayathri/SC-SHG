import React, { useState } from 'react';
import './login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  }

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    // Here you can add the code to submit the login form
    console.log('Email:', email);
    console.log('Password:', password);
  }

  const handleForgotPassword = () => {
    // Here you can add the code to handle the "Forgot Password" button click
    console.log('Forgot password clicked');
  }

  return (
    <form onSubmit={handleSubmit}>
      <h1 >Self Help Group App</h1>
      
      <h2>Login</h2>    
      <div>
        <label>Email </label>
        <input type="email" value={email} onChange={handleEmailChange}  required />
      
      </div>
      <div>
        <label>Password </label>
        <input type="password" value={password} onChange={handlePasswordChange} required />
      </div>
      <div className="button-group">
        <button type="submit">Login</button>
        </div>
        <div><button type="button" onClick={handleForgotPassword}>Forgot Password?</button>
      
      <p>Not a SHG Member?
        <button type="button" onClick={handleForgotPassword}>SignUp</button> </p>
      </div>
    </form>
  );
};

export default Login;
