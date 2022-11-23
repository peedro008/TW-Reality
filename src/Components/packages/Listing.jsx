import React, { useState } from "react";
import Select from "react-select";
import ReactExport from "react-export-excel";
import UploadImageToS3WithReactS3 from "./ListingUpS3";
import ListingUpS3 from "./ListingUpS3";

const Listing = ({ form, setForm, optionsUsers, onSubmit }) => {
  const [showMLS, setShowMLS] = useState();
  let optionsPackage = [
    { value: 1, label: "Yes" },
    { value: 2, label: "No" },
  ];

  console.log(form);
  const ExcelFile = ReactExport.ExcelFile;
  const ExcelSheet = ReactExport.ExcelFile.ExcelSheet;
  const ExcelColumn = ReactExport.ExcelFile.ExcelColumn;

  let validation =
    typeof form.propertyAddress === "undefined" ||
    typeof form.listingPrice === "undefined" ||
    typeof form.totalCommission === "undefined" ||
    typeof form.closingDate === "undefined" ||
    typeof form.listingTerm === "undefined" ||
    typeof form.UserId === "undefined" ||
    typeof form.sellerEmail === "undefined" ||
    form.propertyAddress?.length < 3 ||
    form.listingPrice?.length < 1 ||
    form.totalCommission?.length < 1 ||
    form.listingTerm?.length < 1 ||
    form.sellerEmail?.length < 8;

  return (
    <div className="managerInputsContainer" style={{ marginBottom: "100px" }}>
      <div className="managerInputsubContainer" style={{ width: "80vw" }}>
        <div className="inputDivPackage">
          <p className="PAYtitlePackage" style={{ display: "flex" }}>
            Property Address <p style={{ color: "red" }}> *</p>
          </p>
          <input
            onChange={(e) => {
              setForm({ ...form, propertyAddress: e.target.value });
            }}
            placeholder="Address"
            className="AQinputPackage"
          ></input>
        </div>
        <div className="inputDivPackage">
          <p className="PAYtitlePackage" style={{ display: "flex" }}>
            Listing Price <p style={{ color: "red" }}> *</p>
          </p>
          <input
            placeholder="Listing Price"
            onChange={(e) => {
              setForm({ ...form, listingPrice: e.target.value });
            }}
            className="AQinputPackage"
            type="number"
          ></input>
        </div>
      </div>
      <div className="managerInputsubContainer" style={{ width: "50vw" }}>
        <div className="inputDivPackage">
          <p className="PAYtitlePackage" style={{ display: "flex" }}>
            Total Commission <p style={{ color: "red" }}> *</p>
          </p>
          <input
            placeholder="Listing Price"
            onChange={(e) => {
              setForm({ ...form, totalCommission: e.target.value });
            }}
            className="AQinputPackage"
            type="number"
          ></input>
        </div>
        <div className="inputDivPackage">
          <p className="PAYtitlePackage" style={{ display: "flex" }}>
            Closing Date <p style={{ color: "red" }}> *</p>
          </p>
          <input
            onChange={(e) => {
              setForm({ ...form, closingDate: e.target.value });
            }}
            type="Date"
            placeholder="Effective"
            className="AQinputPackage"
          ></input>
        </div>
      </div>
      <div className="managerInputsubContainer" style={{ width: "50vw" }}>
        <div className="inputDivPackage">
          <p className="PAYtitle" style={{ display: "flex" }}>
            Listing Term <p style={{ color: "red" }}> *</p>
          </p>
          <input
            onChange={(e) => {
              setForm({ ...form, listingTerm: e.target.value });
            }}
            placeholder="At least 6 months"
            className="AQinputPackage"
          ></input>
        </div>
        <div className="inputDivPackage">
          <p className="PAYtitlePackage" style={{ display: "flex" }}>
            Seller's name <p style={{ color: "red" }}> *</p>
          </p>
          <Select
            onChange={(e) => {
              setForm({ ...form, UserId: e.value });
            }}
            options={optionsUsers}
            placeholder="Name"
            className="PAYselectPackage"
          />
        </div>
      </div>
      <div className="managerInputsubContainer" style={{ width: "50vw" }}>
        <div className="inputDivPackage">
          <p className="PAYtitlePackage" style={{ display: "flex" }}>
            Seller's Email <p style={{ color: "red" }}> *</p>
          </p>
          <input
            onChange={(e) => {
              setForm({ ...form, sellerEmail: e.target.value });
            }}
            placeholder="Email"
            className="AQinputPackage"
          ></input>
        </div>
        <div className="inputDivPackage">
          <p className="PAYtitlePackage">Seller's phone</p>
          <input
            onChange={(e) => {
              setForm({ ...form, sellerPhone: e.target.value });
            }}
            placeholder="Phone"
            className="AQinputPackage"
          ></input>
        </div>
      </div>
      <div className="managerInputsubContainer" style={{ width: "50vw" }}>
        <div className="inputDivPackage">
          <p className="PAYtitle">Need to go up to MLS?</p>
          <Select
            onChange={(val) => setShowMLS(val.label)}
            options={optionsPackage}
            name={"MLS association"}
            className="PAYselectPackage"
            placeholder="Association"
          />
        </div>
        {showMLS === "Yes" && (
          <ListingUpS3 setForm={setForm} form={form} title='Photos' required='' backInfo='photos'/>
        )}
      </div>
      <div className="managerInputsubContainer" style={{ width: "50vw" }}>
        <div className="inputDivPackage">
          <p className="PAYtitlePackage">
            Showing Instructions, Lock Box, etc.
          </p>
          <input
            onChange={(e) => {
              setForm({ ...form, showingInstructions: e.target.value });
            }}
            type="number"
            placeholder="Showing Instructions"
            className="AQinputPackage"
          ></input>
        </div>
        <div className="inputDivPackage">
          <p className="PAYtitlePackage">Other Instructions</p>
          <input
            onChange={(e) => {
              setForm({ ...form, otherIntructions: e.target.value });
            }}
            type="number"
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
          <ExcelColumn label="Client" value="effectiveDate" />
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

export default Listing;
