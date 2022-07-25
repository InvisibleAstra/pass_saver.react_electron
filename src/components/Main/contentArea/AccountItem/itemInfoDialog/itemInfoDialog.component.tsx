import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import React from 'react';
import { Avatar, Box, List, ListItem, ListItemAvatar, ListItemText, TextField } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import CloseIcon from '@mui/icons-material/Close';
import ItemInfoTextFieldComponent from './itemInfoTextField/itemInfoTextField.component';


export interface SimpleDialogProps {
  open: boolean;
  closeInfo: () => void;
}

type FieldType = 'text' | 'password' | 'email';

const ItemInfoDialogComponent = (props: SimpleDialogProps) => {

  const itemInfo = { name: 'Steam', login: 'kalina', password: 'qwerasdf' };
  const itemInfoKeys: Array<any> = Object.keys(itemInfo);

  const handleClose = () => {
    setTimeout(()=>{props.closeInfo()},200);
  };

  let fields = itemInfoKeys.map((key:any) => {

      if (key === 'name') {
        return false;
      }
      // @ts-ignore
    const value: any = itemInfo[`${key}`];

    return (
        <ListItem key={key}>
          <ItemInfoTextFieldComponent label={key} value ={value}/>
        </ListItem>
      );
    },
  )

  return (
    <Dialog open={props.open}>
      <DialogTitle>{
        <Box display={'flex'} alignItems={'center'}>
          <Box flexGrow={1}>{itemInfo.name}</Box>
          <Box> <CloseIcon onClick={handleClose}/></Box>
        </Box>
      }</DialogTitle>
      <List sx={{ pt: 0 }}>
        {fields}
        <ListItem autoFocus button>
          <ListItemAvatar>
            <Avatar>
              <AddIcon fontSize={'small'}/>
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="Add field"/>
        </ListItem>
      </List>
    </Dialog>
  );
};

export default ItemInfoDialogComponent;

