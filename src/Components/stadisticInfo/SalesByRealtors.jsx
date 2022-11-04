import React from "react";
import { BsChevronLeft } from "react-icons/bs";

function SalesByRealtors(props) {
  const Referrals = props.location.state.aboutProps.Referrals;
  console.log(props.location.state.aboutProps);
  return (
    <div className="genericDiv1">
      <div className="genericHeader">
        <p className="genericTitle">{props.location.state.aboutProps.name}</p>
        <p className="subTitt">Sell list by Realtors</p>
      </div>
      <div className="DashContainer">
        <div className="DashSubCont" style={{ maxWidth: "88vw" }}>
          <>
            <table className="table5" style={{ marginTop: "2vh" }}>
              <tbody>
                <tr>
                  <th scope="col" className="column1">
                    <p className="REPtype">Realtor name</p>
                  </th>
                  <th scope="col" className="column1">
                    <p className="REPtype">Client name</p>
                  </th>
                  <th scope="col" className="column1">
                    <p className="REPtype">Address</p>
                  </th>
                  <th scope="col" className="column1">
                    <p className="REPtype">Closing Date</p>
                  </th>
                  <th scope="col" className="column1">
                    <p className="REPtype">Value</p>
                  </th>
                </tr>
                {Referrals.map((R) => {
                  return R.Sells.map((e,i) => {
                    return (
                      <tr key={i}>
                        <td className="ClientName" scope="row">
                          {R.name}
                        </td>
                        <td className="ClientName" scope="row">
                          {e.ClientName}
                        </td>
                        <td className="ClientName" scope="row">
                          {e.Address}
                        </td>
                        <td className="ClientName" scope="row">
                          {e.ClosingDate}
                        </td>
                        <td className="ClientName" scope="row">
                          {e.Value}
                        </td>
                      </tr>
                    );
                  });
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

export default SalesByRealtors;
