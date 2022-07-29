import { Button } from '@mui/material';
import './auth.component.scss';
import React, { useState } from 'react';
import SingInComponent from './singIn/singIn.component';
import SingUpComponent from './singUp/singUp.component';

export type ModeTypes = 'singIn' | 'singUp' | 'auth';

const AuthComponent = () => {
  const [authMode, setAuthMode] = useState<ModeTypes>('auth');
  let dialog;

  let changeMode = (type: ModeTypes) => {
    setAuthMode(type);
  }

  if (authMode === 'auth') {
    dialog = (
      <div className="auth flex center">
        <div className={'auth_content flex gap_10px center'}>
          <Button variant={'outlined'} onClick={()=>{changeMode('singIn')}}> Sing In</Button>
          <Button variant={'outlined'} onClick={()=>{changeMode('singUp')}}> Sing Up</Button>
        </div>
      </div>);
  } else if (authMode ==='singUp'){
    dialog = (<SingUpComponent/>)
  } else if (authMode === 'singIn'){
    dialog = (<SingInComponent changeMode={setAuthMode}/>)
  }
  return (
    <>
      {dialog}
    </>
  );
};

export default AuthComponent;
