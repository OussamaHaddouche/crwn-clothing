import { useState } from "react";

import {
  signInAuthUserWithEmailAndPassword,
  signInWithGooglePopup,
} from "../../utils/firebase/firebase.utils";
import Button, { BUTTON_TYPES_CLASSES } from "../button/button.component";
import FormInput from "../form-input/form-input-component";

import "./sign-in.styles.scss";

const DEFAULT_FORM_FIELDS = {
  email: "",
  password: "",
};

const SignInForm = () => {
  const [formFields, setFormFields] = useState(DEFAULT_FORM_FIELDS);
  const { email, password } = formFields;

  const handleChange = ({ target }) => {
    const { value, name } = target;
    setFormFields((fields) => ({ ...fields, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
       await signInAuthUserWithEmailAndPassword(
        email,
        password
      );
    } catch (error) {
      if (error.code === "auth/wrong-password") {
        alert("incorrect password for email");
      } else if (error.code === "auth/user-not-found") {
        alert("no user associated with this email");
      }
      console.log("error while signing in with email and password", error);
    }
  };

  const handleGoogleSignIn = async () => {
    await signInWithGooglePopup();
  };

  return (
    <div className="sign-in-container">
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="email"
          value={email}
          name="email"
          type="text"
          required
          onChange={handleChange}
        />
        <FormInput
          label="password"
          value={password}
          type="password"
          name="password"
          required
          onChange={handleChange}
        />
        <div className="buttons-container">
          <Button type="submit">Sign In</Button>
          <Button
            type="button"
            onClick={handleGoogleSignIn}
            buttonType={BUTTON_TYPES_CLASSES.google}
          >
            Sign in with google
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
