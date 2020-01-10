import * as React from "react";
import { useUserContext, useSetUserContext } from "../contexts/user";
import { validEmail, validateForm } from "../utils/userForm";

/**
 * This should update the user context with the new values for email and name
 */
const Profile = () => {
  const user = useUserContext();
  const setUserContext = useSetUserContext();

  const [ email, setEmail ] = React.useState(user.email);
  const [ name, setName ] = React.useState(user.name);
  const [error, setError] = React.useState(null);

    function validateEmail() {
        const isValid = validEmail(email);
        if (!isValid) {
            setError('Invalid email');
        }
    }

    function handleFormSubmit(e) {
        setError(null);
        e.preventDefault();

        const isValidForm = validateForm(email, 'password', name);

        if (isValidForm.result) {
            setUserContext(isValidForm.user);
        } else {
            setError(isValidForm.message);
        }
    }

    return (
    <div>
      <h1>Edit your profile</h1>
        {error && <p>Error: {error}</p>}
        <form
        onSubmit={handleFormSubmit}
      >
        <input
          name="email"
          value={email}
          onBlur={validateEmail}
          onChange={e => {
            setEmail(e.target.value);
          }}
        />
        <input
          name="name"
          value={name}
          onChange={e => {
            setName(e.target.value);
          }}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Profile;
