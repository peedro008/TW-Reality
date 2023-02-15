import React, { useState } from "react";
import Select from "react-select";
import { BsInfoCircle } from "react-icons/bs";
import EditClientControl from "../../Controllers/clientControllers/editClientControl";
import ContainerTopBar from "./containerTopBar";
import ClientCard from "./clientCard";
import CommonModal from "../Modal";
import IsologoAndBack from "../IsologoAndBack";
import ShowingControl from "../../Controllers/clientControllers/showingControl/showingControl";
import PreQualifyingControl from "../../Controllers/clientControllers/preQualifyingControl/preQualifyingControl";
import ModalInfoClient from "../ModalInfoClient";

const metaDataInitial = {
  message: "Se agrego informacion de client submition. Campos actualizados:",
  cambios: [
    { campo: "Campo 1", value: "Agrego info" },
    { campo: "Campo 2", value: "Nueva imagen" },
    { campo: "Campo 3", value: "Nueva address" },
  ],
};
const ClientHistory = ({
  myClientHistories,
  clientData,
  optionsReason,
  resp,
  onCloseModal,
  setForm,
  form,
  open,
  onSubmit,
  setReloadInfo,
  optionsStatusBuyer,
  optionsStatusSelling,
  optionsStatusRent,
  upload,
  loaderPhoto,

  Users,
  setNewHistory,
  newHistory,
}) => {
  const [openInfoModal, setOpenInfoModal] = useState(false);
  const [metaData, setMetaData] = useState(metaDataInitial);
  return (
    <div className="genericDiv">
      <ContainerTopBar
        newHistory={newHistory}
        setNewHistory={setNewHistory}
        clientData={clientData}
        setForm={setForm}
        form={form}
      />
      <ClientCard
        loaderPhoto={loaderPhoto}
        clientData={clientData}
        upload={upload}
      />

      {clientData?.status === "Pre-qualifying" && (
        <div
          style={{
            position: "relative",
            top: "10px",
            display: "flex",
            paddingLeft: "40px",
            marginBottom: " 20px",
          }}
        >
          <button
            className={
              newHistory === "Pre-Qualifying"
                ? "PAYbuttonSelected"
                : "PAYbutton"
            }
            onClick={() => setNewHistory("Pre-Qualifying")}
          >
            <p className="PAYbuttonText">Pre Qualifying</p>
          </button>
        </div>
      )}
      {clientData?.status === "Showing" && (
        <div
          style={{
            position: "relative",
            top: "10px",
            display: "flex",
            paddingLeft: "40px",
            marginBottom: " 20px",
          }}
        >
          <button
            className={
              newHistory === "Showing" ? "PAYbuttonSelected" : "PAYbutton"
            }
            onClick={() => setNewHistory("Showing")}
          >
            <p className="PAYbuttonText">Showing</p>
          </button>
        </div>
      )}
      <div className="containerTags">
        {/* Modify Status */}
        {newHistory === "newRecord" && (
          <div
            className="managerInputsubContainer"
            style={{ width: "60vw", marginTop: "40px", marginLeft: "40px" }}
          >
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
                    ? optionsStatusBuyer.find(
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
                    ? optionsStatusBuyer
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
        {/* Edit Client */}
        {newHistory === "editClient" && (
          <EditClientControl
            clientData={clientData}
            setReloadInfo={setReloadInfo}
            setNewHistory={setNewHistory}
          />
        )}

        {/* Pre-Qualifying */}
        {newHistory === "Pre-Qualifying" && (
          <PreQualifyingControl
            clientData={clientData}
            setReloadInfo={setReloadInfo}
            setNewHistory={setNewHistory}
          />
        )}

        {/* Showing */}
        {newHistory === "Showing" && (
          <ShowingControl
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
              className="table6"
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
                    <p className="REPtype2">Date</p>
                  </th>
                  <th scope="col" className="column1">
                    <p className="REPtype2">Time</p>
                  </th>
                  <th scope="col" className="column1">
                    <p className="REPtype2">User</p>
                  </th>
                  <th scope="col" className="column1">
                    <p className="REPtype2">Notes</p>
                  </th>
                  <th
                    scope="col"
                    className="column1"
                    style={{
                      maxWidth: "40px",
                      width: "40px",
                      textAlign: "center",
                    }}
                  >
                    <p className="REPtype2" style={{ textAlign: "center" }}>
                      Info
                    </p>
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
                        {Users.filter((f) => f.id === e.bossClientId)[0]?.name}
                      </td>
                      <td
                        className="ClientName"
                        scope="row"
                        style={{ fontWeight: "bold", fontSize: "15px" }}
                      >
                        {e.Notes}
                      </td>
                      <td
                        onClick={() => setOpenInfoModal(true)}
                        className="ClientName"
                        scope="row"
                        style={{
                          cursor: "pointer",
                          display: "flex",
                          justifyContent: "center",
                          alignContent: "center",
                          alignItems: "center",
                          fontWeight: "bold",
                          fontSize: "15px",
                          width: "40px",
                          maxWidth: "40px",
                        }}
                      >
                        <BsInfoCircle
                          size="30px"
                          style={{ alignSelf: "center", color: "lightblue" }}
                        />
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </>
        )}
        {/* Convert to client */}

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
                    ? optionsStatusBuyer.find(
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
                    ? optionsStatusBuyer
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
      <ModalInfoClient
        openInfoModal={openInfoModal}
        setOpenInfoModal={setOpenInfoModal}
        metaData={metaData}
      />
      <CommonModal open={open} onClose={onCloseModal} resp={resp} />
      <IsologoAndBack />
    </div>
  );
};

export default ClientHistory;
