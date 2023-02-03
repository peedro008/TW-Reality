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
function EditClient({
  form,
  setForm,
  open,
  onSubmit,
  optionsReason,
  optionsStatus,
  optionsLeadType,
  onCloseModal,
  respTransactionCoord,
  validarEmail,
  clientData,
  setNewHistory,
  setReloadInfo,
  optionsStatusListing,
  optionsStatusSelling,
  optionsStatusRent,
}) {
  let New_York_Time = new Date().toLocaleString("en-US", {
    timeZone: "America/New_York",
    timestyle: "full",
    hourCycle: "h24",
  });

  let validation =
    form.clientName?.length < 3 ||
    typeof form.clientName === "undefined" ||
    typeof form.phone === "undefined" ||
    typeof form.reason === "undefined" ||
    typeof form.clientType === "undefined" ||
    typeof form.status === "undefined";

  return (
    <>
      <div className="managerInputsContainer">
        <div className="managerInputsubContainer" style={{ width: "60vw" }}>
          <div className="inputDiv">
            <p className="PAYtitle">Client Name</p>
            <input
              defaultValue={clientData.clientName}
              placeholder="Client Name"
              onChange={(e) => {
                setForm({ ...form, clientName: e.target.value });
              }}
              className="inputClient"
            ></input>
            <p className="FORMerror"></p>
          </div>
          <div className="inputDiv">
            <p className="PAYtitle">Email</p>
            <input
              defaultValue={clientData.mail}
              placeholder="Email"
              onChange={(e) => {
                setForm({ ...form, mail: e.target.value });
              }}
              className="inputClient"
            ></input>
            {/* <p className="FORMerror">{validarEmail(form.email)? "" :"Email must be a valid email"}</p> */}
          </div>
          <div className="inputDiv">
            <p className="PAYtitle">Phone number</p>
            <input
              defaultValue={clientData.phone}
              placeholder="Phone"
              onChange={(e) => {
                setForm({ ...form, phone: e.target.value });
              }}
              className="inputClient"
            ></input>
            <p className="FORMerror"></p>
          </div>
          <div className="inputDiv">
            <p className="PAYtitle">Address</p>
            <input
              defaultValue={clientData?.address}
              placeholder="Address"
              onChange={(e) => {
                setForm({ ...form, address: e.target.value });
              }}
              className="inputClient"
            ></input>
            <p className="FORMerror"></p>
          </div>
          {/* <div className="inputDiv">
            <p className="PAYtitle">Client</p>
            <label className="containerCheck2">
              <input
                type="checkbox"
                className="checkBoxCont"
                style={{ color: "red" }}
                checked={checkedOne === "Client"}
                onChange={(val) => {
                  handleChangeOne();
                  setForm({ ...form, clientType: "Client" });
                }}
              />
              <span class="checkmark2"></span>
            </label>
          </div>
          <div className="inputDiv">
            <p className="PAYtitle">Lead</p>
            <label className="containerCheck">
              <input
                type="checkbox"
                className="checkBoxCont"
                checked={checkedOne === "Lead"}
                onChange={(val) => {
                  handleChangeTwo();
                  setForm({ ...form, clientType: "Lead" });
                }}
              />
              <span class="checkmark"></span>
            </label>
          </div> */}
        </div>

        <div className="managerInputsubContainer" style={{ width: "60vw" }}>
          <div className="inputDiv">
            <p className="PAYtitle">Transaction Type</p>
            <Select
              defaultValue={
                optionsReason[
                  optionsReason.findIndex((x) => x.value === clientData.reason)
                ]
              }
              onChange={(val) => setForm({ ...form, reason: val.value })}
              options={optionsReason}
              name={"Transaction Type"}
              className="PAYselect3"
              placeholder="Select Type"
            />
          </div>

          {form.clientType === "Client" && (
            <div className="inputDiv">
              <p className="PAYtitle">Status</p>
              <Select
                defaultValue={
                  optionsStatus[
                    optionsStatus.findIndex(
                      (x) => x.value === clientData.status
                    )
                  ]
                }
                onChange={(val) => setForm({ ...form, status: val.value })}
                options={
                  form?.reason === "Buyer"
                    ? optionsStatusListing
                    : form?.reason === "Seller"
                    ? optionsStatusSelling
                    : optionsStatusRent
                }
                name={"Realtor Name"}
                className="PAYselect3"
                styles={{ width: "200px" }}
                placeholder="Select Status"
              />
            </div>
          )}
          {form.clientType === "Lead" && (
            <div className="inputDiv">
              <p className="PAYtitle">Lead Source</p>
              <Select
                onChange={(val) => setForm({ ...form, leadSource: val.value })}
                defaultValue={
                  optionsLeadType[
                    optionsLeadType.findIndex(
                      (x) => x.value === clientData.leadSource
                    )
                  ]
                }
                options={optionsLeadType}
                name={"Realtor Name"}
                className="PAYselect3"
                placeholder="Select Lead Source"
              />
            </div>
          )}
        </div>
        <div
          className="managerInputsubContainer"
          style={{ width: "60vw" }}
        ></div>

        <div
          style={{
            position: "absolute",
            right: "55px",
            // top: "76px",
            marginTop: "-30px",
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

                <p className="modalText">{respTransactionCoord[1]}</p>
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

            <button
              className="modalButton"
              onClick={() => {
                setNewHistory("");
                setReloadInfo(New_York_Time);
              }}
            >
              Continue
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
          }}
          onClick={() => window.history.go(-1)}
        />
      </div>
    </>
  );
}

export default EditClient;
