import AreaTableAction from "./AreaTableAction";
import "./AreaTable.scss"

const TABLE_HEADS = [
  "Products",
  "Order ID",
  "Date",
  "Customer name",
  "Status",
  "Amount",
  "Action",
];

const TABLE_DATA = [
  {
    id: 100,
    name: "Plastic",
    order_id: "ACT11232",
    date: "Apr 29,2022",
    customer: "Park Avenue",
    status: "delivered",
    amount: 40,
  },
  {
    id: 101,
    name: "Organic",
    order_id: "ACT11232",
    date: "July 29,2022",
    customer: "City Center",
    status: "pending",
    amount: 28,
  },
  {
    id: 102,
    name: "Metal",
    order_id: "ACT67890",
    date: "May 29,2022",
    customer: "Residential Area",
    status: "canceled",
    amount: 50,
  },
  {
    id: 103,
    name: " Food Waste",
    order_id: "ACT11222",
    date: "Mar 29,2022",
    customer: "GRA estate",
    status: "delivered",
    amount: 10,
  },
  {
    id: 104,
    name: "Paper",
    order_id: "ACT14456",
    date: "Aug 29,2022",
    customer: "Eke Awka",
    status: "delivered",
    amount: 60,
  },
  {
    id: 105,
    name: "Glass",
    order_id: "ACT8902",
    date: "Jun 29,2022",
    customer: "Building 5, Floor 1",
    status: "delivered",
    amount: 80,
  },
];

const AreaTable = () => {
  return (
    <section className="content-area-table">
      <div className="data-table-info">
        <h4 className="data-table-title">Recent Bin Activities</h4>
      </div>
      <div className="data-table-diagram">
        <table>
          <thead>
            <tr>
              {TABLE_HEADS?.map((th, index) => (
                <th key={index}>{th}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {TABLE_DATA?.map((dataItem) => {
              return (
                <tr key={dataItem.id}>
                  <td>{dataItem.name}</td>
                  <td>{dataItem.order_id}</td>
                  <td>{dataItem.date}</td>
                  <td>{dataItem.customer}</td>
                  <td>
                    <div className="dt-status">
                      <span
                        className={`dt-status-dot dot-${dataItem.status}`}
                      ></span>
                      <span className="dt-status-text">{dataItem.status}</span>
                    </div>
                  </td>
                  <td>{dataItem.amount.toFixed(2)}kg</td>
                  <td className="dt-cell-action">
                    <AreaTableAction />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default AreaTable;
