import React, { useEffect, useState } from "react";
import { FaPenSquare, FaTrash } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import Modal from "react-responsive-modal";
import Isologo_background from "../assets/Isologo_background.png";
import { userId } from "../Redux/actions";

function Clients({
  setTypeList,
}) {



  return (
    <div className="genericDiv1">
      <div className="genericHeader">
        <p className="genericTitle">Clients</p>
      </div>
      <div className="PAYbuttonCont" style={{ justifyContent: "flex-start" }}>

        <NavLink style={{ textDecoration: "none", color: "#000" }} to={"/clientsManagement"}>
      <button className="PAYbutton" >
        <p className="PAYbuttonText">My Clients</p>
       
        </button>
            </NavLink>
        <NavLink style={{ textDecoration: "none", color: "#000" }} to={"/addClient"}>
        <button className="PAYbutton" style={{marginLeft: '50px'}}>
        <p className="PAYbuttonText">Add Client</p>
       
        </button>
            </NavLink>
        
    
      </div>
      <div
        className="DashContainerSells"
        style={{ justifyContent: "start", flexDirection: "column" }}
      >
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
    </div>
  );
}

export default Clients;
