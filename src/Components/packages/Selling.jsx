import React from "react";
import ReactExport from "react-export-excel";
import Select from "react-select";
import UploadImageToS3WithReactS3 from "./ListingUpS3";
import Upload from "./ListingUpS3";
import SellingUpS3 from "./SellingUpS3";

const Selling = ({ form, setForm, optionsUsers, onSubmit }) => {
  const ExcelFile = ReactExport.ExcelFile;
  const ExcelSheet = ReactExport.ExcelFile.ExcelSheet;
  const ExcelColumn = ReactExport.ExcelFile.ExcelColumn;

  let validation =
    typeof form.propertyAddress === "undefined" ||
    typeof form.agentEmail === "undefined" ||
    typeof form.agentPhone === "undefined" ||
    typeof form.closingDate === "undefined" ||
    typeof form.otherDocuments === "undefined" ||
    form.propertyAddress?.length < 3 ||
    form.agentEmail?.length < 8 ||
    form.agentPhone?.length < 6;

  console.log(form);

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
            Listening Agent's Email <p style={{ color: "red" }}> *</p>
          </div>
          <input
            placeholder="Agent's Email"
            onChange={(e) => {
              setForm({ ...form, agentEmail: e.target.value });
            }}
            className="AQinputPackage"
          ></input>
        </div>
      </div>
      <div className="managerInputsubContainer" style={{ width: "50vw" }}>
        <div className="inputDivPackage">
          <div className="PAYtitlePackage" style={{ display: "flex" }}>
            Listening Agent's Phone <p style={{ color: "red" }}> *</p>
          </div>
          <input
            placeholder="Agent's Email"
            onChange={(e) => {
              setForm({ ...form, agentPhone: e.target.value });
            }}
            className="AQinputPackage"
          ></input>
        </div>
        <div className="inputDivPackage">
          <p className="PAYtitlePackage">Lender's Phone</p>
          <input
            placeholder="Agent's Email"
            onChange={(e) => {
              setForm({ ...form, lenderPhone: e.target.value });
            }}
            className="AQinputPackage"
          ></input>
        </div>
      </div>
      <div className="managerInputsubContainer" style={{ width: "50vw" }}>
        <div className="inputDivPackage">
          <p className="PAYtitlePackage">Lender's Email</p>
          <input
            onChange={(e) => {
              setForm({ ...form, lenderEmail: e.target.value });
            }}
            placeholder="Lender's Email"
            className="AQinputPackage"
          ></input>
        </div>
        <div className="inputDivPackage">
          <p className="PAYtitlePackage">Title Company (Email)</p>
          <input
            onChange={(e) => {
              setForm({ ...form, buyerEmail: e.target.value });
            }}
            placeholder="Buyer's name"
            className="AQinputPackage"
          ></input>
        </div>
      </div>
      <div className="managerInputsubContainer" style={{ width: "50vw" }}>
        <div className="inputDivPackage">
          <p className="PAYtitlePackage">Title Company (Phone)</p>
          <input
            onChange={(e) => {
              setForm({ ...form, buyerPhone: e.target.value });
            }}
            placeholder="Buyer's Phone"
            className="AQinputPackage"
          ></input>
        </div>
        <div className="inputDivPackage">
          <p className="PAYtitlePackage">Seller's Name</p>
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
          <div className="PAYtitlePackage" style={{ display: "flex" }}>
            Closing Date <p style={{ color: "red" }}> *</p>
          </div>
          <input
            onChange={(e) => {
              setForm({ ...form, closingDate: e.target.value });
            }}
            type="Date"
            placeholder="Effective"
            className="AQinputPackage"
          ></input>
        </div>
        <div className="inputDivPackage">
          <p className="PAYtitlePackage">Other Instructions</p>
          <input
            onChange={(e) => {
              setForm({ ...form, otherInstructions: e.target.value });
            }}
            placeholder="Instructions"
            className="AQinputPackage"
          ></input>
        </div>
      </div>
        <SellingUpS3 setForm={setForm} form={form} title='Other Documents' required='*'/>
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
          <ExcelColumn label="Open Date" value="OpenDate" />
          <ExcelColumn label="Agent Email" value="agentEmail" />
          <ExcelColumn label="Agent Phone" value="agentPhone" />
          <ExcelColumn label="Buyer's Name" value="buyerName" />
          <ExcelColumn label="Buyer's Phone" value="buyerPhone" />
          <ExcelColumn label="Closing Date" value="closingDate" />
          <ExcelColumn label="Lender's Email" value="lenderEmail" />
          <ExcelColumn label="Lender's Phone" value="lenderPhone" />
          <ExcelColumn label="Other Instructions" value="otherInstructions" />
          <ExcelColumn label="Property Address" value="propertyAddress" />
          <ExcelColumn label="Seller's Name" value="sellerName" />
        </ExcelSheet>
      </ExcelFile>
    </div>
  );
};

export default Selling;
