import React, { useState } from "react";
import { BiSearchAlt2 } from "react-icons/bi";
import Isologo_background from "../assets/Isologo_background.png";
import { Modal } from "react-responsive-modal";
import Icon from "../assets/Icon.png";
import CrossMark from "../assets/cross-mark.png";
import { NavLink } from "react-router-dom";
import Select from "react-select";
import { BsChevronLeft, BsReverseBackspaceReverse } from "react-icons/bs";

const Contacts = ({
  contacts,
  addContact,
  setForm,
  form,
  respAdd,
  setSearch,
  onCloseModal,
  open,
}) => {
  const [isClosed, setIsClosed] = useState("divFilter");
  return (
    <div className="genericDiv1">
      <div className="genericHeader">
        <p className="genericTitle">Contacts</p>
      </div>
      <div className="containerContact" style={{ marginTop: "10px" }}>
        <div className="containerContactList">
          <div
            className="input-wrapper-contact"
            style={{ marginTop: "15px", marginLeft: "10px" }}
          >
            <input
              type="search"
              className="inputContact"
              placeholder="Type Name or Number..."
              onChange={(e) => {
                setSearch(e.target.value);
              }}
            />
            <BiSearchAlt2 size={"15px"} className="input-icon-contact" />
          </div>

          <div style={{ flexDirection: "row" }}>
            <table
              className="table5"
              style={{
                marginTop: "2vh",
                width: "90vw",
                marginLeft: "0px",
              }}
            >
              <tbody>
                <tr>
                  <th scope="col" className="column1">
                    <p className="REPtype2">Name</p>
                  </th>
                  <th scope="col" className="column1">
                    <p className="REPtype2">Phone</p>
                  </th>

                  <th scope="col" className="column1">
                    <p className="REPtype2">Category</p>
                  </th>
                </tr>
                {contacts?.map((e, i) => {
                  return (
                    <tr key={i}>
                      <td className="ClientName" scope="row">
                        {e.name}
                      </td>
                      <td className="ClientName" scope="row">
                        {e.number}
                      </td>
                      <td className="ClientName" scope="row">
                        {e?.category || "-"}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div className={isClosed} style={{ marginTop: "20px" }}>
        <div
          style={{ marginLeft: "220px", marginTop: "10px", cursor: "pointer" }}
          onClick={() => setIsClosed("filterCloseContact1")}
        >
          <BsReverseBackspaceReverse size={"25px"} />
        </div>
        <div style={{ width: "300px", marginTop: "-10px" }}>
          <div style={{ alignSelf: "center" }}>
            <p className="PAYtitle">Name</p>
            <input
              className="AQinput"
              style={{ width: "230px", minHeight: "30px" }}
              type="text"
              onChange={(e) => setForm({ ...form, name: e.target.value })}
            />
          </div>
        </div>
        <div style={{ width: "300px", marginTop: "20px" }}>
          <p className="PAYtitle">Phone</p>
          <input
            style={{ width: "230px", minHeight: "30px" }}
            className="AQinput"
            type="text"
            onChange={(e) => setForm({ ...form, number: e.target.value })}
          />
        </div>
        {/* <div style={{ display: "flex", marginTop: "20px" }}>
          <p className="PAYtitle">Category</p>
        </div> */}

        <button
          onClick={() => {
            addContact();
            setIsClosed("filterCloseContact2");
          }}
          className="PAYbutton"
          style={{ width: "250px", marginTop: "25px", alignSelf: "center" }}
        >
          <p className="PAYbuttonText">Add Contact</p>
        </button>
      </div>

      <div
        style={{
          cursor: "pointer",
          position: "fixed",
          right: "20px",
          top: "85px",
          zIndex: 100,
          display: "flex",
        }}
        color="#2b4162"
        size={"40px"}
        onClick={() => setIsClosed("filterCloseContact2")}
      >
        <button className="PAYbutton" style={{ marginLeft: "50px" }}>
          <p className="PAYbuttonText">Add Contact</p>
        </button>
      </div>

      <Modal
        open={open}
        onClose={() => {
          onCloseModal();
          setIsClosed("filterCloseContact1");
        }}
        center
        classNames={"modal"}
      >
        <div className="modal">
          {respAdd === "Error adding contant" ? (
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
              <p className="modalText">{respAdd}</p>
            </>
          ) : (
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
              <p className="modalText">{respAdd}</p>
            </>
          )}

          <button
            className="modalButton"
            onClick={() => {
              onCloseModal();
              setIsClosed("filterCloseContact1");
            }}
          >
            Continue
          </button>
        </div>
      </Modal>
      <BsChevronLeft
        cursor="pointer"
        color="grey"
        style={{
          minWidth: "30px",
          minHeight: "30px",
          zIndex: 1010,
          position: "fixed",
          zIndex: 9,
          left: "80px",
          top: "17px",
          alignSelf: "flex-start",
        }}
        onClick={() => window.history.go(-1)}
      />
      <img
        src={Isologo_background}
        style={{
          position: "fixed",
          pointerEvents: "none",
          right: 0,
          bottom: 0,
          width: "428px",
          opacity: "0.5",
        }}
      />
    </div>
  );
};

export default Contacts;
