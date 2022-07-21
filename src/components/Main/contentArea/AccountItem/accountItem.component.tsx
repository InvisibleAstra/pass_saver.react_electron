import React, { useState } from 'react';
import './accountItem.component.scss';
import ItemInfoDialogComponent from './itemInfoDialog/itemInfoDialog.component';

const AccountItemComponent = () => {
  let [openDialog, setOpenDialog] = useState(false);
  const openInfo = () => setOpenDialog(true);
  return (
    <div>
      <div className="item" onClick={openInfo}>
        <img src={'https://i.pinimg.com/originals/28/2e/ac/282eac5d42125185dc54f41050196a53.png'} alt={''}/>
        steam
        <ItemInfoDialogComponent open={openDialog} closeHandler={setOpenDialog}/>
      </div>
    </div>
  );
};

export default AccountItemComponent;
