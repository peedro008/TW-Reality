import React, { useEffect, useState } from "react";
import "../Css/css.css";

import Select from "react-select";
import "react-responsive-modal/styles.css";
import Isologo_background from "../assets/Isologo_background.png";
import { Modal } from "react-responsive-modal";
import Icon from "../assets/Icon.png";
import CrossMark from "../assets/cross-mark.png";
import { NavLink } from "react-router-dom";

import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
function AddClient({
  form,
  setForm,
  open,
  onSubmit,
  optionsReason,
  optionsLeadType,
  onCloseModal,
  respTransactionCoord,
  validarEmail,
  optionsStatusListing,
  optionsStatusSelling,
  optionsStatusRent,
}) {
  const [checkedOne, setCheckedOne] = useState(false);

  const handleChangeOne = () => {
    setCheckedOne("Client");
  };

  const handleChangeTwo = () => {
    setCheckedOne("Lead");
  };

  let validation =
    !validarEmail(form.mail) ||
    form.clientName?.length < 3 ||
    typeof form.clientName === "undefined" ||
    typeof form.addedDate === "undefined" ||
    typeof form.phone === "undefined" ||
    typeof form.reason === "undefined" ||
    typeof form.clientType === "undefined";

  return (
    <div className="genericDiv">
      <div className="genericHeader" style={{ marginBottom: "30px" }}>
        <p className="genericTitle">Add</p>
      </div>
      <div className="managerInputsContainer">
        <div className="managerInputsubContainer" style={{ width: "60vw" }}>
          <div className="inputDiv">
            <p className="PAYtitle">Name</p>
            <input
              placeholder="Type Name"
              onChange={(e) => {
                setForm({ ...form, clientName: e.target.value });
              }}
              className="AQinputPackage"
            ></input>
            <p className="FORMerror"></p>
          </div>
          <div className="inputDiv">
            <p className="PAYtitle">Email</p>
            <input
              placeholder="Type Email"
              onChange={(e) => {
                setForm({ ...form, mail: e.target.value });
              }}
              className="AQinputPackage"
            ></input>
            {/* <p className="FORMerror">{validarEmail(form.email)? "" :"Email must be a valid email"}</p> */}
          </div>
          <div className="inputDiv">
            <p className="PAYtitle">Phone number</p>
            <input
              placeholder="Type Phone"
              onChange={(e) => {
                setForm({ ...form, phone: e.target.value });
              }}
              className="AQinputPackage"
            ></input>
            <p className="FORMerror"></p>
          </div>
          <div className="inputDiv">
            <p className="PAYtitle">Address</p>
            <input
              onChange={(e) => {
                setForm({ ...form, address: e.target.value });
              }}
              placeholder="Type Address"
              className="AQinputPackage"
            ></input>
          </div>
        </div>
        <div className="managerInputsubContainer" style={{ width: "60vw" }}>
          <div className="inputDiv">
            <p className="PAYtitle">Date of Birth</p>
            <input
              type="date"
              onChange={(e) => {
                setForm({ ...form, dateOfBirth: e.target.value });
              }}
              placeholder="Type Address"
              className="AQinputPackage"
            ></input>
          </div>
          <div className="inputDiv">
            <p className="PAYtitle">Client</p>
            <label className="containerCheck2">
              <input
                type="checkbox"
                className="checkBoxCont"
                style={{ color: "red" }}
                checked={checkedOne === "Client"}
                onChange={(val) => {
                  handleChangeOne();
                  setForm({ ...form, clientType: "Client", leadSource: "" });
                }}
              />
              <span class="checkmark2"></span>
            </label>
          </div>
          <div className="inputDiv" style={{ marginRight: "163px" }}>
            <p className="PAYtitle">Lead</p>
            <label className="containerCheck">
              <input
                type="checkbox"
                className="checkBoxCont"
                checked={checkedOne === "Lead"}
                onChange={(val) => {
                  handleChangeTwo();
                  setForm({ ...form, clientType: "Lead", status: "" });
                }}
              />
              <span class="checkmark"></span>
            </label>
          </div>

          <div className="inputDiv">
            <p className="PAYtitle">Transaction Type</p>
            <Select
              onChange={(val) => setForm({ ...form, reason: val.value })}
              options={optionsReason}
              name={"Realtor Name"}
              className="PAYselect2"
              placeholder="Select Transaction"
            />
          </div>

          {form.clientType === "Lead" && (
            <div className="inputDiv">
              <p className="PAYtitle">Lead Source</p>
              <Select
                onChange={(val) => setForm({ ...form, leadSource: val.value })}
                options={optionsLeadType}
                name={"Realtor Name"}
                className="PAYselect2"
                placeholder="Select Lead Source"
              />
            </div>
          )}
          {form.clientType === "Client" && (
            <div className="inputDiv">
              <p className="PAYtitle">Status</p>
              <Select
                onChange={(val) => setForm({ ...form, status: val.value })}
                options={
                  form?.reason === "Buyer"
                    ? optionsStatusListing
                    : form?.reason === "Seller"
                    ? optionsStatusSelling
                    : optionsStatusRent
                }
                name={"Realtor Name"}
                className="PAYselect2"
                placeholder="Select Status"
              />
            </div>
          )}
        </div>
        <div className="managerInputsubContainer" style={{ width: "60vw" }}>
          <div className="inputDiv">
            <p className="PAYtitle">Notes</p>
            <textarea
              placeholder="Type notes..."
              onChange={(e) => {
                setForm({ ...form, Notes: e.target.value });
              }}
              className="AQinputPackageText"
            ></textarea>
          </div>
          <div className="inputDiv">
            <p className="PAYtitle">Added Date</p>
            <input
              type={"date"}
              onChange={(e) => {
                setForm({ ...form, addedDate: e.target.value });
              }}
              placeholder="Added Date"
              className="AQinputPackage"
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
            onClick={onSubmit}
            style={{
              opacity: validation && "0.2",
              cursor: validation && "default",
            }}
            disabled={validation ? true : false}
          >
            <p className="PAYbuttonText">Save</p>
          </button>
        </div>

        <Modal open={open} onClose={onCloseModal} center classNames={"modal"}>
          <div className="modal">
            {respTransactionCoord[0] ? (
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

                <p className="modalText">Saved</p>
              </>
            ) : (
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

                <p className="modalText">{respTransactionCoord[1]}</p>
              </>
            )}

            <NavLink
              style={{
                textDecoration: "none",
                color: "#000",
                alignSelf: "center",
              }}
              to={"/clientsManagement"}
            >
              <button className="modalButton">Continue</button>
            </NavLink>
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
          cursor="pointer"
          color="grey"
          style={{
            minWidth: "30px",
            minHeight: "30px",
            position: "fixed",
            zIndex: 1009,
            left: "80px",
            top: "17px",
            alignSelf: "flex-start",
            zIndex: "1000",
          }}
          onClick={() => window.history.go(-1)}
        />
      </div>
    </div>
  );
}

export default AddClient;
