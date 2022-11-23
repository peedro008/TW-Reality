import React from "react";
import "../Css/css.css";
import "react-responsive-modal/styles.css";
import Isologo_background from "../assets/Isologo_background.png";
import { Modal } from "react-responsive-modal";
import Icon from "../assets/Icon.png";
import { BsChevronLeft } from "react-icons/bs";
import Select from "react-select";

function ReferredEditAdmin({
  form,
  manId,
  refBy,
  open,
  onSubmit,
  onCloseModal,
  validarEmail,
  setForm,
  optionsRealtor,
  optionsManager,
}) {
  let validation =
    !validarEmail(form.email) ||
    form.name?.length < 6 ||
    typeof form.name?.length === "undefined";

  let userFiltred = optionsRealtor.filter((e) => e.value === refBy[0]?.id);
  let defaultSelect = optionsRealtor.indexOf(userFiltred[0]);

  let manFiltred = optionsManager.filter((e) => e.value === manId);
  let defaultManSelect = optionsManager.indexOf(manFiltred[0]);

  // console.log(defaultManSelect);
  return (
    <div className="genericDiv">
      <div className="genericHeader">
        <p className="genericTitle">Edit Referral</p>
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
        </div>
        <div className="managerInputsubContainer" style={{ width: "50vw" }}>
          <div className="inputDiv">
            <p className="PAYtitle">Referral by</p>
            <Select
              options={optionsRealtor}
              onChange={(e) => setForm({ ...form, UserId: e.value })}
              className="SelectAddRealtor"
              defaultValue={optionsRealtor[defaultSelect]}
              placeholder="Name"
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
          onClick={() => {
            onSubmit();
            console.log("Holaaaaa");
          }}
          style={{
            backgroundColor: validation && "#586579",
            cursor: validation && "default",
          }}
          disabled={validation ? true : false}
        >
          <p className="PAYbuttonText">Edit Referral</p>
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

          <p className="modalText">Referral edited successfully</p>

          <button
            onClick={() => {
              window.location.reload();
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

export default ReferredEditAdmin;
