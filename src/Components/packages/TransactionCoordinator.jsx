import React, { useEffect } from "react";
import "../../Css/css.css";

import Select from "react-select";
import "react-responsive-modal/styles.css";
import Isologo_background from "../../assets/Isologo_background.png";
import { Modal } from "react-responsive-modal";
import Icon from "../../assets/Icon.png";
import CrossMark from "../../assets/cross-mark.png";
import { NavLink } from "react-router-dom";

import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
function TransactionCoordinatorComp({
  form,
  setForm,
  open,
  onSubmitTC,
  optionsUsers,
  onCloseModal,
  respTransactionCoord
}) {

  useEffect(() => {
    setForm({ ...form, openDate: New_York_Date })
  }, [])

  console.log(form)
  
  let validation =
    typeof form.propertyValue?.length === "undefined" ||
    typeof form.UserId === "undefined" ||
    form.clientName?.length < 3 ||
    typeof form.clientName?.length === "undefined";

    let New_York_Date = new Date().toLocaleDateString("en-US", {
      timeZone: "America/New_York",
      timestyle: "full",
      hourCycle: "h24",
    });
  return (
    
      <div className="managerInputsContainer">
        <div className="managerInputsubContainer" style={{ width: "60vw" }}>
          <div className="inputDiv">
            <p className="PAYtitle">Client Name</p>
            <input
              placeholder="Client Name"
              onChange={(e) => {
                setForm({ ...form, clientName: e.target.value });
              }}
              className="AQinputPackage"
            ></input>
            <p className="FORMerror"></p>
          </div>
          <div className="inputDiv">
            <p className="PAYtitle">Address</p>
            <input
              placeholder="Address"
              onChange={(e) => {
                setForm({ ...form, address: e.target.value });
              }}
              className="AQinputPackage"
            ></input>
            <p className="FORMerror"></p>
          </div>
          <div className="inputDiv">
            <p className="PAYtitle">Number Phone</p>
            <input
              placeholder="Phone"
              onChange={(e) => {
                setForm({ ...form, phone: e.target.value });
              }}
              className="AQinputPackage"
            ></input>
            <p className="FORMerror"></p>
          </div>
        
          </div>
          <div className="managerInputsubContainer" style={{ width: "60vw" }}>
          <div className="inputDiv">
            <p className="PAYtitle">Open Date</p>
            <input
              type={"date"}

              onChange={(e) => {
                setForm({ ...form, openDate: e.target.value });
              }}
              placeholder="ClosingDate"
              className="AQinputPackage"
            ></input>
          </div>
          <div className="inputDiv">
            <p className="PAYtitle">Property Value</p>
            <input
              type="number"
              onChange={(e) => {
                setForm({ ...form, propertyValue: e.target.value, isSold: false });
              }}
              placeholder="Property Value"
              className="AQinputPackage"
            ></input>
       
        </div>
     
          <div className="inputDiv">
            <p className="PAYtitle">Seller</p>
            <Select
              onChange={(val) => setForm({ ...form, UserId: val.value })}
              options={optionsUsers}
              name={"Realtor Name"}
              className="PAYselect2"
              
              placeholder="Select Realtor"
            />
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
          onClick={onSubmitTC}
          style={{
            opacity: validation && "0.2",
            cursor: validation && "default",
          }}
          disabled={validation ? true : false}
        >
          <p className="PAYbuttonText">Add Transaction Coord.</p>
        </button>
      </div>

      <Modal open={open} onClose={onCloseModal} center classNames={"modal"}>
        <div className="modal">
        {
            respTransactionCoord[0] ? 
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
          :
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
          }

            <NavLink style={{ textDecoration: "none", color: "#000", alignSelf: 'center' }} to={"/packageManagement"}>
          <button className="modalButton">
              Continue
          </button>
            </NavLink>
        </div>
      </Modal>

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

export default TransactionCoordinatorComp;
