import { Box } from '@mui/material';
import React, { useState } from 'react';
import AccountItemComponent from './AccountItem/accountItem.component';
import './contentArea.component.scss';
import AddItemDialogComponent from './AccountItem/addItemDialog/addItemDialog.component';

const ContentAreaComponent = () => {
  const info = [{ title: 'Steam', login: 'kalina', password: 'qwerasdf',src: 'https://i.pinimg.com/originals/28/2e/ac/282eac5d42125185dc54f41050196a53.png' }];
  const addItemInfo = { title: 'Add account', src:'https://toppng.com/uploads/preview/website-add-ons-inquire-now-plus-transparent-white-11564011803hs4kigc2r0.png'};
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
    <div className="contentArea size_m">
      <Box display={'flex'} alignItems={'center'}>
        {items}
        <AccountItemComponent info={addItemInfo}/>
      </Box>
      <AddItemDialogComponent open={openAddItem} close={closeAddItem}/>
    </div>
  );
};

export default ContentAreaComponent;
