import './assets/css/App.scss';
import SidePanel from './components/SidePanel';
import DashboardPage from './pages/Dashboard';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import TransactionPage from './pages/TransactionPage';
import TopNavBar from './components/TopNavBar';

function App() {
  return (
    <Router>
      <div className="App-layout">
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
