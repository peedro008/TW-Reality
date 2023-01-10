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
  optionsClient,
  optionsStatus,
  onCloseModal,
  respTransactionCoord,
  validarEmail
}) {

  const [checkedOne, setCheckedOne] = useState(false);


  const handleChangeOne = () => {
    setCheckedOne('Client');
    
  };

  const handleChangeTwo = () => {
    setCheckedOne('Lead'); 
  };
  console.log(form)
  
  let validation =
    form.clientName?.length < 3 ||
    typeof form.clientName === "undefined" ||
    typeof form.phone === "undefined" ||
    typeof form.reason === "undefined" ||
    typeof form.clientType === "undefined" ||
    typeof form.status === "undefined";

  return (
    <div className="genericDiv">
       <div className="genericHeader" style={{ marginBottom: "30px" }}>
        <p className="genericTitle">Add Client</p>
      </div>
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
            <p className="PAYtitle">Email</p>
            <input
              placeholder="Email"
              onChange={(e) => {
                setForm({ ...form, mail: e.target.value });
              }}
              className="AQinputPackage"
            ></input>
            {/* <p className="FORMerror">{validarEmail(form.email)? "" :"Email must be a valid email"}</p> */}
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
       
          <div className="inputDiv">
            <p className="PAYtitle">Client</p>
            <label className="containerCheck2">
            <input type="checkbox" className="checkBoxCont" style={{color: 'red'}} checked={checkedOne === 'Client'} onChange={(val) => {handleChangeOne(); setForm({ ...form, clientType: 'Client' })}}  />
            <span class="checkmark2"></span>
            </label>
          </div>
          <div className="inputDiv">
          <p className="PAYtitle">Lead</p>
          <label className="containerCheck">

            <input type="checkbox" className="checkBoxCont" checked={checkedOne === 'Lead'} onChange={(val) => {handleChangeTwo(); setForm({ ...form, clientType: 'Lead' })}} />
            <span class="checkmark"></span>
          </label>
            </div>
     
        
          </div>
          <div className="managerInputsubContainer" style={{ width: "60vw" }}>
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
          {/* <div className="inputDiv">
            <p className="PAYtitle">Contact Date</p>
            <input
              type={"date"}

              onChange={(e) => {
                setForm({ ...form, contactDate: e.target.value });
              }}
              placeholder="ClosingDate"
              className="AQinputPackage"
            ></input>
          </div> */}
     
          <div className="inputDiv">
            <p className="PAYtitle">Transaction Type</p>
            <Select
              onChange={(val) => setForm({ ...form, reason: val.value })}
              options={optionsReason}
              name={"Realtor Name"}
              className="PAYselect2"
              placeholder="Select Reason"
            />
          </div>
          {/* <div className="inputDiv">
            <p className="PAYtitle">Client Type</p>
            <Select
              onChange={(val) => setForm({ ...form, clientType: val.value })}
              options={optionsClient}
              name={"Realtor Name"}
              className="PAYselect2"
              placeholder="Select Client Type"
            />
          </div> */}
          <div className="inputDiv">
            <p className="PAYtitle">Status</p>
            <Select
              onChange={(val) => setForm({ ...form, status: val.value })}
              options={optionsStatus}
              name={"Realtor Name"}
              className="PAYselect2"
              placeholder="Select Client Type"
            />
          </div>
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
            ></textarea >
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
          <p className="PAYbuttonText">Add Client +</p>
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

            <NavLink style={{ textDecoration: "none", color: "#000", alignSelf: 'center' }} to={"/clients"}>
          <button className="modalButton">
              Continue
          </button>
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
          zIndex: 9,
          left: "80px",
          top: "17px",
          alignSelf: "flex-start",
        }}
        onClick={() => window.history.go(-1)}
      />
    </div>
    </div>

  );
}

export default AddClient;
