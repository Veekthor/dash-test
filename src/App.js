import './assets/css/App.scss';
import Logo from './assets/klasha__logo 1.png';
import SidePanel from './components/SidePanel';
import DashboardPage from './pages/Dashboard';
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';
import TransactionPage from './pages/TransactionPage';
import TopNavBar from './components/TopNavBar';
import { useState } from 'react';
import SidePanelContent from './components/SidePanelContent';

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(prev => !prev);

  return (
    <Router>
      <div className="App-layout">
        {isOpen && (
          <div
            className="overlay overlay-active"
            onClick={() => setIsOpen(false)}
          />
        )}
        <nav className='mobile-top-navBar'>
          <Link to="/">
            <img src={Logo} alt="logo" />
          </Link>
          <i className="uil uil-bars" onClick={toggleMenu} />
        </nav>
        <div className={`mobile-navbar-view ${isOpen ? 'left' : 'right'}`}>
          <div className="mobile-close-header">
            <i className="uil uil-times" onClick={toggleMenu}></i>
          </div>
          <div className="mobile-nav">
            <SidePanelContent />
          </div>
        </div>
        <SidePanel />
        <div className='page'>
          <TopNavBar />
          <div className='container'>
            <Routes>
              <Route path="/" element={<DashboardPage />} />
              <Route path="/transaction" element={<TransactionPage />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
