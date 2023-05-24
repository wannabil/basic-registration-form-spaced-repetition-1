import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';

const RegistrationForm = () => {

  const handleSubmit = (event) => {
    event.preventDefault();
  }

  const handleChange = (event) => {
    const { name, value } = event.target;
    if (name === 'FirstName') {
      setFirstName(value);
    } else if (name === 'LastName') {
      setLastName(value);
    } else if (name === 'Email') {
      setEmail(value);
    }
  };

  const [FirstName, setFirstName] = useState("");
  const [LastName, setLastName] = useState("");
  const [Email, setEmail] = useState("");

  return (
    <form onSubmit={handleSubmit}>
      <div>First Name:
      <input 
        type="text" 
        name="FirstName" 
        value={FirstName || ""} 
        onChange={handleChange}
      />
      </div>
      <div>Last Name:
        <input 
          type="text" 
          name="LastName" 
          value={LastName || ""} 
          onChange={handleChange}
        />
        </div>
      <div>Email:
        <input 
          type="text" 
          name="Email" 
          value={Email || ""} 
          onChange={handleChange}
        />
      </div>
        <input type="submit" />
    </form>
  );
};


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>You will build a basic registration form in React where users can enter first name, last name, and email. Post-registration, an error message is displayed for each field if validation fails else a success message is shown.</p>
          <RegistrationForm />
      </header>
    </div>
  );
}

export default App;

// form done (1/5)
// event.preventDefault done (2/5)
// if else done (3/5)
// submit button display error if nothing is entered 
// submit button display error if it does not follow email format