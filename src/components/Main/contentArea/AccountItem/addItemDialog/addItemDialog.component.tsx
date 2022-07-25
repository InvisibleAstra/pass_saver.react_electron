import { Box, Dialog, DialogTitle, List, ListItem } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import CloseIcon from '@mui/icons-material/Close';
import React from 'react';
import ItemInfoTextFieldComponent from '../itemInfoTextField/itemInfoTextField.component';

interface AddItemProps {
  open: boolean;
  close: () => void;
}

const AddItemDialogComponent = (props:AddItemProps) => {

  const closeHandler = () => {
    props.close();
  }

  const addFieldHandler = () => {
    //add data in state;
  }

  return (
    <div>
      <Dialog open={props.open}>
        <DialogTitle>{
          <Box display={'flex'} alignItems={'center'}>
            <Box flexGrow={1}>
              Add account
            </Box>
            <Box><CloseIcon onClick={closeHandler}/></Box>
          </Box>
        }</DialogTitle>
        <List>
          <ListItem> <ItemInfoTextFieldComponent label={'Title'} value={'a'}/> </ListItem>
          <ListItem> <AddIcon onClick={addFieldHandler}/> </ListItem>
        </List>
      </Dialog>
    </div>
  );
};

export default AddItemDialogComponent;
