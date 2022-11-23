import React, { useEffect, useState } from "react";
import "../Css/css.css";
import Select from "react-select";
import "react-responsive-modal/styles.css";
import Isologo_background from "../assets/Isologo_background.png";
import { Modal } from "react-responsive-modal";
import Icon from "../assets/Icon.png";
import { NavLink } from "react-router-dom";
import { BsChevronLeft } from "react-icons/bs";
import PackageMarketing from "./packages/PackageMarketing";
import Offer from "./packages/Offer";
import Selling from "./packages/Selling";
import Listing from "./packages/Listing";
function AddPackage({
  form,
  setForm,
  open,
  onCloseModal,
  optionsUsers,
  onSubmit,
  onSubmitListing,
  onSubmitOffer,
  onSubmitSelling,
}) {
  const [typeOfPackage, setTypeOfPackage] = useState();
  const [typeOfCoordinator, setTypeOfCoordinator] = useState();

  let optionsPackage = [
    {
      value: 1,
      label: "Marketing",
    },
    {
      value: 2,
      label: "Transaction Coordinator",
    },
  ];
  let optionsCoordinator = [
    {
      value: 1,
      label: "Offer",
    },
    {
      value: 2,
      label: "Selling",
    },
    {
      value: 3,
      label: "Listing",
    },
  ];

  useEffect(() => {
    if (form.typeOfPackage === 2) {
      setForm({ ...form, monthly: false });
    } else {
      setForm({ ...form, monthly: true });
    }
  }, [form.typeOfPackage]);

  return (
    <div className="genericDiv">
      <div className="genericHeader">
        <p className="genericTitle">Add Package</p>
      </div>

      <div className="managerInputsContainer2">
        <div className="inputDiv">
          <p className="PAYtitle">Type of Package</p>
          <Select
            onChange={(val) => {
              setTypeOfPackage(val.label);
              setTypeOfCoordinator();
            }}
            options={optionsPackage}
            name={"Realtor Name"}
            className="PAYselect"
            placeholder="Select Package"
          />
        </div>
      </div>

      {typeOfPackage === "Marketing" && (
        <PackageMarketing
          form={form}
          setForm={setForm}
          optionsUsers={optionsUsers}
          onSubmit={onSubmit}
        />
      )}
      {typeOfPackage === "Transaction Coordinator" && (
        <div className="managerInputsContainer2">
          <div className="inputDiv">
            <p className="PAYtitle">Type of Transaction coordinator</p>
            <Select
              onChange={(val) => setTypeOfCoordinator(val.label)}
              options={optionsCoordinator}
              name={"Realtor Name"}
              className="PAYselect"
              placeholder="Select Transaction"
            />
          </div>
        </div>
      )}
      {typeOfCoordinator === "Offer" && (
        <Offer
          form={form}
          setForm={setForm}
          optionsUsers={optionsUsers}
          onSubmit={onSubmitOffer}
        />
      )}
      {typeOfCoordinator === "Selling" && (
        <Selling
          form={form}
          setForm={setForm}
          optionsUsers={optionsUsers}
          onSubmit={onSubmitSelling}
        />
      )}
      {typeOfCoordinator === "Listing" && (
        <Listing
          form={form}
          setForm={setForm}
          optionsUsers={optionsUsers}
          onSubmit={onSubmitListing}
        />
      )}

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

          <p className="modalText">Sell added successfully</p>

          <button className="modalButton">
            <NavLink style={{ textDecoration: "none", color: "#000" }} to={"/"}>
              Continue
            </NavLink>
          </button>
        </div>
      </Modal>
      <img
        src={Isologo_background}
        disabled
        style={{
          position: "fixed",
          pointerEvents: "none",
          right: 0,
          bottom: 0,
          zIndex: 0,
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

export default AddPackage;
