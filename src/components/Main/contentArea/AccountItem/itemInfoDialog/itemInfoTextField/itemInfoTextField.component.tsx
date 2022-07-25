import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import EditIcon from '@mui/icons-material/Edit';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { Box, Snackbar, TextField } from '@mui/material';
import React, { ChangeEvent, useState } from 'react';
import MuiAlert, { AlertProps } from '@mui/material/Alert';

interface ItemInfoTextFieldComponentProps {
  label: string;
  value: string;
}
const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref,
) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});
const ItemInfoTextFieldComponent = (props: ItemInfoTextFieldComponentProps) => {

  const [visibility, setVisibility] = useState(false);
  const [value, setValue] = useState(props.value);
  const [readOnly, setReadOnly] = useState(true);
  const [focus, setFocus] = useState(false);
  const [openSnackbar, setOpenSnackbar] = useState(false)
  let test:any;
  let visibilityHandler = () => {
    setVisibility(!visibility);
  };

  let changeHandler = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setValue(e.currentTarget.value);
  };

  let blurHandler = () => {
    setReadOnly(true);
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
    test.focus();
    // @ts-ignore
  };

  let closeSnackbar = () => {
    setOpenSnackbar(false);
  }

  return (
    <>
    <Box display={'flex'} gap={1} alignItems={'center'}>
      <TextField
        label={`${props.label}`}
        type={visibility ? 'text' : 'password'}
        // @ts-ignore
        value={value}
        onChange={(e) => {
          changeHandler(e);
        }}
        InputProps={{ readOnly: readOnly}}
        onBlur={blurHandler}
        inputRef ={input => test = input}
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
