import React from "react";
import { BsChevronLeft } from "react-icons/bs";

function StadisticInfo(props) {
  const sells = props.location.state.aboutProps.Sells;
  console.log(props.location.state.aboutProps);
  return (
    <div className="genericDiv1">
      <div className="genericHeader">
        <p className="genericTitle">{props.location.state.aboutProps.name}</p>
      </div>
        <p className="subTittMan" style={{ fontSize: '18px'}}>Sell list</p>
      <div className="DashContainer">
        <div className="DashSubCont">
          <>
            <table className="table5" style={{ marginTop: "2vh", width: '90vw' }}>
              <tbody>
                <tr>
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
                {sells.map((e,i) => {
                  return (
                    <tr key={i}>
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

export default StadisticInfo;
