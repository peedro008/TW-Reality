import React, { useEffect } from "react";
import "../Css/css.css";

import Select from "react-select";
import "react-responsive-modal/styles.css";
import Isologo_background from "../assets/Isologo_background.png";
import { Modal } from "react-responsive-modal";
import Icon from "../assets/Icon.png";
import CrossMark from "../assets/cross-mark.png";
import { NavLink } from "react-router-dom";

import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
function AddSellComponent({
  DATE,
  form,
  setForm,
  open,
  onSubmit,
  onSubmitTrans,
  options,
  onCloseModal,
  Users,
  UsersManager,
  setSoldForm,
  getTransactionsCoord,
  transactionCoordOptions,
  sellResp,
  coordinatorResp,
  soldForm,
  UserRole
}) {
  let validation =
    typeof form.Value?.length === "undefined" ||
    typeof form.UserId === "undefined" ||
    form.ClientName?.length < 3 ||
    typeof form.ClientName?.length === "undefined";

    console.log(form)
  useEffect(() => {
    if(UserRole === 'Admin') {
      let manId = Users.filter((e) => e.id === form.UserId)[0]?.managerId;
      let refId = Users.filter((e) => e.id === form.UserId)[0]?.ReferredId;
      setForm({ ...form, managerId: manId, ReferredId: refId });
    } else {
      let manId = UsersManager.filter((e) => e.id === form.UserId)[0]?.managerId;
      let refId = UsersManager.filter((e) => e.id === form.UserId)[0]?.ReferredId;
      setForm({ ...form, managerId: manId, ReferredId: refId });
    }
  }, [form.UserId]);

  let New_York_Date = new Date().toLocaleDateString("en-US", {
    timeZone: "America/New_York",
    timestyle: "full",
    hourCycle: "h24",
  });

  let New_York_Time = new Date().toLocaleString("en-US", {
    timeZone: "America/New_York",
    timestyle: "full",
    hourCycle: "h24",
  });

  return (
    <div className="genericDiv">
      <div className="genericHeader">
        <p className="genericTitle">Add Sell</p>
      </div>

      <div className="managerInputsContainer">
        <div className="managerInputsubContainer" style={{ width: "60vw" }}>
          <div className="inputDiv">
            <p className="PAYtitle">Seller</p>
            <Select
              onChange={(val) => {
                setForm({ ...form, UserId: val.value });
                getTransactionsCoord(val.value);
              }}
              options={options}
              name={"Realtor Name"}
              className="PAYselect"
              placeholder="Select Realtor"
            />
          </div>
{
  UserRole === 'Admin' &&
          <div className={form.UserId ? "inputDiv" : "inputDivDisabled"}>
            <p className="PAYtitle">Transaction Coordinator</p>
            <Select
              onChange={(val) => {
                setSoldForm({ id: val.value, closingDate: New_York_Date });
              }}
              options={transactionCoordOptions}
              name={"Realtor Name"}
              className="PAYselect"
              placeholder="Select Package"
            />
          </div>
}
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
        </div>
        <div className="managerInputsubContainer" style={{ width: "60vw" }}>
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
                setSoldForm({ ...soldForm, closingDate: e.target.value });
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

          {/* <div className="inputDiv">
            <p className="PAYtitle">Manager</p>
            <Select
              onChange={(val) => setForm({ ...form, managerId: val.value })}
              options={options}
              name={"Realtor Name"}
              className="PAYselect"
              placeholder="Select Realtor"
            />
          </div> */}
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
          onClick={() => {
            onSubmit();
            onSubmitTrans();
          }}
          style={{
            opacity: validation && "0.2",
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
            src={sellResp === "Sell added successfully" ? Icon : CrossMark}
            style={{
              width: "35px",
              alignSelf: "center",
              marginTop: "25px",
              marginBottom: "10px",
            }}
          />

          <p className="modalText">{sellResp}</p>
        
        {coordinatorResp !== "" && (
          <div className="modal">
            <img
              src={
                coordinatorResp === "Transaction Coordinator sold"
                  ? Icon
                  : CrossMark
              }
              style={{
                width: "35px",
                alignSelf: "center",
                marginTop: "25px",
                marginBottom: "10px",
              }}
            />

            <p className="modalText">{coordinatorResp}</p>

            
          </div>
        )}
        <button className="modalButton">
              {" "}
              <NavLink
                style={{ textDecoration: "none", color: "#000" }}
                to={"/sells"}
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
