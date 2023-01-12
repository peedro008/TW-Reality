import React, { useState } from "react";
import Isologo_background from "../assets/Isologo_background.png";
import { Modal } from "react-responsive-modal";
import Select from "react-select";
import Icon from "../assets/Icon.png";
import CrossMark from "../assets/cross-mark.png";
import { BsChevronLeft } from "react-icons/bs";
import { NavLink } from "react-router-dom";
import { useHistory } from "react-router-dom";

const ClientHistory = ({
  myClientHistories,
  clientData,
  optionsStatus,
  respEditClient,
  optionsStatusLead,
  onCloseModal,
  setForm,
  form,
  open,
  onSubmit
}) => {
  const history = useHistory();
 
  const [checkedOne, setCheckedOne] = useState(clientData.clientType);
  const [newHistory, setNewHistory] = useState(false);
  const handleChangeOne = () => {
    setCheckedOne("Client");
  };
  const handleChangeTwo = () => {
    setCheckedOne("Lead");
  };

  const navegator = (e) => {
    history.push({
      pathname: "/editClient",
      state: {
        client: clientData,
      },
    });
  };
  return (
    <div className="genericDiv">
      <div className="genericHeader">
        <p className="genericTitle">{clientData.clientName}</p>
      </div>
      <div style={{paddingLeft: '40px'}}>
        <p className={clientData.clientType === 'Client' ? "PAYtitleClient" : "PAYtitleLead"}>{clientData.clientType}</p>
      </div>
      <div style={{paddingLeft: '40px'}}>
        <p className="PAYtitle" style={{fontSize: '25px'}}>{clientData.status}</p>
      </div>
      {newHistory === false ? (
        <div
          style={{
            position: "relative",
            top: "40px",
            display: "flex",
            paddingLeft: '40px'
          }}
        >
          <button className="PAYbutton" onClick={() => setNewHistory(true)}>
            <p className="PAYbuttonText">New Record</p>
          </button>
        </div>
      ) : (
        <div
          className="managerInputsubContainer"
          style={{ width: "60vw", marginTop: "50px", marginLeft: '40px' }}
        >
          <div className="inputDiv">
            <p className="PAYtitle">Modify Date</p>
            <input
              type={"date"}
              onChange={(e) => {
                setForm({ ...form, modifyDate: e.target.value });
              }}
              placeholder="Added Date"
              className="AQinputPackage"
            ></input>
          </div>
          <div className="inputDiv">
            <p className="PAYtitle">Client</p>
            <label className="containerCheck2">
              <input
                type="checkbox"
                className="checkBoxCont"
                style={{ color: "red" }}
                checked={checkedOne === "Client"}
                onChange={(val) => {
                  handleChangeOne();
                  setForm({ ...form, clientType: "Client" });
                }}
              />
              <span className="checkmark2"></span>
            </label>
          </div>
          <div className="inputDiv">
            <p className="PAYtitle">Lead</p>
            <label className="containerCheck">
              <input
                type="checkbox"
                className="checkBoxCont"
                checked={checkedOne === "Lead"}
                onChange={(val) => {
                  handleChangeTwo();
                  setForm({ ...form, clientType: "Lead" });
                }}
              />
              <span className="checkmark"></span>
            </label>
          </div>

          <div className="inputDiv">
            <p className="PAYtitle">Status</p>
            <Select
              onChange={(val) => setForm({ ...form, status: val.value })}
              defaultValue={form?.clientType === "Client" ? optionsStatus.find(
                (e) => e.value === clientData.status) : optionsStatusLead.find(
                  (e) => e.value === clientData.status
              )}
              options={
                form?.clientType === "Client"
                  ? optionsStatus
                  : optionsStatusLead
              }
              name={"Realtor Name"}
              className="PAYselect2"
              placeholder="Select Status"
            />
          </div>
          <div className="inputDiv">
            <p className="PAYtitle">Notes</p>
            <textarea
              placeholder="Type notes..."
              onChange={(e) => {
                setForm({ ...form, Notes: e.target.value });
              }}
              className="AQinputPackageText"
            ></textarea>
          </div>
          <div
            style={{
              position: "absolute",
              right: "50px",
              top: "76px",
              display: "flex",
            }}
          >
            <button className="PAYbutton" onClick={() => onSubmit()}>
              <p className="PAYbuttonText">Add Record</p>
            </button>
          </div>
        </div>
      )}

      <div>
        <>
          <table
            className="table5"
            style={{
              width: "90vw",
              marginTop: "100px",
              maxWidth: "90vw",
              marginLeft: "0px",
            }}
          >
            <tbody>
              <tr>
                <th scope="col" className="column1">
                  <p className="REPtype2">Fecha</p>
                </th>
                <th scope="col" className="column1">
                  <p className="REPtype2">Client Type</p>
                </th>
                <th scope="col" className="column1">
                  <p className="REPtype2">Status</p>
                </th>
                <th scope="col" className="column1">
                  <p className="REPtype2">Notes</p>
                </th>
              </tr>
              {myClientHistories?.map((e, i) => {
                return (
                  <tr key={i}>
                    <td
                      className="ClientName"
                      scope="row"
                      style={{ width: "200px" }}
                    >
                      {e.modifyDate}
                    </td>
                    <td
                      className={
                        e.clientType === "Client"
                          ? "ClientNameC"
                          : "ClientNameL"
                      }
                      style={{ width: "200px" }}
                      scope="row"
                    >
                      {e.clientType}
                    </td>
                    <td
                      className="ClientName"
                      scope="row"
                      style={{ width: "200px" }}
                    >
                      {e.status}
                    </td>
                    <td className="ClientName" scope="row">
                      {e.Notes}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </>
      </div>
      <Modal open={open} onClose={onCloseModal} center classNames={"modal"}>
        <div className="modal">
          {respEditClient[0] ? (
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

              <p className="modalText">{respEditClient[1]}</p>
            </>
          ) : (
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

              <p className="modalText">{respEditClient[1]}</p>
            </>
          )}

          <button className="modalButton">
            <NavLink
              style={{ textDecoration: "none", color: "#000" }}
              to={"/clients"}
            >
              Continue
            </NavLink>
          </button>
        </div>
      </Modal>
      <div
            style={{
              position: "absolute",
              right: "250px",
              top: "76px",
              display: "flex",
            }}
          >
            <button className="PAYbutton" onClick={() => navegator()}>
              <p className="PAYbuttonText">Edit Client</p>
            </button>
          </div>
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
      <BsChevronLeft
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
      />
    </div>
  );
};

export default ClientHistory;
