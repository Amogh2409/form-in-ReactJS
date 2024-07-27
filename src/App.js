import "./App.css";
import { React, useState } from "react";


function App() {
  const [firstName, setFirstName] = useState("");  // Declares a state variable 'firstName' with a default value of an empty string
  const [lastName, setLastName] = useState("");  // Declares a state variable 'lastName'
  const [email, setEmail] = useState("");  // Declares a state variable 'email'
  const [contact, setContact] = useState("");  // Declares a state variable 'contact'
  const [gender, setGender] = useState("male");
  const [resume, setResume] = useState("");  // Declares a state variable 'resume'
  const [url, setUrl] = useState("");  // Declares a state variable 'url'
  const [selectedOption, setSelectedOption] = useState("");  // Declares a state variable 'selectedOption'
  const [about, setAbout] = useState("");
  const [subjects, setSubjects] = useState({
    english: true,
    maths: false,
    physics: false
  });


  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(firstName, lastName, email, contact, gender, selectedOption, subjects, resume, url, about);
  }

  const handleSubjectChange = (sub) => {
    setSubjects((prev) => ({
      ...prev,
      [sub]: !prev[sub],  // Toggles the value of the specified subject
    }));
  };

  const handleReset = () => {
    // Reset all state variables here
    setFirstName("");  // Resets 'firstName' to an empty string
    setLastName("");  // Resets 'lastName' to an empty string
    setEmail("");  // Resets 'email' to an empty string
    setContact("");  // Resets 'contact' to an empty string
    setGender("male");  // Resets 'gender' to 'male'
    setSubjects({
      english: true,  // Resets 'english' subject to true
      maths: false,  // Resets 'maths' subject to false
      physics: false,  // Resets 'physics' subject to false
    });
    setResume("");  // Resets 'resume' to an empty string
    setUrl("");  // Resets 'url' to an empty string
    setSelectedOption("");  // Resets 'selectedOption' to an empty string
    setAbout("");  // Resets 'about' to an empty string
  };
  return (
    <div className="App">  
      <h1>Form in React</h1> 
      <fieldset>
        <form action="#" method="get">
          <label for="firstname">First Name*</label>
          <input
            type="text"
            name="firstname"
            id="firstname"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}  // Updates 'firstName' state
            placeholder="Enter First Name"
            required
          />
          <label for="lastname">Last Name*</label>
          <input
            type="text"
            name="lastname"
            id="lastname"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}  // Updates 'lastName' state
            placeholder="Enter Last Name"
            required
          />
          <label for="email">Enter Email* </label>
          <input
            type="email"
            name="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}  // Updates 'email' state
            placeholder="Enter email"
            required
          />
          <label for="tel">Contact*</label>
          <input
            type="tel"
            name="contact"
            id="contact"
            value={contact}
            onChange={(e) => setContact(e.target.value)}  // Updates 'contact' state
            placeholder="Enter Mobile number"
            required
          />
          <label for="gender">Gender*</label>
          <input
            type="radio"
            name="gender"
            value="male"
            id="male"
            checked={gender === "male"}  // Checks if 'gender' state is 'male'
            onChange={(e) => setGender(e.target.value)}  // Updates 'gender' state
          /> Male
          <input
            type="radio"
            name="gender"
            value="female"
            id="female"
            checked={gender === "female"}  // Checks if 'gender' state is 'female'
            onChange={(e) => setGender(e.target.value)}  // Updates 'gender' state
          /> Female
          <input
            type="radio"
            name="gender"
            value="other"
            id="other"
            checked={gender === "other"}  // Checks if 'gender' state is 'other'
            onChange={(e) => setGender(e.target.value)}  // Updates 'gender' state
          /> Other
          <label for="lang">Your best Subject</label>
          <input
            type="checkbox"
            name="lang"
            id="english"
            checked={subjects.english === true}  // Checks if 'english' subject is true
            onChange={(e) => handleSubjectChange("english")}  // Toggles 'english' subject
          /> English
          <input
            type="checkbox"
            name="lang"
            id="maths"
            checked={subjects.maths === true}  // Checks if 'maths' subject is true
            onChange={(e) => handleSubjectChange("maths")}  // Toggles 'maths' subject
          /> Maths
          <input
            type="checkbox"
            name="lang"
            id="physics"
            checked={subjects.physics === true}  // Checks if 'physics' subject is true
            onChange={(e) => handleSubjectChange("physics")}  // Toggles 'physics' subject
          /> Physics
          <label for="file">Upload Resume*</label>
          <input
            type="file"
            name="file"
            id="file"
            onChange={(e) => setResume(e.target.files[0])}  // Updates 'resume' state with the selected file
            placeholder="Enter Upload File"
            required
          />
          <label for="url">Enter URL*</label>
          <input
            type="url"
            name="url"
            id="url"
            onChange={(e) => setUrl(e.target.value)}  // Updates 'url' state
            placeholder="Enter URL"
            required
          />
          <label>Select your choice</label>
          <select
            name="select"
            id="select"
            value={selectedOption}
            onChange={(e) => setSelectedOption(e.target.value)}  // Updates 'selectedOption' state
          >
            <option value="" disabled selected={selectedOption === ""}>
              Select your Ans
            </option>
            <optgroup label="Beginners">
              <option value="1">HTML</option>
              <option value="2">CSS</option>
              <option value="3">JavaScript</option>
            </optgroup>
            <optgroup label="Advanced">
              <option value="4">React</option>
              <option value="5">Node</option>
              <option value="6">Express</option>
              <option value="7">MongoDB</option>
            </optgroup>
          </select>
          <label for="about">About</label>
          <textarea
            name="about"
            id="about"
            cols="30"
            rows="10"
            onChange={(e) => setAbout(e.target.value)}  // Updates 'about' state
            placeholder="About yourself"
            required
          ></textarea>
          <button type="reset" value="reset" onClick={() => handleReset()}>
            Reset
          </button>
          <button type="submit" value="Submit" onClick={(e) => handleSubmit(e)}>
            Submit
          </button>
        </form>
      </fieldset>
    </div>
  );
}


export default App;