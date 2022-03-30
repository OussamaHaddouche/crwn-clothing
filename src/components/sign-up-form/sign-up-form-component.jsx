import { useState } from "react";

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

  return (
    <div>
      <h1>Sign up with yout email and password</h1>
      <form onSubmit={() => console.log()}>
        <label>Display Name</label>
        <input
          value={displayName}
          name="displayName"
          type="text"
          required
          onChange={handleChange}
        />
        <label>Email</label>
        <input
          value={email}
          type="email"
          name="email"
          required
          onChange={handleChange}
        />
        <label>Password</label>
        <input
          value={password}
          type="password"
          name="password"
          required
          onChange={handleChange}
        />
        <label>Confirm Password</label>
        <input
          value={confirmPassword}
          type="password"
          name="confirmPassword"
          required
          onChange={handleChange}
        />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default SignUpForm;
