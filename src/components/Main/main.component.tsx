import React from 'react';
import BarComponent from './appBar/bar.component';
import ContentAreaComponent from './contentArea/contentArea.component';
import HeaderComponent from './Header/header.component';
import './main.component.scss';

const MainComponent = () => {
  return (
    <div>
      <div className="appBar"><BarComponent/></div>
      <div className="header"><HeaderComponent/></div>
      <div className="contentArea"><ContentAreaComponent/></div>
   </div>
  );
};

export default MainComponent;
