import React, { useState } from "react";
import CommonModal from "../../Modal";

import AddLenderFeedback from "./AddLenderFeedback";
import EditLenderFeedback from "./EditLenderFeedback";

const LenderFeedback = ({
  form,
  setForm,
  onSubmit,
  uploadDocs,
  clientData,
  setComprobate,
  loadForm,
  onCloseModal,
  loaderPhoto,
  updater,
  comprobate,
  open,
  resp,
  setUpdater,
}) => {
  return (
    <>
      {comprobate === 0 ? (
        clientData?.conditions.find((e) => e.key === "isPreAproved")?.value ===
        true ? (
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
            <div className="inputDiv">
              <p
                className="PAYtitle"
                style={{ fontSize: "20px", width: "250px" }}
              >
                Pre - Approved
              </p>
            </div>
            <div
              className="managerInputsubContainer"
              style={{ width: "70vw", marginTop: "10px" }}
            >
              <div className="inputDiv">
                <p
                  className="PAYtitle"
                  style={{ color: "gray", width: "250px" }}
                >
                  Current Credit Score
                </p>
                <p className="PAYtitle">
                  {
                    clientData?.attributes.find(
                      (e) => e.key === "currentCreditScore"
                    )?.value
                  }
                </p>
              </div>
              <div className="inputDiv">
                <p
                  className="PAYtitle"
                  style={{ color: "gray", width: "250px" }}
                >
                  Pre-Approved Amount
                </p>
                <p className="PAYtitle">
                  {
                    clientData?.attributes.find(
                      (e) => e.key === "preApprovedAmount"
                    )?.value
                  }
                </p>
              </div>
              <div className="inputDiv">
                <p
                  className="PAYtitle"
                  style={{ color: "gray", width: "250px" }}
                >
                  Type of Loan
                </p>
                <p className="PAYtitle">
                  {
                    clientData?.attributes.find((e) => e.key === "typeOfLoan")
                      ?.value
                  }
                </p>
                <p className="FORMerror"></p>
              </div>
            </div>

            <div className="managerInputsubContainer" style={{ width: "60vw" }}>
              <div className="inputDiv">
                <p
                  className="PAYtitle"
                  style={{ color: "gray", width: "250px" }}
                >
                  Down Payment Amount
                </p>
                <p className="PAYtitle">
                  {
                    clientData?.attributes.find(
                      (e) => e.key === "downPaymentAmount"
                    )?.value
                  }
                </p>
                <p className="FORMerror"></p>
              </div>
              <div className="inputDiv">
                <p
                  className="PAYtitle"
                  style={{ color: "gray", width: "250px" }}
                >
                  Estimated cash to close
                </p>
                <p className="PAYtitle">
                  {
                    clientData?.attributes.find(
                      (e) => e.key === "estimatedCash"
                    )?.value
                  }
                </p>
              </div>
              <div className="inputDiv">
                <p
                  className="PAYtitle"
                  style={{ color: "gray", width: "250px" }}
                >
                  Estimated Monthly Payments
                </p>
                <p className="PAYtitle">
                  {
                    clientData?.attributes.find(
                      (e) => e.key === "estimatedMonthlyPayments"
                    )?.value
                  }
                </p>
              </div>
            </div>
            <div className="managerInputsubContainer" style={{ width: "60vw" }}>
              <div className="inputDiv">
                <p
                  className="PAYtitle"
                  style={{ color: "gray", width: "250px" }}
                >
                  Pre-Approval and DU
                </p>
                <p className="PAYtitle">
                  {clientData?.files
                    .filter((e) => e.type === "pre-approval")
                    .map((e, i) => {
                      return (
                        <div>
                          <a
                            key={i}
                            className="PAYtitle"
                            href={e.link}
                            target="_blank"
                          >
                            {e.name}{" "}
                          </a>
                        </div>
                      );
                    })}
                </p>
              </div>
              <div className="inputDiv">
                <p
                  className="PAYtitle"
                  style={{ color: "gray", width: "250px" }}
                >
                  Notes
                </p>
                <p className="PAYtitle">
                  {
                    clientData?.attributes.find(
                      (e) => e.key === "notesLenderFeedback"
                    )?.value
                  }
                </p>
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
                  loadForm();
                }}
              >
                <p className="PAYbuttonText">Edit</p>
              </button>
            </div>
          </div>
        ) : (
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
            <div
              className="inputDiv"
              style={{
                marginBottom: "-20px",
              }}
            >
              <p
                className="PAYtitle"
                style={{
                  fontSize: "20px",
                  width: "350px",
                  marginBottom: "-20px",
                }}
              >
                Need to work on credit or Income
              </p>
            </div>
            <div className="managerInputsubContainer" style={{ width: "70vw" }}>
              <div className="inputDiv">
                <p
                  className="PAYtitle"
                  style={{ color: "gray", width: "250px" }}
                >
                  Current Credit Score
                </p>
                <p className="PAYtitle">
                  {
                    clientData?.attributes.find(
                      (e) => e.key === "currentCreditScore"
                    )?.value
                  }
                </p>
              </div>
              <div className="inputDiv">
                <p
                  className="PAYtitle"
                  style={{ color: "gray", width: "250px" }}
                >
                  Did you run credit simulator?
                </p>
                <p className="PAYtitle">
                  {
                    clientData?.attributes.find((e) => e.key === "didYouRunCS")
                      ?.value
                  }
                </p>
              </div>
              <div className="inputDiv">
                <p
                  className="PAYtitle"
                  style={{ color: "gray", width: "250px" }}
                >
                  Notes
                </p>
                <p className="PAYtitle">
                  {
                    clientData?.attributes.find(
                      (e) => e.key === "notesLenderFeedback"
                    )?.value
                  }
                </p>
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
                  loadForm();
                }}
              >
                <p className="PAYbuttonText">Edit</p>
              </button>
            </div>
          </div>
        )
      ) : comprobate === 1 ? (
        <AddLenderFeedback
          form={form}
          setForm={setForm}
          onSubmit={onSubmit}
          uploadDocs={uploadDocs}
          loaderPhoto={loaderPhoto}
          updater={updater}
          comprobate={comprobate}
          open={open}
          resp={resp}
          setUpdater={setUpdater}
        />
      ) : (
        <EditLenderFeedback
          form={form}
          setForm={setForm}
          onSubmit={onSubmit}
          uploadDocs={uploadDocs}
          loaderPhoto={loaderPhoto}
          updater={updater}
          comprobate={comprobate}
          open={open}
          resp={resp}
          setUpdater={setUpdater}
        />
      )}
      <CommonModal open={open} onCloseModal={onCloseModal} resp={resp} />
    </>
  );
};

export default LenderFeedback;
