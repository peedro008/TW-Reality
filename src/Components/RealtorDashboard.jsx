import React from "react";
import error from "../assets/error.png";
import wbill from "../assets/wbill.png";
import bbill from "../assets/bbill.png";
import mask from "../assets/mask.png";
import { NavLink } from "react-router-dom";
import MyRealtors from "../Charts/MyRealtors";

const RealtorDashboardComponent = ({ Referred,realtors, google, UserId, thisUser,comm }) => {
  let Screen = window.screen
  return (
    <div className="genericDiv">
      <div className="genericHeader">
        <p className="genericTitle">Dashboard</p>
      </div>
      <div className="DashContainer">
        <div className="DashSubCont">
          {google && <MyRealtors google={google} realtors={realtors} />}
          {
            Screen.width > 1000 &&
          <div className="DashPList1Grow"  style={{minWidth:'350px'}}>
            <div className="DashPListHeader">
              <p className="DashPListTitle">My top agent by commission</p>
             
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
              <div className="DashPListCircleWith"></div>

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
                Sales
              </p>
              <p
                className="DashNumber"
                style={{ color: "#000", fontWeight: "600" }}
              >
                Com
              </p>
            </div>
          </div>
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
                    <p className="DashNumber" style={{marginLeft: '20px'}}>{e.Sells?.length}</p>
                      <p className="DashNumber" style={{marginLeft: '22px'}}>${e.Sells?.length * thisUser.CommissionValue
                      }</p>
                    </div>
                  </div>
                );
              })}
          </div>
          }
        </div>

        <div className="CardsGraficsContainer">
              <div
                className="CardsGrafics"
                style={{ backgroundColor: " rgba(111, 82, 237, 0.15)" }}
              >
                <div
                  className="dashCircle"
                  style={{ backgroundColor: "rgba(239, 239, 239,0.3)" }}
                >
                  <img src={wbill} />
                </div>
                <div className="dashText">
                <p className="dashCardTitle">${comm[1]}</p>
              <p className="dashCardText">Monthly Commission</p>
                </div>
              </div>
            {
              Screen.width > 1000 &&
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
                <p className="dashCardTitle">${comm[0]} </p>
              <p className="dashCardText">Annual  Commission</p>
                </div>
              </div>
            }
             
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
                  <p className="dashCardTitle">{realtors?.length} </p>
              <p className="dashCardText">Realtors</p>
                  </div>
                </div>

                <div
                  className="CardsGrafics"
                  style={{
                    marginLeft: "20px",
                    backgroundColor: "rgba(150, 10, 9 ,0.15)",
                  }}
                >
                  <div
                    className="dashCircle"
                    style={{ backgroundColor: "rgba(239, 239, 239,0.3)" }}
                  >
                    <img src={mask} />
                  </div>
                  <div className="dashText">
                  <p className="dashCardTitle">{Referred?.filter(e=>e.User?.id==UserId).length}</p>
              <p className="dashCardText">Referrals</p>
                  </div>
                </div>
          
            </div>
      </div>
    </div>
  );
};

export default RealtorDashboardComponent;
