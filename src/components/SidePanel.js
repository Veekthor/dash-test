import React from 'react';
import '../assets/css/sidepanel.scss';
import Logo from '../assets/klasha__logo 1.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChartPie,
  faWallet,
  faChevronLeft,
  faCircleQuestion,
  faArrowsRotate,
  faCartShopping,
  faArrowRightArrowLeft,
  faLink,
  faChartSimple,
} from '@fortawesome/free-solid-svg-icons';
import { Link, useLocation } from 'react-router-dom';
const SidePanel = () => {
  let location = useLocation();
  let pathname = location.pathname
  return (<div className="side-panel-container">
    <div className='logo'>
      <Link to="/">
        <img src={Logo} alt="logo" />
      </Link>
    </div>
    <nav>
      <div>
        <span>Main pages</span>
        <ul className="nav-list">
          <li className={`${pathname === '/' && "active"}`}>
            <Link to="/">
              <FontAwesomeIcon icon={faChartPie} />
              <span>Dashboard</span>
            </Link>
          </li>
          <li>
            <FontAwesomeIcon icon={faWallet} />
            <span>Balances</span>
          </li>
          <li className={`${pathname === "/transaction" && "active"}`}>
            <Link to="/transaction">
              <FontAwesomeIcon icon={faArrowRightArrowLeft} rotation={90} />
              <span>Transaction</span>
            </Link>
          </li>
          <li>
            <FontAwesomeIcon icon={faChartSimple} />
            <span>Analytics</span>
          </li>
          <li>
            <i className="uil uil-megaphone"></i> <span>Marketing</span>
          </li>
          <li>
            <FontAwesomeIcon icon={faArrowsRotate} />
            <span>Exchange rates</span>
          </li>
        </ul>
      </div>
      <div>
        <span>Accept payments</span>
        <ul className="nav-list">
          <li>
            <FontAwesomeIcon icon={faCartShopping} />
            <span>Checkout</span>
          </li>
          <li>
            <FontAwesomeIcon icon={faLink} />
            <span>Payment Links</span>
          </li>
        </ul>
      </div>
      <div>
        <span>Send payments</span>
        <ul className="nav-list">
          <li>
            <FontAwesomeIcon icon={faArrowRightArrowLeft} />
            <span>Wire</span>
          </li>
        </ul>
      </div>
    </nav>
    <div className='bottom-btn'>
      <button className='support-btn'>
        <FontAwesomeIcon icon={faCircleQuestion} />
        Support
      </button>
      <button className='hide-panel'>
        <FontAwesomeIcon icon={faChevronLeft} />
        Hide panel
      </button>
    </div>
  </div>)
};

export default SidePanel;