import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import '../Css/css.css'

function RealtorsListManager({ Referred, Users, UserId }) {
  const [typeList, setTypeList] = useState();

  const buttonStyle = {
    height: "30px",
    width: "150px",
    cursor: 'pointer',
    alignSelf: "center",
    marginBlock: "7px",
    marginTop: "15px",
    marginRight: "20px",
    fontFamily: "Gilroy-Regular",
    fontWeight: "bold",
    color: "white",
    boxShadow: "4px 4px 4px rgb(199, 199, 199)",
    backgroundColor: "#2b4162",
    borderWidth: 0,
    borderRadius: "8px",
  };
  const managerUser = Users?.filter((e) => e.UserRole === "Manager");
  const realtorUser = Users?.filter((e) => e.UserRole === "Realtor" && e.managerId === UserId);
  console.log(realtorUser)
  return (
    <div className="genericDiv1">
      <div className="genericHeader" style={{ marginBottom: "50px" }}>
        <p className="genericTitle">Management</p>
        <button onClick={() => setTypeList("Realtors")} style={buttonStyle}>
          Realtors
        </button>
        <button onClick={() => setTypeList("Reffered")} style={buttonStyle}>
          Reffered
        </button>
      </div>
      <div
        className="DashContainer"
        style={{ justifyContent: "start", flexDirection: "column" }}
      >
        {typeList === "Reffered" && (
          <div className="DashSubCont" style={{ maxWidth: "88vw" }}>
            <div style={{ flexDirection: "row", marginLeft: "4%" }}>
              <p className="subTitt" style={{ marginTop: "2vh" }}>
                Referred list
              </p>
              <table className="table5" style={{ marginTop: "2vh" }}>
                <tbody>
                  <tr>
                    <th scope="col" className="column1">
                      <p className="REPtype">Referred name</p>
                    </th>
                    <th scope="col" className="column1">
                      <p className="REPtype">Referred by</p>
                    </th>
                    <th scope="col" className="column1">
                      <p className="REPtype">Email</p>
                    </th>
                    <th scope="col" className="column1">
                      <p className="REPtype">Phone</p>
                    </th>
                    <th scope="col" className="column1">
                      <p className="REPtype">Company</p>
                    </th>
                  </tr>
                  {Referred?.map((e, i) => {
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
                        <td className="ClientName" scope="row">
                          {e.email}
                        </td>
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
            <div style={{ flexDirection: "row", marginLeft: "4%" }}>
              <p className="subTitt" style={{ marginTop: "2vh" }}>
                Realtors list
              </p>
              <table className="table5" style={{ marginTop: "2vh" }}>
                <tbody>
                  <tr>
                    <th scope="col" className="column1">
                      <p className="REPtype">Realtor name</p>
                    </th>
                    <th scope="col" className="column1">
                      <p className="REPtype">Referred by</p>
                    </th>
                    <th scope="col" className="column1">
                      <p className="REPtype">Manager</p>
                    </th>
                    <th scope="col" className="column1">
                      <p className="REPtype">Email</p>
                    </th>
                    <th scope="col" className="column1">
                      <p className="REPtype">Phone</p>
                    </th>
                    <th scope="col" className="column1">
                      <p className="REPtype">Referrals</p>
                    </th>
                    <th scope="col" className="column1">
                      <p className="REPtype">Recruited</p>
                    </th>
                    <th scope="col" className="column1">
                      <p className="REPtype">Sales</p>
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
                           {managerUser.filter(m => m.id === e.managerId)[0].name} 
                        </td>
                        <td className="ClientName" scope="row">
                          {e.email}
                        </td>
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
