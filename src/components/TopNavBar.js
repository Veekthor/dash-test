import User from '../assets/L.png';
import Dropdown from '../assets/drop down.png';

const TopNavBar = () => {
  return (
    <nav className='top-bar'>
      <div>
        <div className="app-user">
          <img src={User} alt="" className="user-img" />
          <img src={Dropdown} alt="" className="dropdown-icon" />
        </div>
        <div className="app-user">
          <p>En</p>
          <img src={Dropdown} alt="" className="dropdown-icon" />
        </div>
      </div>
    </nav>
  )
};

export default TopNavBar;