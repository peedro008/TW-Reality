import React from "react";
import { BsChevronLeft } from "react-icons/bs";
import { MdAdd } from "react-icons/md";
import Modal from "react-responsive-modal";
import Icon from "../assets/Icon.png";
import Isologo_background from "../assets/Isologo_background.png";
import CrossMark from "../assets/cross-mark.png";
import { NavLink } from "react-router-dom";
import Select from "react-select";

function UserManagementComponent({
  userRole,
  type,
  setType,
  form,
  setForm,
  open,
  onSubmitM,
  onSubmitR,
  onCloseModal,
  Message,
  error,
  Err,
  setErr,
  validarEmail,
  optionsManager,
  optionsRealtor
}) {
  let validation =
    form.password?.length < 8 ||
    typeof form.password?.length === "undefined" ||
    !validarEmail(form.email) ||
    form.name?.length < 6 ||
    typeof form.name?.length === "undefined" || typeof form.ComissionValue?.length === "undefined";

  console.log(form);
  return (
    <div className="genericDiv">
      <div className="genericHeader">
        <p className="genericTitle">
          {!type ? "Add User" : "Add " + type}
        </p>
      </div>
      {!type ? (
        <div className="PAYbuttonCont" style={{ justifyContent: "flex-start" }}>
          <button className="PAYbutton" onClick={() => setType("Realtor")}>
            <MdAdd size="1.5em" className="PAYbuttonIcon" />
            <p className="PAYbuttonText">Add Realtor</p>
          </button>

          {userRole == "Admin" ? (
            <>
            
            <button
              className="PAYbutton"
              style={{ marginLeft: "30px" }}
              onClick={() => setType("Manager")}
              >
              <MdAdd size="1.5em" className="PAYbuttonIcon"  />
              <p className="PAYbuttonText">Add Manager</p>
            </button>
            <NavLink
              to="/UserManagement/referred"
              style={{ textDecoration: "none" }}
            >
              <button className="PAYbutton" style={{ marginLeft: "30px" }}>
                <MdAdd
                  size="1.5em"
                  className="PAYbuttonIcon"
                 
                />
                <p className="PAYbuttonText">Add Referral</p>
              </button>
            </NavLink>
            <NavLink
              to="/UserManagement/addAdmin"
              style={{ textDecoration: "none" }}
            >
              <button className="PAYbutton" style={{ marginLeft: "30px" }}>
                <MdAdd
                  size="1.5em"
                  className="PAYbuttonIcon"
                  
                />
                <p className="PAYbuttonText">Add Admin</p>
              </button>
            </NavLink>
              </>
          ) : (
            <NavLink
              to="/UserManagement/referred"
              style={{ textDecoration: "none" }}
            >
              <button className="PAYbutton" style={{ marginLeft: "30px" }}>
                <MdAdd
                  size="1.5em"
                  className="PAYbuttonIcon"
                  color='whitesmoke'
                />
                <p className="PAYbuttonText">Add Referral</p>
              </button>
            </NavLink>
          )}
        </div>
      ) : type == "Realtor" ? (
        <>
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
              </div>
            </div>
            <div className="managerInputsubContainer" style={{ width: "33vw" }}>
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
                <p className="PAYtitle">ComissionValue</p>
                <input
                  type="number"
                  defaultValue={form.ComissionValue}
                  placeholder="ComissionValue"
                  onChange={(e) => {
                    setForm({ ...form, ComissionValue: e.target.value });
                  }}
                  className="AQinput"
                ></input>
              </div>
              <div className="inputDiv">
                <p className="PAYtitle">Manager</p>
                <Select
                  options={optionsManager}
                  onChange={(e) => setForm({ ...form, managerId: e.value })}
                  className="SelectAddRealtor"
                  // defaultInputValue={yearOptions[0]}
                  placeholder='Name'
                />
              </div>
            </div>
            <div className="inputDiv">
                <p className="PAYtitle">Referral By</p>
                <Select
                  options={optionsRealtor}
                  onChange={(e) => setForm({ ...form, ReferredId: e.value })}
                  className="SelectAddRealtor"
                  // defaultInputValue={yearOptions[0]}
                  placeholder='Name'
                />
              </div>
          </div>
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
            onClick={() => setType(false)}
          />
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
              onClick={onSubmitR}
              style={{
                opacity: validation && "0.2",
                cursor: validation && "default",
              }}
              disabled={validation ? true : false}
            >
              <p className="PAYbuttonText">Add Realtor</p>
            </button>
          </div>
        </>
      ) : (
        <>
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
              </div>
            </div>
            <div
              className="managerInputsubContainer"
              style={{ width: "32.3vw" }}
            >
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
                <p className="PAYtitle">ComissionValue</p>
                <input
                  type="number"
                  defaultValue={form.ComissionValue}
                  placeholder="ComissionValue"
                  onChange={(e) => {
                    setForm({ ...form, ComissionValue: e.target.value });
                  }}
                  className="AQinput"
                ></input>
              </div>
            </div>
          </div>
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
            onClick={() => setType(false)}
          />
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
              onClick={onSubmitM}
              style={{
                opacity: validation && "0.2",
                cursor: validation && "default",
              }}
              disabled={validation ? true : false}
            >
              <p className="PAYbuttonText">Add Manager</p>
            </button>
          </div>
        </>
      )}
      <Modal open={open} onClose={onCloseModal} center classNames={"modal"}>
        <div className="modal">
          <div
            style={{
              width: "35px",
              alignSelf: "center",
              marginTop: "25px",
              marginBottom: "10px",
            }}
          />
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
          <p className="modalText">{type} added successfully</p>
          </>
        }

          <button
            className="modalButton"
            onClick={() => {
              if (Err) {
                setErr(false);
                onCloseModal();
              } else {
                setErr(false);
                window.location.reload();
              }
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
    </div>
  );
}

export default UserManagementComponent;
