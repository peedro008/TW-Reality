import React, { useEffect, useState } from "react";
import mask from "../assets/mask.png";
import { NavLink } from "react-router-dom";
import { BiSearchAlt2 } from "react-icons/bi";
import RealtorsAdminBig from "../Charts/RealtorsAdminBig";
import Select from "react-select";

function AdminGrafics({
  Referred,
  google,
  Name,
  Users,
  selected,
  setSelected,
}) {
  const [graficType, setGraficType] = useState("Sales");

  const [Search, setSearch] = useState("");
  const [thisUsers, setThisUsers] = useState(Users);

  useEffect(() => {
    setThisUsers(
      Users?.filter((e) => e.name.toLowerCase().includes(Search.toLowerCase()))
    );
  }, [Search]);

  const options = [
    { value: "Sales", label: "Sales" },
    { value: "Referred", label: "Referred" },
    { value: "Recruited", label: "Recruited" },
  ];

  return (
    <div className="genericDivAdminGrafic">
      <div className="genericHeader">
        <p className="genericTitle">{`Welcome ${Name} `}</p>
        {!selected ? (
          <>
            <p className="subTitt">Referred list</p>
            <div
              style={{
                width: "20vw",
                minWidth: "500px",
                height: "35px",
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <BiSearchAlt2
                size={"20px"}
                style={{ marginRight: "10px", marginTop: "10px" }}
              />
              <input
                placeholder="Name"
                onChange={(e) => setSearch(e.target.value)}
                style={{
                  height: "25px",
                  borderColor: "transparent",
                  borderRadius: "10px",
                  paddingInline: "8px",
                  marginTop: "10px",
                  width: "200px",
                }}
              ></input>
              <Select
                options={options}
                onChange={(e) => setGraficType(e.value)}
                className="StadSelectGrafic"
                // defaultInputValue={yearOptions[0]}
                placeholder="Type"
              />
            </div>
          </>
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
            <RealtorsAdminBig
              google={google}
              Referred={Referred}
              realtors={thisUsers}
              graficType={graficType}
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
          {/* {Users?.filter((e) => (e.ReferredId === UserId) | (e.id === UserId)) */}
          {Users?.sort(function (a, b) {
            return b.Referrals.length - a.Referrals.length;
          })?.map((e) => {
            return (
              <div
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

export default AdminGrafics;
