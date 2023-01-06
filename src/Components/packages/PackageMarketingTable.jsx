import React, { useState } from "react";
import Modal from "react-responsive-modal";
import { FaCalendar, FaExchangeAlt, FaPause } from "react-icons/fa";

const PackageMarketingTable = ({
  packages,
  Users,
  onCloseModal,
  onSubmit,
  open,
  onOpenModal,
  onSubmitPackage,
  userId
}) => {
  const [isMonthly, setIsMonthly] = useState();
  const [form, setForm] = useState({});

  const myUsersID = Users.map((f) => {
    return f.id;
  })
  const myPackages = packages?.filter(
    (e) => myUsersID?.includes(e.UserId)
  );

  // GET DATE

  const date = new Date();
  let cero = date.getDate() < 10 ? "0" : "";
  const DATE =
    date.getFullYear() +
    "-" +
    (date.getMonth() + 1) +
    `-${cero}` +
    date.getDate();

  return (
    <div>
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
              <p className="REPtype2">Email</p>
            </th>
            <th scope="col" className="column1">
              <p className="REPtype2">Phone</p>
            </th>
            <th scope="col" className="column1">
              <p className="REPtype2">Client Name</p>
            </th>
            <th scope="col" className="column1">
              <p className="REPtype2">Seller</p>
            </th>
            <th scope="col" className="column1">
              <p className="REPtype2">Package Value</p>
            </th>
            <th scope="col" className="column1" style={{ minWidth: "100px" }}>
              <p className="REPtype2">Open Date</p>
            </th>
            <th scope="col" className="column1" style={{ minWidth: "100px" }}>
              <p className="REPtype2">Close Date</p>
            </th>
            <th scope="col" className="column1">
              <p className="REPtype2">Monthly?</p>
            </th>
          </tr>
          {myPackages?.map((e, i) => {
            return (
              <tr key={i}>
                <td className="ClientName" scope="row">
                  {e.email}
                </td>
                <td className="ClientName" scope="row">
                  {e.phone}
                </td>
                <td className="ClientName" scope="row">
                  {e.clientName}
                </td>
                <td className="ClientName" scope="row">
                  {Users.filter((f) => f.id === e.UserId)[0]?.name}
                </td>
                <td className="ClientName" scope="row">
                 $ {e.value}
                </td>
                <td className="ClientName" scope="row">
                  {e.openDate?.slice(0, 10)}
                </td>
                <td className="ClientName" scope="row">
                  {e.closingDate?.slice(0, 10)}
                </td>
                <td className="ClientName" scope="row">
                  {e.closingDate ? (
                    <FaPause
                      color="rgb(255, 76, 97)"
                      size={"25px"}
                      onClick={(f) => {
                        setIsMonthly(false);
                        onOpenModal();
                        setForm({ closingDate: null, id: e.id });
                      }}
                      style={{
                        alignSelf: "center",
                        cursor: 'pointer'
                      }}
                    />
                  ) : (
                    <FaCalendar
                      color="#14B8A6"
                      size={"25px"}
                      onClick={(f) => {
                        setIsMonthly(true);
                        onOpenModal();
                        setForm({ closingDate: DATE, id: e.id });
                        console.log(e);
                      }}
                      style={{
                        alignSelf: "center",
                        cursor: 'pointer'
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
        {!isMonthly && (
          <div
            className="modal"
            style={{ minWidth: "250px", alignItems: "center" }}
          >
            <FaExchangeAlt
              color="#14B8A6"
              size={"50px"}
              style={{
                alignSelf: "center",
                marginTop: "25px",
                marginBottom: "10px",
              }}
            />
            <p className="modalText">
              Do you want to change the package to monthly?
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
                onClick={(e) => onSubmitPackage(form)}
              >
                Yes
              </button>
              <button className="modalButtonNo" onClick={onCloseModal}>
                No
              </button>
            </div>
          </div>
        )}
        {isMonthly && (
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
            <p className="modalText">Do you want to close the package?</p>
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
                onClick={(e) => onSubmitPackage(form)}
              >
                Yes
              </button>
              <button className="modalButtonNo" onClick={onCloseModal}>
                No
              </button>
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default PackageMarketingTable;
