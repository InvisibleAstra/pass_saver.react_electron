import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import React, { useEffect } from 'react';
import { Avatar, Box, List, ListItem, ListItemAvatar, ListItemText, TextField } from '@mui/material';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import CloseIcon from '@mui/icons-material/Close';
import VisibilityIcon from '@mui/icons-material/Visibility';


export interface SimpleDialogProps {
  open: boolean;
  closeHandler: (value:boolean) => void;
}

type FieldType = 'text' | 'password' | 'email';

const ItemInfoDialogComponent = (props: SimpleDialogProps) => {

  const itemInfo = { name: 'Steam', login: 'kalina', password: 'qwerasdf' };
  const itemInfoKeys: Array<any> = Object.keys(itemInfo);
  const { open, closeHandler } = props;

  useEffect(()=>{
    console.log('change item');},[open]);

  const handleClose = () => {
    closeHandler(false);
  };

  const handleListItemClick = (value: string) => {
    // onClose(value);
  };

  return (
    <Dialog open={open}>
      <DialogTitle>{
        <Box display={'flex'} alignItems={'center'}>
          <Box flexGrow={1}>{itemInfo.name}</Box>
          <Box> <CloseIcon onClick={handleClose}/></Box>
        </Box>
      }</DialogTitle>
      <List sx={{ pt: 0 }}>
        {itemInfoKeys.map((key) => {

          const visibilityHandler = () => {
          }
            let foundPassword: boolean = false;
            if (key === 'password') {
              foundPassword = true;
            }
            if (key === 'name') {
              return false;
            }
            return (
              <ListItem>
                <Box display={'flex'} gap={1} alignItems={'center'}>
                <TextField
                  id={key}
                  label={`${key}`}
                  type={foundPassword ? 'password' : 'text'}
                  // @ts-ignore
                  value={itemInfo[`${key}`]}
                >
                </TextField>
                <ContentCopyIcon/>
                <EditIcon/>
                {foundPassword ? <VisibilityIcon onClick = {visibilityHandler}/> :''}
                </Box>
              </ListItem>
            );
          },
        )}
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

