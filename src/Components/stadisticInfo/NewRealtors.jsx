import React from "react";
import { BsChevronLeft } from "react-icons/bs";

function NewRealtors(props) {
  const refferals = props.location.state.aboutProps?.Referrals;
  console.log(refferals);
  return (
    <div className="genericDiv1">
      <div className="genericHeader">
        <p className="genericTitle">{props.location.state.aboutProps?.name}</p>
        <p className="subTitt"style={{ fontSize: '18px'}}>New Realtors</p>
      </div>
      <div className="DashContainer">
        <div className="DashSubCont" style={{ maxWidth: "88vw" }}>
          <>
            <table className="table5" style={{ marginTop: "2vh", width:' 90vw' }}>
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
                    <p className="REPtype2">Start Date</p>
                  </th>
                  <th scope="col" className="column1">
                    <p className="REPtype2">Sells</p>
                  </th>
                </tr>
                {refferals?.map((e,i) => {
                  return (
                    <tr key={i}>
                      <td className="ClientName" scope="row">
                        {e?.name}
                      </td>
                      <td className="ClientName" scope="row">
                        {e?.phone}
                      </td>
                      <td className="ClientName" scope="row">
                        {e?.email}
                      </td>
                      <td className="ClientName" scope="row">
                        {e.createdAt?.split("T", 1)}
                      </td>
                      <td className="ClientName" scope="row">
                        {e.Sells?.length}
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
