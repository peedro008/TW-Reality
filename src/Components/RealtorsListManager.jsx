import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "../Css/css.css";

function RealtorsListManager({ Referred, Users, UserId }) {

  const [typeList, setTypeList] = useState();
  let Screen = window.screen;

  const managerUser = Users?.filter((e) => e.UserRole === "Manager");
  const realtorUser = Users?.filter(
    (e) => e.UserRole === "Realtor" && e.managerId === UserId
  );

  const referralUser = Referred?.filter(
    (e) => (e.User?.RefferedId === UserId || e.User?.managerId === UserId || e.User?.id === UserId)
  );

  console.log(referralUser);
  return (
    <div className="genericDiv1">
      <div className="genericHeader" style={{ marginBottom: "50px" }}>
        <p className="genericTitle">Management</p>
      </div>
      <div className="PAYbuttonCont" style={{ justifyContent: "flex-start", marginLeft: '0px', marginTop:'-10px', marginBottom: '10px' }}>
        <button className="PAYbutton" onClick={() => setTypeList("Realtors")} style={{marginRight: '20px'}} >
          <p className="PAYbuttonText">Realtors</p>
        </button>
        <button className="PAYbutton" onClick={() => setTypeList("Reffered")} >
          <p className="PAYbuttonText">Referrals</p>
        </button>
      </div>
      <div
        className="DashContainer"
        style={{ justifyContent: "start", flexDirection: "column" }}
      >
        {typeList === "Reffered" && (
          <div className="DashSubCont" style={{ maxWidth: "88vw" }}>
            <div style={{ flexDirection: "row" }}>
            <p className="subTitt" style={{ marginTop: "2vh", fontSize:'25px', color: 'black' }}>
                Referral list
              </p>
              <table className="table5" style={{ marginTop: "2vh", marginLeft: '0px', width: '90vw' }}>
                <tbody>
                  <tr>
                    <th scope="col" className="column1">
                      <p className="REPtype2">Referral name</p>
                    </th>
                    <th scope="col" className="column1">
                      <p className="REPtype2">Referred by</p>
                    </th>
                    {Screen.width > 1000 && (
                      <th scope="col" className="column1">
                        <p className="REPtype2">Email</p>
                      </th>
                    )}
                    <th scope="col" className="column1">
                      <p className="REPtype2">Phone</p>
                    </th>
                    <th scope="col" className="column1">
                      <p className="REPtype2">Company</p>
                    </th>
                  </tr>
                  {referralUser?.map((e, i) => {
                    return (
                      <tr key={i}>
                        <td className="ClientName" scope="row">
                          <NavLink
                            style={{ textDecoration: "none" }}
                            to={{
                              pathname: "/management/ManagerRecruit",
                              aboutProps: e,
                            }}
                          >
                            {e.name}
                          </NavLink>
                        </td>
                        <td className="ClientName" scope="row">
                          {e.User.name}
                        </td>
                        {Screen.width > 1000 && (
                          <td className="ClientName" scope="row">
                            {e.email}
                          </td>
                        )}
                        <td className="ClientName" scope="row">
                          {e.phone}
                        </td>
                        <td className="ClientName" scope="row">
                          {e.Company}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        )}
        {typeList === "Realtors" && (
          <div className="DashSubCont" style={{ maxWidth: "88vw" }}>
            <div style={{ flexDirection: "row"}}>
              <p className="subTitt" style={{ marginTop: "2vh", fontSize:'25px', color: 'black' }}>
                Realtors list
              </p>
              <table className="table5" style={{ marginTop: "2vh", marginLeft: '0px', width: '90vw' }}>
                <tbody>
                  <tr>
                    <th scope="col" className="column1">
                      <p className="REPtype2">Realtor name</p>
                    </th>
                    <th scope="col" className="column1">
                      <p className="REPtype2">Referred by</p>
                    </th>
                    <th scope="col" className="column1">
                      <p className="REPtype2">Manager</p>
                    </th>
                    {
                              Screen.width > 1000 &&
                    <th scope="col" className="column1">
                      <p className="REPtype2">Email</p>
                    </th>
                    }
                    <th scope="col" className="column1">
                      <p className="REPtype2">Phone</p>
                    </th>
                    <th scope="col" className="column1">
                      <p className="REPtype2">Referrals</p>
                    </th>
                    <th scope="col" className="column1">
                      <p className="REPtype2">Recruited</p>
                    </th>
                    <th scope="col" className="column1">
                      <p className="REPtype2">Sales</p>
                    </th>
                  </tr>
                  {realtorUser?.map((e, i) => {
                    return (
                      <tr key={i}>
                        <td className="ClientName" scope="row">
                          {e.name}
                        </td>
                        <td className="ClientName" scope="row">
                          {Users.filter((f) => f.id == e.ReferredId)[0]?.name}
                        </td>
                        <td className="ClientName" scope="row">
                          {
                            managerUser.filter((m) => m.id === e.managerId)[0]
                              .name
                          }
                        </td>
                        {
                                  Screen.width > 1000 &&
                        <td className="ClientName" scope="row">
                          {e.email}
                        </td>
                        }
                        <td className="ClientName" scope="row">
                          {e.phone}
                        </td>
                        <td className="ClientName" scope="row">
                          {Referred.filter((f) => f.User.id == e.id).length}
                        </td>
                        <td className="ClientName" scope="row">
                          {Referred.filter((f) => f.User.id == e.id).length}
                        </td>
                        <td className="ClientName" scope="row">
                          {e.Sells.length}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default RealtorsListManager;
