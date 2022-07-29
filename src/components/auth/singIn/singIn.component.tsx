import { Box, Button, TextField } from '@mui/material';
import React, { ChangeEvent, useState } from 'react';
import './singIn.component.scss';
import { useNavigate } from 'react-router-dom';
import { AxiosRequestConfig } from 'axios';
import SingUpComponent from '../singUp/singUp.component';

const SingInComponent = () => {

  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [openSingUpDialog, setOpenSingUpDialog] = useState(false);
  const [testresponse, setTestResponse] = useState('');
  let nav = useNavigate();
  let requestConfig: AxiosRequestConfig = {
    url: 'https://functions.yandexcloud.net/d4eahu6fqabhcbvm394p',
    method: 'post',
    data: { login, password },
  };
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

  let openSingUpDialogHandler = () => {
    setOpenSingUpDialog(true);
  }

  let LogIn = () => {
    if (login === '1' && password === '1') {

      nav('/main');
    }
  };

  let printResponse = () => {
    console.log(testresponse);
  };

  return (
    <>
      <div className={'auth'}>
        <div className={'content'}>
          <TextField id="outlined-basic" label="Login" variant="outlined" size="small" onChange={loginOnChange}
                     value={login}/>
          <TextField id="outlined-basic" label="Password" variant="outlined" size="small" onChange={passwordOnChange}
                     value={password}/>
          <Button variant="outlined" size="medium" onClick={LogIn}>
            Log in
          </Button>
          <Button variant="outlined" size="medium" onClick={printResponse}>print response</Button>
          <Box onClick={openSingUpDialogHandler}>Sing up</Box>
        </div>
      </div>
      {openSingUpDialog ? <SingUpComponent/> : ''}
    </>
  );
};

export default SingInComponent;
