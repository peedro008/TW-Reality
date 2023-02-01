import React, { useEffect, useState } from "react";
import Isologo_background from "../assets/Isologo_background.png";
import { Modal } from "react-responsive-modal";
import Select from "react-select";
import Icon from "../assets/Icon.png";
import CrossMark from "../assets/cross-mark.png";
import { BsChevronLeft } from "react-icons/bs";
import spinnerr from "../assets/loadingIcon.gif";
import { NavLink } from "react-router-dom";
import { useHistory } from "react-router-dom";
import EditClientControl from "../Controllers/editClientControl";
import { BiCloudUpload, BiPencil } from "react-icons/bi";

const ClientHistory = ({
  myClientHistories,
  clientData,
  optionsStatus,
  optionsReason,
  respEditClient,
  optionsStatusLead,
  onCloseModal,
  setForm,
  form,
  open,
  onSubmit,
  setReloadInfo,
  optionsStatusListing,
  optionsStatusSelling,
  optionsStatusRent,
  upload,
  loaderPhoto,
  goStatus,
}) => {
  const [newHistory, setNewHistory] = useState(false);
  const [showPencil, setShowPencil] = useState(false);

  return (
    <div className="genericDiv">
      <div className="containerClientData">
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            marginLeft: "20px",
          }}
        >
          <div style={{ maxWidth: "300px" }}>
            <p className="clientData" style={{ fontSize: "18px" }}>
              {clientData?.clientName || <br></br>}
            </p>
          </div>
          <div
            style={{
              width: "100px",
              height: "100px",
              borderRadius: "10px",
              display: "flex",
              alignItems: "start",
              justifyContent: "end",
              backgroundColor: "#00285218",
            }}
          >
            <div
              class="file-input"
              onMouseEnter={() => setShowPencil(true)}
              onMouseLeave={() => setShowPencil(false)}
            >
              <input
                onChange={(e) => {
                  upload(e);
                }}
                type="file"
                name="file-input"
                id="file-input"
                class="file-input__input"
              />
              {showPencil && (
                <label class="file-input__label2" htmlFor="file-input">
                  <BiPencil size={"20px"} />
                </label>
              )}
              {loaderPhoto && (
                <img
                  src={spinnerr}
                  style={{
                    width: "100px",
                    position: "absolute",
                    borderRadius: "10px",
                  }}
                />
              )}
              {clientData?.photo ? (
                <img src={clientData?.photo} className="photoProfile" />
              ) : (
                <div className="photoProfile" />
              )}
            </div>
          </div>
        </div>
        <div>
          <div style={{ maxWidth: "300px" }}>
            <p
              className={
                clientData?.clientType === "Client"
                  ? "PAYtitleClient"
                  : "PAYtitleLead"
              }
            >
              {clientData?.clientType}
            </p>

            <br className="clientData"></br>
          </div>
          <div>
            <p className="clientData" style={{ color: "grey" }}>
              Transaction Type
            </p>
            <p className="clientData" style={{ fontSize: "17px" }}>
              {clientData?.reason}
            </p>
          </div>
        </div>
        <div>
          <div>
            <p className="clientData" style={{ color: "grey" }}>
              Address
            </p>
            <p className="clientData" style={{ fontSize: "17px" }}>
              {clientData?.address || "-"}
            </p>
          </div>
          <div>
            {clientData?.clientType === "Client" ? (
              <>
                <p className="clientData" style={{ color: "grey" }}>
                  Status Client
                </p>
                <p className="clientData" style={{ fontSize: "17px" }}>
                  {clientData?.status || "-"}
                </p>
              </>
            ) : (
              <>
                <p className="clientData" style={{ color: "grey" }}>
                  Lead Source
                </p>
                <p className="clientData" style={{ fontSize: "17px" }}>
                  {clientData?.leadSource || "-"}
                </p>
              </>
            )}
          </div>
        </div>
        <div style={{ marginRight: "30px" }}>
          <div>
            <p className="clientData" style={{ color: "grey" }}>
              Contact Info
            </p>
            <br className="clientData"></br>
            <p className="clientData" style={{ fontSize: "17px" }}>
              {clientData?.phone}
            </p>
            <p className="clientData" style={{ fontSize: "17px" }}>
              {clientData?.mail}
            </p>
          </div>
        </div>
      </div>
      <div style={{ display: "flex" }}>
        {clientData?.clientType === "Client" ? (
          <>
            <div
              style={{
                position: "relative",
                top: "40px",
                display: "flex",
                paddingLeft: "40px",
              }}
            >
              <button
                className={
                  newHistory === "statusHistory"
                    ? "PAYbuttonSelected"
                    : "PAYbutton"
                }
                onClick={() => setNewHistory("statusHistory")}
              >
                <p className="PAYbuttonText">Status History</p>
              </button>
            </div>

            <div
              style={{
                position: "relative",
                top: "40px",
                display: "flex",
                paddingLeft: "40px",
              }}
            >
              <button
                className={
                  newHistory === "newRecord" ? "PAYbuttonSelected" : "PAYbutton"
                }
                onClick={() => setNewHistory("newRecord")}
              >
                <p className="PAYbuttonText">Modify status</p>
              </button>
            </div>
          </>
        ) : (
          <>
            <div
              style={{
                position: "relative",
                top: "40px",
                display: "flex",
                paddingLeft: "40px",
              }}
            >
              <button
                className={
                  newHistory === "statusHistory"
                    ? "PAYbuttonSelected"
                    : "PAYbutton"
                }
                onClick={() => setNewHistory("noteTable")}
              >
                <p className="PAYbuttonText">Notes History</p>
              </button>
            </div>

            <div
              style={{
                position: "relative",
                top: "40px",
                display: "flex",
                paddingLeft: "40px",
              }}
            >
              <button
                className={
                  newHistory === "addNote" ? "PAYbuttonSelected" : "PAYbutton"
                }
                onClick={() => setNewHistory("addNote")}
              >
                <p className="PAYbuttonText">Add Note</p>
              </button>
            </div>
          </>
        )}

        <div
          style={{
            position: "relative",
            top: "40px",
            display: "flex",
            paddingLeft: "40px",
          }}
        >
          <button
            className={
              newHistory === "editClient" ? "PAYbuttonSelected" : "PAYbutton"
            }
            onClick={() => setNewHistory("editClient")}
          >
            {clientData?.clientType === "Client" ? (
              <p className="PAYbuttonText">Edit Client</p>
            ) : (
              <p className="PAYbuttonText">Edit Lead</p>
            )}
          </button>
        </div>
        {clientData?.clientType === "Lead" && (
          <div
            style={{
              position: "relative",
              top: "40px",
              display: "flex",
              paddingLeft: "40px",
            }}
          >
            <button
              className={
                newHistory === "convert" ? "PAYbuttonSelected" : "PAYbutton"
              }
              onClick={() => {
                setNewHistory("convert");
                setForm({ ...form, clientType: "Client" });
              }}
            >
              <p className="PAYbuttonText">Convert to Client</p>
            </button>
          </div>
        )}
      </div>

      <div className="containerTags">
        {/* Modify Status */}
        {newHistory === "newRecord" && (
          <div
            className="managerInputsubContainer"
            style={{ width: "60vw", marginTop: "40px", marginLeft: "40px" }}
          >
            {/* <div className="inputDiv">
              <p className="PAYtitle">Client</p>
              <label className="containerCheck2">
                <input
                  type="checkbox"
                  className="checkBoxCont"
                  style={{ color: "red" }}
                  checked={checkedOne === "Client"}
                  onChange={(val) => {
                    handleChangeOne();
                  setForm  ({ ...form, clientType: "Client" });
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
            </div> */}
            <div className="inputDiv">
              <p className="PAYtitle">Transaction Type</p>
              <Select
                onChange={(val) => setForm({ ...form, reason: val.value })}
                defaultValue={optionsReason.find(
                  (e) => e.value === clientData?.reason
                )}
                options={
                  form?.clientType === "Client" ? optionsReason : optionsReason
                }
                name={"Realtor Name"}
                className="PAYselect2"
                placeholder="Select Reason"
              />
            </div>
            <div className="inputDiv">
              <p className="PAYtitle">Status</p>
              <Select
                onChange={(val) => setForm({ ...form, status: val.value })}
                defaultValue={
                  form?.reason === "Buyer"
                    ? optionsStatusListing.find(
                        (e) => e.value === clientData?.status
                      )
                    : form?.reason === "Seller"
                    ? optionsStatusSelling.find(
                        (e) => e.value === clientData?.status
                      )
                    : optionsStatusRent.find(
                        (e) => e.value === clientData?.status
                      )
                }
                options={
                  form?.reason === "Buyer"
                    ? optionsStatusListing
                    : form?.reason === "Seller"
                    ? optionsStatusSelling
                    : optionsStatusRent
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
                right: "55px",
                // top: "76px",
                marginTop: "-30px",
                display: "flex",
              }}
            >
              <button className="PAYbutton" onClick={() => onSubmit()}>
                <p className="PAYbuttonText">Save</p>
              </button>
            </div>
          </div>
        )}
        {/* Table */}
        {newHistory === "statusHistory" && (
          <>
            <table
              className="table5"
              style={{
                width: "89vw",

                borderRadius: "10px",
                marginTop: "0px",
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
                    <p className="REPtype2">Hora</p>
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
                        style={{ width: "150px" }}
                      >
                        {e.modifyDate?.slice(0, 10)}
                      </td>
                      <td
                        className="ClientName"
                        scope="row"
                        style={{ width: "150px" }}
                      >
                        {e.modifyDate?.slice(11, 19)}
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
        )}
        {/* Edit Client */}
        {newHistory === "editClient" && (
          <EditClientControl
            clientData={clientData}
            setReloadInfo={setReloadInfo}
            setNewHistory={setNewHistory}
          />
        )}
        {/* Add Note */}
        {newHistory === "addNote" && (
          <div
            className="managerInputsubContainer"
            style={{ width: "60vw", marginTop: "20px", marginLeft: "40px" }}
          >
            {/* <div className="inputDiv">
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
              <p className="PAYtitle">Transaction Type</p>
              <Select
                onChange={(val) => setForm({ ...form, reason: val.value })}
                defaultValue={optionsReason.find(
                  (e) => e.value === clientData?.reason
                )}
                options={
                  form?.clientType === "Client" ? optionsReason : optionsReason
                }
                name={"Realtor Name"}
                className="PAYselect2"
                placeholder="Select Reason"
              />
            </div>
            <div className="inputDiv">
              <p className="PAYtitle">Status</p>
              <Select
                onChange={(val) => setForm({ ...form, status: val.value })}
                defaultValue={
                  form?.reason === "Buyer"
                    ? optionsStatusListing.find(
                        (e) => e.value === clientData?.status
                      )
                    : form?.reason === "Seller"
                    ? optionsStatusSelling.find(
                        (e) => e.value === clientData?.status
                      )
                    : optionsStatusRent.find(
                        (e) => e.value === clientData?.status
                      )
                }
                options={
                  form?.reason === "Buyer"
                    ? optionsStatusListing
                    : form?.reason === "Seller"
                    ? optionsStatusSelling
                    : optionsStatusRent
                }
                name={"Realtor Name"}
                className="PAYselect2"
                placeholder="Select Status"
              />
            </div> */}
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
                right: "55px",
                // top: "76px",
                marginTop: "-10px",
                display: "flex",
              }}
            >
              <button className="PAYbutton" onClick={() => onSubmit()}>
                <p className="PAYbuttonText">Save</p>
              </button>
            </div>
          </div>
        )}
        {/* Notes Table */}
        {newHistory === "noteTable" && (
          <>
            <table
              className="table5"
              style={{
                width: "89vw",

                borderRadius: "10px",
                marginTop: "0px",
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
                    <p className="REPtype2">Hora</p>
                  </th>

                  <th
                    scope="col"
                    className="column1"
                    style={{
                      alignSelf: "center",
                      justifySelf: "center",
                      textAlign: "center",
                    }}
                  >
                    <p className="REPtype2">Notes</p>
                  </th>
                </tr>
                {myClientHistories?.map((e, i) => {
                  return (
                    <tr key={i}>
                      <td
                        className="ClientName"
                        scope="row"
                        style={{ width: "150px" }}
                      >
                        {e.modifyDate?.slice(0, 10)}
                      </td>
                      <td
                        className="ClientName"
                        scope="row"
                        style={{ width: "150px" }}
                      >
                        {e.modifyDate?.slice(11, 19)}
                      </td>

                      <td
                        className="ClientName"
                        scope="row"
                        style={{ fontWeight: "bold", fontSize: "15px" }}
                      >
                        {e.Notes}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </>
        )}
        {/* Convert to client */}
        {/* Modify Status */}
        {newHistory === "convert" && (
          <div
            className="managerInputsubContainer"
            style={{ width: "60vw", marginTop: "40px", marginLeft: "40px" }}
          >
            <div className="inputDiv">
              <p className="PAYtitle">Status</p>
              <Select
                onChange={(val) => setForm({ ...form, status: val.value })}
                defaultValue={
                  form?.reason === "Buyer"
                    ? optionsStatusListing.find(
                        (e) => e.value === clientData?.status
                      )
                    : form?.reason === "Seller"
                    ? optionsStatusSelling.find(
                        (e) => e.value === clientData?.status
                      )
                    : optionsStatusRent.find(
                        (e) => e.value === clientData?.status
                      )
                }
                options={
                  form?.reason === "Buyer"
                    ? optionsStatusListing
                    : form?.reason === "Seller"
                    ? optionsStatusSelling
                    : optionsStatusRent
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
                right: "55px",
                // top: "76px",
                marginTop: "-30px",
                display: "flex",
              }}
            >
              <button className="PAYbutton" onClick={() => onSubmit()}>
                <p className="PAYbuttonText">Save</p>
              </button>
            </div>
          </div>
        )}
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

          <button
            className="modalButton"
            onClick={() => {
              onCloseModal();
              setNewHistory(goStatus);
            }}
          >
            Continue
          </button>
        </div>
      </Modal>

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
          zIndex: 1009,
          left: "80px",
          top: "17px",
          alignSelf: "flex-start",
          zIndex: "1000",
        }}
        onClick={() => window.history.go(-1)}
      />
    </div>
  );
};

export default ClientHistory;
