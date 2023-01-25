import React from "react";
import { BsChevronLeft } from "react-icons/bs";

function TotalCommisionPaid(
  props
) {
  const commisionsPaid = props.location.state.aboutProps;
  const name = props.location.state.name;
  return (
    <div className="genericDiv1">
      <div className="genericHeader">
        <p className="genericTitle">{name}</p>
      </div>
        <p className="subTittMan" style={{color: '#198754', fontSize: '18px'}}>Commissions Paid</p>
      <div className="DashContainer">
        <div className="DashSubCont" style={{ maxWidth: "88vw" }}>
          <>
            <table className="table5" style={{ marginTop: "2vh", width: '90vw' }}>
              <tbody>
                <tr>
                <th scope="col" className="column1">
                    <p className="REPtype2">Seller</p>
                  </th>
                  <th scope="col" className="column1">
                    <p className="REPtype2">Client name</p>
                  </th>
                  <th scope="col" className="column1">
                    <p className="REPtype2">Address</p>
                  </th>
                  <th scope="col" className="column1">
                    <p className="REPtype2">Closing Date</p>
                  </th>
                  <th scope="col" className="column1">
                    <p className="REPtype2">Value</p>
                  </th>
                </tr>
                {commisionsPaid.map((e,i) => {
                  return (
                    <tr key={i}>
                      <td className="ClientName" scope="row">
                        {e.User.name}
                      </td>
                      <td className="ClientName" scope="row">
                        {e.Sell.ClientName}
                      </td>
                      <td className="ClientName" scope="row">
                        {e.Sell.Address}
                      </td>
                      <td className="ClientName" scope="row">
                        {e.Sell.ClosingDate}
                      </td>
                      <td className="ClientName" scope="row">
                        $ {e.Sell.Value}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </>
        </div>
      </div>
      <BsChevronLeft
      cursor='pointer'
        color="grey"
        style={{
          minWidth: "30px",
          minHeight: "30px",
          position: "fixed",
          zIndex: 9,
          left: "80px",
          top: "17px",
          alignSelf: "flex-start",
        }}
        onClick={() => window.history.go(-1)}
      />
    </div>
  );
}

export default TotalCommisionPaid;
