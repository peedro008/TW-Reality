import React from "react";
import "../Css/css.css";

import Select from "react-select";
import "react-responsive-modal/styles.css";
import Isologo_background from "../assets/Isologo_background.png";
import { Modal } from "react-responsive-modal";
import Icon from "../assets/Icon.png";
import CrossMark from "../assets/cross-mark.png";
import { NavLink } from "react-router-dom";

import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
function AddReferredComponent({
  form,
  setForm,
  open,
  onSubmit,
  onCloseModal,
  validarEmail,
  onOpenModal,
  error
}) {
  let validation =
    !validarEmail(form.email) ||
    form.name?.length < 6 ||
    typeof form.name?.length === "undefined";
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
            <p className="FORMerror"></p>
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
            <p className="FORMerror"></p>
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
            <p className="FORMerror">
              {validarEmail(form.email) ? "" : "Email must be a valid email"}
            </p>
          </div>
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

      <div
        style={{
          position: "absolute",
          right: "50px",
          top: "76px",
          display: "flex",
        }}
      >
        <button
          className="PAYbutton"
          onClick={() => onSubmit()}
          style={{
            opacity: validation && "0.2",
            cursor: validation && "default",
          }}
          disabled={validation ? true : false}
        >
          <p className="PAYbuttonText">Add referred</p>
        </button>
      </div>

      <Modal open={open} onClose={onCloseModal} center classNames={"modal"}>
        <div className="modal">
        {
          error ?
          <>
           <img
            src={CrossMark}
            style={{
              width: "35px",
              alignSelf: "center",
              marginTop: "25px",
              marginBottom: "10px",
            }}
          />
          <p className="modalText">{error}</p> 
          </>
          : 
          <>
           <img
            src={Icon}
            style={{
              width: "35px",
              alignSelf: "center",
              marginTop: "25px",
              marginBottom: "10px",
            }}
          />
          <p className="modalText">Admin added successfully</p>
          </>
          
        }

          <button className="modalButton">
            {" "}
            <NavLink style={{ textDecoration: "none", color: "#000" }} to={"/"}>
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
        onClick={() => window.history.go(-1)}
      />
    </div>
  );
}

export default AddReferredComponent;
