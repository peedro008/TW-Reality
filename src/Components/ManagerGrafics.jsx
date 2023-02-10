import React, { useEffect, useState } from "react";
import {
  BsChevronLeft,
  BsFillPersonFill,
  BsFillPersonLinesFill,
} from "react-icons/bs";
import Isologo_background from "../assets/Isologo_background.png";
import { FaMoneyBillAlt } from "react-icons/fa";
import { NavLink } from "react-router-dom";
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
  const [sumSales, setSumSales] = useState(0);
  const [sumRef, setSumRef] = useState(0);
  const [sumMarketing, setSumMarketing] = useState(0);
  const [sumTransactionCoord, setSumTransactionCoord] = useState(0);
  const [styleTable, setStyleTable] = useState("divTable2");
  const [chevron, setChevron] = useState("bsChevron3");
  const [circle, setCircle] = useState("circle4");
  let Screen = window.screen;

  const thisReffered = Users?.map(
    (e) => Referred.filter((f) => f.UserId == e.id).length
  );

  useEffect(() => {
    if (Users.length !== 0) {
      setSumSales(
        Users?.map((e) => e.Sells?.length).reduce(
          (previousValue, currentValue) => previousValue + currentValue
        )
      );

      setSumRef(
        thisReffered?.reduce(
          (previousValue, currentValue) => previousValue + currentValue
        )
      );

      let marketing = 0;
      Users.map((e) => (marketing = e.PackageMarketings?.length + marketing));
      setSumMarketing(marketing);

      let transaction = 0;
      Users.map(
        (e) => (transaction = e.TransactionCoordinators?.length + transaction)
      );
      setSumTransactionCoord(transaction);
    }
  }, []);

  function goUser(f) {
    setCircle("circle5");
    let newUs = Users?.filter((e) =>
      e.name?.toLowerCase().includes(f?.toLowerCase())
    );
    setSelected(newUs[0]);
  }
  return (
    <div className="genericDiv1">
      <div className="genericHeader">
        <p className="genericTitle">{`Welcome ${Name} `}</p>
      </div>
      {!selected ? (
        <p className="subTittMan">My Realtors</p>
      ) : (
        <p className="subTittMan">Information about: {selected.name}</p>
      )}
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
                  <table
                    className="table5"
                    style={{
                      marginTop: "2vh",
                      marginLeft: "10px",
                      width: "800px",
                    }}
                  >
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

              {Users.filter((e) => e.ReferredId == selected.id).length ? (
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
                  <table
                    className="table5"
                    style={{
                      marginTop: "2vh",
                      marginLeft: "10px",
                      width: "800px",
                    }}
                  >
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
                  <table
                    className="table5"
                    style={{
                      marginTop: "2vh",
                      marginLeft: "10px",
                      width: "800px",
                    }}
                  >
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

        {Screen.width > 1000 && (
          <>
            {!selected && (
              <div className={styleTable}>
                <table className="table6">
                  <tbody>
                    <tr
                      style={{
                        position: "fixed",
                        top: "120px",
                        width: "650px",
                      }}
                    >
                      <th scope="col">
                        <p className="REPtype2" style={{ width: "330px" }}>
                          Name
                        </p>
                      </th>
                      <th
                        scope="col"
                        className="column1"
                        style={{ width: "70px" }}
                      >
                        <p className="REPtype2">Rec.</p>
                      </th>
                      <th
                        scope="col"
                        className="column1"
                        style={{ width: "72px" }}
                      >
                        <p className="REPtype2">Ref.</p>
                      </th>
                      <th
                        scope="col"
                        className="column1"
                        style={{ width: "60px" }}
                      >
                        <p className="REPtype2">Sales</p>
                      </th>
                      {/* <th scope="col" className="column1" style={{ width: '50px'}}>
                <p className="REPtype2">P.M.</p>
              </th>
              <th scope="col" className="column1" style={{maxWidth: '35px', width: '35px'}}>
                <p className="REPtype2">T.C.</p>
              </th> */}
                    </tr>

                    {Users?.filter((e) => e.User?.id == selected.id)
                      .sort(function (a, b) {
                        return b.Sells?.length - a.Sells?.length;
                      })
                      ?.map((e) => {
                        return (
                          <tr>
                            <td
                              className="ClientName2"
                              scope="row"
                              onClick={() => goUser(e.name)}
                            >
                              {e.name}
                            </td>

                            <td
                              className="ClientName2"
                              scope="row"
                              style={{ textAlign: "center", minWidth: "30px" }}
                            >
                              {
                                Users?.filter((f) => f.ReferredId === e.id)
                                  .length
                              }
                            </td>
                            <td
                              className="ClientName2"
                              scope="row"
                              style={{ textAlign: "center", minWidth: "30px" }}
                            >
                              {Referred?.filter((f) => f.UserId == e.id).length}
                            </td>
                            <td
                              className="ClientName2"
                              scope="row"
                              style={{ textAlign: "center", minWidth: "40px" }}
                            >
                              {e.Sells?.length}
                            </td>
                            {/* <td className="ClientName2" scope="row" style={{textAlign: 'center', minWidth: '30px'}}>
                      {e.PackageMarketings?.length}
                    </td>
                    <td className="ClientName2" scope="row" style={{textAlign: 'center', minWidth: '30px'}}>
                      {e.TransactionCoordinators?.length}
                    </td> */}
                          </tr>
                        );
                      })}
                  </tbody>
                </table>
              </div>
            )}
          </>
        )}
        {styleTable === "divTable2" && (
          <div
            className={circle}
            onClick={() => {
              setStyleTable("divTable");
              setChevron("bsChevron");
              setCircle("circle2");
            }}
          >
            <BsChevronLeft cursor="pointer" color="white" className={chevron} />
          </div>
        )}
        {styleTable === "divTable3" && (
          <div
            className={circle}
            onClick={() => {
              setStyleTable("divTable");
              setChevron("bsChevron");
              setCircle("circle2");
            }}
          >
            <BsChevronLeft cursor="pointer" color="white" className={chevron} />
          </div>
        )}

        {styleTable === "divTable" && (
          <div
            className={circle}
            onClick={() => {
              setStyleTable("divTable3");
              setChevron("bsChevron2");
              setCircle("circle3");
            }}
          >
            <BsChevronLeft cursor="pointer" color="white" className={chevron} />
          </div>
        )}
      </div>
      {!selected && (
        <div className="CardsGraficsContainer">
          <div
            className="CardsGrafics2"
            style={{ backgroundColor: " rgba(0, 39, 82,0.8)" }}
          >
            <div className="dashCircle" style={{ backgroundColor: "#ebeff2" }}>
              <FaMoneyBillAlt size="28px" color="#002752" />
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
              aboutProps: { referrals: "Realtors" },
            }}
          >
            <div
              className="CardsGrafics"
              style={{
                marginLeft: "20px",
                backgroundColor: "#D8AF4D",
              }}
            >
              <div
                className="dashCircle"
                style={{ backgroundColor: "#ebeff2" }}
              >
                <BsFillPersonFill size="28px" color="#D8AF4D" />
              </div>
              <div className="dashText">
                <p className="dashCardTitle">{Users.length - 1}</p>
                <p className="dashCardText">Realtors</p>
              </div>
            </div>
          </NavLink>
          <NavLink
            style={{ textDecoration: "none" }}
            to={{
              pathname: "/realtorsListManager",
              aboutProps: { referrals: "Referral" },
            }}
          >
            <div
              className="CardsGrafics"
              style={{
                marginLeft: "20px",
                backgroundColor: "#B0DAF1",
              }}
            >
              <div
                className="dashCircle"
                style={{ backgroundColor: "#ebeff2" }}
              >
                <BsFillPersonLinesFill size="28px" color="#B0DAF1" />
              </div>
              <div className="dashText">
                <p className="dashCardTitle">{sumRef}</p>
                <p className="dashCardText">Referrals</p>
              </div>
            </div>
          </NavLink>

          {/* <NavLink
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
              </NavLink> */}
        </div>
      )}
      {selected && (
        <BsChevronLeft
          cursor="pointer"
          color="grey"
          style={{
            minWidth: "30px",
            minHeight: "30px",
            position: "fixed",
            zIndex: 1009,
            left: "80px",
            top: "17px",
            alignSelf: "flex-start",
          }}
          onClick={() => {
            setSelected(false);
            setCircle("circle4");
            setStyleTable("divTable2");
            setChevron("bsChevron3");
          }}
        />
      )}
      <img
        src={Isologo_background}
        style={{
          position: "fixed",
          pointerEvents: "none",
          right: 0,
          bottom: 0,
          width: "428px",
          opacity: "0.5",
        }}
      />
    </div>
  );
}

export default ManagerGrafics;
