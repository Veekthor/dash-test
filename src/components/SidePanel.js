import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/sidepanel.scss';
import Logo from '../assets/klasha__logo 1.png';
import SidePanelContent from './SidePanelContent';
const SidePanel = () => {
  return (<div className={`side-panel-container`}>
    <div className='logo'>
      <Link to="/">
        <img src={Logo} alt="logo" />
      </Link>
    </div>
    <SidePanelContent />
  </div>)
};

export default SidePanel;