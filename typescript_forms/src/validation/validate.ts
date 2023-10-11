import { Errors } from "../App";

export const validateUsername = (value: string, setErrors: (val: any) => void) => {
  if (value.length < 3) {
    setErrors((prev: Errors) => {
      return {
        ...prev,
        username: {
          ...prev.username,
          message: "Username must atleast have 3 characters",
        },
      };
    });
  } else {
    setErrors((prev: Errors) => {
      return {
        ...prev,
        username: {
          ...prev.username,
          message: "",
        },
      };
    });
  }
};

export const validatePassword = (value: string, setErrors: (val: any) => void) => {
  let errorMessage = "";
  if (value.length < 8) {
    errorMessage = "Password must have atleast 8 characters";
  } else if (value.length > 16) {
    errorMessage = "Password must have not have 16 characters";
  } else if (!/[A-Z]/.test(value)) {
    errorMessage = "password must contains at least one uppercase letter";
  } else if (!/[a-z]/.test(value)) {
    errorMessage = "password must contains at least one lowercase letter";
  } else if (!/\d/.test(value)) {
    errorMessage = "password must contains at least one digit";
  } else if (!/[!@#\$%\^&\*\(\)_\+{}\[\]:;<>,.?~\\-]/.test(value)) {
    errorMessage = "password must contains at least one special character";
  } else {
    errorMessage = "";
  }
  setErrors((prev: Errors) => {
    return {
      ...prev,
      password: {
        ...prev.password,
        message: errorMessage,
      },
    };
  });
};

export const validateEmail = (value: string, setErrors: (val: any) => void, password: string) => {
  if (value !== password) {
    setErrors((prev: Errors) => {
      return {
        ...prev,
        confirmPassword: {
          ...prev.confirmPassword,
          message: "Password does not match",
        },
      };
    });
  } else {
    setErrors((prev: Errors) => {
      return {
        ...prev,
        confirmPassword: {
          ...prev.confirmPassword,
          message: "",
        },
      };
    });
  }
};
