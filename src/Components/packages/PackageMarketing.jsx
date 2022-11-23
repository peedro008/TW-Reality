import React, { useEffect, useState } from "react";
import Select from "react-select";
import ReactExport from "react-export-excel";

const PackageMarketing = ({ form, setForm, optionsUsers, onSubmit }) => {
  const [otherMLS, setOtherMLS] = useState();
  let optionsPackage = [
    { value: 1, label: "MIAMI" },
    { value: 2, label: "Palm Beach" },
    { value: 3, label: "Other" },
  ];
  console.log(form);
  useEffect(() => {
    if (otherMLS !== "Other") {
      setForm({ ...form, MLSassociation: otherMLS });
    } else {
      setForm({ ...form, MLSassociation: "" });
    }
  }, [otherMLS]);

  const ExcelFile = ReactExport.ExcelFile;
  const ExcelSheet = ReactExport.ExcelFile.ExcelSheet;
  const ExcelColumn = ReactExport.ExcelFile.ExcelColumn;

  let validation =
    typeof form.fullName === "undefined" ||
    typeof form.email === "undefined" ||
    typeof form.phone === "undefined" ||
    typeof form.socialNetworks === "undefined" ||
    typeof form.MLSassociation === "undefined" ||
    typeof form.openDate === "undefined" ||
    form.fullName?.length < 3 ||
    form.Email?.length < 8 ||
    form.phone?.length < 6 ||
    form.socialNetworks?.length < 3 ||
    form.MLSassociation?.length < 3;

  return (
    <div className="managerInputsContainer" style={{ marginBottom: "100px" }}>
      <div className="managerInputsubContainer" style={{ width: "80vw" }}>
        <div className="inputDivPackage">
          <p className="PAYtitlePackage" style={{ display: "flex" }}>
            Full name<p style={{ color: "red" }}>*</p>
          </p>
          <input
            onChange={(e) => {
              setForm({ ...form, fullName: e.target.value });
            }}
            placeholder="Email"
            className="AQinputPackage"
          ></input>
        </div>
        <div className="inputDivPackage">
          <p className="PAYtitlePackage" style={{ display: "flex" }}>
            Email <p style={{ color: "red" }}> *</p>
          </p>
          <input
            placeholder="Name"
            onChange={(e) => {
              setForm({ ...form, email: e.target.value });
            }}
            className="AQinputPackage"
          ></input>
        </div>
      </div>
      <div className="managerInputsubContainer" style={{ width: "50vw" }}>
        <div className="inputDivPackage">
          <p className="PAYtitlePackage" style={{ display: "flex" }}>
            Phone <p style={{ color: "red" }}> *</p>
          </p>
          <input
            onChange={(e) => {
              setForm({ ...form, phone: e.target.value });
            }}
            placeholder="Phone"
            className="AQinputPackage"
          ></input>
        </div>

        <div className="inputDivPackage">
          <p className="PAYtitlePackage" style={{ display: "flex" }}>
            Name on social networks? <p style={{ color: "red" }}> *</p>
          </p>
          <input
            onChange={(e) => {
              setForm({ ...form, socialNetworks: e.target.value });
            }}
            placeholder="social networks"
            className="AQinputPackage"
          ></input>
        </div>
      </div>
      <div className="managerInputsubContainer" style={{ width: "50vw" }}>
        <div className="inputDivPackage">
          <p className="PAYtitlePackage">Target audiences?</p>
          <input
            onChange={(e) => {
              setForm({ ...form, targetAudiences: e.target.value });
            }}
            placeholder="Target audiences"
            className="AQinputPackage"
          ></input>
        </div>
        <div className="inputDivPackage">
          <p className="PAYtitlePackage">A phrase that identifies you</p>
          <input
            onChange={(e) => {
              setForm({ ...form, identifyFrase: e.target.value });
            }}
            placeholder="Target audiences"
            className="AQinputPackage"
          ></input>
        </div>
      </div>
      <div className="managerInputsubContainer" style={{ width: "50vw" }}>
        <div className="inputDivPackage">
          <p className="PAYtitlePackage">Write a short biografy</p>
          <input
            onChange={(e) => {
              setForm({ ...form, biografy: e.target.value });
            }}
            placeholder="Web domain name"
            className="AQinputPackage"
          ></input>
        </div>
        <div className="inputDivPackage">
          <p className="PAYtitlePackage">Web domain name?</p>
          <input
            onChange={(e) => {
              setForm({ ...form, webDomain: e.target.value });
            }}
            placeholder="Web domain name"
            className="AQinputPackage"
          ></input>
        </div>
      </div>
      <div className="managerInputsubContainer" style={{ width: "50vw" }}>
        <div className="inputDivPackage">
          <p className="PAYtitlePackage">Communities on your website?</p>
          <input
            onChange={(e) => {
              setForm({ ...form, communities: e.target.value });
            }}
            placeholder="Communities"
            className="AQinputPackage"
          ></input>
        </div>
        <div className="inputDivPackage">
          <p className="PAYtitlePackage">Customer tertimonials</p>
          <input
            onChange={(e) => {
              setForm({ ...form, customerTestimonials: e.target.value });
            }}
            placeholder="Customer Tertimonials"
            className="AQinputPackage"
          ></input>
        </div>
      </div>
      <div className="managerInputsubContainer" style={{ width: "50vw" }}>
        <div className="inputDivPackage">
          <p className="PAYtitlePackage">Do you offer any specific service?</p>
          <input
            onChange={(e) => {
              setForm({ ...form, specificService: e.target.value });
            }}
            placeholder="Specific Service"
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
            placeholder="Name"
            className="PAYselectPackage"
          />
        </div>
      </div>
      <div className="managerInputsubContainer" style={{ width: "50vw" }}>
        <div className="inputDivPackage">
          <p className="PAYtitlePackage" style={{ display: "flex" }}>
            Open Date <p style={{ color: "red" }}> *</p>
          </p>
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
          <p className="PAYtitlePackage">Closing Date </p>
          <input
            onChange={(e) => {
              setForm({ ...form, closingDate: e.target.value });
            }}
            type="Date"
            placeholder="Closing"
            className="AQinputPackage"
          ></input>
        </div>
      </div>
      <div className="managerInputsubContainer" style={{ width: "50vw" }}>
        <div className="inputDivPackage">
          <p className="PAYtitle" style={{ display: "flex" }}>
            MLS association <p style={{ color: "red" }}> *</p>
          </p>
          <Select
            onChange={(val) => setOtherMLS(val.label)}
            options={optionsPackage}
            name={"MLS association"}
            className="PAYselectPackage"
            placeholder="Association"
          />
        </div>
        {otherMLS === "Other" && (
          <div className="inputDivPackage">
            <p className="PAYtitlePackage" style={{ display: "flex" }}>
              Which is your MLS association? <p style={{ color: "red" }}> *</p>
            </p>
            <input
              onChange={(e) => {
                setForm({ ...form, MLSassociation: e.target.value });
              }}
              placeholder="MLS Association"
              className="AQinputPackage"
            ></input>
          </div>
        )}
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
      </ExcelFile>
    </div>
  );
};

export default PackageMarketing;
