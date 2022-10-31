import React from "react";
import { BsChevronLeft } from "react-icons/bs";
import { MdAdd } from "react-icons/md";
import Modal from "react-responsive-modal";
import { NavLink } from "react-router-dom";

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
  setMessage,
  Err,
  setErr,
  onOpenModal,
  validarEmail,
}) {
  return (
    <div className="genericDiv">
      <div className="genericHeader">
        <p className="genericTitle">
          {!type ? "User Management" : "Add " + type}
        </p>
      </div>
      {!type ? (
        <div className="PAYbuttonCont" style={{ justifyContent: "flex-start" }}>
          <button className="PAYbutton" onClick={() => setType("Realtor")}>
            <MdAdd size="1.25em" className="PAYbuttonIcon" color="#FFFFFF" />
            <p className="PAYbuttonText">Add realtor</p>
          </button>
         
          {userRole == "Admin" ? (
            <button
              className="PAYbutton"
              style={{ marginLeft: "30px" }}
              onClick={() => setType("Manager")}
            >
              <MdAdd size="1.25em" className="PAYbuttonIcon" color="#FFFFFF" />
              <p className="PAYbuttonText">Add manager</p>
            </button>
          ) : (
            <NavLink to="/UserManagement/referred" style={{textDecoration:"none"}}>
            <button className="PAYbutton"   style={{ marginLeft: "30px" }}>
            <MdAdd size="1.25em" className="PAYbuttonIcon" color="#FFFFFF" />
            <p className="PAYbuttonText">Add referred</p>
          </button>
          </NavLink>
          )}
        </div>
      ) : type == "Realtor" ? (
        <>
          {" "}
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
              style={{ width: "33vw" }}
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
                backgroundColor:
                  form?.email && !validarEmail(form?.email)
                    ? "#696f79"
                    : "#2b4162",
              }}
              disabled={form.email && !validarEmail(form?.email) ? true : false}
            >
              <p className="PAYbuttonText">Add Realtor</p>
            </button>
          </div>
        </>
      ) : (
        <>
          {" "}
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
                backgroundColor:
                  form?.email && !validarEmail(form?.email)
                    ? "#696f79"
                    : "#2b4162",
              }}
              disabled={form.email && !validarEmail(form?.email) ? true : false}
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

          <p className="modalText">{Message}</p>

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
    </div>
  );
}

export default UserManagementComponent;
