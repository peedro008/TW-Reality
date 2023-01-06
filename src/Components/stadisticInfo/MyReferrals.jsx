import React from "react";
import { BsChevronLeft } from "react-icons/bs";

function MyReferrals(props) {
  const Reffered = props.location.state.aboutProps;
  const name = props.location.state.name;
 
  return (
    <div className="genericDiv1">
      <div className="genericHeader">
        <p className="genericTitle">{name}</p>
        <p className="subTitt" style={{ fontSize: '18px'}}>My Referrals</p>
      </div>
      <div className="DashContainer">
        <div className="DashSubCont" >
          <>
            <table className="table5" style={{ marginTop: "2vh", width: '90vw' }}>
              <tbody>
                <tr>
                  <th scope="col" className="column1">
                    <p className="REPtype2">Name</p>
                  </th>
                  <th scope="col" className="column1">
                    <p className="REPtype2">Phone</p>
                  </th>
                  <th scope="col" className="column1">
                    <p className="REPtype2">Email</p>
                  </th>
                  <th scope="col" className="column1">
                    <p className="REPtype2">Referrals Time</p>
                  </th>
                </tr>
                {Reffered.map((e, i) => {
                  return (
                    <tr key={i}>
                      <td className="ClientName" scope="row">
                        {e.name}
                      </td>
                      <td className="ClientName" scope="row">
                        {e.phone}
                      </td>
                      <td className="ClientName" scope="row">
                        {e.email}
                      </td>
                      <td className="ClientName" scope="row">
                        {e.updatedAt.split("T", 1)}
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

export default MyReferrals;
