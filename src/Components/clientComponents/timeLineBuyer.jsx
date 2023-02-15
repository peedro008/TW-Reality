import React, { useEffect, useState } from "react";

const TimeLineBuyer = ({ clientData, setNewHistory }) => {
  const [positionTimeLine, setPositionTimeLine] = useState(1);

  useEffect(() => {
    if (clientData?.status === "Pre-qualifying") {
      setPositionTimeLine(1);
    } else if (clientData?.status === "Showing") {
      setPositionTimeLine(2);
    } else if (clientData?.status === "Under contract") {
      setPositionTimeLine(3);
    } else if (clientData?.status === "Closed") {
      setPositionTimeLine(4);
    }
  }, [clientData]);
  return (
    <div className="containerTimeLine">
      <div className="LineTimeLine"></div>
      <div className="containerBall">
        <p className="REPtype2">Pre Qualifying</p>
        <div className={positionTimeLine < 2 ? "BallCurrent" : "Ball"}>
          {positionTimeLine === 1 ? (
            <p
              style={{
                marginLeft: "4px",
                color: "#198754",
              }}
            >
              ✔
            </p>
          ) : (
            <p
              style={{
                marginLeft: "4px",
                color: "gray",
              }}
            >
              ✔
            </p>
          )}
        </div>
      </div>
      <div className="containerBall">
        <p className="REPtype2">Showing</p>
        <div
          className={
            positionTimeLine === 2
              ? "BallCurrent"
              : positionTimeLine < 2
              ? "Ball"
              : "BallWaiting"
          }
        >
          {positionTimeLine === 2 ? (
            <p
              style={{
                marginLeft: "4px",
                color: "#198754",
              }}
            >
              ✔
            </p>
          ) : (
            positionTimeLine > 2 && (
              <p
                style={{
                  marginLeft: "4px",
                  color: "gray",
                }}
              >
                ✔
              </p>
            )
          )}
        </div>
      </div>
      <div className="containerBall">
        <p className="REPtype2">Under Contract</p>
        <div
          className={
            positionTimeLine === 3
              ? "BallCurrent"
              : positionTimeLine < 3
              ? "Ball"
              : "BallWaiting"
          }
        >
          {positionTimeLine === 3 ? (
            <p
              style={{
                marginLeft: "4px",
                color: "#198754",
              }}
            >
              ✔
            </p>
          ) : (
            positionTimeLine > 3 && (
              <p
                style={{
                  marginLeft: "4px",
                  color: "gray",
                }}
              >
                ✔
              </p>
            )
          )}
        </div>
      </div>
      <div className="containerBall">
        <p className="REPtype2">Closed</p>
        <div
          className={
            positionTimeLine === 4
              ? "BallCurrent"
              : positionTimeLine < 4
              ? "Ball"
              : "BallWaiting"
          }
        >
          {positionTimeLine === 4 ? (
            <p
              style={{
                marginLeft: "4px",
                color: "#198754",
              }}
            >
              ✔
            </p>
          ) : (
            positionTimeLine > 4 && (
              <p
                style={{
                  marginLeft: "4px",
                  color: "gray",
                }}
              >
                ✔
              </p>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default TimeLineBuyer;
