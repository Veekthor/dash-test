import '../assets/css/components/DataTable.scss';
import transactionData from "../data/transactionData";

const DataTable = () => {
  return (
    <section className="table-container">
      <table>
        <thead>
          <tr>
            <th>Transaction ID</th>
            <th>Source</th>
            <th>Customer name</th>
            <th>Customer email</th>
            <th>Amount</th>
            <th>Request date</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {transactionData.map((item, index) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.source}</td>
              <td>{item.customerName}</td>
              <td>{item.customerEmail}</td>
              <td>${item.amount}.00</td>
              <td>{item.requestDate}</td>
              <td>{item.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className='pagination'>
        <ul className='pagination-container'>
          <li className='pagination-item'>
            <i className="uil uil-angle-left"></i>
          </li>
          <li className='pagination-item selected'>1</li>
          <li className='pagination-item'>2</li>
          <li className='pagination-item'>3</li>
          <li className='pagination-item'>4</li>
          <li className='pagination-item'>5</li>
          <li className='pagination-item'>...</li>
          <li className='pagination-item'>10</li>
          <li className='pagination-item'>
            <i className="uil uil-angle-right"></i>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default DataTable;