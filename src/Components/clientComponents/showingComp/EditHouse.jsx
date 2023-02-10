import React from "react";
import Select from "react-select";

const EditHouse = ({
  form,
  setForm,
  setUpdater,
  updater,
  optionsHouse,
  onSubmit,
}) => {
  return (
    <div className="managerInputsContainer">
      <div className="managerInputsubContainer" style={{ width: "70vw" }}>
        <div className="inputDiv">
          <p className="PAYtitle">House Type </p>
          <Select
            onChange={(e) => {
              const form2 = form;
              form2.attributes[0].value = e.target.value;
              setForm(form2);
              setUpdater(updater + 1);
            }}
            options={optionsHouse}
            name={"Realtor Name"}
            className="PAYselect3"
            placeholder="Select Type House"
          />
        </div>
        <div className="inputDiv">
          <p className="PAYtitle">City</p>
          <input
            placeholder="Type city..."
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
          <p className="PAYtitle">Zip codes</p>
          <input
            placeholder="Type codes..."
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
      </div>

      <div className="managerInputsubContainer" style={{ width: "60vw" }}>
        <div className="inputDiv">
          <p className="PAYtitle">Bedrooms</p>
          <input
            placeholder="Type quantity..."
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
          <p className="PAYtitle">Baths</p>
          <input
            placeholder="Type quantity..."
            onChange={(e) => {
              const form2 = form;
              form2.attributes[4].value = e.target.value;
              setForm(form2);
              setUpdater(updater + 1);
            }}
            className="inputClient"
          ></input>
          <p className="FORMerror"></p>
        </div>
        <div className="inputDiv">
          <p className="PAYtitle">Size</p>
          <input
            placeholder="Use SqFt or Acres..."
            onChange={(e) => {
              const form2 = form;
              form2.attributes[5].value = e.target.value;
              setForm(form2);
              setUpdater(updater + 1);
            }}
            className="inputClient"
          ></input>
          <p className="FORMerror"></p>
        </div>
      </div>
      <div className="managerInputsubContainer" style={{ width: "60vw" }}>
        <div className="inputDiv">
          <p className="PAYtitle">Pool</p>
          <input
            placeholder="Type yes or not..."
            onChange={(e) => {
              const form2 = form;
              form2.attributes[6].value = e.target.value;
              setForm(form2);
              setUpdater(updater + 1);
            }}
            className="inputClient"
          ></input>
          <p className="FORMerror"></p>
        </div>

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

export default EditHouse;
