import React from "react";
import mask from "../assets/mask.png";
import { NavLink } from "react-router-dom";
import RealtorsAdmin from "../Charts/RealtorsAdmin";
import RealtorsManager from "../Charts/RealtorsManager";
import RealtorsManagers from "../Charts/RealtorsManagers";
function ManagerGrafics({
  Referred,
  google,
  Name,
  UserId,
  Users,
  selected,
  setSelected,
}) {
  const thisUsers = Users?.filter(
    (e) => (e.managerId === UserId) | (e.id === UserId)
  );

  return (
    <div className="genericDiv1">
      <div className="genericHeader">
        <p className="genericTitle">{`Welcome ${Name} `}</p>
        {!selected ? (
          <p className="subTitt">Referred list</p>
        ) : (
          <p className="subTitt" style={{ fontSize: "15px", color: "#000" }}>
            Information about: {selected.name}
          </p>
        )}
      </div>
      <div
        className="DashContainer"
        style={{ maxWidth: "90%", flexDirection: "row" }}
      >
        {!selected ? (
          google && (
            <RealtorsManagers
              google={google}
              Referred={Referred}
              realtors={thisUsers}
            />
          )
        ) : (
          <>
            <div style={{ display: "flex", flexDirection: "column" }}>
              {selected.Sells.length ? (
                <>
                  <p
                    className="subTitt"
                    style={{
                      marginTop: "2vh",
                      marginLeft: "40px",
                      color: "#198754",
                    }}
                  >
                    Sales
                  </p>
                  <table className="table5" style={{ marginTop: "2vh" }}>
                    <tbody>
                      <tr>
                        <th scope="col" className="column1">
                          <p className="REPtype">Client name</p>
                        </th>
                        <th scope="col" className="column1">
                          <p className="REPtype">Closing date</p>
                        </th>
                        <th scope="col" className="column1">
                          <p className="REPtype">Address</p>
                        </th>
                        <th scope="col" className="column1">
                          <p className="REPtype">Value</p>
                        </th>
                      </tr>
                      {selected.Sells?.map((e) => {
                        return (
                          <tr>
                            <td className="ClientName" scope="row">
                              {e.ClientName}
                            </td>
                            <td className="ClientName" scope="row">
                              {e.ClosingDate}
                            </td>
                            <td className="ClientName" scope="row">
                              {e.Address}
                            </td>
                            <td className="ClientName" scope="row">
                              ${e.Value}
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </>
              ) : (
                <>
                  <p
                    className="subTitt"
                    style={{
                      marginTop: "2vh",
                      marginLeft: "40px",
                      color: "#dc3545",
                    }}
                  >
                    This user has not sold
                  </p>
                </>
              )}

              {Users.filter((e) => e.ReferredId == selected.id).length ? (
                <>
                  <p
                    className="subTitt"
                    style={{
                      marginTop: "2vh",
                      marginLeft: "40px",
                      color: "#198754",
                    }}
                  >
                    Recruited
                  </p>
                  <table className="table5" style={{ marginTop: "2vh" }}>
                    <tbody>
                      <tr>
                        <th scope="col" className="column1">
                          <p className="REPtype">Realtor name</p>
                        </th>
                        <th scope="col" className="column1">
                          <p className="REPtype">Email</p>
                        </th>
                        <th scope="col" className="column1">
                          <p className="REPtype">Phone</p>
                        </th>
                        <th scope="col" className="column1">
                          <p className="REPtype">Sales</p>
                        </th>
                        <th scope="col" className="column1">
                          <p className="REPtype">Recruited</p>
                        </th>
                      </tr>
                      {Users.filter((e) => e.ReferredId == selected.id).map(
                        (e) => {
                          return (
                            <tr>
                              <td className="ClientName" scope="row">
                                {e.name}
                              </td>
                              <td className="ClientName" scope="row">
                                {e.email}
                              </td>
                              <td className="ClientName" scope="row">
                                {e.phone}
                              </td>
                              <td className="ClientName" scope="row">
                                {e.Sells?.length}
                              </td>
                              <td className="ClientName" scope="row">
                                {e.Referrals.length}
                              </td>
                            </tr>
                          );
                        }
                      )}
                    </tbody>
                  </table>
                </>
              ) : (
                <>
                  <p
                    className="subTitt"
                    style={{
                      marginTop: "2vh",
                      marginLeft: "40px",
                      color: "#dc3545",
                    }}
                  >
                    This user has not recruited
                  </p>
                </>
              )}

              {Referred.filter((e) => e.User?.id == selected.id).length ? (
                <>
                  <p
                    className="subTitt"
                    style={{
                      marginTop: "2vh",
                      marginLeft: "40px",
                      color: "#198754",
                    }}
                  >
                    Referrals
                  </p>
                  <table className="table5" style={{ marginTop: "2vh" }}>
                    <tbody>
                      <tr>
                        <th scope="col" className="column1">
                          <p className="REPtype">Referred name</p>
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

                      {Referred.filter((e) => e.User?.id == selected.id).map(
                        (e) => {
                          return (
                            <tr>
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
                        }
                      )}
                    </tbody>
                  </table>
                </>
              ) : (
                <>
                  <p
                    className="subTitt"
                    style={{
                      marginTop: "2vh",
                      marginLeft: "40px",
                      color: "#dc3545",
                    }}
                  >
                    This user has not Referrals
                  </p>
                </>
              )}
            </div>
          </>
        )}

        <div
          className="DashPList1Grow"
          // style={{
          //   position: "absolute",
          //   right: "50px",
          //   top: "80px",
          //   height: "50px",
          // }}
        >
          <div className="DashPListHeader">
            <p className="DashPListTitle">Top Recruited</p>
            {/* <p className="DashPListSTitle">Descending</p> */}
          </div>

          <div className="DashPListDivider" />
          <div className="DashPListRow1" style={{ marginBottom: "7px" }}>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <div className="DashPListCircleWith">
                {/* <img src={mask} /> */}
              </div>

              <p
                className="DashPListItemText"
                style={{ color: "#000", fontWeight: "600" }}
              >
                Name
              </p>
            </div>
            <div className="DashNumberDiv">
              <p
                className="DashNumber"
                style={{ color: "#000", fontWeight: "600" }}
              >
                Rec
              </p>
              <p
                className="DashNumber"
                style={{ color: "#000", fontWeight: "600" }}
              >
                Ref
              </p>
            </div>
          </div>
          {thisUsers?.sort(function (a, b) {
              return b.Referrals.length - a.Referrals.length;
            })
            ?.map((e ,i ) => {
              return (
                <div
                  key={i}
                  className="DashPListRow1"
                  style={{
                    marginBottom: "7px",
                    cursor: "pointer",
                    backgroundColor: selected.id == e.id ? "#8498a9" : "#fff",
                  }}
                  onClick={() => {
                    selected.id == e.id ? setSelected(false) : setSelected(e);
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                    }}
                  >
                    <div className="DashPListCircle">
                      <img src={mask} />
                    </div>

                    <p
                      className="DashPListItemText"
                      style={{
                        color: selected.id == e.id ? "#000" : "#656a86",
                      }}
                    >
                      {e.name}
                    </p>
                  </div>
                  <div className="DashNumberDiv">
                    <p className="DashNumber">&nbsp;{e.Referrals.length}</p>
                    <p className="DashNumber">
                      {Referred.filter((f) => f.UserId == e.id).length}
                    </p>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
}

export default ManagerGrafics;
