import React from "react";
import "../Css/css.css";

import Select from "react-select";
import "react-responsive-modal/styles.css";
import Isologo_background from "../assets/Isologo_background.png";
import { Modal } from "react-responsive-modal";
import Icon from "../assets/Icon.png";
import { NavLink } from "react-router-dom";
import { Controller } from "react-hook-form";

import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
function AddRealtorComponent({
  form,
  setForm,
  open,
  onSubmit,
  onCloseModal,
  validarEmail,
  onOpenModal}
) {
  return (
    <div className="genericDiv">
      <div className="genericHeader">
        <p className="genericTitle">Add Realtor</p>
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
        
      </div>

      <div
        style={{
          position: "absolute",
          right: "50px",
          top: "76px",
          display: "flex",
        }}
      >
        <button className="PAYbutton" onClick={onSubmit} style={{backgroundColor:(form.password?.length<8||!validarEmail(form.email)||form.name?.length < 6)&&"#586579"}} disabled={(form.password?.length<8||!validarEmail(form.email)||form.name?.length < 6)?true:false}>
          <p className="PAYbuttonText">Add Realtor</p>
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

          <p className="modalText">Producer added successfully</p>

          <button className="modalButton">
            {" "}
            <NavLink
              style={{ textDecoration: "none", color: "#000" }}
              to={"/users/producers"}
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
          right: 0,
          bottom: 0,
          width: "428px",
          opacity: "0.5",
        }}
      />
      <BsChevronLeft
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

export default AddRealtorComponent;
