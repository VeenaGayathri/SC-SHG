import React, { useState } from 'react';
import './signup.css';

function SignUp() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [MobileNumber, setMobileNumber] = useState('');
  const [Gender, setGender] = useState('');
  const [Occupation, setOccupation] = useState('');
  const [AnnualIncome, setAnnualIncome] = useState('');
  const [Question, setQuestion] = useState('');


  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Username:', username);
    console.log('Email:', email);
    console.log('MobileNumber:', MobileNumber);
    console.log('Gender:', Gender);
    console.log('Occupation:', Occupation);
    console.log('AnnualIncome:',AnnualIncome );
    console.log('Question:',Question );

  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>SignUp</h1>
      <label>
        Username:
        <input
          type="text"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
        />
      </label>
      <label>
        Mobile Number:
        <input
          type= "text"
          value={MobileNumber}
          onChange={(event) => setMobileNumber(event.target.value)}
        />
      </label>
      <label>
        Gender:
        <input
          type="text"
          value={Gender}
          onChange={(event) => setGender(event.target.value)}
        />
      </label>

      <label>
        Occupation:
        <input
          type="text"
          value={Occupation}
          onChange={(event) => setOccupation(event.target.value)}
        />
      </label>

      <label>
        AnnualIncome:
        <input
          type="text"
          value={AnnualIncome}
          onChange={(event) => setAnnualIncome(event.target.value)}
        />
      </label>
      
      <label>
        Why do you need a loan?:
        <input
          type="question"
          value={Question}
          onChange={(event) => setQuestion(event.target.value)}
        />
      </label>

      <label>
        Password:
        <input
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
      </label>
      <button type="submit">Sign Up</button>
    </form>
  );
}

export default SignUp;