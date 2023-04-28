import '../assets/css/pages/TransactionPage.scss';
import DataTable from "../components/DataTable";
import Filter from '../assets/Group 482719.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";


const TransactionPage = () => {
  return (
    <div className="transaction-table">
      <div className="table-title">
        <p>Transaction history</p>
      </div>
      <div className="search-input">
        <div className="left-input">
          <input type="text" name="" id="" placeholder="Search" />
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </div>
        <div className="right-filter">
          <button className="transaction-btn">
            <p>
              Filter
              <img src={Filter} alt="" />
            </p>
          </button>
          <button className="transaction-btn">
            <p>Export </p>
          </button>
        </div>
      </div>
      <div className="table">
        <DataTable />
      </div>
    </div>
  )
}

export default TransactionPage;