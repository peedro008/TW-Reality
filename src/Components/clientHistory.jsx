import React, { useEffect, useState } from "react";
import Isologo_background from "../assets/Isologo_background.png";
import { Modal } from "react-responsive-modal";
import Select from "react-select";
import Icon from "../assets/Icon.png";
import CrossMark from "../assets/cross-mark.png";
import { BsChevronLeft } from "react-icons/bs";
import { NavLink } from "react-router-dom";
import { useHistory } from "react-router-dom";
import EditClientControl from "../Controllers/editClientControl";

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
}) => {
  const history = useHistory();

  const [checkedOne, setCheckedOne] = useState(clientData?.clientType);
  useEffect(() => {
    setCheckedOne(clientData?.clientType);
  }, [clientData]);

  const [newHistory, setNewHistory] = useState(false);
  const handleChangeOne = () => {
    setCheckedOne("Client");
  };
  const handleChangeTwo = () => {
    setCheckedOne("Lead");
  };
  console.log(clientData);
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
        <p className="genericTitle">{clientData?.clientName}</p>
      </div>
      <div className="containerClientData">
        <div>
          <div style={{ maxWidth: "300px" }}>
            <p className="PAYtitle" style={{ color: "grey" }}>
              Address
            </p>
            <p className="PAYtitle" style={{ fontSize: "23px" }}>
              {clientData?.address || "-"}
            </p>
          </div>
          <div>
            <p className="PAYtitle" style={{ color: "grey" }}>
              Type of Client
            </p>
            <p
              className={
                clientData?.clientType === "Client"
                  ? "PAYtitleClient"
                  : "PAYtitleLead"
              }
            >
              {clientData?.clientType}
            </p>
          </div>
        </div>
        <div>
          <div>
            <p className="PAYtitle" style={{ color: "grey" }}>
              Phone
            </p>
            <p className="PAYtitle" style={{ fontSize: "23px" }}>
              {clientData?.phone}
            </p>
          </div>
          <div>
            <p className="PAYtitle" style={{ color: "grey" }}>
              Transaction Type
            </p>
            <p className="PAYtitle" style={{ fontSize: "25px" }}>
              {clientData?.reason}
            </p>
          </div>
        </div>
        <div>
          <div>
            <p className="PAYtitle" style={{ color: "grey" }}>
              Email
            </p>
            <p className="PAYtitle" style={{ fontSize: "23px" }}>
              {clientData?.mail}
            </p>
          </div>
          <div>
            {clientData?.clientType === "Client" ? (
              <>
                <p className="PAYtitle" style={{ color: "grey" }}>
                  Status Client
                </p>
                <p className="PAYtitle" style={{ fontSize: "25px" }}>
                  {clientData?.status}
                </p>
              </>
            ) : (
              <>
                <p className="PAYtitle" style={{ color: "grey" }}>
                  Lead Source
                </p>
                <p className="PAYtitle" style={{ fontSize: "25px" }}>
                  {clientData?.leadSource}
                </p>
              </>
            )}
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
                  newHistory === "noteTable" ? "PAYbuttonSelected" : "PAYbutton"
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
      </div>

      <div className="containerTags">
        {/* Modify Status */}
        {newHistory === "newRecord" && (
          <div
            className="managerInputsubContainer"
            style={{ width: "60vw", marginTop: "80px", marginLeft: "40px" }}
          >
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
                        style={{ fontWeight: "bold", fontSize: "18px" }}
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
              setNewHistory("statusHistory");
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
