import React from "react";
import { BsChevronLeft } from "react-icons/bs";
import { FaCheck, FaExclamation } from "react-icons/fa";
import { useSelector } from "react-redux";

function TransactionCoordSold(props) {
  const packages = props.location.state.aboutProps.TransactionCoordinators;
  let packagesSold = packages.filter((e) => e.isSold === true);
  return (
    <div className="genericDiv1">
      <div className="genericHeader">
        <p className="genericTitle">{props.location.state.aboutProps.name} </p>
      </div>
        <p className="subTittMan" style={{ fontSize: "18px" }}>
          Package Marketing list
        </p>
      <div className="DashContainer">
        <div className="DashSubCont">
          <>
            <table
              className="table5"
              style={{ marginTop: "2vh", width: "90vw" }}
            >
              <tbody>
                <tr>
                  <th scope="col" className="column1">
                    <p className="REPtype2">Client name</p>
                  </th>
                  <th scope="col" className="column1">
                    <p className="REPtype2">Address</p>
                  </th>
                  <th scope="col" className="column1">
                    <p className="REPtype2">Price</p>
                  </th>
                  <th scope="col" className="column1">
                    <p className="REPtype2">Open Date</p>
                  </th>
                  <th scope="col" className="column1">
                    <p className="REPtype2">Closing Date</p>
                  </th>
                  <th scope="col" className="column1">
                    <p className="REPtype2">Sold</p>
                  </th>
                </tr>
                {packagesSold.map((e, i) => {
                  return (
                    <tr key={i}>
                      <td className="ClientName" scope="row">
                        {e.clientName}
                      </td>
                      <td className="ClientName" scope="row">
                        {e.address}
                      </td>
                      <td className="ClientName" scope="row">
                       $ {e.propertyValue}
                      </td>
                      <td className="ClientName" scope="row">
                        {e.openDate}
                      </td>
                      <td className="ClientName" scope="row">
                        {e.closingDate}
                      </td>
                      <td
                        className="ClientName"
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                        scope="row"
                      >
                        {e.isSold === false ? (
                          <FaExclamation
                            color="rgb(255, 76, 97)"
                            size={"25px"}
                          />
                        ) : (
                          <FaCheck
                            color="#14B8A6"
                            size={"25px"}
                            style={{
                              alignSelf: "center",
                            }}
                          />
                        )}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </>
        </div>
      </div>
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
        }}
        onClick={() => window.history.go(-1)}
      />
    </div>
  );
}

export default TransactionCoordSold;
