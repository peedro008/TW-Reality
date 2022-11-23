import React from "react";
import Select from "react-select";
import ReactExport from "react-export-excel";
import UploadImageToS3WithReactS3 from "./ListingUpS3";
import OfferUpS3 from "./OfferUpS3";

const Offer = ({ form, setForm, optionsUsers, onSubmit }) => {
  let optionsPackage = [
    { value: 1, label: "FHA" },
    { value: 2, label: "Conventional" },
    { value: 3, label: "VA" },
    { value: 4, label: "Cash" },
  ];
  console.log(form);
  const ExcelFile = ReactExport.ExcelFile;
  const ExcelSheet = ReactExport.ExcelFile.ExcelSheet;
  const ExcelColumn = ReactExport.ExcelFile.ExcelColumn;

  let validation =
    typeof form.propertyAddress === "undefined" ||
    typeof form.offerAmount === "undefined" ||
    typeof form.closingDate === "undefined" ||
    typeof form.typeFinancing === "undefined" ||
    typeof form.initialDeposit === "undefined" ||
    typeof form.buyerName === "undefined" ||
    typeof form.buyerPhone === "undefined" ||
    typeof form.buyerEmail === "undefined" ||
    typeof form.inspectionDays === "undefined" ||
    typeof form.acceptOffer === "undefined" ||
    typeof form.UserId === "undefined" ||
    typeof form.sendOffer === "undefined" ||
    form.propertyAddress?.length < 3 ||
    form.offerAmount?.length < 3 ||
    form.initialDeposit?.length < 3 ||
    form.buyerName?.length < 3 ||
    form.buyerPhone?.length < 6 ||
    form.buyerEmail?.length < 8 ||
    form.sendOffer?.length < 8 ||
    form.inspectionDays?.length < 1 ||
    form.acceptOffer?.length < 1;

  return (
    <div className="managerInputsContainer" style={{ marginBottom: "100px" }}>
      <div className="managerInputsubContainer" style={{ width: "80vw" }}>
        <div className="inputDivPackage">
          <div className="PAYtitlePackage" style={{ display: "flex" }}>
            Property Address <p style={{ color: "red" }}> *</p>
          </div>
          <input
            onChange={(e) => {
              setForm({ ...form, propertyAddress: e.target.value });
            }}
            placeholder="Address"
            className="AQinputPackage"
          ></input>
        </div>
        <div className="inputDivPackage">
          <div className="PAYtitlePackage" style={{ display: "flex" }}>
            Offer Amount($) <p style={{ color: "red" }}> *</p>
          </div>
          <input
            type="number"
            placeholder="Price"
            onChange={(e) => {
              setForm({ ...form, offerAmount: e.target.value });
            }}
            className="AQinputPackage"
          ></input>
        </div>
      </div>
      <div className="managerInputsubContainer" style={{ width: "50vw" }}>
        <div className="inputDivPackage">
          <div className="PAYtitlePackage" style={{ display: "flex" }}>
            Closing Date <p style={{ color: "red" }}> *</p>
          </div>
          <input
            onChange={(e) => {
              setForm({ ...form, closingDate: e.target.value });
            }}
            type="Date"
            placeholder="Closing"
            className="AQinputPackage"
          ></input>
        </div>
        <div className="inputDivPackage">
          <div className="PAYtitle" style={{ display: "flex" }}>
            Type of financing <p style={{ color: "red" }}> *</p>
          </div>
          <Select
            onChange={(e) => setForm({ ...form, typeFinancing: e.label })}
            options={optionsPackage}
            name={"Financing"}
            className="PAYselectPackage"
            placeholder="Association"
          />
        </div>
      </div>
      <div className="managerInputsubContainer" style={{ width: "50vw" }}>
        <div className="inputDivPackage">
          <div className="PAYtitlePackage" style={{ display: "flex" }}>
            Initial deposit ($) <p style={{ color: "red" }}> *</p>
          </div>
          <input
            onChange={(e) => {
              setForm({ ...form, initialDeposit: e.target.value });
            }}
            placeholder="Deposit"
            className="AQinputPackage"
            type="number"
          ></input>
        </div>
        <div className="inputDivPackage">
          <p className="PAYtitlePackage">Aditional Deposit</p>
          <input
            onChange={(e) => {
              setForm({ ...form, aditionalDeposit: e.target.value });
            }}
            placeholder="Aditional Deposit"
            className="AQinputPackage"
            type="number"
          ></input>
        </div>
      </div>
      <div className="managerInputsubContainer" style={{ width: "50vw" }}>
        <div className="inputDivPackage">
          <div className="PAYtitlePackage" style={{ display: "flex" }}>
            Buyer's name <p style={{ color: "red" }}> *</p>
          </div>
          <input
            onChange={(e) => {
              setForm({ ...form, buyerName: e.target.value });
            }}
            placeholder="Buyer's name"
            className="AQinputPackage"
          ></input>
        </div>
        <div className="inputDivPackage">
          <div className="PAYtitlePackage" style={{ display: "flex" }}>
            Buyer's phone <p style={{ color: "red" }}> *</p>
          </div>
          <input
            onChange={(e) => {
              setForm({ ...form, buyerPhone: e.target.value });
            }}
            placeholder="Buyer's Phone"
            className="AQinputPackage"
          ></input>
        </div>
      </div>
      <div className="managerInputsubContainer" style={{ width: "50vw" }}>
        <div className="inputDivPackage">
          <div className="PAYtitlePackage" style={{ display: "flex" }}>
            Buyer's Email <p style={{ color: "red" }}> *</p>
          </div>
          <input
            onChange={(e) => {
              setForm({ ...form, buyerEmail: e.target.value });
            }}
            placeholder="Buyer's Email"
            className="AQinputPackage"
          ></input>
        </div>
        <div className="inputDivPackage">
          <div className="PAYtitlePackage" style={{ display: "flex" }}>
            Seller's name <p style={{ color: "red" }}> *</p>
          </div>
          <Select
            onChange={(e) => {
              setForm({ ...form, UserId: e.value });
            }}
            options={optionsUsers}
            placeholder="Seller's name"
            className="PAYselectPackage"
          />
        </div>
      </div>
      <div className="managerInputsubContainer" style={{ width: "50vw" }}>
        <div className="inputDivPackage">
          <div className="PAYtitle" style={{ display: "flex" }}>
            Email to send the offer <p style={{ color: "red" }}> *</p>
          </div>
          <input
            onChange={(e) => {
              setForm({ ...form, sendOffer: e.target.value });
            }}
            placeholder="Send Offer"
            className="AQinputPackage"
          ></input>
        </div>
        <div className="inputDivPackage">
          <div className="PAYtitlePackage" style={{ display: "flex" }}>
            How many inspections days? <p style={{ color: "red" }}> *</p>
          </div>
          <input
            onChange={(e) => {
              setForm({ ...form, inspectionDays: e.target.value });
            }}
            placeholder="Inspection's Days"
            className="AQinputPackage"
            type="number"
          ></input>
        </div>
      </div>
      <div className="managerInputsubContainer" style={{ width: "50vw" }}>
        <div className="inputDivPackage">
          <div className="PAYtitlePackage" style={{ display: "flex" }}>
            Days to acept the offer? <p style={{ color: "red" }}> *</p>
          </div>
          <input
            onChange={(e) => {
              setForm({ ...form, acceptOffer: e.target.value });
            }}
            type="number"
            placeholder="Days to Acept"
            className="AQinputPackage"
          ></input>
        </div>
        <div className="inputDivPackage">
          <p className="PAYtitlePackage">Additional Terms</p>
          <input
            onChange={(e) => {
              setForm({ ...form, additionalTerms: e.target.value });
            }}
            placeholder="Additional Terms"
            className="AQinputPackage"
          ></input>
        </div>
      </div>
      <div className="managerInputsubContainer" style={{ width: "50vw" }}>
        <OfferUpS3 setForm={setForm} form={form} title='Pre-Approval - DU' required=''/>
        <div className="inputDivPackage">
          <p className="PAYtitlePackage">Other Instructions</p>
          <input
            onChange={(e) => {
              setForm({ ...form, otherInstructions: e.target.value });
            }}
            placeholder="Other Instructions"
            className="AQinputPackage"
          ></input>
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
          onClick={onSubmit}
          style={{
            backgroundColor: validation && "#586579",
            cursor: validation && "default",
          }}
          disabled={validation ? true : false}
        >
          <p className="PAYbuttonText">Add Package</p>
        </button>
      </div>
      {validation && (
        <p
          className="PAYtitlePackage"
          style={{
            color: "red",
            position: "fixed",
            right: "0px",
            top: "80px",
            display: "flex",
          }}
        >
          * is required
        </p>
      )}
      <ExcelFile
        filename="Excel Tutorial"
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
              // disabled={validation ? true : false}
            >
              <p className="PAYbuttonText">Excell</p>
            </button>
          </div>
        }
      >
        <ExcelSheet data={[form]} name="Organization">
          <ExcelColumn label="Address" value="Address" />
          <ExcelColumn label="Client" value="Client" />
          <ExcelColumn label="Closing Date" value="ClosingDate" />
          <ExcelColumn label="Email" value="Email" />
          <ExcelColumn label="Phone" value="Phone" />
          <ExcelColumn label="Agent" value="agent" />
          <ExcelColumn label="Other Instructions" value="otherInstructions" />
          <ExcelColumn label="status" value="status" />
        </ExcelSheet>
      </ExcelFile>
    </div>
  );
};

export default Offer;
