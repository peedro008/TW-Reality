import React from "react";
import "../Css/css.css";

import Select from "react-select";
import "react-responsive-modal/styles.css";
import Isologo_background from "../assets/Isologo_background.png";
import { Modal } from "react-responsive-modal";
import Icon from "../assets/Icon.png";
import { NavLink } from "react-router-dom";

import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
function AddReferredAdmin({
  form,
  setForm,
  open,
  onSubmit,
  onCloseModal,
  validarEmail,
  }
) {
  let validation = (!validarEmail(form.email)||form.name?.length < 6  || typeof form.name?.length === 'undefined');
  return (
    <div className="genericDiv">
      <div className="genericHeader">
        <p className="genericTitle">Add Referral</p>
      </div>

      <div className="managerInputsContainer">
        <div className="managerInputsubContainer" style={{ width: "65vw" }}>
          <div className="inputDiv">
            <p className="PAYtitle">Full Name</p>
            <input
              placeholder="Name"
              onChange={(e) => {
                setForm({ ...form, name: e.target.value });
              }}
              className="AQinput"
            ></input>
            <p className="FORMerror">
           
            </p>
          </div>
          <div className="inputDiv">
            <p className="PAYtitle">Phone</p>
            <input
              placeholder="Phone"
              onChange={(e) => {
                setForm({ ...form, phone: e.target.value });
              }}
              className="AQinput"
            ></input>
            <p className="FORMerror">
          
            </p>
          </div>
          <div className="inputDiv">
            <p className="PAYtitle">Email</p>
            <input
              onChange={(e) => {
                setForm({ ...form, email: e.target.value });
              }}
              placeholder="Email"
              className="AQinput"
            ></input>
            <p className="FORMerror">{validarEmail(form.email)?"":"Email must be a valid email"}</p>
          </div>
          <div className="inputDiv">
            <p className="PAYtitle">Company</p>
            <input
             
              onChange={(e) => {
                setForm({ ...form, Company: e.target.value });
              }}
              placeholder="Company"
              className="AQinput"
            ></input>
           
          </div>
        </div>
        
      </div>

      <div
        style={{
          position: "absolute",
          right: "50px",
          top: "76px",
          display: "flex",
        }}
      >
        <button className="PAYbutton" onClick={() => onSubmit()} 
        style={{backgroundColor: validation &&"#586579", cursor: validation && 'default'}}
        disabled={validation?true:false}
        >
          <p className="PAYbuttonText">Add Referral</p>
        </button>
      </div>

      <Modal open={open} onClose={onCloseModal} center classNames={"modal"}>
        <div className="modal">
          <img
            src={Icon}
            style={{
              width: "35px",
              alignSelf: "center",
              marginTop: "25px",
              marginBottom: "10px",
            }}
          />

          <p className="modalText">Referral successfully!</p>

          <button className="modalButton">
            {" "}
            <NavLink
              style={{ textDecoration: "none", color: "#000" }}
              to={"/"}
            >
              Continue
            </NavLink>
          </button>
        </div>
      </Modal>
      <img
        src={Isologo_background}
        style={{
          position: "absolute",
          pointerEvents: "none",
          right: 0,
          bottom: 0,
          width: "428px",
          opacity: "0.5",
        }}
      />
      <BsChevronLeft
      cursor='pointer'
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
        onClick={() => window.history.go(-1)}
      />
    </div>
  );
}

export default AddReferredAdmin;
