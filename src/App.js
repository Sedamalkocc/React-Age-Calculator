import React from "react";
import "./App.css";

function App() {
  const calculateAge = () => {
    const birthdateValue = document.querySelector("#birthdate").value;
    const result = document.querySelector("#result");

    if (birthdateValue) {
      const today = new Date();
      const birthdate = new Date(birthdateValue);

      if (birthdate > today) {
        result.innerText = "Please enter a valid birthdate!";
        result.style.color = "red";
        return;
      }

      let ageYears = today.getFullYear() - birthdate.getFullYear();
      let ageMonth = today.getMonth() - birthdate.getMonth();
      let ageDay = today.getDate() - birthdate.getDate();

      if (ageDay < 0) {
        ageMonth--;
        ageDay += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
      }

      if (ageMonth < 0) {
        ageYears--;
        ageMonth += 12;
      }

      result.innerText = `Your age is ${ageYears} years, ${ageMonth} months, and ${ageDay} days.`;
      result.style.color = "#81689D";
    } else {
      result.innerText = "Please enter your date of birth!";
      result.style.color = "red";
    }
  };

  return (
    <div className="App">
      <div className="container">
        <h1>Age Calculator</h1>
        <label htmlFor="birthdate">Enter Your Birthdate: </label>
        <input type="date" id="birthdate" />
        <button onClick={calculateAge}>Calculate Age</button>
        <p id="result"></p>
      </div>
    </div>
  );
}

export default App;
