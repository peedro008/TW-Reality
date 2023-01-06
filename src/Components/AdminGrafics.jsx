import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { BiSearchAlt2 } from "react-icons/bi";
import RealtorsAdminBig from "../Charts/RealtorsAdminBig";
import Isologo_background from "../assets/Isologo_background.png";
import Select from "react-select";
import Realtors from "../Charts/Realtors";
import mask from "../assets/mask.png";
import wbill from "../assets/wbill.png";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";


function AdminGrafics({
  Referred,
  google,
  Name,
  Users,
  selected,
  setSelected,
}) {
  const [graficType, setGraficType] = useState();
  const [graficMultiple, setGraficMultiple] = useState(true);
  const [Search, setSearch] = useState("");
  const [thisUsers, setThisUsers] = useState(Users);
  const [sumMarketing, setSumMarketing] = useState(0)
  const [sumTransactionCoord, setSumTransactionCoord] = useState(0)
  const [sumTransactionCoordActive, setSumTransactionCoordActive] = useState(0)
  const [styleTable, setStyleTable] = useState("divTable2")
  const [chevron, setChevron] = useState("bsChevron3")
  const [circle, setCircle] = useState("circle4")
  let Screen = window.screen;


  function goUser(f) {
    let newUs = Users?.filter((e) =>
      e.name.toLowerCase().includes(f?.toLowerCase())
    );
    setSelected(newUs[0]);
  }

  useEffect(() => {
    setThisUsers(
      Users?.filter((e) => e.name.toLowerCase().includes(Search.toLowerCase()))
    );
  }, [Search]);

  const [sumSales, setSumSales] = useState([])
  useEffect(() => {
    {
      Users.length > 0 &&
       setSumSales(Users?.map((e) => e.Sells?.length).reduce(
        (previousValue, currentValue) => previousValue + currentValue))
    }
  }, [Users])
  

  
  useEffect(() => {
    if(Users?.length !== 0) 
    {  
        let marketing = 0;
        Users.map(e => marketing = e.PackageMarketings?.length + marketing)
        setSumMarketing(marketing)

        let transaction = 0;
        Users?.map(e => e.TransactionCoordinators?.map(f => { if(f.isSold === true) {transaction = transaction + 1}}))
        setSumTransactionCoord(transaction)
        
        let transactionActive = 0;
        Users?.map(e => e.TransactionCoordinators?.map(f => { if(f.isSold === false) {transactionActive = transactionActive + 1}}))
        setSumTransactionCoordActive(transactionActive)
      }
    }, [])

  const options = [
    { value: "All", label: "All" },
    { value: "Sales", label: "Sales" },
    { value: "Referral", label: "Referral" },
    { value: "Recruited", label: "Recruited" },
    { value: "Package Marketing", label: "Package Marketing" },
    { value: "Transaction Coord.", label: "Transaction Coord." },
    { value: "Transaction Coord. Active", label: "Transaction Coord. Active" },
  ];

  return (
    <div className="genericDivAdminGrafic">
      <div className="genericHeader">
        <p className="genericTitle">{`Welcome ${Name} `}</p>
        {!selected ? (
          <>
            <div
              style={{
                width: "20vw",
                minWidth: "500px",
                marginTop: "20px",
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
                  zIndex: 999
                }}
              ></input>
              <Select
                styles={{
                  control: (baseStyles, state) => ({
                    ...baseStyles,
                  colorAdjust: 'black',
                  colorInterpolation:'black',
                  colorScheme: 'black',
                  colorRendering:'black',
                  color:'black'
                  }),
                }}
                options={options}
                onChange={(e) => {
                  setGraficType(e.value);
                  if (e.value !== "All") {
                    setGraficMultiple(false);
                  } else {
                    setGraficMultiple(true);
                  }
                }}
                className="StadSelectGrafic"
                // defaultInputValue={yearOptions[0]}
                placeholder="Type"
              />
            </div>
            <div className="CardsGraficsContainer">
            <NavLink
                style={{ textDecoration: "none" }}
                to={{
                  pathname: "/sells",
                  aboutProps: { referrals: "Realtors" },
                }}
              >
              <div
                className="CardsGrafics2"
                style={{ backgroundColor: " rgba(111, 82, 237, 0.15)" }}
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
              </NavLink>
              <NavLink
                style={{ textDecoration: "none" }}
                to={{
                  pathname: "/adminManagement",
                  aboutProps: { referrals: "Realtors" },
                }}
              >
                <div
                  className="CardsGrafics2"
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
                    <p className="dashCardTitle">{Users?.length}</p>
                    <p className="dashCardText">Realtors</p>
                  </div>
                </div>
              </NavLink>
              <NavLink
                style={{ textDecoration: "none" }}
                to={{
                  pathname: "/adminManagement",
                  aboutProps: { referrals: "Referral" },
                }}
              >
                <div
                  className="CardsGrafics2"
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
                    <p className="dashCardTitle">{Referred?.length}</p>
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
                className="CardsGrafics2"
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
                  <p className="dashCardTitle">{sumMarketing}</p>
                  <p className="dashCardText">Marketing</p>
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
                  <p className="dashCardText">Transaction Coordinator</p>
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
                  backgroundColor: "rgba(252, 252, 74, 0.15)",
                }}
              >
                <div
                  className="dashCircle"
                  style={{ backgroundColor: "rgba(239, 239, 239,0.3)" }}
                >
                  <img src={mask} />
                </div>
                <div className="dashText">
                  <p className="dashCardTitle">{sumTransactionCoordActive}</p>
                  <p className="dashCardText">Transaction C. Active</p>
                </div>
              </div>
              </NavLink>
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
          google &&
          (graficMultiple ? (
            <Realtors
              google={google}
              Referred={Referred}
              realtors={thisUsers}
              goUser={goUser}
              Screen={Screen}
            />
          ) : (
            <RealtorsAdminBig
              google={google}
              Referred={Referred}
              realtors={thisUsers}
              graficType={graficType}
              goUser={goUser}
              Screen={Screen}
            />
          ))
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
                  <table className="table5" style={{ marginTop: "2vh", width: '60vw' }}>
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
                      marginLeft: "40px",
                      color: "#dc3545",
                    }}
                  >
                    This user has not sold
                  </p>
                </>
              )}

              {Users?.filter((e) => e.ReferredId == selected.id)?.length ? (
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
                  <table className="table5" style={{ marginTop: "2vh", width: '60vw' }}>
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
                      {Users?.filter((e) => e.ReferredId == selected.id).map(
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

              {Referred?.filter((e) => e.User?.id == selected.id).length ? (
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
                  <table className="table5" style={{ marginTop: "2vh", width: '60vw' }}>
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

                      {Referred?.filter((e) => e.User?.id == selected.id).map(
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
            <BsChevronLeft
              cursor="pointer"
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
              onClick={() => setSelected(false)}
            />
          </>
        )}

        {Screen.width > 1000 && (
          <>

          <div className={styleTable}>

         
          <table className="table6">
          <tbody>
            <tr style={{position: 'fixed', top: '120px', width: '650px'}}>
              <th scope="col" style={{ backgroundColor: 'rgba(87,204,152,255)'}}>
                <p className="REPtype2" style={{ width: '256px', backgroundColor: 'rgba(87,204,152,255)'}}>Name</p>
              </th>
              <th scope="col" className="column1" style={{ width: '50px', backgroundColor: 'rgba(87,204,152,255)'}}>
                <p className="REPtype2">Rec.</p>
              </th>
              <th scope="col" className="column1" style={{ width: '50px', backgroundColor: 'rgba(87,204,152,255)'}}>
                <p className="REPtype2">Ref.</p>
              </th>
              <th scope="col" className="column1" style={{ width: '60px', backgroundColor: 'rgba(87,204,152,255)'}}>
                <p className="REPtype2">Sales</p>
              </th>
              <th scope="col" className="column1" style={{ width: '50px', backgroundColor: 'rgba(87,204,152,255)'}}>
                <p className="REPtype2">P.M.</p>
              </th>
              <th scope="col" className="column1" style={{maxWidth: '35px', width: '35px', backgroundColor: 'rgba(87,204,152,255)'}}>
                <p className="REPtype2">T.C.</p>
              </th>
            </tr>

            {Users?.filter((e) => e.User?.id == selected.id).sort(function (a, b) {
              return b.Sells?.length - a.Sells?.length;
            })?.map(
              (e) => {
                return (
                  <tr>
                    <td className="ClientName2" scope="row" >
                      <NavLink
                      className="ClientName2"
                        style={{ textDecoration: "none", fontWeight: 'bold' }}
                        to={{
                          pathname: "/editUser",
                          aboutProps: e,
                        }}
                      >
                        {e.name}
                      </NavLink>
                    </td>

                    <td className="ClientName2" scope="row" style={{textAlign: 'center', minWidth: '30px'}}>
                    {e.Referrals?.length}
                    </td>
                    <td className="ClientName2" scope="row" style={{textAlign: 'center', minWidth: '30px'}}>
                    {Referred?.filter((f) => f.UserId == e.id).length}
                    </td>
                    <td className="ClientName2" scope="row" style={{textAlign: 'center', minWidth: '40px'}}>
                      {e.Sells?.length}
                    </td>
                    <td className="ClientName2" scope="row" style={{textAlign: 'center', minWidth: '30px'}}>
                      {e.PackageMarketings?.length}
                    </td>
                    <td className="ClientName2" scope="row" style={{textAlign: 'center', minWidth: '30px'}}>
                      {e.TransactionCoordinators?.length}
                    </td>
                  </tr>
                );
              }
            )}
          </tbody>
        </table>
        </div>
        </>
        )}
      </div>
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
     
        {
          styleTable === 'divTable2' &&
          <div className={circle} onClick={() => {setStyleTable('divTable'); setChevron('bsChevron'); setCircle('circle2')}}>
        <BsChevronLeft
              cursor="pointer"
              color="black"
              className={chevron}
              
            />
            </div>
        }
        {
          styleTable === 'divTable3' &&
          <div className={circle}  onClick={() => {setStyleTable('divTable'); setChevron('bsChevron'); setCircle('circle2')}}>
        <BsChevronLeft
              cursor="pointer"
              color="black"
              className={chevron}
             
            />
               </div>
        }

{
          styleTable === 'divTable' &&
          <div className={circle}  onClick={() => {setStyleTable('divTable3');setChevron('bsChevron2'); setCircle('circle3')}}>
          <BsChevronLeft
          cursor="pointer"
          color="black"
          className={chevron}
         
        />
           </div>
        }

        
    </div>
  );
}

export default AdminGrafics;
