import React from 'react';
import AccountItemComponent from './AccountItem/accountItem.component';
import './contentArea.component.scss';

const ContentAreaComponent = () => {
  return (
    <div className='contentArea'>
      <AccountItemComponent/>
    </div>
  );
};

export default ContentAreaComponent;
