import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import EditIcon from '@mui/icons-material/Edit';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { Box, Snackbar, TextField } from '@mui/material';
import React, { ChangeEvent, useEffect, useState } from 'react';
import MuiAlert, { AlertProps } from '@mui/material/Alert';

interface ItemInfoTextFieldComponentProps {
  label: string;
  value: string;
  readOnly?: boolean;
}
const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref,
) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});
const ItemInfoTextFieldComponent = (props: ItemInfoTextFieldComponentProps) => {

  const [visibility, setVisibility] = useState(false);
  let [value, setValue] = useState(props.value);
  const readAccess = props.readOnly ? true : false;
  const [readOnly, setReadOnly] = useState(readAccess);
  const [focus, setFocus] = useState(false);
  const [openSnackbar, setOpenSnackbar] = useState(false)
  const [errorEmptyField, setErrorEmptyField] = useState(false);

 useEffect(()=>{
   if(!value){
     setErrorEmptyField(true);
     setReadOnly(false);
   }
 },[value]);

  let refForFocusField:any;
  let visibilityHandler = () => {
    setVisibility(!visibility);
  };

  let changeHandler = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setValue(e.currentTarget.value);
  };

  let blurHandler = () => {
    if(!errorEmptyField){
      setReadOnly(true);
    }
    setFocus(false);
  };

  let copyHandler = () => {
    navigator.clipboard.writeText(value).then();
    setOpenSnackbar(true);
  };

  let editHandler = () => {
    setReadOnly(!readOnly);
    setVisibility(true);
    setFocus(!focus);
    refForFocusField.focus();
    // @ts-ignore
  };

  let closeSnackbar = () => {
    setOpenSnackbar(false);
  }

  return (
    <>
    <Box display={'flex'} gap={1} alignItems={'center'}>
      <TextField
        error={errorEmptyField}
        label={`${props.label}`}
        type={visibility ? 'text' : 'password'}
        // @ts-ignore
        value={value}
        onChange={(e) => {
          changeHandler(e);
        }}
        InputProps={{ readOnly: readOnly}}
        onBlur={blurHandler}
        inputRef ={input => refForFocusField = input}
      >
      </TextField>
      <ContentCopyIcon onClick={copyHandler}/>
      <EditIcon onClick={editHandler}/>
      <VisibilityIcon onClick={visibilityHandler}/>
    </Box>
      <Snackbar open={openSnackbar} autoHideDuration={1500} anchorOrigin={{vertical:'top', horizontal:'center'}} onClose={closeSnackbar} >
        <Alert severity = 'success' sx={{width:'150px'}}>Coped</Alert>
      </Snackbar>
    </>
  );
};

export default ItemInfoTextFieldComponent;
