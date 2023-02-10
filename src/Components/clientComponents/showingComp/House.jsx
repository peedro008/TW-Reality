import React from "react";

const House = ({ setComprobate, loadForm }) => {
  return (
    <div
      className="managerInputsContainer"
      style={{
        backgroundColor: "whitesmoke",
        margin: "20px",
        paddingTop: "20px",
        height: "75%",
        borderRadius: "10px",
      }}
    >
      <div className="managerInputsubContainer" style={{ width: "70vw" }}>
        <div className="inputDiv">
          <p className="PAYtitle" style={{ color: "gray", width: "250px" }}>
            House Type
          </p>
          <p className="PAYtitle">Data 1</p>
          <p className="FORMerror"></p>
        </div>
        <div className="inputDiv">
          <p className="PAYtitle" style={{ color: "gray", width: "250px" }}>
            City
          </p>
          <p className="PAYtitle">Data 1</p>
          <p className="FORMerror"></p>
        </div>
        <div className="inputDiv">
          <p className="PAYtitle" style={{ color: "gray", width: "250px" }}>
            Zip Codes
          </p>
          <p className="PAYtitle">Data 1</p>
          <p className="FORMerror"></p>
        </div>
      </div>

      <div className="managerInputsubContainer" style={{ width: "60vw" }}>
        <div className="inputDiv">
          <p className="PAYtitle" style={{ color: "gray", width: "250px" }}>
            Bedrooms
          </p>
          <p className="PAYtitle">Data 1</p>
          <p className="FORMerror"></p>
        </div>
        <div className="inputDiv">
          <p className="PAYtitle" style={{ color: "gray", width: "250px" }}>
            Baths
          </p>
          <p className="PAYtitle">Data 2</p>
        </div>
        <div className="inputDiv">
          <p className="PAYtitle" style={{ color: "gray", width: "250px" }}>
            Size (SqFt or Acres)
          </p>
          <p className="PAYtitle"></p>
        </div>
      </div>
      <div className="managerInputsubContainer" style={{ width: "70vw" }}>
        <div className="inputDiv">
          <p className="PAYtitle" style={{ color: "gray", width: "250px" }}>
            Pool
          </p>
          <p className="PAYtitle">Data 2</p>
        </div>
        <div className="inputDiv">
          <p className="PAYtitle" style={{ color: "gray", width: "250px" }}>
            Notes
          </p>
          <p className="PAYtitle">Data 2</p>
        </div>
      </div>
      <div
        style={{
          position: "absolute",
          right: "55px",
          marginTop: "-20px",
          display: "flex",
        }}
      >
        <button
          className="PAYbutton"
          onClick={() => {
            setComprobate(2);
            // loadForm();
          }}
        >
          <p className="PAYbuttonText">Edit</p>
        </button>
      </div>
    </div>
  );
};

export default House;
