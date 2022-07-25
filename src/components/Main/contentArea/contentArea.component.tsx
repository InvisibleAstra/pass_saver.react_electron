import { Box } from '@mui/material';
import React, { useState } from 'react';
import AccountItemComponent from './AccountItem/accountItem.component';
import './contentArea.component.scss';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import AddItemDialogComponent from './AccountItem/addItemDialog/addItemDialog.component';

const ContentAreaComponent = () => {
  const info = [{ title: 'Steam', login: 'kalina', password: 'qwerasdf' }];
  let items = info.map((item) => {
    return <AccountItemComponent key={item.title} info={item}/>;
  });
  let [openAddItem, setOpenAddItem] = useState(false);
  const closeAddItem = () => {
    setOpenAddItem(false);
  };

  const addItemHandler = () => {
    setOpenAddItem(true);
  };
  return (
    <div className="contentArea">
      <Box display={'flex'} alignItems={'center'}>
        {items}
        <AddCircleIcon fontSize={'large'} onClick={addItemHandler}/>
      </Box>
      <AddItemDialogComponent open={openAddItem} close={closeAddItem}/>
    </div>
  );
};

export default ContentAreaComponent;
