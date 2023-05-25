import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";

// alt shift f

function App() {
  const RegistrationForm = () => {
    const [FirstName, setFirstName] = useState("");
    const [LastName, setLastName] = useState("");
    const [Email, setEmail] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        if (FirstName.trim() === "" || LastName.trim() === "" || Email.trim() === "") {
          setError("Please fill in all fields.");
          return;
    }

    console.log("First Name:", FirstName);
    console.log("Last Name:", LastName);
    console.log("Email:", Email);

    // Reset form fields
    setFirstName("");
    setLastName("");
    setEmail("");
    setError("");
  };

    const handleChangeFirstName = (event) => {
      const updatedFirstName = event.target.value;
      setFirstName(updatedFirstName);
    };

    const handleChangeLastName = (event) => {
      const updatedLastName = event.target.value;
      setLastName(updatedLastName);
    };

    const handleChangeEmail = (event) => {
      const updatedEmail = event.target.value;
      setEmail(updatedEmail);
    };

    // need to set condition for each variable

    return (
      <form onSubmit={handleSubmit}>
        <div>
          First Name:
          <input
            type="text"
            name="FirstName"
            value={FirstName}
            onChange={handleChangeFirstName}
          />
        </div>
        <div>
          Last Name:
          <input
            type="text"
            name="LastName"
            value={LastName}
            onChange={handleChangeLastName}
          />
        </div>
        <div>
          Email:
          <input
            type="text"
            name="Email"
            value={Email}
            onChange={handleChangeEmail}
          />
        </div>
        <button onClick={handleSubmit}>Submit</button>
        {error && <p className="error">{error}</p>}
      </form>
      
    );  
  };
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          You will build a basic registration form in React where users can
          enter first name, last name, and email. Post-registration, an error
          message is displayed for each field if validation fails else a success
          message is shown.
        </p>
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
