import { BaseSyntheticEvent, ChangeEvent, FocusEventHandler, FormEvent, useState } from "react";
import "./App.css";
import { validateEmail, validatePassword, validateUsername } from "./validation/validate";

type UserInput = {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
};

type IndividualError = {
  message: string;
  isVisited: boolean;
};

export type Errors = {
  username: IndividualError;
  email: IndividualError;
  password: IndividualError;
  confirmPassword: IndividualError;
};

const initialValue: UserInput = {
  username: "",
  email: "",
  password: "",
  confirmPassword: "",
};

function App() {
  const [userInput, setUserInput] = useState<UserInput>(initialValue);

  const [errors, setErrors] = useState<Errors>({
    username: { message: "", isVisited: false },
    email: { message: "", isVisited: false },
    password: { message: "", isVisited: false },
    confirmPassword: { message: "", isVisited: false },
  });

  // e: BaseSyntheticEvent
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    // console.log("e.target.value", e.target.name, e.target.value);
    const { name, value } = e.target;
    setUserInput({
      ...userInput,
      [name]: value,
    });

    if (errors.username.isVisited && name === "username") {
      validateUsername(value, setErrors);
    }

    if (errors.password.isVisited && name === "password") {
      validatePassword(value, setErrors);
    }
    if (errors.confirmPassword.isVisited && name === "confirmPassword") {
      validateEmail(value, setErrors, userInput.password);
    }
  };

  const handleInputBlur = (e: BaseSyntheticEvent) => {
    const { name, value } = e.target;

    console.log(name, value);

    if (name === "username") {
      setErrors((prev) => {
        return {
          ...prev,
          username: {
            ...prev.username,
            isVisited: true,
          },
        };
      });
      validateUsername(value, setErrors);
    }
    if (name === "password") {
      setErrors((prev) => {
        return {
          ...prev,
          password: {
            ...prev.password,
            isVisited: true,
          },
        };
      });
      validatePassword(value, setErrors);
    }
    if (name === "confirmPassword") {
      setErrors((prev) => {
        return {
          ...prev,
          confirmPassword: {
            ...prev.confirmPassword,
            isVisited: true,
          },
        };
      });
      validateEmail(value, setErrors, userInput.password);
    }
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
            required
            className="input"
            type="text"
            name="username"
            id="username"
            value={userInput.username}
            onChange={handleInputChange}
            autoFocus
            onBlur={handleInputBlur}
          />
          {errors.username.message && <p className="text-red-600">{errors.username.message}</p>}
        </label>

        <label htmlFor="email">
          Email:
          <input
            required
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
            required
            className="input"
            type="password"
            name="password"
            id="password"
            value={userInput.password}
            onChange={handleInputChange}
            onBlur={handleInputBlur}
          />
          {errors.password.message && <p className="text-red-600">{errors.password.message}</p>}
        </label>

        <label htmlFor="confirmPassword">
          Confirm Password:
          <input
            required
            className="input"
            type="password"
            name="confirmPassword"
            id="confirmPassword"
            value={userInput.confirmPassword}
            onChange={handleInputChange}
            onBlur={handleInputBlur}
          />
          {errors.confirmPassword.message && <p className="text-red-600">{errors.confirmPassword.message}</p>}
        </label>

        <button className="submit_button" type="submit">
          SignUp
        </button>
      </form>
    </div>
  );
}

export default App;
