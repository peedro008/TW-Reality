import React from "react";
import TimeLineBuyer from "./timeLineBuyer";

const ContainerTopBar = ({
  form,
  setForm,
  newHistory,
  setNewHistory,
  clientData,
}) => {
  return (
    <div style={{ display: "flex", marginBottom: "30px" }}>
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
          <p className="PAYbuttonText">History</p>
        </button>
      </div>
      {clientData?.clientType === "Client" ? (
        <>
          <div
            style={{
              position: "relative",
              top: "40px",
              display: "flex",
              paddingLeft: "10px",
            }}
          >
            <button
              className={
                newHistory === "newRecord" ? "PAYbuttonSelected" : "PAYbutton"
              }
              onClick={() => setNewHistory("newRecord")}
            >
              <p className="PAYbuttonText">Update Status</p>
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
              paddingLeft: "10px",
            }}
          >
            <button
              className={
                newHistory === "addNote" ? "PAYbuttonSelected" : "PAYbutton"
              }
              onClick={() => {
                setNewHistory("addNote");
                setForm({ ...form, clientType: "Lead" });
              }}
            >
              <p className="PAYbuttonText">Add Note</p>
            </button>
          </div>
          <div
            style={{
              position: "relative",
              top: "40px",
              display: "flex",
              paddingLeft: "10px",
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
        </>
      )}

      <div
        style={{
          position: "relative",
          top: "40px",
          display: "flex",
          paddingLeft: "10px",
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
      {clientData?.clientType === "Client" && (
        <TimeLineBuyer clientData={clientData} setNewHistory={setNewHistory} />
      )}
    </div>
  );
};

export default ContainerTopBar;
