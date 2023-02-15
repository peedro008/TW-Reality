import React, { useState } from "react";

const AddHouse = ({
  form,
  setForm,
  setUpdater,
  updater,

  onSubmit,
}) => {
  const [checkedOne, setCheckedOne] = useState(false);

  const handleChangeOne = () => {
    setCheckedOne("Yes");
  };

  const handleChangeTwo = () => {
    setCheckedOne("No");
  };
  return (
    <div className="managerInputsContainer">
      <div className="managerInputsubContainer" style={{ width: "70vw" }}>
        <div className="inputDiv">
          <p className="PAYtitle">Property Address</p>
          <input
            placeholder="Type Address..."
            onChange={(e) => {
              const form2 = form;
              form2.attributes[1].value = e.target.value;
              setForm(form2);
              setUpdater(updater + 1);
            }}
            className="inputClient"
          ></input>
          <p className="FORMerror"></p>
        </div>
        <div className="inputDiv">
          <p className="PAYtitle">Offer Amount</p>
          <input
            placeholder="Type offer..."
            onChange={(e) => {
              const form2 = form;
              form2.attributes[2].value = e.target.value;
              setForm(form2);
              setUpdater(updater + 1);
            }}
            className="inputClient"
          ></input>
          <p className="FORMerror"></p>
        </div>
        <div className="inputDiv">
          <p className="PAYtitle">Any concessions?</p>
          <input
            placeholder="Type concessions..."
            onChange={(e) => {
              const form2 = form;
              form2.attributes[3].value = e.target.value;
              setForm(form2);
              setUpdater(updater + 1);
            }}
            className="inputClient"
          ></input>
          <p className="FORMerror"></p>
        </div>
        <div className="inputDiv">
          <p className="PAYtitle">Date</p>
          <input
            type="date"
            onChange={(e) => {
              setForm({ ...form, date: e.target.value });
            }}
            className="AQinputPackage"
            style={{ width: "200px" }}
          ></input>
        </div>
      </div>

      <div className="managerInputsubContainer" style={{ width: "60vw" }}>
        <div className="inputDiv">
          <p className="PAYtitle">Notes</p>
          <textarea
            placeholder="Type notes..."
            onChange={(e) => {
              const form2 = form;
              form2.attributes[7].value = e.target.value;
              setForm(form2);
              setUpdater(updater + 1);
            }}
            className="AQinputPackageText"
          ></textarea>
        </div>
        <div className="inputDiv">
          <p className="PAYtitle">Acepted</p>
          <label className="containerCheck2">
            <input
              type="checkbox"
              className="checkBoxCont"
              style={{ color: "red" }}
              checked={checkedOne === "Yes"}
              onChange={(val) => {
                handleChangeOne();
                setForm({ ...form, accepted: "Yes" });
              }}
            />
            <span class="checkmark2"></span>
          </label>
        </div>
        <div className="inputDiv" style={{ marginRight: "163px" }}>
          <p className="PAYtitle" style={{ minWidth: "120px" }}>
            No Accepted
          </p>
          <label className="containerCheck5">
            <input
              type="checkbox"
              className="checkBoxCont"
              checked={checkedOne === "No"}
              onChange={(val) => {
                handleChangeTwo();
                setForm({ ...form, accepted: "No" });
              }}
            />
            <span class="checkmark5"></span>
          </label>
        </div>
      </div>

      <div
        style={{
          position: "absolute",
          right: "55px",
          marginTop: "-30px",
          display: "flex",
        }}
      >
        <button className="PAYbutton" onClick={onSubmit}>
          <p className="PAYbuttonText">Save</p>
        </button>
      </div>
    </div>
  );
};

export default AddHouse;
