import React, { useEffect, useState } from "react";
import { FaCheck, FaExchangeAlt, FaExclamation } from "react-icons/fa";
import { useSelector } from "react-redux";
import Modal from "react-responsive-modal";
import { NavLink } from "react-router-dom";

const TransactionCoordinatorTable = ({
  soldTransaction,
  Users,
  onCloseModal,
  onOpenModal,
  packages,
  open,
  userId,
}) => {
  const userRole = useSelector((e) => e.userRole);
  const [idTransaction, setIdTransaction] = useState();
  const [mypack, setMypack] = useState()

  console.log(userRole)

  const myUsers = Users?.filter(
    (f) => f.managerId === userId || f.id === userId
  );
  const myUsersID = myUsers.map((f) => {
    return f.id;
  })

  const myPackages = packages?.filter(
    (e) => myUsersID?.includes(e.UserId)
  );
useEffect(() => {
  if(userRole === 'Admin') {
    setMypack(packages)
  } else {
    setMypack(myPackages)
  }
}, [packages])

 
  let New_York_Date = new Date().toLocaleDateString("en-US", {
    timeZone: "America/New_York",
    timestyle: "full",
    hourCycle: "h24",
  });
  return (
    <div>
      <>
        <table
          className="table5"
          style={{
            width: "90vw",
            marginTop: "60px",
            maxWidth: "90vw",
            marginLeft: "0px",
          }}
        >
          <tbody>
            <tr>
              <th scope="col" className="column1">
                <p className="REPtype2">Client name</p>
              </th>
              <th scope="col" className="column1">
                <p className="REPtype2">Sold by</p>
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
                <p className="REPtype2">Sold ?</p>
              </th>
            </tr>
            {mypack?.map((e, i) => {
              return (
                <tr key={i}>
                  <td className="ClientName" scope="row">
                    {e.clientName}
                  </td>
                  <td className="ClientName" scope="row">
                    {Users.find((f) => f.id === e.UserId).name}
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
                        style={{ cursor: "pointer" }}
                        onClick={(f) => {
                          onOpenModal();
                          setIdTransaction(e.id);
                        }}
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
        <Modal open={open} onClose={onCloseModal} center classNames={"modal"}>
          <div className="modal">
            {
              <div
                className="modal"
                style={{ minWidth: "250px", alignItems: "center" }}
              >
                <FaExchangeAlt
                  color="rgb(255, 76, 97)"
                  size={"50px"}
                  style={{
                    alignSelf: "center",
                    marginTop: "25px",
                    marginBottom: "10px",
                  }}
                />
                <p className="modalText">
                  Do you want to close the transaction coordinator?
                </p>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-around",
                    alignItems: "center",
                    width: "300px",
                  }}
                >
                  <button
                    className="modalButtonYes"
                    onClick={(e) =>
                      soldTransaction({
                        id: idTransaction,
                        closingDate: New_York_Date,
                      })
                    }
                  >
                    Yes
                  </button>
                  <button className="modalButtonNo" onClick={onCloseModal}>
                    No
                  </button>
                </div>
              </div>
            }
          </div>
        </Modal>
      </>
    </div>
  );
};

export default TransactionCoordinatorTable;
