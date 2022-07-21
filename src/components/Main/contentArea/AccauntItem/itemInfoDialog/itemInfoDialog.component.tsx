import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import React from 'react';
import {Avatar, List, ListItem, ListItemAvatar, ListItemText} from "@mui/material";
import PersonIcon from '@mui/icons-material/Person';
import AddIcon from '@mui/icons-material/Add';

export interface SimpleDialogProps {
  open: boolean;
  setOpenDialog: (value: boolean) => void;
}

const ItemInfoDialogComponent = (props: SimpleDialogProps) => {

  const emails = ['username@gmail.com', 'user02@gmail.com'];

  const { setOpenDialog, open } = props;

  const handleClose = () => {
    setOpenDialog(false);
  };

  const handleListItemClick = (value: string) => {
   // onClose(value);
  };
  return (
    <Dialog onClose={handleClose} open={open}>
      <DialogTitle>Set backup account</DialogTitle>
      <List sx={{ pt: 0 }}>
        {emails.map((email) => (
          <ListItem button onClick={() => handleListItemClick(email)} key={email}>
            <ListItemAvatar>
              <Avatar >
                <PersonIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary={email} />
          </ListItem>
        ))}
        <ListItem autoFocus button onClick={() => handleListItemClick('addAccount')}>
          <ListItemAvatar>
            <Avatar>
              <AddIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="Add account" />
        </ListItem>
      </List>
    </Dialog>
  );
};

export default ItemInfoDialogComponent;