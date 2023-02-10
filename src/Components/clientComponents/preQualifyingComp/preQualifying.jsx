import React, { useEffect, useState } from "react";
import "../../../Css/css.css";
import "react-responsive-modal/styles.css";
import LenderFeedbackControl from "../../../Controllers/clientControllers/preQualifyingControl/lenderFeedback";
import CommonModal from "../../Modal";
import IsologoAndBack from "../../IsologoAndBack";
import ClientSubmition from "./ClientSubmition";
import AddClientSubmition from "./AddClientSubmition";
import EditClientSubmition from "./EditClientSubmition";

function PreQualifying({
  form,
  setForm,
  open,
  onSubmit,
  onCloseModal,
  resp,
  uploadDocs,
  uploadDriverLicense,
  setReloadInfo,
  setComprobate,
  clientData,
  loaderPhoto,
  loaderPhotoLicense,
  updater,
  setUpdater,
  comprobate,
  loadForm,
}) {
  const [isClientSubmition, setIsClientSubmition] =
    useState("Client Submition");

  // let validation =
  //   form.clientName?.length < 3 ||
  //   typeof form.clientName === "undefined" ||
  //   typeof form.phone === "undefined" ||
  //   typeof form.reason === "undefined" ||
  //   typeof form.clientType === "undefined" ||
  //   typeof form.status === "undefined";

  return (
    <>
      {comprobate === 0 ? (
        <>
          <div
            style={{
              position: "absolute",
              marginTop: "-35px",
              display: "flex",
              paddingLeft: "0px",
            }}
          >
            <button
              className={
                isClientSubmition === "Client Submition"
                  ? "PAYbuttonSelectedList"
                  : "PAYbuttonList"
              }
              onClick={() => setIsClientSubmition("Client Submition")}
            >
              <p
                className={
                  isClientSubmition === "Client Submition"
                    ? "PAYbuttonTextBlack"
                    : "PAYbuttonText"
                }
              >
                Client Submition
              </p>
            </button>
            <button
              style={{ marginLeft: "10px" }}
              className={
                isClientSubmition === "Lender feedback"
                  ? "PAYbuttonSelectedList"
                  : "PAYbuttonList"
              }
              onClick={() => setIsClientSubmition("Lender feedback")}
            >
              <p
                className={
                  isClientSubmition === "Lender feedback"
                    ? "PAYbuttonTextBlack"
                    : "PAYbuttonText"
                }
              >
                Lender feedback
              </p>
            </button>
          </div>
          {/* <div
            style={{
              position: "relative",
              top: "0px",
              display: "flex",
              paddingLeft: "0px",
            }}
          >
            <button
              className={
                isClientSubmition === "Client Submition"
                  ? "PAYbuttonSelected"
                  : "PAYbutton"
              }
              onClick={() => setIsClientSubmition("Client Submition")}
            >
              <p className="PAYbuttonText">Client Submition</p>
            </button>
            <button
              style={{ marginLeft: "10px" }}
              className={
                isClientSubmition === "Lender feedback"
                  ? "PAYbuttonSelected"
                  : "PAYbutton"
              }
              onClick={() => setIsClientSubmition("Lender feedback")}
            >
              <p className="PAYbuttonText">Lender feedback</p>
            </button>
          </div> */}
          {isClientSubmition === "Client Submition" ? (
            <ClientSubmition
              clientData={clientData}
              setComprobate={setComprobate}
              loadForm={loadForm}
            />
          ) : (
            <LenderFeedbackControl
              clientData={clientData}
              setReloadInfo={setReloadInfo}
            />
          )}
        </>
      ) : comprobate === 1 ? (
        <AddClientSubmition
          form={form}
          setForm={setForm}
          uploadDocs={uploadDocs}
          loaderPhoto={loaderPhoto}
          uploadDriverLicense={uploadDriverLicense}
          setUpdater={setUpdater}
          updater={updater}
          onSubmit={onSubmit}
          loaderPhotoLicense={loaderPhotoLicense}
        />
      ) : (
        comprobate === 2 && (
          <EditClientSubmition
            clientData={clientData}
            form={form}
            setForm={setForm}
            uploadDocs={uploadDocs}
            loaderPhoto={loaderPhoto}
            setUpdater={setUpdater}
            updater={updater}
            onSubmit={onSubmit}
          />
        )
      )}

      <CommonModal open={open} onClose={onCloseModal} resp={resp} />

      <IsologoAndBack />
    </>
  );
}

export default PreQualifying;
