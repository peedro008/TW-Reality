import React from "react";
import "../../Css/css.css";
import Select from "react-select";
import "react-responsive-modal/styles.css";
import Isologo_background from "../../assets/Isologo_background.png";
import { BsChevronLeft } from "react-icons/bs";
import CommonModal from "../Modal";

function EditClient({
  form,
  setForm,
  open,
  onSubmit,
  onCloseModal,
  resp,
  validarEmail,
  clientData,
}) {
  let validation =
    form.clientName?.length < 3 ||
    typeof form.clientName === "undefined" ||
    typeof form.phone === "undefined";

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

        <CommonModal onCloseModal={onCloseModal} open={open} resp={resp} />
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
