import React from "react";

const ClientSubmition = ({ clientData, setComprobate, loadForm }) => {
  return (
    <div
      className="managerInputsContainer"
      style={{
        backgroundColor: "whitesmoke",
        margin: "20px",
        paddingTop: "20px",
        height: "auto",
        borderRadius: "10px",
      }}
    >
      <div className="managerInputsubContainer" style={{ width: "70vw" }}>
        <div style={{ marginBottom: "-20px" }}>
          <div style={{ display: "flex", marginBottom: "-20px" }}>
            <div className="inputDiv" style={{ display: "flex" }}>
              <p className="PAYtitle" style={{ color: "gray", width: "170px" }}>
                Self Employee - 1099
              </p>
              <p className="PAYtitle" style={{ marginTop: "-2px" }}>
                {clientData?.conditions.find((e) => e.key === "selfEmployee")
                  ?.value === true
                  ? "✅"
                  : "❎"}
              </p>
            </div>
            <div className="inputDiv" style={{ display: "flex" }}>
              <p className="PAYtitle" style={{ color: "gray", width: "210px" }}>
                W2 - Employee by Others
              </p>
              <p className="PAYtitle" style={{ marginTop: "-2px" }}>
                {clientData?.conditions.find(
                  (e) => e.key === "employeeByOthers"
                )?.value === true
                  ? "✅"
                  : "❎"}
              </p>
            </div>
          </div>
          <div style={{ display: "flex", marginBottom: "-20px" }}>
            <div className="inputDiv" style={{ display: "flex" }}>
              <p className="PAYtitle" style={{ color: "gray", width: "80px" }}>
                Resident
              </p>
              <p className="PAYtitle" style={{ marginTop: "-2px" }}>
                {clientData?.conditions.find((e) => e.key === "resident")
                  ?.value === true
                  ? "✅"
                  : "❎"}
              </p>
            </div>
            <div className="inputDiv" style={{ display: "flex" }}>
              <p className="PAYtitle" style={{ color: "gray", width: "85px" }}>
                Us citicen
              </p>
              <p className="PAYtitle" style={{ marginTop: "-2px" }}>
                {clientData?.conditions.find((e) => e.key === "usCiticen")
                  ?.value === true
                  ? "✅"
                  : "❎"}
              </p>
            </div>
            <div className="inputDiv" style={{ display: "flex" }}>
              <p className="PAYtitle" style={{ color: "gray", width: "108px" }}>
                Work Permit
              </p>
              <p className="PAYtitle" style={{ marginTop: "-2px" }}>
                {clientData?.conditions.find((e) => e.key === "workPermit")
                  ?.value === true
                  ? "✅"
                  : "❎"}
              </p>
            </div>
          </div>
        </div>
        <div className="inputDiv" style={{ height: "auto" }}>
          <p className="PAYtitle" style={{ color: "gray", width: "250px" }}>
            1099 - W2 - Incometax...
          </p>
          {clientData?.files
            .filter((e) => e.type === "normal")
            .map((e, i) => {
              return (
                <div>
                  <a key={i} className="PAYtitle" href={e.link} target="_blank">
                    {e.name}{" "}
                  </a>
                </div>
              );
            })}
        </div>
        <div className="inputDiv" style={{ height: "auto" }}>
          <p className="PAYtitle" style={{ color: "gray", width: "250px" }}>
            Driver License
          </p>
          {clientData?.files
            .filter((e) => e.type === "license")
            .map((e, i) => {
              return (
                <a key={i} className="PAYtitle" href={e.link} target="_blank">
                  {e.name}
                </a>
              );
            })}
        </div>
      </div>

      <div className="managerInputsubContainer" style={{ width: "60vw" }}>
        <div className="inputDiv">
          <p className="PAYtitle" style={{ color: "gray", width: "250px" }}>
            Time at current job or Business
          </p>
          <p className="PAYtitle">
            {
              clientData?.attributes.find((e) => e.key === "timeBusiness")
                ?.value
            }
          </p>
          <p className="FORMerror"></p>
        </div>
        <div className="inputDiv">
          <p className="PAYtitle" style={{ color: "gray", width: "250px" }}>
            Pay per hour
          </p>
          <p className="PAYtitle">
            {clientData?.attributes.find((e) => e.key === "payPerHour")?.value}
          </p>
        </div>
        <div className="inputDiv">
          <p className="PAYtitle" style={{ color: "gray", width: "250px" }}>
            Hours per week
          </p>
          <p className="PAYtitle">
            {
              clientData?.attributes.find((e) => e.key === "hoursPerWeek")
                ?.value
            }
          </p>
        </div>
        <div className="inputDiv">
          <p className="PAYtitle" style={{ color: "gray", width: "250px" }}>
            Desire House Type
          </p>
          <p className="PAYtitle">
            {
              clientData?.attributes.find((e) => e.key === "desireHouseType")
                ?.value
            }
          </p>
        </div>
      </div>
      <div className="managerInputsubContainer" style={{ width: "60vw" }}>
        <div className="inputDiv">
          <p className="PAYtitle" style={{ color: "gray", width: "250px" }}>
            Money for closing
          </p>
          <p className="PAYtitle">
            {
              clientData?.attributes.find((e) => e.key === "moneyForClosing")
                ?.value
            }
          </p>
        </div>
        <div>
          <p className="PAYtitle" style={{ color: "gray", width: "300px" }}>
            List Previus Jobs
          </p>
          {clientData?.attributes.find((e) => e.key === "sameJob")?.value ===
            "Yes" &&
            clientData?.attributes.find((e) => e.key === "previusJobName") && (
              <div className="inputDiv">
                <p className="PAYtitle" style={{ marginBottom: "0px" }}>
                  - Name:{" "}
                  {
                    clientData?.attributes.find(
                      (e) => e.key === "previusJobName"
                    )?.value
                  }
                </p>
                <p className="PAYtitle">
                  - Position:{" "}
                  {
                    clientData?.attributes.find(
                      (e) => e.key === "previusJobPosition"
                    )?.value
                  }
                </p>
              </div>
            )}
          {clientData?.attributes.find((e) => e.key === "sameJob").value ===
            "No" && (
            <>
              {clientData?.attributes.find(
                (e) => e.key === "previusJobName1"
              ) && (
                <div className="inputDiv">
                  <p className="PAYtitle" style={{ marginBottom: "0px" }}>
                    - Name:{" "}
                    {
                      clientData?.attributes.find(
                        (e) => e.key === "previusJobName1"
                      )?.value
                    }
                  </p>
                  <p className="PAYtitle">
                    - Position:{" "}
                    {
                      clientData?.attributes.find(
                        (e) => e.key === "previusJobPosition1"
                      )?.value
                    }
                  </p>
                </div>
              )}
              {clientData?.attributes.find(
                (e) => e.key === "previusJobName2"
              ) && (
                <div className="inputDiv">
                  <p className="PAYtitle" style={{ marginBottom: "0px" }}>
                    - Name:{" "}
                    {
                      clientData?.attributes.find(
                        (e) => e.key === "previusJobName2"
                      )?.value
                    }
                  </p>
                  <p className="PAYtitle">
                    - Position:{" "}
                    {
                      clientData?.attributes.find(
                        (e) => e.key === "previusJobPosition2"
                      )?.value
                    }
                  </p>
                </div>
              )}
              {clientData?.attributes.find(
                (e) => e.key === "previusJobName3"
              ) && (
                <div className="inputDiv">
                  <p className="PAYtitle" style={{ marginBottom: "0px" }}>
                    - Name:{" "}
                    {
                      clientData?.attributes.find(
                        (e) => e.key === "previusJobName3"
                      )?.value
                    }
                  </p>
                  <p className="PAYtitle">
                    - Position:{" "}
                    {
                      clientData?.attributes.find(
                        (e) => e.key === "previusJobPosition3"
                      )?.value
                    }
                  </p>
                </div>
              )}
            </>
          )}
        </div>
        {clientData?.attributes.find((e) => e.key === "sameJob")?.value ===
          "Yes" && (
          <div className="inputDiv">
            <p className="PAYtitle" style={{ color: "gray", width: "250px" }}>
              Overtime
            </p>

            <p className="PAYtitle">
              {clientData?.attributes.find((e) => e.key === "overtime")?.value}
            </p>
          </div>
        )}
        <div className="inputDiv">
          <p className="PAYtitle" style={{ color: "gray", width: "250px" }}>
            Notes
          </p>
          <p className="PAYtitle">
            {clientData?.attributes.find((e) => e.key === "Notes")?.value}
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
  );
};

export default ClientSubmition;
