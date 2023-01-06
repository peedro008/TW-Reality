import React from "react";
import { BsChevronLeft } from "react-icons/bs";

function SalesByRealtors(props) {
  const Referrals = props.location.state.aboutProps.Referrals;
  console.log(props.location.state.aboutProps);
  return (
    <div className="genericDiv1">
      <div className="genericHeader">
        <p className="genericTitle">{props.location.state.aboutProps.name}</p>
        <p className="subTitt" style={{ fontSize: '18px'}}>Sell list by Realtors</p>
      </div>
      <div className="DashContainer">
        <div className="DashSubCont">
          <>
            <table className="table5" style={{ marginTop: "2vh", width: '90vw' }}>
              <tbody>
                <tr>
                  <th scope="col" className="column1">
                    <p className="REPtype2">Realtor name</p>
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
                {Referrals?.map((R) => {
                  return R.Sells?.map((e,i) => {
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
                          $ {e.Value}
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
