import React from "react";
import { BsChevronLeft } from "react-icons/bs";

function NewRealtors(props) {
  const refferals = props.location.state.aboutProps.Referrals;
  console.log(refferals);
  return (
    <div className="genericDiv1">
      <div className="genericHeader">
        <p className="genericTitle">{props.location.state.aboutProps.name}</p>
        <p className="subTitt">New Realtors</p>
      </div>
      <div className="DashContainer">
        <div className="DashSubCont" style={{ maxWidth: "88vw" }}>
          <>
            <table className="table5" style={{ marginTop: "2vh" }}>
              <tbody>
                <tr>
                  <th scope="col" className="column1">
                    <p className="REPtype">Name</p>
                  </th>
                  <th scope="col" className="column1">
                    <p className="REPtype">Phone</p>
                  </th>
                  <th scope="col" className="column1">
                    <p className="REPtype">Email</p>
                  </th>
                  <th scope="col" className="column1">
                    <p className="REPtype">Start Date</p>
                  </th>
                  <th scope="col" className="column1">
                    <p className="REPtype">Sells</p>
                  </th>
                </tr>
                {refferals?.map((e,i) => {
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
                        {e.createdAt.split("T", 1)}
                      </td>
                      <td className="ClientName" scope="row">
                        {e.Sells.length}
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

export default NewRealtors;
