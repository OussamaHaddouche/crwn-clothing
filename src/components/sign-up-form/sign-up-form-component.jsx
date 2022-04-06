import { useState } from "react";

import {
  createAuthUserWitheEmailAndPassword,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";
import Button from "../button/button.component";
import FormInput from "../form-input/form-input-component";

import { SignUpContainer } from "./sign-up-form.styles";

const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};
const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields((fields) => ({ ...fields, [name]: value }));
  };

  const resetFormFields = () => setFormFields(defaultFormFields);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      alert("passwords don't match");
      return;
    }
    try {
      const { user } = await createAuthUserWitheEmailAndPassword(
        email,
        password
      );
      await createUserDocumentFromAuth(user, { displayName });
      resetFormFields();
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        alert("Cannot create user, email already in use");
      } else {
        console.log("error during sign up", error);
      }
    }
  };

  return (
    <SignUpContainer>
      <h2>Don't have an account ?</h2>
      <span>Sign up with yout email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Display Name"
          value={displayName}
          name="displayName"
          type="text"
          required
          onChange={handleChange}
        />
        <FormInput
          label="Email"
          value={email}
          type="email"
          name="email"
          required
          onChange={handleChange}
        />
        <FormInput
          label="Password"
          value={password}
          type="password"
          name="password"
          required
          onChange={handleChange}
        />
        <FormInput
          label="Confirm Password"
          value={confirmPassword}
          type="password"
          name="confirmPassword"
          required
          onChange={handleChange}
        />
        <Button type="submit">Sign Up</Button>
      </form>
    </SignUpContainer>
  );
};

export default SignUpForm;
