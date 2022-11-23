import React, { useEffect, useState } from "react";
import { MdPayments } from "react-icons/md";
import { FaRegMoneyBillAlt } from "react-icons/fa";
import { BiSearchAlt2 } from "react-icons/bi";
import Modal from "react-responsive-modal";
import Select from "react-select";
import wbill from "../assets/wbill.png";

function CommissionManagementComponent({
  Commissions,
  CommissionsByDate,
  Users,
  setSelectedId,
  onCloseModal,
  modalPay,
  setModalPay,
  onSubmit,
  open,
  onOpenModal,
  form,
  setForm,
  getCommissionByDate,
  nothing
}) {
  const realtorsList = Users.map((e) => ({ value: e.name, label: e.name }));
  const [Search, setSearch] = useState("");
  const [IsSelected, setIsSelected] = useState(false);
  // const [sumPaid, setSumPaid] = useState(0)
  let sumPaid = 0;
  let sumUnPaid = 0;
  const [año, setAño] = useState("2015-");
  const [mes, setMes] = useState("01-01");
  const [fechaInicial, setFechaInicial] = useState("2022-02-28");
  const [añoFinal, setAñoFinal] = useState("2080-");
  const [mesFinal, setMesFinal] = useState("01-01");
  const [fechaFinal, setFechaFinal] = useState("2022-02-30");

  useEffect(() => {
    setFechaInicial(toMsDate(año + mes));
  }, [año, mes]);
  useEffect(() => {
    setFechaFinal(toMsDate(añoFinal + mesFinal));
  }, [añoFinal, mesFinal]);

  console.log(fechaInicial);
  function toMsDate(dateStr) {
    // desarmamos el string por los '-' los descartamos y lo transformamos en un array
    let parts = dateStr.split("-");
    // parts[2] es año
    // parts[1] el mes
    // parts[0] el día
    return new Date(parts[0], parts[1] - 1, parts[2]).getTime();
  }

  return (
    <div className="genericDiv1">
      <div className="genericHeader">
        <p className="genericTitle">{`Commission management`}</p>
        { nothing && <p className="genericTitleNothing">{nothing}</p>}
      </div>

      <div
        style={{
          width: "60vw",
          minWidth: "500px",
          height: "35px",
          marginLeft: "5vw",
          marginBottom: "10px",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <div style={{ display: "flex" }}>
          <div className="StadSelectCont">
            <p
              style={{
                color: "#2b4162",
                alignSelf: "center",
                justifySelf: "center",
                paddingRight: "10px",
              }}
              className="StadisticProdName"
            >
              From:
            </p>
            <input
              type={"date"}
              onChange={(e) => {
                setForm({ ...form, dateFrom: e.target.value });
              }}
              placeholder="ClosingDate"
              className="AQinputDate"
            ></input>
          </div>
          <div className="StadSelectCont">
            <p
              style={{
                color: "#2b4162",
                alignSelf: "center",
                justifySelf: "center",
                paddingRight: "10px",
                marginLeft: "10px",
              }}
              className="StadisticProdName"
            >
              To:
            </p>
            <input
              type={"date"}
              onChange={(e) => {
                setForm({ ...form, dateTo: e.target.value });
              }}
              placeholder="ClosingDate"
              className="AQinputDate"
            ></input>
          </div>
          <button onClick={() => getCommissionByDate()} className="StadBoxDate">
            <p className="StadBoxTitle">Search</p>
          </button>
        </div>

        <div
          style={{
            display: "flex",
            position: "absolute",
            right: "20px",
            top: "80px",
          }}
        >
          <BiSearchAlt2 size={"30px"} style={{ marginRight: "10px" }} />{" "}
          <input
            onChange={(e) => setSearch(e.target.value)}
            style={{
              height: "25px",
              borderColor: "transparent",
              borderRadius: "10px",
              paddingInline: "8px",
            }}
          ></input>
        </div>
        <div style={{height: '110px'}}>
        <p
          style={{
            color: "#2b4162",
            alignSelf: "center",
            justifySelf: "center",
          }}
          className="StadisticProdName"
        >
          Commision To:
        </p>
        <Select
          options={realtorsList}
          onChange={(e) => {
            setSearch(e.value);
            setIsSelected(true);
          }}
          className="StadSelectGrafic"
          // defaultInputValue={yearOptions[0]}
          placeholder="Type"
        />
        </div>
        </div>
        {/* <div style={{ width: "60vw",
          minWidth: "500px",
          height: "35px",
          marginLeft: "5vw",
          marginTop: "2vh",
          marginBottom: "10px",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          textAlign: 'center',
          }}>

        <p
          style={{
            color: "#2b4162",
            alignSelf: "center",
            justifySelf: "center",
          }}
          className="StadisticProdName"
        >
          Commision To:
        </p>
        <Select
          options={realtorsList}
          onChange={(e) => {
            setSearch(e.value);
            setIsSelected(true);
          }}
          className="StadSelectGrafic"
          // defaultInputValue={yearOptions[0]}
          placeholder="Type"
        />
        </div> */}

      <div className="DashContainer">
        <div className="DashSubCont" style={{ maxWidth: "88vw" }}>
          <>
            <table className="table5" style={{ marginTop: "2vh" }}>
              <tbody>
                <tr>
                  <th scope="col" className="column1">
                    <p className="REPtype">Client name</p>
                  </th>
                  <th scope="col" className="column1">
                    <p className="REPtype">Sold by</p>
                  </th>
                  <th scope="col" className="column1">
                    <p className="REPtype">Commission to</p>
                  </th>
                  <th scope="col" className="column1">
                    <p className="REPtype">Closing date</p>
                  </th>
                  <th scope="col" className="column1">
                    <p className="REPtype">Address</p>
                  </th>
                  <th scope="col" className="column1">
                    <p className="REPtype">Price</p>
                  </th>
                  <th scope="col" className="column1">
                    <p className="REPtype">Payed?</p>
                  </th>
                </tr>
                {Search
                  ? CommissionsByDate?.filter(
                      (e) =>
                        e.Sell.ClientName?.toLowerCase().includes(
                          Search.toLowerCase()
                        ) ||
                        e.User?.name
                          ?.toLowerCase()
                          .includes(Search.toLowerCase()) ||
                        (Users?.filter((f) => f.id == e.commisionTo)[0]
                          ?.name?.toLowerCase()
                          .includes(Search.toLowerCase()) &&
                          fechaInicial < toMsDate(e.Sell.ClosingDate) &&
                          fechaFinal > toMsDate(e.Sell.ClosingDate))
                    )?.map((e) => {
                      {
                        e.payded
                          ? (sumPaid =
                              sumPaid +
                              Users.filter((f) => f.id === e.User.ReferredId)[0]
                                ?.ComissionValue)
                          : (sumUnPaid =
                              sumUnPaid +
                              Users.filter((f) => f.id === e.User.ReferredId)[0]
                                ?.ComissionValue);
                      }
                      return (
                        <tr>
                          <td className="ClientName" scope="row">
                            {e.Sell.ClientName}
                          </td>
                          <td className="ClientName" scope="row">
                            {e.User?.name}
                          </td>
                          <td className="ClientName" scope="row">
                            {
                              Users?.filter((f) => f.id == e.commisionTo)[0]
                                ?.name
                            }
                          </td>
                          <td className="ClientName" scope="row">
                            {e.Sell.ClosingDate}
                          </td>
                          <td className="ClientName" scope="row">
                            {e.Sell.Address}
                          </td>
                          <td className="ClientName" scope="row">
                            $
                            {
                              Users.filter((f) => f.id === e.User.ReferredId)[0]
                                ?.ComissionValue
                            }
                          </td>
                          <td
                            className="ClientName"
                            scope="row"
                            style={{
                              alignItems: "center",
                              display: "flex",
                              justifyContent: "center",
                            }}
                          >
                            {e.payded ? (
                              <MdPayments
                                color={"#33D69F"}
                                size={"24px"}
                                style={{ alignSelf: "center" }}
                              />
                            ) : (
                              <MdPayments
                                onClick={() => {
                                  setSelectedId(e.id);
                                  onOpenModal();
                                }}
                                color={"#FF4C61"}
                                size={"24px"}
                                style={{
                                  alignSelf: "center",
                                  cursor: "pointer",
                                }}
                              />
                            )}
                            {/* <MdPayments onClick={()=>{setSelectedId(e.id); onOpenModal()}} color={e.payded?"#33D69F":"#FF4C61"} size={"24px"} style={{alignSelf:"center", cursor:"pointer"}}/> */}
                          </td>
                        </tr>
                      );
                    })
                  : CommissionsByDate?.map((e) => {
                      {
                        e.payded
                          ? (sumPaid =
                              sumPaid +
                              Users.filter((f) => f.id === e.User.ReferredId)[0]
                                ?.ComissionValue)
                          : (sumUnPaid =
                              sumUnPaid +
                              Users.filter((f) => f.id === e.User.ReferredId)[0]
                                ?.ComissionValue);
                      }
                      return (
                        <tr>
                          <td className="ClientName" scope="row">
                            {e.Sell.ClientName}
                          </td>
                          <td className="ClientName" scope="row">
                            {e.User.name}
                          </td>
                          <td className="ClientName" scope="row">
                            {
                              Users?.filter((f) => f.id == e.commisionTo)[0]
                                ?.name
                            }
                          </td>
                          <td className="ClientName" scope="row">
                            {e.Sell.ClosingDate}
                          </td>
                          <td className="ClientName" scope="row">
                            {e.Sell.Address}
                          </td>
                          <td className="ClientName" scope="row">
                            $
                            {
                              Users?.filter((f) => f.id == e.commisionTo)[0]
                                ?.ComissionValue
                            }
                          </td>

                          <td
                            className="ClientName"
                            scope="row"
                            style={{
                              alignItems: "center",
                              display: "flex",
                              justifyContent: "center",
                            }}
                          >
                            {e.payded ? (
                              <MdPayments
                                color={"#33D69F"}
                                size={"24px"}
                                style={{ alignSelf: "center" }}
                              />
                            ) : (
                              <MdPayments
                                onClick={() => {
                                  setSelectedId(e.id);
                                  onOpenModal();
                                }}
                                color={"#FF4C61"}
                                size={"24px"}
                                style={{
                                  alignSelf: "center",
                                  cursor: "pointer",
                                }}
                              />
                            )}
                            {/* <MdPayments onClick={()=>{setSelectedId(e.id); onOpenModal()}} color={e.payded?"#33D69F":"#FF4C61"} size={"24px"} style={{alignSelf:"center", cursor:"pointer"}}/> */}
                          </td>
                        </tr>
                      );
                    })}
              </tbody>
            </table>
          </>
        </div>
      </div>
      <div
        className="CardsGraficsCommision"
        style={{
          marginLeft: "20px",
          top: "200px",
          backgroundColor: "rgba(51, 214, 159 ,0.15)",
        }}
      >
        <div
          className="dashCircle"
          style={{ backgroundColor: "rgba(239, 239, 239,0.3)" }}
        >
          <img src={wbill} />
        </div>
        <div className="dashText">
          <p className="dashCardTitle">${sumPaid}</p>
          <p className="dashCardText">Total Commission Paid</p>
        </div>
      </div>
      <div
        className="CardsGraficsCommision"
        style={{
          marginLeft: "20px",
          top: "300px",
          backgroundColor: "rgba(255, 76, 96 ,0.15)",
        }}
      >
        <div
          className="dashCircle"
          style={{ backgroundColor: "rgba(239, 239, 239,0.3)" }}
        >
          <img src={wbill} />
        </div>
        <div className="dashText">
          <p className="dashCardTitle">${sumUnPaid}</p>
          <p className="dashCardText">Total Com. Unpaid</p>
        </div>
      </div>
      <Modal open={open} onClose={onCloseModal} center classNames={"modal"}>
        <div
          className="modal"
          style={{ minWidth: "250px", alignItems: "center" }}
        >
          <FaRegMoneyBillAlt
            color="#14B8A6"
            size={"50px"}
            style={{
              alignSelf: "center",
              marginTop: "25px",
              marginBottom: "10px",
            }}
          />
          <p className="modalText">Type "pay" to confirm </p>
          <input
            className="AQinput"
            onChange={(e) => setModalPay(e.target.value)}
            style={{ marginTop: "12px" }}
          />

          <button
            disabled={modalPay == "pay" ? false : true}
            className="modalButton"
            onClick={onSubmit}
          >
            Continue
          </button>
        </div>
      </Modal>
    </div>
  );
}

export default CommissionManagementComponent;
