import React, { useEffect, useState } from "react";
import Select from "react-select";
import Icon from "../../assets/Icon.png";
import CrossMark from "../../assets/cross-mark.png";
import { NavLink } from "react-router-dom";
import Modal from "react-responsive-modal";

const PackageMarketing = ({ form, setForm, optionsUsers, onSubmitPM, respTransactionCoord, onCloseModal, open,validarEmail }) => {

  useEffect(() => {
    setForm({})
  }, [])
  
  console.log(validarEmail(form.email));

  let validation =
    !validarEmail(form.email) ||
    typeof form.clientName === "undefined" ||
    typeof form.email === "undefined" ||
    typeof form.phone === "undefined" ||
    typeof form.openDate === "undefined" ||
    typeof form.UserId === 'undefined' ||
    form.clientName?.length < 3 ||
    form.email?.length < 8 ||
    form.phone?.length < 6 
   
  return (
    <div className="managerInputsContainer">
      <div className="managerInputsubContainer" style={{ width: "80vw" }}>
        <div className="inputDivPackage">
          <div className="PAYtitlePackage" style={{ display: "flex" }}>
            Client name
          </div>
          <input
            onChange={(e) => {
              setForm({ ...form, clientName: e.target.value});
            }}
            placeholder="Full name"
            className="AQinputPackage"
          ></input>
        </div>
        <div className="inputDivPackage">
          <div className="PAYtitlePackage" style={{ display: "flex" }}>
            Email 
          </div>
          <input
            placeholder="Client Email"
            onChange={(e) => {
              setForm({ ...form, email: e.target.value });
            }}
            className="AQinputPackage"
          ></input>
        </div>
        <div className="inputDivPackage">
          <div className="PAYtitlePackage" style={{ display: "flex" }}>
            Phone 
          </div>
          <input
            onChange={(e) => {
              setForm({ ...form, phone: e.target.value });
            }}
            placeholder="Phone"
            className="AQinputPackage"
          ></input>
        </div>

      </div>

      <div className="managerInputsubContainer" style={{ width: "50vw" }}>
      <div className="inputDivPackage">
          <div className="PAYtitlePackage" style={{ display: "flex" }}>
            Package Value 
          </div>
          <input
            onChange={(e) => {
              setForm({ ...form, value: e.target.value });
            }}
            type="Number"
            placeholder="Value"
            className="AQinputPackage"
          ></input>
        </div>
      <div className="inputDivPackage">
          <div className="PAYtitlePackage" style={{ display: "flex" }}>
            Open Date 
          </div>
          <input
            onChange={(e) => {
              setForm({ ...form, openDate: e.target.value });
            }}
            type="Date"
            placeholder="Closing"
            className="AQinputPackage"
          ></input>
        </div>
        <div className="inputDivPackage">
          <p className="PAYtitlePackage">Seller's Name </p>
          <Select
            onChange={(e) => {
              setForm({ ...form, UserId: e.value });
            }}
            options={optionsUsers}
            placeholder="Seller"
            className="PAYselectPackage"
          />
        </div>
      </div>
      <div
        style={{
          position: "fixed",
          right: "50px",
          top: "76px",
          display: "flex",
        }}
      >
        <button
          className="PAYbutton"
          onClick={onSubmitPM}
          style={{
            opacity: validation && "0.2",
            cursor: validation && "default",
          }}
          disabled={validation ? true : false}
        >
          <p className="PAYbuttonText">Add Package</p>
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
      {/* <ExcelFile
        filename="Marketing Package"
        element={
          <div
            style={{
              position: "fixed",
              right: "50px",
              top: "120px",
              display: "flex",
            }}
          >
            <button
              className="PAYbutton"
              // onClick={onSubmit}
              style={{
                backgroundColor: "green",
                cursor: "pointer",
              }}
            >
              <p className="PAYbuttonText">Excell</p>
            </button>
          </div>
        }
      >
        <ExcelSheet data={[form]} name="Marketing">
          <ExcelColumn label="MLSassociation" value="MLSassociation" />
          <ExcelColumn label="OpenDate" value="OpenDate" />
          <ExcelColumn label="Communities" value="communities" />
          <ExcelColumn
            label="Customer Testimonials"
            value="customerTestimonials"
          />
          <ExcelColumn label="Name" value="fullName" />
          <ExcelColumn label="Email" value="Email" />
          <ExcelColumn label="Seller's Name" value="sellerName" />
          <ExcelColumn label="Social Network Name" value="socialNetworks" />
          <ExcelColumn label="Specific Service" value="specificService" />
          <ExcelColumn label="Target Audiences" value="targetAudiences" />
          <ExcelColumn label="Web Domain" value="webDomain" />
        </ExcelSheet>
      </ExcelFile> */}
    </div>
  );
};

export default PackageMarketing;
