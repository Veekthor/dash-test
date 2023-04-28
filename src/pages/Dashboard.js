import '../assets/css/pages/Dashboard.scss';
import Lines from '../assets/lines.png';
import Download from '../assets/Vector.png';
import SalesChart from '../components/SalesChart';
import WeeklyChart from '../components/WeeklyChart';

const DashboardPage = () => {
  return (<>
    <div className='sales-overview'>
      <h2>Sales overview</h2>
      <div className='sales-cards-container'>
        <div className='sales-card'>
          <p className='card-title'>Today's sales</p>
          <p className="sales-amount">₦1,652.50</p>
        </div>
        <div className='sales-card active'>
          <p className='card-title'>24 Aug - 01 Sep 21</p>
          <div className="chart">
            <WeeklyChart />
          </div>
          <p className="card-title">This week</p>
          <p className="sales-amount">₦1,652.50</p>
        </div>
        <div className='sales-card'>
          <p className='card-title'>24 Aug - 01 Sep 21</p>
          <div className="chart">
            <WeeklyChart />
          </div>
          <p className="card-title">This month</p>
          <p className="sales-amount">₦1,652.50</p>
        </div>
        <div className='sales-card'>
          <p className='card-title'>24 Aug - 01 Sep 21</p>
          <div className="chart">
            <WeeklyChart />
          </div>
          <p className="card-title">Last month</p>
          <p className="sales-amount">₦1,652.50</p>
        </div>
      </div>
    </div>
    <div className='sales-bottom'>
      <div className='sales-graph-container'>
        <div className='sales-graph-header'>
          <h2>Sales</h2>
          <div className="divider"></div>
          <p className="theme-color">7 days</p>
          <p>30 days</p>
          <select name="" id="" className="usd-option">
            <option value="USD">USD</option>
          </select>

          <select name="" id="" className="email-option">
            <option value="Email">Email</option>
          </select>
          <button className="download-btn ">
            <img src={Download} alt="" />
            download report
          </button>
        </div>
        <div className='sales-graph'>
          <SalesChart />
        </div>
      </div>
      <div>
        <div className='klasha-card'>
          <h2>KlashaWire - send money to businesses globally from Africa</h2>
          <button className='klasha-btn'>Send Wire</button>
        </div>
        <img src={Lines} alt='' />
      </div>
    </div>
  </>)
}

export default DashboardPage;