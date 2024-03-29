import React from "react";
import "../Css/css.css";
import "react-responsive-modal/styles.css";
import Isologo_background from "../assets/Isologo_background.png";
import { Modal } from "react-responsive-modal";
import Icon from "../assets/Icon.png";
import CrossMark from "../assets/cross-mark.png";

import { BsChevronLeft } from "react-icons/bs";
import { BsEye } from "react-icons/bs";
import { BsEyeSlash } from "react-icons/bs";
import { useSelector } from "react-redux";
import ReactSelect from "react-select";

function ManagerRecruitComponent({
  show,
  setShow,
  form,
  RUser,
  open,
  onSubmit,
  onCloseModal,
  validarEmail,
  setForm,
  optionsRealtor,
  optionsManager,
  message
}) {
  const Users = useSelector((e) => e.Users);
  let validation =
    form.password?.length < 8 ||
    typeof form.password?.length === "undefined" ||
    !validarEmail(form.email) ||
    form.name?.length < 6 ||
    typeof form.name?.length === "undefined" ||
    typeof form.ComissionValue?.length === "undefined" ||
    form.ComissionValue?.length < 2;

  let manId = RUser?.managerId || RUser?.id;
  let manName = Users.filter((e) => e.id === manId)[0]?.name;
  
console.log(form)
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
              defaultValue={form.name}
              placeholder="Name"
              onChange={(e) => {
                setForm({ ...form, name: e.target.value });
              }}
              className="AQinput"
            ></input>
          </div>
          <div className="inputDiv">
            <p className="PAYtitle">Email</p>
            <input
              defaultValue={form.email}
              onChange={(e) => {
                setForm({ ...form, email: e.target.value });
              }}
              placeholder="Email"
              className="AQinput"
            ></input>
          </div>
          <div className="inputDiv">
            <p className="PAYtitle">Password</p>
            <div
              style={{
                flexDirection: "row",
                display: "flex",
                alignItems: "center",
              }}
            >
              <input
                type={show ? "text" : "password"}
                onChange={(e) => {
                  setForm({ ...form, password: e.target.value, managerId: manId });
                }}
                placeholder="Password"
                className="AQinput"
              ></input>

              {show ? (
                <BsEye
                  style={{ marginLeft: "10px" }}
                  onClick={() => setShow(!show)}
                />
              ) : (
                <BsEyeSlash
                  style={{ marginLeft: "10px" }}
                  onClick={() => setShow(!show)}
                />
              )}
            </div>
          </div>
        </div>
        <div className="managerInputsubContainer" style={{ width: "50vw" }}>
          <div className="inputDiv">
            <p className="PAYtitle">Phone</p>
            <input
              defaultValue={form.phone}
              placeholder="Phone"
              onChange={(e) => {
                setForm({ ...form, phone: e.target.value });
              }}
              className="AQinput"
            ></input>
          </div>
          <div className="inputDiv">
            <p className="PAYtitle">Comission Value</p>
            <input
              type="number"
              defaultValue={form.ComissionValue}
              placeholder="ComissionValue"
              onChange={(e) => {
                setForm({ ...form, ComissionValue: e.target.value });
              }}
              className="AQinput"
            ></input>
            <p className="FORMerror"></p>
          </div>
          <div className="inputDiv">
            <p className="PAYtitle">Referred by</p>
            <ReactSelect
              onChange={(val) => setForm({ ...form, ReferredId: val.value })}
              options={optionsRealtor}
              name={"Realtor Name"}
              className="PAYselect"
              placeholder="Select Realtor"
            />
          </div>
        </div>
        <div className="inputDiv">
          <p className="PAYtitle">Manager</p>
          <ReactSelect
              onChange={(val) => setForm({ ...form, managerId: val.value })}
              options={optionsManager}
              name={"Realtor Name"}
              className="PAYselect"
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
          onClick={() => onSubmit()}
          style={{
            opacity: validation && "0.2",
            cursor: validation && "default",
          }}
          disabled={validation ? true : false}
        >
          <p className="PAYbuttonText">Add Realtor +</p>
        </button>
        
      </div>

      <Modal open={open} onClose={onCloseModal} center classNames={"modal"}>
        <div className="modal">
          {
            message === 'Realtor added succesfully' ?
          
          <img
            src={Icon}
            style={{
              width: "35px",
              alignSelf: "center",
              marginTop: "25px",
              marginBottom: "10px",
            }}
          /> : <img
          src={CrossMark}
          style={{
            width: "45px",
            alignSelf: "center",
            marginTop: "25px",
            marginBottom: "10px",
          }}
        />
}
          <p className="modalText">{message}</p>

          <button
            onClick={() => {
              window.history.back();
            }}
            className="modalButton"
          >
            Continue
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

export default ManagerRecruitComponent;
