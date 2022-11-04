import React  from "react";
import error from "../assets/error.png";
import wbill from "../assets/wbill.png";
import bbill from "../assets/bbill.png";
import { BsChevronRight, BsChevronLeft } from "react-icons/bs";



const AdminDashboardComponent = ({
  
}) => {
  const next = 1
  return (
    <div className="genericDiv">
      <div className="genericHeader">
        <p className="genericTitle">Dashboard</p>
      </div>
      {!next ? (
        <div className="DashContainer">
          <div className="DashSubCont">
            <div className="DashPList1" >
              <div className="DashPListHeader">
                <p className="DashPListTitle">Producers average sale</p>
                <p className="DashPListSTitle">Descending</p>
              </div>
              <div className="DashPListDivider" />
              
            </div>
          </div>
          <div className="dashContCard">
            <div className="dashCard">
              <div
                className="dashCircle"
                style={{ backgroundColor: " rgba(255, 184, 0, 0.07)" }}
              >
                <img src={error} />
              </div>
              <div className="dashText">
                <p className="dashCardTitle">
                 
                </p>
                <p className="dashCardText">Unsold quotes</p>
              </div>
            </div>
            <div className="dashCard" style={{ marginLeft: "50px" }}>
              <div
                className="dashCircle"
                style={{ backgroundColor: " rgba(76, 184, 255, 0.07)" }}
              >
                <img src={wbill} />
              </div>
              <div className="dashText">
                <p className="dashCardTitle">
               
                </p>
                <p className="dashCardText">Total quotes sold per month</p>
              </div>
            </div>
            <div className="dashCard" style={{ marginLeft: "50px" }}>
              <div
                className="dashCircle"
                style={{ backgroundColor: " rgba(76, 184, 255, 0.07)" }}
              >
                <img src={wbill} />
              </div>
              <div className="dashText">
                <p className="dashCardTitle">
               
                </p>
                <p className="dashCardText">Total NSD sales</p>
              </div>
            </div>
            <div className="dashCard" style={{ marginLeft: "50px" }}>
              <div
                className="dashCircle"
                style={{ backgroundColor: " rgba(8, 76, 97, 0.07)" }}
              >
                <img src={bbill} />
              </div>
              <div className="dashText">
                <p className="dashCardTitle"></p>
                <p className="dashCardText">Total payments per month</p>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="DashContainer">
          <div
            className="DashSubCont"
            style={{ justifyContent: "space-between", paddingRight: "40px" }}
          >
            
            <div className="DashStatusCont">
              <div className="DashStatusHeader">
                <p className="DashPListTitle">
                  Notification of modified policies
                </p>
              </div>
              <div className="DashStatusColumns">
                <p className="dashListColumnT1">QUOTE ID</p>
                <p className="dashListColumnT2">CLIENT NAME</p>
                <p className="dashListColumnT">CUSTOMER</p>
                <p className="dashListColumnT">DATE</p>
                <p className="dashListColumnT">STATUS</p>
              </div>
              <div className="DastStatusBody">
                
              </div>
            </div>
          </div>
        </div>
      )}
      {!next ? (
        <BsChevronRight
          color="grey"
          style={{
            minWidth: "40px",
            minHeight: "40px",
            position: "absolute",
            right: "1%",
            top: "50%",
            alignSelf: "flex-start",
          }}
    
        />
      ) : (
        <BsChevronLeft
        cursor='pointer'
          color="grey"
          style={{
            minWidth: "40px",
            minHeight: "40px",
            position: "absolute",
            right: "1%",
            top: "50%",
            alignSelf: "flex-start",
          }}
    
        />
      )}


      
    </div>
  );
};

export default AdminDashboardComponent;
