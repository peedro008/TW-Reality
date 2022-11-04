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
function AddSellComponent({
  DATE,
  form,
  setForm,
  open,
  onSubmit,
  options,
  onCloseModal,
  onOpenModal,
}) {
  let validation =
    typeof form.Value?.length === "undefined" ||
    typeof form.UserId === "undefined" ||
    form.ClientName?.length < 6 ||
    typeof form.ClientName?.length === "undefined";

  return (
    <div className="genericDiv">
      <div className="genericHeader">
        <p className="genericTitle">Add Sell</p>
      </div>

      <div className="managerInputsContainer">
        <div className="managerInputsubContainer" style={{ width: "60vw" }}>
          <div className="inputDiv">
            <p className="PAYtitle">Client Name</p>
            <input
              placeholder="Client Name"
              onChange={(e) => {
                setForm({ ...form, ClientName: e.target.value });
              }}
              className="AQinput"
            ></input>
            <p className="FORMerror"></p>
          </div>
          <div className="inputDiv">
            <p className="PAYtitle">Address</p>
            <input
              placeholder="Address"
              onChange={(e) => {
                setForm({ ...form, Address: e.target.value });
              }}
              className="AQinput"
            ></input>
            <p className="FORMerror"></p>
          </div>
          <div className="inputDiv">
            <p className="PAYtitle">Closing Date</p>
            <input
              type={"date"}
              defaultValue={DATE}
              onChange={(e) => {
                setForm({ ...form, ClosingDate: e.target.value });
              }}
              placeholder="ClosingDate"
              className="AQinput"
            ></input>
          </div>
          <div className="inputDiv">
            <p className="PAYtitle">Property Value</p>
            <input
              type="number"
              onChange={(e) => {
                setForm({ ...form, Value: e.target.value });
              }}
              placeholder="Property Value"
              className="AQinput"
            ></input>
            <p className="FORMerror">
              {form.Value ? "" : "Property value is mandatory"}
            </p>
          </div>
        </div>
        <div className="managerInputsubContainer" style={{ width: "60vw" }}>
          <div className="inputDiv">
            <p className="PAYtitle">Realtor name</p>
            <Select
              onChange={(val) => setForm({ ...form, UserId: val.value })}
              options={options}
              name={"Realtor Name"}
              className="PAYselect"
              placeholder="Select Realtor"
            />
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
        <button
          className="PAYbutton"
          onClick={onSubmit}
          style={{
            backgroundColor: validation && "#586579",
            cursor: validation && "default",
          }}
          disabled={validation ? true : false}
        >
          <p className="PAYbuttonText">Add Sell</p>
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

          <p className="modalText">Sell added successfully</p>

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

export default AddSellComponent;
