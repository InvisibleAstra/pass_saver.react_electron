import { Button, TextField } from '@mui/material';
import React, { ChangeEvent, useState } from 'react';
import './auth.component.scss';
import { useNavigate } from 'react-router-dom';

const AuthComponent = () => {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  let nav = useNavigate();

  let loginOnChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setLogin(event.target.value);
  };

  let passwordOnChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setPassword(event.target.value);
  };

  let LogIn = () => {
    if (login === '1' && password === '1') {
      nav('/main');
    }
      };

  return (
    <div className={'auth'}>
      <div className={'content'}>
        <TextField id="outlined-basic" label="Login" variant="outlined" size="small" onChange={loginOnChange}
                   value={login}/>
        <TextField id="outlined-basic" label="Password" variant="outlined" size="small" onChange={passwordOnChange}
                   value={password}/>
        <Button variant="outlined" size="medium" onClick={LogIn}>
          Log in
        </Button>
      </div>
    </div>
  );
};

export default AuthComponent;
