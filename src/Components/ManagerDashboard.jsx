import React, { useState } from "react";
import { BiSearchAlt2 } from "react-icons/bi";
import { useSelector } from "react-redux";
// import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
import Select from "react-select";

import StatsQuoted from "../Charts/stadisticChartQuoted";
import StatsSold from "../Charts/stadisticsChartSold";

function ManagerDashboardComponent({
  yearLabel,
  getRSells,
  Users,
}) {
  const [Search, setSearch] = useState("");
  const UserId = useSelector((state) => state.UserId);
  const stateRed = useSelector((state) => state);
  const thisUsers = Users?.filter(
    (e) => (e.managerId === UserId) | (e.id === UserId)
  );


  // const navigate = useNavigate()
  return (
    <div className="genericDiv1">
      <div className="StadCalendarDiv">
        <p className="StadCalendarTitle" style={{marginLeft: '20px', marginBottom: '20px', marginTop: '0px'}}>My Realtors</p>
      </div>
      <div
          style={{
            display: "flex",
            position: "absolute",
            right: "20px",
            top: "80px",
          }}
        >
          <BiSearchAlt2 size={"30px"} style={{ marginRight: "10px" }} />{" "}
          <input
            onChange={(e) => setSearch(e.target.value)}
            style={{
              height: "25px",
              borderColor: "transparent",
              borderRadius: "10px",
              paddingInline: "8px",
            }}
          ></input>
        </div>
      <div className="StadisticRowName" style={{paddingTop: '0px'}}>
        
        {thisUsers.length ? (
          Search ? thisUsers.filter((e) =>
          e.name?.toLowerCase().includes(Search.toLowerCase())
        ).map((e, i) => {
            return (
              <div key={i}>
                <p
                  // style={{ color: i % 2 ? "#6F52ED" : "#FF7A00" }}
                 
                  className="StadisticProdName"
                >
                  {e.name}
                </p>

                <NavLink
                  className="icons"
                  to={{ pathname: "/salesByMe", state: { aboutProps: e } }}
                  style={{ textDecoration: "none" }}
                >
                  <div className="StadBox">
                    <p className="StadBoxTitle">Sales by me</p>
                    <p className="StadBoxVal">{e.Sells.length}</p>
                  </div>
                </NavLink>

                <NavLink
                  className="icons"
                  to={{
                    pathname: "/salesByRealtors",
                    state: { aboutProps: e },
                  }}
                  style={{ textDecoration: "none" }}
                >
                  <div className="StadBox">
                    <p className="StadBoxTitle">Sales by my realtors</p>
                    <p className="StadBoxVal">
                      {e.Referrals.length ? getRSells(e.Referrals) : 0}
                    </p>
                  </div>
                </NavLink>

                <NavLink
                  className="icons"
                  to={{ pathname: "/newRealtors", state: { aboutProps: e } }}
                  style={{ textDecoration: "none" }}
                >
                  <div className="StadBox">
                    <p className="StadBoxTitle">New Realtors</p>
                    <p className="StadBoxVal">{e.Referrals.length}</p>
                  </div>
                </NavLink>

                <NavLink
                  className="icons"
                  to={{
                    pathname: "/myReferrals",
                    state: {
                      aboutProps: stateRed.Referred?.filter(
                        (i) => e.id === i.User?.id
                      ),
                      name: e.name},
                  }}
                  style={{ textDecoration: "none" }}
                >
                  <div className="StadBox">
                    <p className="StadBoxTitle">Referrals</p>
                    <p className="StadBoxVal">
                      {
                        stateRed.Referred?.filter((i) => e.id === i.User?.id)
                          .length
                      }
                    </p>
                  </div>
                </NavLink>
                
                <NavLink
                  className="icons"
                  to={{ pathname: "/packageMarketingDash", state: { aboutProps: e } }}
                  style={{ textDecoration: "none" }}
                >
                  <div className="StadBox">
                    <p className="StadBoxTitle">Package Marketing</p>
                    <p className="StadBoxVal">{e.PackageMarketings?.length}</p>
                  </div>
                </NavLink>

                <NavLink
                  className="icons"
                  to={{ pathname: "/transactionCoordSold", state: { aboutProps: e } }}
                  style={{ textDecoration: "none" }}
                >
                  <div className="StadBox">
                    <p className="StadBoxTitle">Transaction Coord. Sold</p>
                    <p className="StadBoxVal">{e.TransactionCoordinators?.filter(e => e.isSold === true).length}</p>
                  </div>
                </NavLink>

                <NavLink
                  className="icons"
                  to={{ pathname: "/transactionCoordUnsold", state: { aboutProps: e } }}
                  style={{ textDecoration: "none" }}
                >
                  <div className="StadBox">
                    <p className="StadBoxTitle">Transaction Coord. Unsold</p>
                    <p className="StadBoxVal">{e.TransactionCoordinators?.filter(e => e.isSold === false).length}</p>
                  </div>
                </NavLink>

                <NavLink
                  className="icons"
                  to={{
                    pathname: "/totalCommissionPaid",
                    state: { aboutProps: stateRed.Commissions.filter(
                      (us) =>
                        (us.commisionTo === e.id) & (us.payded === true)
                    ), name: e.name },
                  }}
                  style={{ textDecoration: "none" }}
                >
                  <div className="StadBox">
                    <p className="StadBoxTitle">Total commission paid</p>
                    <p className="StadBoxVal">
                      {stateRed.Commissions.filter(
                        (us) =>
                          (us.commisionTo === e.id) & (us.payded === true)
                      ).length * Number(e.ComissionValue)}
                    </p>
                  </div>
                </NavLink>

                <NavLink
                  className="icons"
                  to={{
                    pathname: "/totalCommissionUnpaid",
                    state: { aboutProps: stateRed.Commissions.filter(
                      (us) => (us.commisionTo === e.id) & (us.payded === false)
                    ), name: e.name },
                  }}
                  style={{ textDecoration: "none" }}
                >
                  <div className="StadBox">
                    <p className="StadBoxTitle">Total commission unpaid</p>
                    <p className="StadBoxVal">
                      {stateRed.Commissions.filter(
                        (us) =>
                          (us.commisionTo === e.id) & (us.payded === false)
                      ).length * Number(e.ComissionValue)}
                    </p>
                  </div>
                </NavLink>
              </div>
            );
            
          }
          ) 
          :
          thisUsers.map((e, i) => {
            return (
              <div key={i}>
                <p
                  // style={{ color: i % 2 ? "#6F52ED" : "#FF7A00" }}
                 
                  className="StadisticProdName"
                >
                  {e.name}
                </p>

                <NavLink
                  className="icons"
                  to={{ pathname: "/newRealtors", state: { aboutProps: e } }}
                  style={{ textDecoration: "none" }}
                >
                  <div className="StadBox">
                    <p className="StadBoxTitle">Realtors</p>
                    <p className="StadBoxVal">{e.Referrals.length}</p>
                  </div>
                </NavLink>
                <NavLink
                  className="icons"
                  to={{
                    pathname: "/myReferrals",
                    state: {
                      aboutProps: stateRed.Referred?.filter(
                        (i) => e.id === i.User?.id
                      ),
                      name: e.name},
                  }}
                  style={{ textDecoration: "none" }}
                >
                  <div className="StadBox">
                    <p className="StadBoxTitle">Referrals</p>
                    <p className="StadBoxVal">
                      {
                        stateRed.Referred?.filter((i) => e.id === i.User?.id)
                          .length
                      }
                    </p>
                  </div>
                </NavLink>
                <NavLink
                  className="icons"
                  to={{ pathname: "/salesByMe", state: { aboutProps: e } }}
                  style={{ textDecoration: "none" }}
                >
                  <div className="StadBox">
                    <p className="StadBoxTitle">Sales</p>
                    <p className="StadBoxVal">{e.Sells.length}</p>
                  </div>
                </NavLink>

                <NavLink
                  className="icons"
                  to={{
                    pathname: "/salesByRealtors",
                    state: { aboutProps: e },
                  }}
                  style={{ textDecoration: "none" }}
                >
                  <div className="StadBox">
                    <p className="StadBoxTitle">Sales by realtors</p>
                    <p className="StadBoxVal">
                      {e.Referrals.length ? getRSells(e.Referrals) : 0}
                    </p>
                  </div>
                </NavLink>

            

                <NavLink
                  className="icons"
                  to={{ pathname: "/packageMarketingDash", state: { aboutProps: e } }}
                  style={{ textDecoration: "none" }}
                >
                  <div className="StadBox">
                    <p className="StadBoxTitle">Package Marketing</p>
                    <p className="StadBoxVal">{e.PackageMarketings.length}</p>
                  </div>
                </NavLink>

                <NavLink
                  className="icons"
                  to={{ pathname: "/transactionCoordSold", state: { aboutProps: e } }}
                  style={{ textDecoration: "none" }}
                >
                  <div className="StadBox">
                    <p className="StadBoxTitle">Transaction Coord. Sold</p>
                    <p className="StadBoxVal">{e.TransactionCoordinators.filter(e => e.isSold === true).length}</p>
                  </div>
                </NavLink>

                <NavLink
                  className="icons"
                  to={{ pathname: "/transactionCoordUnsold", state: { aboutProps: e } }}
                  style={{ textDecoration: "none" }}
                >
                  <div className="StadBox">
                    <p className="StadBoxTitle">Transaction Coord. Unsold</p>
                    <p className="StadBoxVal">{e.TransactionCoordinators.filter(e => e.isSold !== true).length}</p>
                  </div>
                </NavLink>

                
                <NavLink
                  className="icons"
                  to={{
                    pathname: "/totalCommissionPaid",
                    state: { aboutProps: stateRed.Commissions.filter(
                      (us) =>
                        (us.commisionTo === e.id) & (us.payded === true)
                    ), name: e.name },
                  }}
                  style={{ textDecoration: "none" }}
                >
                  <div className="StadBox">
                    <p className="StadBoxTitle">Total commission paid</p>
                    <p className="StadBoxVal">
                      {stateRed.Commissions.filter(
                        (us) =>
                          (us.commisionTo === e.id) & (us.payded === true)
                      ).length * Number(e.ComissionValue)}
                    </p>
                  </div>
                </NavLink>

                <NavLink
                  className="icons"
                  to={{
                    pathname: "/totalCommissionUnpaid",
                    state: { aboutProps: stateRed.Commissions.filter(
                      (us) => (us.commisionTo === e.id) & (us.payded === false)
                    ), name: e.name },
                  }}
                  style={{ textDecoration: "none" }}
                >
                  <div className="StadBox">
                    <p className="StadBoxTitle">Total commission unpaid</p>
                    <p className="StadBoxVal">
                      {stateRed.Commissions.filter(
                        (us) =>
                          (us.commisionTo === e.id) & (us.payded === false)
                      ).length * Number(e.ComissionValue)}
                    </p>
                  </div>
                </NavLink>
              </div>
            );
            
          }
          )
          
        ) : (
          <NavLink
            className="icons"
            to="/UsersManagement"
            style={{ textDecoration: "none" }}
          >
            <p
              className="REPtype"
              style={{ fontSize: "17px", cursor: "pointer" }}
            >
              Add a realtor to start viewing statistics
            </p>
          </NavLink>
        )}
        
      </div>
  
      {/* <div style={{flexDirection:"row", display:"flex", justifyContent:"space-between"}}>
              {(google && quotes.length)? <StatsSold google={google} quotes={quotes} producers={Producers}/>:<></>}
          
              {(google && quotes.length)? <StatsQuoted google={google} quotes={quotes} producers={Producers}/>:<></>}
            </div> */}
    </div>
  );
}

export default ManagerDashboardComponent;
