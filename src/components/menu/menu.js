import React, { useState } from "react";

function SavingsAccount() {
  const [balance, setBalance] = useState(5000);

  const deposit = (amount) => {
    setBalance(balance + amount);
  };

  const withdraw = (amount) => {
    if (balance - amount < 0) {
      alert("Insufficient funds");
    } else {
      setBalance(balance - amount);
    }
  };

  return (
    <div>
      <h2>Savings Account</h2>
      <p>Current balance: {balance}</p>
      <button onClick={() => deposit(100)}>Deposit $100</button>
      <button onClick={() => withdraw(100)}>Withdraw $100</button>
    </div>
  );
}

function AccountDetails() {
  const [name, setName] = useState("John Doe");
  const [email, setEmail] = useState("johndoe@example.com");
  const [address, setAddress] = useState("123 Main St");

  return (
    <div>
      <h2>Account Details</h2>
      <p>Name: {name}</p>
      <p>Email: {email}</p>
      <p>Address: {address}</p>
    </div>
  );
}

function LoanDetails() {
  const [loanAmount, setLoanAmount] = useState(0);
  const [interestRate, setInterestRate] = useState(5);
  const [loanTerm, setLoanTerm] = useState(12);

  const calculateInterest = () => {
    const totalInterest = (loanAmount * interestRate * loanTerm) / 100;
    alert(`Total interest to be paid: $${totalInterest}`);
  };

  return (
    <div>
      <h2>Loan Details</h2>
      <label htmlFor="loan-amount">Loan amount:</label>
      <input
        type="number"
        id="loan-amount"
        value={loanAmount}
        onChange={(e) => setLoanAmount(parseInt(e.target.value))}
      />
      <label htmlFor="interest-rate">Interest rate:</label>
      <input
        type="number"
        id="interest-rate"
        value={interestRate}
        onChange={(e) => setInterestRate(parseInt(e.target.value))}
      />
      <label htmlFor="loan-term">Loan term (months):</label>
      <input
        type="number"
        id="loan-term"
        value={loanTerm}
        onChange={(e) => setLoanTerm(parseInt(e.target.value))}
      />
      <button onClick={calculateInterest}>Calculate Interest</button>
    </div>
  );
}

function Page() {
  return (
    <div>
      <SavingsAccount />
      <AccountDetails />
      <LoanDetails />
    </div>
  );
}

export default Page;
