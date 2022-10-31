import React from "react";
import error from "../assets/error.png";
import wbill from "../assets/wbill.png";
import bbill from "../assets/bbill.png";
import mask from "../assets/mask.png";
import { NavLink } from "react-router-dom";
import MyRealtors from "../Charts/MyRealtors";

const RealtorDashboardComponent = ({ Referred,realtors, google, UserId, DATE,comm }) => {
  return (
    <div className="genericDiv">
      <div className="genericHeader">
        <p className="genericTitle">Dashboard</p>
      </div>
      <div className="DashContainer">
        <div className="DashSubCont">
          {google && <MyRealtors google={google} realtors={realtors} />}
          <div className="DashPList1">
            <div className="DashPListHeader">
              <p className="DashPListTitle">My top agent by commission</p>
              <p className="DashPListSTitle">Descending</p>
            </div>
            <div className="DashPListDivider" />
            {realtors?.sort(function (a, b) {
                return b.Sells.length - a.Sells.length;
              })?.map((e) => {
                return (
                  <div
                    className="DashPListRow1"
                    style={{ marginBottom: "7px" }}
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

                      <p className="DashPListItemText">
                       
                          {e.name}
                      
                      </p>
                    </div>
                    <div className="DashNumberDiv">
                      <p className="DashNumber">${e.Sells.length * e.ComissionValue
                      }</p>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
        <div className="dashContCard">
          <div className="dashCard">
            <div
              className="dashCircle"
              style={{ backgroundColor: " rgba(255, 184, 0, 0.07)" }}
            >
              <img src={wbill} />
            </div>
            <div className="dashText">
              <p className="dashCardTitle">${comm[1]}</p>
              <p className="dashCardText">Monthly Commission</p>
            </div>
          </div>
          <div className="dashCard">
            <div
              className="dashCircle"
              style={{ backgroundColor: " rgba(255, 184, 0, 0.07)" }}
            >
              <img src={wbill} />
            </div>
            <div className="dashText">
              <p className="dashCardTitle">${comm[0]} </p>
              <p className="dashCardText">Annual  Commission</p>
            </div>
          </div>
          <div className="dashCard">
            <div
              className="dashCircle"
              style={{ backgroundColor: " rgba(255, 184, 0, 0.07)" }}
            >
              <img src={bbill} />
            </div>
            <div className="dashText">
              <p className="dashCardTitle">{Referred.filter(e=>e.User.id==UserId).length}</p>
              <p className="dashCardText">Referrals</p>
            </div>
          </div>
          <div className="dashCard">
            <div
              className="dashCircle"
              style={{ backgroundColor: " rgba(255, 184, 0, 0.07)" }}
            >
              <img src={bbill} />
            </div>
            <div className="dashText">
              <p className="dashCardTitle">{realtors.length} </p>
              <p className="dashCardText">Realtors</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RealtorDashboardComponent;
