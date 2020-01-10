import * as React from "react";
import { useSetUserContext } from "../contexts/user";
import { validEmail, validateForm } from "../utils/userForm";

const Login = () => {
    const [ email, setEmail ] = React.useState('test@gmail.com');
    const [ password, setPassword ] = React.useState('password');
  const [error, setError] = React.useState(null);

  React.useEffect(() => {
    setError(null);
  }, [email, password]);

  const setUserContext = useSetUserContext();

  function validateEmail() {
      const isValid = validEmail(email);
      if (!isValid) {
          setError('Invalid email');
      }
  }

  function handleFormSubmit(e) {
      setError(null);
      e.preventDefault();

      const isValidForm = validateForm(email, password, 'Test user');

      if (isValidForm.result) {
          setUserContext(isValidForm.user);
      } else {
          setError(isValidForm.message);
      }
  }

  return (
    <>
      <h1>Login</h1>
      {error && <p>Error: {error}</p>}
      <form
        onSubmit={handleFormSubmit}
      >
        <input
          name="email"
          value={email}
          onBlur={validateEmail}
          onChange={event => {
              setEmail(event.target.value);
          }}
        />
        <input
          name="password"
          type="password"
          value={password}
          onChange={event => {
              setPassword(event.target.value)
          }}
        />
        <button type="submit">Login</button>
      </form>
    </>
  );
};

export default Login;
