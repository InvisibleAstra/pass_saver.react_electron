import { Button, TextField } from '@mui/material';
import React, { ChangeEvent, useCallback, useState } from 'react';
import './auth.component.scss';
import { useNavigate } from 'react-router-dom';
import axios, { AxiosRequestConfig } from 'axios';

const AuthComponent = () => {

  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  let nav = useNavigate();
  let authData = { login, password };
  let requestConfig: AxiosRequestConfig = {
    url: 'http://localhost:3000/auth/singIn',
    method: 'post',
    data: authData,
  };

  let LogInCallback = useCallback(async () => {
    let response = await axios(requestConfig);
    if (response.status === 200) {
      nav('/main');
    }
  }, [authData]);


  let loginOnChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setLogin(event.target.value);
  };

  let passwordOnChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setPassword(event.target.value);
  };

  async function LogIn() {
    if(authData.login==='1'&&authData.password==='1')
    {
      nav('/main');
    }
    // try {
    //   await LogInCallback();
    // } catch (e) {
    //   console.log(e);
    // }
  }

  return (
    <div className={'auth flex center'}>
      <div className={'auth_content flex size_s gap10 direction_column'}>
        <TextField id="outlined-basic" label="Login" variant="outlined" size="small" onChange={loginOnChange}
                   value={login}/>
        <TextField id="outlined-basic" label="Password" variant="outlined" size="small" onChange={passwordOnChange}
                   value={password} type={'password'}/>
        <Button variant="outlined" size="medium" onClick={LogIn}>
          Log in
        </Button>
      </div>
    </div>
  );
};

export default AuthComponent;
