import React, {useState} from 'react';
import './accauntItem.component.scss';
import ItemInfoDialogComponent from "./itemInfoDialog/itemInfoDialog.component";

const AccauntItemComponent = () => {
  const [openDialog, setOpenDialog] = useState(false);

  let open = () => {
    setOpenDialog(!openDialog);
    console.log(openDialog);

  }
  return (
    <div className='item' onClick = {open}>
       <img src={'https://i.pinimg.com/originals/28/2e/ac/282eac5d42125185dc54f41050196a53.png'}/>
        steam
      <ItemInfoDialogComponent open={openDialog} setOpenDialog={setOpenDialog}/>
    </div>
  );
};

export default AccauntItemComponent;
