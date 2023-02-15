import React, { useState } from "react";
import { BiPencil } from "react-icons/bi";
import spinnerr from "../../assets/loadingIcon.gif";

const ClientCard = ({ clientData, upload, loaderPhoto }) => {
  const [showPencil, setShowPencil] = useState(false);
  function formatUSTelephoneNumber(num) {
    num = num.toString()?.replace(/\D/g, ""); // Remove non-numeric characters
    if (num.length === 10) {
      return num.replace(/(\d{3})(\d{3})(\d{4})/, "($1) $2-$3");
    } else if (num.length === 11) {
      return num.replace(/(\d{1})(\d{3})(\d{3})(\d{4})/, "$1 ($2) $3-$4");
    }
    return num;
  }

  return (
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
                Status
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
            {clientData?.phone && formatUSTelephoneNumber(clientData?.phone)}
          </p>
          <p className="clientData" style={{ fontSize: "17px" }}>
            {clientData?.mail}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ClientCard;
