import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import mask from "../assets/mask.png";
import wbill from "../assets/wbill.png";
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
  const [sumSales, setSumSales] = useState(0)
  const [sumRef, setSumRef] = useState(0)
  const [sumMarketing, setSumMarketing] = useState(0)
  const [sumTransactionCoord, setSumTransactionCoord] = useState(0)
  let Screen = window.screen
  
  const thisReffered = Users?.map(e => Referred.filter((f) => f.UserId == e.id).length)

  useEffect(() => {
    if(Users.length !== 0) 
    {
      setSumSales(Users?.map((e) => e.Sells?.length).reduce(
        (previousValue, currentValue) => previousValue + currentValue
      ))
  
      setSumRef(thisReffered?.reduce(
        (previousValue, currentValue) => previousValue + currentValue
        ));
        
        let marketing = 0;
        Users.map(e => marketing = e.PackageMarketings?.length + marketing)
        setSumMarketing(marketing)

        let transaction = 0;
        Users.map(e => transaction = e.TransactionCoordinators?.length + transaction)
        setSumTransactionCoord(transaction)
      }
    }, [])
    

    function goUser(f) {
      let newUs = Users?.filter((e) => e.name?.toLowerCase().includes(f?.toLowerCase()))
      setSelected(newUs[0])
    }
  return (
    <div className="genericDiv1">
      <div className="genericHeader">
        <p className="genericTitle">{`Welcome ${Name} `}</p>
        {!selected ? (
          <p className="subTitt">My Realtors list</p>
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
              goUser={goUser}
              google={google}
              Referred={Referred}
              realtors={Users}
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
                      marginLeft: "10px",
                      color: "#198754",
                    }}
                  >
                    Sales
                  </p>
                  <table className="table5" style={{ marginTop: "2vh", marginLeft: "10px", width: '800px' }}>
                    <tbody>
                      <tr>
                        <th scope="col" className="column1">
                          <p className="REPtype2">Client name</p>
                        </th>
                        <th scope="col" className="column1">
                          <p className="REPtype2">Closing date</p>
                        </th>
                        <th scope="col" className="column1">
                          <p className="REPtype2">Address</p>
                        </th>
                        <th scope="col" className="column1">
                          <p className="REPtype2">Value</p>
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
                      marginLeft: "10px",
                      color: "#dc3545",
                    }}
                  >
                    This user has not sold
                  </p>
                </>
              )}

              {Users.filter((e) => (e.ReferredId == selected.id || e.managerId == selected.id)).length ? (
                <>
                  <p
                    className="subTitt"
                    style={{
                      marginTop: "2vh",
                      marginLeft: "10px",
                      color: "#198754",
                    }}
                  >
                    Recruited
                  </p>
                  <table className="table5" style={{ marginTop: "2vh",marginLeft: "10px", width: '800px' }}>
                    <tbody>
                      <tr>
                        <th scope="col" className="column1">
                          <p className="REPtype2">Realtor name</p>
                        </th>
                        <th scope="col" className="column1">
                          <p className="REPtype2">Email</p>
                        </th>
                        <th scope="col" className="column1">
                          <p className="REPtype2">Phone</p>
                        </th>
                        <th scope="col" className="column1">
                          <p className="REPtype2">Sales</p>
                        </th>
                        <th scope="col" className="column1">
                          <p className="REPtype2">Recruited</p>
                        </th>
                      </tr>
                      {Users.filter((e) => (e.ReferredId == selected.id || e.managerId == selected.id)).map(
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
                      marginLeft: "10px",
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
                      marginLeft: "10px",
                      color: "#198754",
                    }}
                  >
                    Referrals
                  </p>
                  <table className="table5" style={{ marginTop: "2vh",marginLeft: "10px", width: '800px' }}>
                    <tbody>
                      <tr>
                        <th scope="col" className="column1">
                          <p className="REPtype2">Referral name</p>
                        </th>
                        <th scope="col" className="column1">
                          <p className="REPtype2">Email</p>
                        </th>
                        <th scope="col" className="column1">
                          <p className="REPtype2">Phone</p>
                        </th>
                        <th scope="col" className="column1">
                          <p className="REPtype2">Company</p>
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
                      marginLeft: "10px",
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

{
  Screen.width > 1000 &&
        <div
          className="DashPList1Grow"
  style={{width: '300px'}}
        >
          <div className="DashPListHeader">
            <p className="DashPListTitle">Top Agents</p>

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
                Sal
              </p>
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
              <p
                className="DashNumber"
                style={{ color: "#000", fontWeight: "600" }}
              >
                Mark
              </p>
              <p
                className="DashNumber"
                style={{ color: "#000", fontWeight: "600" }}
              >
                T.C.
              </p>
            </div>
          </div>
          {Users?.sort(function (a, b) {
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
                  <p className="DashNumber" style={{marginLeft: '10px'}}>&nbsp;{e.Sells?.length}</p>
                    <p className="DashNumber" style={{marginLeft: '10px'}}>&nbsp;{e.Referrals?.length}</p>
                    <p className="DashNumber" style={{marginLeft: '20px'}}>
                      {Referred?.filter((f) => f.UserId == e.id).length}
                    </p>
                    <p className="DashNumber" style={{marginLeft: '10px'}}>&nbsp;{e.PackageMarketings?.length}</p>
                    <p className="DashNumber" style={{marginLeft: '10px'}}>&nbsp;{e.TransactionCoordinators?.length}</p>
                  </div>
                </div>
              );
            })}
        </div>
}
      </div>
      {
        !selected &&
      <div className="CardsGraficsContainer">
              <div
                className="CardsGrafics"
                style={{ backgroundColor: " rgba(111, 82, 237, 0.15)", minWidth: '200px' }}
              >
                <div
                  className="dashCircle"
                  style={{ backgroundColor: "rgba(239, 239, 239,0.3)" }}
                >
                  <img src={wbill} />
                </div>
                <div className="dashText">
                  <p className="dashCardTitle">{sumSales}</p>
                  <p className="dashCardText">Sales</p>
                </div>
              </div>
              <NavLink
                style={{ textDecoration: "none" }}
                to={{
                  pathname: "/realtorsListManager",
                  aboutProps: { referrals: 'Realtors' },
                }}
              >
              <div
                className="CardsGrafics"
                style={{
                  marginLeft: "20px",
                  backgroundColor: " rgba(255, 122, 0, 0.15)",
                }}
              >
                <div
                  className="dashCircle"
                  style={{ backgroundColor: "rgba(239, 239, 239,0.3)" }}
                >
                  <img src={mask} />
                </div>
                <div className="dashText">
                  <p className="dashCardTitle">{Users.length}</p>
                  <p className="dashCardText">Realtors</p>
                </div>
              </div>
              </NavLink>
              <NavLink
                style={{ textDecoration: "none" }}
                to={{
                  pathname: "/realtorsListManager",
                  aboutProps: { referrals: 'Referral' },
                }}
              >
                <div
                  className="CardsGrafics"
                  style={{
                    marginLeft: "20px",
                    backgroundColor: "rgba(51, 214, 159 ,0.15)",
                  }}
                >
                  <div
                    className="dashCircle"
                    style={{ backgroundColor: "rgba(239, 239, 239,0.3)" }}
                  >
                    <img src={mask} />
                  </div>
                  <div className="dashText">
                    <p className="dashCardTitle">{sumRef}</p>
                    <p className="dashCardText">Referrals</p>
                  </div>
                </div>
              </NavLink>

              <NavLink
                style={{ textDecoration: "none" }}
                to={{
                  pathname: "/packageManagement",
                  state: { aboutProps: 'Marketing' },
                }}
                
              >
              <div
                className="CardsGrafics"
                style={{
                  marginLeft: "20px",
                  backgroundColor: "rgba(220, 76, 100, 0.15)",
                }}
              >
                <div
                  className="dashCircle"
                  style={{ backgroundColor: "rgba(239, 239, 239,0.3)" }}
                >
                  <img src={mask} />
                </div>
                <div className="dashText">
                  <p className="dashCardTitle">{Users.length}</p>
                  <p className="dashCardText">
                    Package Marketing</p>
                </div>
              </div>
              </NavLink>

              <NavLink
                style={{ textDecoration: "none" }}
                to={{
                  pathname: "/packageManagement",
                  state: { aboutProps: 'Transaction Coordinator' },
                }}
              >
              <div
                className="CardsGrafics"
                style={{
                  marginLeft: "20px",
                  backgroundColor: "rgba(51, 45, 45, 0.15)",
                }}
              >
                <div
                  className="dashCircle"
                  style={{ backgroundColor: "rgba(239, 239, 239,0.3)" }}
                >
                  <img src={mask} />
                </div>
                <div className="dashText">
                  <p className="dashCardTitle">{sumTransactionCoord}</p>
                  <p className="dashCardText">Transaction Coord. Sold</p>
                </div>
              </div>
              </NavLink>
            </div>
      }
    </div>
  );
}

export default ManagerGrafics;
