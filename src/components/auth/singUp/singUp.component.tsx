import { Button, TextField } from '@mui/material';
import React, { ChangeEvent, useCallback, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './singUp.component.scss'
const SingUpComponent = () => {

  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [password2, setPassword2] = useState('');
  const [testresponse, setTestResponse] = useState('');
  let nav = useNavigate();

  let registrate = useCallback(async ()=>{
    // @ts-ignore
    window.api.init().then(()=>{
      // @ts-ignore
       window.api.saveUser({password,login}).then();
    });
   // setTestResponse(response.data);
  },[password, login]);

  let loginOnChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setLogin(event.target.value);
  };

  let passwordOnChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setPassword(event.target.value);
  };

  let password_2_OnChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setPassword2(event.target.value);
  };
  let registrateUser = () => {
    if(password!==password2){

    } else{
      try {
        registrate();
      } catch (error) {
        console.log(error);
      }
    }
  };

  let printResponse = () => {
    console.log(testresponse);
  };

  return (
    <>
      <div className={'singUp flex center'}>
        <div className={'singUp_content flex gap_10px direction_column'}>
          <TextField id="outlined-basic" label="Login" variant="outlined" size="small" onChange={loginOnChange}
                     value={login}/>
          <TextField id="outlined-basic" label="Password" variant="outlined" size="small" onChange={passwordOnChange}
                     value={password}/>
          <TextField id="outlined-basic" label="Password" variant="outlined" size="small" onChange={password_2_OnChange}
                     value={password2}/>
          <Button variant="outlined" size="medium" onClick={registrateUser}>
            Sing Up
          </Button>
        </div>
      </div>
    </>
  );
};

export default SingUpComponent;
