import { ChangeEvent, FormEvent, useState } from "react";
import "./App.css";

type UserInput = {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
};

const initialValue: UserInput = {
  username: "",
  email: "",
  password: "",
  confirmPassword: "",
};

function App() {
  const [userInput, setUserInput] = useState<UserInput>(initialValue);

  // e: BaseSyntheticEvent
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    // console.log("e.target.value", e.target.name, e.target.value);

    setUserInput({
      ...userInput,
      [e.target.name]: e.target.value,
    });
  };

  const handleFormSubmission = (e: FormEvent) => {
    e.preventDefault();

    const formData = {
      username: userInput.username,
      email: userInput.email,
      password: userInput.password,
      confirmPassword: userInput.confirmPassword,
    };

    localStorage.setItem("formData", JSON.stringify(formData));
    sessionStorage.setItem("formData", JSON.stringify(formData));

    setUserInput(initialValue);
  };

  return (
    <div className="App">
      <h1 className="text-3xl font-bold mb-4">Sign Up</h1>

      <form onSubmit={handleFormSubmission}>
        <label htmlFor="username">
          Username:
          <input
            className="input"
            type="text"
            name="username"
            id="username"
            value={userInput.username}
            onChange={handleInputChange}
          />
        </label>

        <label htmlFor="email">
          Email:
          <input
            className="input"
            type="email"
            name="email"
            id="email"
            value={userInput.email}
            onChange={handleInputChange}
          />
        </label>

        <label htmlFor="password">
          Password:
          <input
            className="input"
            type="password"
            name="password"
            id="password"
            value={userInput.password}
            onChange={handleInputChange}
          />
        </label>

        <label htmlFor="confirmPassword">
          Confirm Password:
          <input
            className="input"
            type="password"
            name="confirmPassword"
            id="confirmPassword"
            value={userInput.confirmPassword}
            onChange={handleInputChange}
          />
        </label>

        <button className="submit_button" type="submit">
          SignUp
        </button>
      </form>
    </div>
  );
}

export default App;
