import React, { useState } from "react";
import "./RegistrationFormComponent.css";

const RegistrationFormComponent = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [registerNumber, setRegisterNumber] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [gmail, setGmail] = useState("");
  const [department, setDepartment] = useState("");
  const [gender, setGender] = useState("");
  const [language, setLanguage] = useState("");
  const [year, setYear] = useState("");
  const [slot, setSlot] = useState("");
  const [file, setFile] = useState("");

  const handleFirstName = (event) => {
    setFirstName(event.target.value);
  };
  const handleLastName = (event) => {
    setLastName(event.target.value);
  };
  const handleRegisterNumber = (event) => {
    setRegisterNumber(event.target.value);
  };
  const handleMobileNumber = (event) => {
    setMobileNumber(event.target.value);
  };
  const handleGmail = (event) => {
    setGmail(event.target.value);
  };
  const handleDepartment = (event) => {
    setDepartment(event.target.value);
  };
  const handleGender = (event) => {
    setGender(event.target.value);
  };
  const handleLanguage = (event) => {
    setLanguage(event.target.value);
  };
  const handleYear = (event) => {
    setYear(event.target.value);
  };
  const handleSlot = (event) => {
    setSlot(event.target.value);
  };
  const handleFile = (event) => {
    setFile(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    console.log(
      firstName,
      lastName,
      registerNumber,
      mobileNumber,
      gmail,
      department,
      gender,
      language,
      year,
      slot,
      file
    );
  };
  return (
    <div className=" bg-container flex-column">
      <form className="flex-row">
        <ol className="list-type flex-column">
          <li className="white-card">
            <h1 className="main-heading">Student Course Enrollment Form</h1>
            <p>
              This google form is created for students to enroll the courses.
            </p>
            <h4>Required *</h4>
          </li>
          <li className="white-card flex-column">
            <label htmlFor="firstName" className="sub-heading">
              First Name :
            </label>
            <input
              type="text"
              placeholder="           Enter your First Name"
              id="firstName"
              name="firstName"
              className="input-box"
              value={firstName}
              onChange={handleFirstName}
            />
          </li>
          <li className="white-card flex-column">
            <label htmlFor="lastName" className="sub-heading">
              Last Name:
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              placeholder="           Enter your Last Name"
              className="input-box"
              value={lastName}
              onChange={handleLastName}
            />
          </li>
          <li className="white-card flex-column">
            <label htmlFor="registerNumber" className="sub-heading">
              Register Number:
            </label>
            <input
              type="text"
              id="registerNumber"
              name="registerNumber"
              placeholder="           Enter your Register Number"
              className="input-box"
              value={registerNumber}
              onChange={handleRegisterNumber}
            />
          </li>
          <li className="white-card flex-column">
            <label htmlFor="mobileNumber" className="sub-heading">
              Mobile Number:
            </label>
            <input
              type="text"
              id="mobileNumber"
              name="mobileNumber"
              placeholder="           Enter your Mobile Number"
              className="input-box"
              value={mobileNumber}
              onChange={handleMobileNumber}
            />
          </li>
          <li className="white-card flex-column">
            <label htmlFor="gmail" className="sub-heading">
              G-mail:
            </label>
            <input
              type="text"
              id="gmail"
              name="gmail"
              placeholder="           Enter your G-mail"
              className="input-box"
              value={gmail}
              onChange={handleGmail}
            />
          </li>
          <li className="white-card flex-column">
            <label htmlFor="department" className="sub-heading">
              Department :
            </label>
            <select
              value={department}
              onChange={handleDepartment}
              className="input-box"
            >
              <option value=""> Select option</option>
              <option value="CSE">CSE</option>
              <option value="IT">IT</option>
              <option value="AIDS">AIDS</option>
              <option value="AIML">AIML</option>
              <option value="IOT">IOT</option>
              <option value="ECE">ECE</option>
              <option value="EEE">EEE</option>
            </select>
          </li>
          <li className="white-card flex-column">
            <label htmlFor="gender" className="sub-heading">
              Gender :
            </label>
            <div className="sub-card">
              <input
                type="radio"
                id="gender"
                name="gender"
                value="Male"
                onChange={handleGender}
              />
              Male
              <input
                type="radio"
                id="gender"
                name="gender"
                value="Female"
                onChange={handleGender}
              />
              Female
              <input
                type="radio"
                id="gender"
                name="gender"
                value="Other"
                onChange={handleGender}
              />
              Other
            </div>
          </li>
          <li className="white-card flex-column">
            <lable htmlFor="language" className="sub-heading">
              Language:
            </lable>
            <div className="sub-card">
              <input
                type="checkbox"
                id="language"
                name="language"
                value="C++"
                className="checkbox"
                onChange={handleLanguage}
              />
              C++
              <input
                type="checkbox"
                id="language"
                name="language"
                value="Java"
                className="checkbox"
                onChange={handleLanguage}
              />
              Java
              <input
                type="checkbox"
                id="language"
                name="language"
                value="JavaScript"
                className="checkbox"
                onChange={handleLanguage}
              />
              Javascript
            </div>
            <div className="sub-card">
              <input
                type="checkbox"
                id="language"
                name="language"
                value="Python"
                className="checkbox"
                onChange={handleLanguage}
              />
              Python
              <input
                type="checkbox"
                id="language"
                name="language"
                value="Ruby"
                className="checkbox"
                onChange={handleLanguage}
              />
              Ruby
              <input
                type="checkbox"
                id="language"
                name="language"
                value="GO"
                className="checkbox"
                onChange={handleLanguage}
              />
              GO
            </div>
          </li>
          <li className="white-card flex-column">
            <label htmlFor="year" className="sub-heading">
              Year :
            </label>
            <div className="sub-card">
              <input
                type="radio"
                id="year"
                name="year"
                value="I"
                className="checkbox"
                onChange={handleYear}
              />
              I
              <input
                type="radio"
                id="year"
                name="year"
                value="II"
                className="checkbox"
                onChange={handleYear}
              />
              II
              <input
                type="radio"
                id="year"
                name="year"
                value="III"
                className="checkbox"
                onChange={handleYear}
              />
              III
              <input
                type="radio"
                id="year"
                name="year"
                value="IV"
                className="checkbox"
                onChange={handleYear}
              />
              IV
            </div>
          </li>
          <li className="white-card flex-column">
            <label htmlFor="slot" className="sub-heading">
              Slot :
            </label>
            <div className="sub-card">
              <input
                type="radio"
                id="slot"
                name="slot"
                value="10AM"
                className="checkbox"
                onChange={handleSlot}
              />
              10AM
              <input
                type="radio"
                id="slot"
                name="slot"
                value="1PM"
                className="checkbox"
                onChange={handleSlot}
              />
              1PM
              <input
                type="radio"
                id="slot"
                name="slot"
                value="3PM"
                className="checkbox"
                onChange={handleSlot}
              />
              3PM
              <input
                type="radio"
                id="slot"
                name="slot"
                value="5PM"
                className="checkbox"
                onChange={handleSlot}
              />
              5PM
            </div>
          </li>
          <li className="white-card flex-column">
            <label htmlFor="file" className="sub-heading">
              Attach file :
            </label>
            <input
              type="file"
              id="file"
              name="file"
              className="file-card"
              value={file}
              onChange={handleFile}
            />
          </li>
          <li>
            <button onClick={handleFormSubmit}>Click Me</button>
          </li>
        </ol>
      </form>
    </div>
  );
};

export default RegistrationFormComponent;
