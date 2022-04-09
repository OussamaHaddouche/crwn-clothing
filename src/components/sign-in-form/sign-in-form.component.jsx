import { useState } from "react";
import { useDispatch } from "react-redux";
import {
  emailSignInStart,
  googleSignInStart,
} from "../../store/user/user.action";

// import { signInAuthUserWithEmailAndPassword } from "../../utils/firebase/firebase.utils";
import Button, { BUTTON_TYPES_CLASSES } from "../button/button.component";
import FormInput from "../form-input/form-input-component";

import { SignInContainer, ButtonsContainer } from "./sign-in-form.styles";

const DEFAULT_FORM_FIELDS = {
  email: "",
  password: "",
};

const SignInForm = () => {
  const [formFields, setFormFields] = useState(DEFAULT_FORM_FIELDS);
  const { email, password } = formFields;
  const dispatch = useDispatch();

  const handleChange = ({ target }) => {
    const { value, name } = target;
    setFormFields((fields) => ({ ...fields, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(emailSignInStart(email, password));
  };

  const handleGoogleSignIn = () => {
    dispatch(googleSignInStart());
  };

  return (
    <SignInContainer>
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
        <ButtonsContainer>
          <Button type="submit">Sign In</Button>
          <Button
            type="button"
            onClick={handleGoogleSignIn}
            buttonType={BUTTON_TYPES_CLASSES.google}
          >
            Sign in with google
          </Button>
        </ButtonsContainer>
      </form>
    </SignInContainer>
  );
};

export default SignInForm;
