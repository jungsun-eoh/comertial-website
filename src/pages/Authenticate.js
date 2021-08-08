import React from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { setUserName, setIsLoggedIn } from '../redux/actions/userActions';

const Authenticate = ({}) => {
  const dispatch = useDispatch();
  const [userName, _setUserName] = React.useState('');
  const [password, _setPassword] = React.useState('');
  const [wrongPassword, setWrongPassword] = React.useState(false);

  const handleSubmit = () => {
    axios
      .post('/auth/authenticate', {
        userName: userName,
        password: password,
      })
      .then((res) => {
        if (res.data.isLoggedIn === true) {
          dispatch(setUserName(res.data.userName));
          dispatch(setIsLoggedIn(res.data.setIsLoggedIn));
          setWrongPassword(false);
        } else {
          setWrongPassword(true);
        }
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <>
      Enter a new username and password to sign up. Enter an existing username
      and password to login
      <p>
        Username:
        <input
          id='input-username'
          onChange={(e) => _setUserName(e.target.value)}
        />
      </p>
      <p>
        Password:
        <input
          id='input-password'
          type='password'
          onChange={(e) => _setPassword(e.target.value)}
        />
      </p>
      {wrongPassword && <div>Wrong Password!</div>}
      <button id='login' onClick={handleSubmit}>
        Authenticate
      </button>
    </>
  );
};

export default Authenticate;
