import React, { useEffect, useState } from "react";
import "../Css/css.css";
import Select from "react-select";
import "react-responsive-modal/styles.css";
import Isologo_background from "../assets/Isologo_background.png";
import { BsChevronLeft } from "react-icons/bs";
import PackageMarketing from "./packages/PackageMarketing";
import TransactionCoordinator from "./packages/TransactionCoordinator";


function AddPackage({
  form,
  setForm,
  open,
  onCloseModal,
  optionsUsers,
  onSubmitPM,
  onSubmitTC,
  respTransactionCoord,
  validarEmail,
}) {
  const [typeOfPackage, setTypeOfPackage] = useState();

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

  return (
    <div className="genericDiv">
      <div className="genericHeader" style={{ marginBottom: "30px" }}>
        <p className="genericTitle">Add Package</p>
      
      </div>
      <div className="managerInputsContainer2">
          <div className="inputDiv">
            <p className="PAYtitle">Type of Package</p>
            <Select
              onChange={(val) => {
                setTypeOfPackage(val.label);
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
          onSubmitPM={onSubmitPM}
          open={open}
          respTransactionCoord={respTransactionCoord}
          onCloseModal={onCloseModal}
          validarEmail={validarEmail}
        />
      )}
      {typeOfPackage === "Transaction Coordinator" && (
        <TransactionCoordinator
          form={form}
          setForm={setForm}
          optionsUsers={optionsUsers}
          onSubmitTC={onSubmitTC}
          open={open}
          respTransactionCoord={respTransactionCoord}
          onCloseModal={onCloseModal}
          validarEmail={validarEmail}
        />
      )}
      {/* <PozzaChart2 /> */}
      
      <img
        src={Isologo_background}
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
      {/* <BsChevronLeft
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
      /> */}
    </div>
  );
}

export default AddPackage;
