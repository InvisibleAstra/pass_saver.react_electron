import React from 'react';
import './accountItem.component.scss';
import ItemInfoDialogComponent from './itemInfoDialog/itemInfoDialog.component';

const AccountItemComponent = (props:any) => {
  console.log(props.info.title);
  let [openDialog, setOpenDialog] = React.useState(false);
  const openInfo = () => setOpenDialog(true);
  const closeInfo = () => {
    setOpenDialog(false);
  }
//setTimeout(()=>{setOpenDialog(false)},5000)
  return (
    <div>
      <div className="item size_ss flex direction_column align_center" onClick={openInfo}>
        <img src={props.info.src} alt={''}/>
        <div>{props.info.title}</div>
        <ItemInfoDialogComponent open={openDialog} closeInfo={closeInfo} info={props.info}/>
      </div>
    </div>
  );
};

export default AccountItemComponent;
