import React from "react";
import { NavLink } from "react-router-dom";

function ToRecruitComponent({ Referred, Users, UserId }) {

  // const thisUsers = Users?.filter((e) => (e.ReferredId === UserId) | (e.id === UserId))

  console.log(Referred)
  return (
    <div className="genericDiv1">
      <div className="genericHeader">
        <p className="genericTitle">Management</p>
       
      </div>
      <div className="DashContainer" style={{justifyContent:"start", flexDirection:"column"}}>
     
        <div className="DashSubCont" style={{ maxWidth: "88vw" }}>
          <div style={{flexDirection:"row", marginLeft:"4%"}}>
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
        <div className="DashSubCont" style={{ maxWidth: "88vw",marginTop: "8vh" }}>
          <div style={{flexDirection:"row", marginLeft:"4%"}}>
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
                {Users?.map((e, i) => {
                  return (
                    <tr key={i}>
                      <td className="ClientName" scope="row">
                          {e.name}
                      </td>
                      <td className="ClientName" scope="row">
                        {Users.filter(f=>f.id==e.ReferredId)[0]?.name}
                      </td>
                      <td className="ClientName" scope="row">
                        {e.email}
                      </td>
                      <td className="ClientName" scope="row">
                        {e.phone}
                      </td>
                      <td className="ClientName" scope="row">
                        {Referred.filter(f=>f.User.id==e.id).length}
                      </td>
                      <td className="ClientName" scope="row">
                        {Referred.filter(f=>f.User.id==e.id).length}
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
        
      </div>
      
    </div>
  );
}

export default ToRecruitComponent;
