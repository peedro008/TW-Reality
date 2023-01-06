import React from "react";
import "../Css/css.css";

import Select from "react-select";
import "react-responsive-modal/styles.css";
import Isologo_background from "../assets/Isologo_background.png";
import { BsChevronLeft } from "react-icons/bs";
import { Modal } from "react-responsive-modal";
import Icon from "../assets/Icon.png";
import CrossMark from "../assets/cross-mark.png";
import { NavLink } from "react-router-dom";

function AddAdmin({
  form,
  setForm,
  open,
  onSubmit,
  onCloseModal,
  validarEmail,
  onOpenModal,
  error}
) {
  console.log(error)
  let validation =
  form.name?.length < 3 ||
  typeof form.name === "undefined" ||
  typeof form.password === "undefined" ||
  typeof form.phone === "undefined" ||
  typeof form.ComissionValue === "undefined";

  return (
    <div className="genericDiv">
      <div className="genericHeader">
        <p className="genericTitle">Add Admin</p>
      </div>

      <div className="managerInputsContainer">
        <div className="managerInputsubContainer" style={{ width: "50vw" }}>
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
              {form.name?.length < 6
                ? "Name must have at least 6 characters"
                : ""}
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
            <p className="PAYtitle">Password</p>
            <input
              type="password"
              onChange={(e) => {
                setForm({ ...form, password: e.target.value });
              }}
              placeholder="Password"
              className="AQinput"
            ></input>
            <p className="FORMerror">{form.password?.length<8?"Password must have at least 6 characters":""}</p>
          </div>
        </div>
        <div className="managerInputsubContainer" style={{ width: "50vw" }}>
        <div className="inputDiv">
            <p className="PAYtitle">Phone</p>
            <input
              onChange={(e) => {
                setForm({ ...form, phone: e.target.value });
              }}
              placeholder="Phone"
              className="AQinput"
            ></input>
          
          </div>
          <div className="inputDiv">
            <p className="PAYtitle">Commision Value</p>
            <input
              onChange={(e) => {
                setForm({ ...form, ComissionValue: e.target.value });
              }}
              type="number"
              placeholder="Commision Value"
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
        <button className="PAYbutton" 
        onClick={() => {onSubmit()}} 
        style={{
          opacity: validation && "0.2",
          cursor: validation && "default",
        }}>
          <p className="PAYbuttonText">Add Admin</p>
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
            <NavLink
              style={{ textDecoration: "none", color: "#000" }}
              to={"/UsersManagement"}
            >
              Continue
            </NavLink>
          </button>
        </div>
      </Modal>
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
      <BsChevronLeft
      cursor='pointer'
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

export default AddAdmin;
