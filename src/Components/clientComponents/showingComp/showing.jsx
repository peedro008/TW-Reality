import React, { useEffect, useState } from "react";
import "../../../Css/css.css";
import "react-responsive-modal/styles.css";

import LenderFeedbackControl from "../../../Controllers/clientControllers/preQualifyingControl/lenderFeedback";
import CommonModal from "../../Modal";
import IsologoAndBack from "../../IsologoAndBack";
import House from "./House";
import AddHouse from "./AddHouse";
import EditHouse from "./EditHouse";
import AddOffer from "./AddOffer";

function Showing({
  form,
  setForm,
  open,
  onSubmit,
  optionsHouse,
  onCloseModal,
  resp,
  setComprobate,
  clientData,
  updater,
  setUpdater,
  comprobate,
  loadForm,
}) {
  const [isClientSubmition, setIsClientSubmition] = useState("House Detail");

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
                isClientSubmition === "House Detail"
                  ? "PAYbuttonSelectedList"
                  : "PAYbuttonList"
              }
              onClick={() => setIsClientSubmition("House Detail")}
            >
              <p
                className={
                  isClientSubmition === "House Detail"
                    ? "PAYbuttonTextBlack"
                    : "PAYbuttonText"
                }
              >
                House Detail
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
                Offers
              </p>
            </button>
          </div>
          {isClientSubmition === "House Detail" ? (
            <House setComprobate={setComprobate} loadForm={loadForm} />
          ) : (
            <AddOffer
              form={form}
              setForm={setForm}
              setUpdater={setUpdater}
              updater={updater}
              optionsHouse={optionsHouse}
              onSubmit={onSubmit}
            />
          )}
        </>
      ) : comprobate === 1 ? (
        <AddHouse
          form={form}
          setForm={setForm}
          setUpdater={setUpdater}
          updater={updater}
          optionsHouse={optionsHouse}
          onSubmit={onSubmit}
        />
      ) : (
        comprobate === 2 && (
          <EditHouse
            form={form}
            setForm={setForm}
            setUpdater={setUpdater}
            updater={updater}
            optionsHouse={optionsHouse}
            onSubmit={onSubmit}
          />
        )
      )}

      <CommonModal open={open} onClose={onCloseModal} resp={resp} />

      <IsologoAndBack />
    </>
  );
}

export default Showing;
