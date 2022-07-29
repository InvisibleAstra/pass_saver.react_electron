import { Button, TextField } from '@mui/material';
import React, { ChangeEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AxiosRequestConfig } from 'axios';

const SingUpComponent = () => {

  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [password2, setPassword2] = useState('');
  const [testresponse, setTestResponse] = useState('');
  let nav = useNavigate();
  let requestConfig: AxiosRequestConfig ={
    url: 'https://functions.yandexcloud.net/d4eahu6fqabhcbvm394p',
    method: 'post',
    data: {login, password},
  }
  // let a = useCallback(async ()=>{
  //   let response = await axios(requestConfig);
  //   setTestResponse(response.data);
  // },[]);
  // a();

  let loginOnChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setLogin(event.target.value);
  };

  let passwordOnChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setPassword(event.target.value);
  };

  let password_2_OnChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>{
    setPassword2(event.target.value);
  };
  let LogIn = () => {
    if (login === '1' && password === '1') {

      nav('/main');
    }
  };

  let printResponse = () =>{
    console.log(testresponse);
  }

  return (
    <div className={'auth'}>
      <div className={'content'}>
        <TextField id="outlined-basic" label="Login" variant="outlined" size="small" onChange={loginOnChange}
                   value={login}/>
        <TextField id="outlined-basic" label="Password" variant="outlined" size="small" onChange={passwordOnChange}
                   value={password}/>
        <TextField id="outlined-basic" label="Password" variant="outlined" size="small" onChange={password_2_OnChange}
                   value={password2}/>
        <Button variant="outlined" size="medium" onClick={LogIn}>
          Sing Up
        </Button>
        <Button variant = 'outlined' size='medium' onClick={printResponse}>print response</Button>
      </div>
    </div>
  );
};

export default SingUpComponent;
