import React, { useEffect, useState } from "react";
import { MdMoneyOff, MdPayments } from "react-icons/md";
import { FaMoneyBillAlt, FaRegMoneyBillAlt, FaTrash } from "react-icons/fa";
import { BiSearchAlt2 } from "react-icons/bi";
import Modal from "react-responsive-modal";
import Select from "react-select";
import wbill from "../assets/wbill.png";
import Pagination from "./Pagination";
import PaginationToCommissions from "./PaginationToCommissions";

function CommissionManagementComponent({
  CommissionsByDate,
  commissionsPaginate,
  setCommissionsByDate,
  Commissions,
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
  nothing,
  setPaginator,
  paginator,
  paginationSize,
  formatNumber,
  isAdminOne,
  openRef,
  deleteCommission,
  onCloseModalRef,
  onOpenModalRef,
}) {
  const realtorsList = Users.map((e) => ({ value: e.name, label: e.name }));
  const [commissionDelete, setCommissionDelete] = useState("");
  const [Search, setSearch] = useState("");
  const [commiTo, setCommiTo] = useState(true);
  const [payed, setPayed] = useState();
  const [noPayed, setNoPayed] = useState();
  console.log(Commissions);
  let sumPaid = 0;
  let sumUnPaid = 0;

  let commisionsPayed = Commissions.filter((e) => e.payded === true);

  useEffect(() => {
    let pagado = 0;
    let noPagado = 0;

    Commissions.map((e) => {
      e.payded === true
        ? (pagado =
            pagado +
            Users.filter((f) => f.id === e.commisionTo)[0]?.ComissionValue)
        : (noPagado =
            noPagado +
            Users.filter((f) => f.id === e.commisionTo)[0]?.ComissionValue);
    });
    return setPayed(pagado), setNoPayed(noPagado);
  }, []);

  let Screen = window.screen;

  return (
    <div className="genericDiv1">
      <div className="genericHeader" style={{ paddingTop: "0px" }}>
        <p className="genericTitle">{`Commission management`}</p>
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
          <button
            onClick={() => {
              getCommissionByDate();
              setSearch();
            }}
            className="StadBoxDate"
          >
            <p className="StadBoxTitle">Search</p>
          </button>
        </div>

        <div
          style={{
            display: "flex",
            position: "absolute",
            right: "50px",
            top: "80px",
          }}
        >
          <BiSearchAlt2 size={"30px"} style={{ marginRight: "10px" }} />{" "}
          <input
            onChange={(e) => {
              setSearch(e.target.value);
              setCommiTo(true);
            }}
            placeholder="Commision or Client..."
            style={{
              height: "25px",
              borderColor: "transparent",
              borderRadius: "10px",
              paddingInline: "8px",
              fontSize: 15,
              fontFamily: "Poppins",
            }}
          ></input>
        </div>
        <div style={{ height: "110px" }}>
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
              setCommiTo(false);
            }}
            className="StadSelectGrafic"
            // defaultInputValue={yearOptions[0]}
            placeholder="Type"
          />
        </div>
        {Search && (
          <button
            onClick={() => {
              setSearch("");
              setCommissionsByDate();
            }}
            className="StadBoxDate"
            style={{ height: 30 }}
          >
            <p className="StadBoxTitle" style={{ marginBottom: 0 }}>
              Reset
            </p>
          </button>
        )}
        {/* {
          CommissionsByDate && <button onClick={() => {setSearch(''); setCommissionsByDate()}} className="StadBoxDate" style={{height: 30}}>
          <p className="StadBoxTitle" style={{marginBottom: 0}}>Reset</p>
        </button>
        } */}
      </div>

      {nothing ? (
        <p className="genericTitleNothing">{nothing}</p>
      ) : (
        <div className="DashContainer" style={{ minHeight: "50vh" }}>
          <div className="DashSubCont" style={{ maxWidth: "88vw" }}>
            <>
              <table
                className="table5BN"
                style={{
                  marginTop: "2vh",
                  width: "70vw",
                  marginLeft: "0px",
                  marginBottom: "100px",
                }}
              >
                <tbody>
                  <tr>
                    {/* <th scope="col" className="column1">
                      <p className="REPtype2 ">Client name</p>
                    </th> */}
                    <th scope="col" className="column1">
                      <p className="REPtype2 ">Sold by</p>
                    </th>
                    <th scope="col" className="column1">
                      <p className="REPtype2 ">Commission to</p>
                    </th>
                    <th scope="col" className="column1">
                      <p className="REPtype2 ">Created date</p>
                    </th>
                    <th scope="col" className="column1">
                      <p className="REPtype2 ">Closing date</p>
                    </th>
                    <th scope="col" className="column1">
                      <p className="REPtype2 ">Address</p>
                    </th>
                    <th scope="col" className="column1">
                      <p className="REPtype2 ">Price</p>
                    </th>
                    <th scope="col" className="column1">
                      <p className="REPtype2 ">Payed?</p>
                    </th>
                    <th scope="col" className="column1">
                      <p className="REPtype2 ">Del</p>
                    </th>
                  </tr>
                  {Search
                    ? Commissions?.filter(
                        (e) =>
                          (commiTo &&
                            e.Sell.ClientName?.toLowerCase().includes(
                              Search.toLowerCase()
                            )) ||
                          Users?.filter((f) => f.id == e.commisionTo)[0]
                            ?.name?.toLowerCase()
                            .includes(Search.toLowerCase())
                      )?.map((e) => {
                        {
                          e.payded
                            ? (sumPaid =
                                sumPaid +
                                Users.filter((f) => f.id === e.commisionTo)[0]
                                  ?.ComissionValue)
                            : (sumUnPaid =
                                sumUnPaid +
                                Users.filter((f) => f.id === e.commisionTo)[0]
                                  ?.ComissionValue);
                        }
                        return (
                          <>
                            <tr>
                              {/* <td className="ClientName" scope="row">
                                {e.Sell.ClientName}
                              </td> */}
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
                                {e.createdAt.slice(0, 10)}
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
                                  Users.filter((f) => f.id === e.commisionTo)[0]
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
                                    color={"#002752"}
                                    size={"24px"}
                                    style={{ alignSelf: "center" }}
                                  />
                                ) : (
                                  <MdPayments
                                    onClick={() => {
                                      setSelectedId(e.id);
                                      onOpenModal();
                                    }}
                                    color={"#84596B"}
                                    size={"24px"}
                                    style={{
                                      alignSelf: "center",
                                      cursor: "pointer",
                                    }}
                                  />
                                )}

                                {/* <MdPayments onClick={()=>{setSelectedId(e.id); onOpenModal()}} color={e.payded?"#33D69F":"#FF4C61"} size={"24px"} style={{alignSelf:"center", cursor:"pointer"}}/> */}
                              </td>
                              <td className="ClientName" scope="row">
                                <FaTrash
                                  onClick={() => {
                                    setSelectedId(e.id);
                                    onOpenModalRef();
                                  }}
                                  style={{ cursor: "pointer" }}
                                  className="NAicon"
                                  size="20px"
                                  color="#002752"
                                />
                              </td>
                            </tr>
                          </>
                        );
                      })
                    : CommissionsByDate?.length
                    ? CommissionsByDate?.map((e) => {
                        {
                          e.payded
                            ? (sumPaid =
                                sumPaid +
                                Users.filter((f) => f.id === e.commisionTo)[0]
                                  ?.ComissionValue)
                            : (sumUnPaid =
                                sumUnPaid +
                                Users.filter((f) => f.id === e.commisionTo)[0]
                                  ?.ComissionValue);
                        }
                        return (
                          <tr>
                            {/* <td className="ClientName" scope="row">
                              {e.Sell.ClientName}
                            </td> */}
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
                              {e.createdAt.slice(0, 10)}
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
                                  color={"#002752"}
                                  size={"24px"}
                                  style={{ alignSelf: "center" }}
                                />
                              ) : (
                                <MdPayments
                                  onClick={() => {
                                    setSelectedId(e.id);
                                    onOpenModal();
                                  }}
                                  color={"#84596B"}
                                  size={"24px"}
                                  style={{
                                    alignSelf: "center",
                                    cursor: "pointer",
                                  }}
                                />
                              )}
                              {/* <MdPayments onClick={()=>{setSelectedId(e.id); onOpenModal()}} color={e.payded?"#33D69F":"#FF4C61"} size={"24px"} style={{alignSelf:"center", cursor:"pointer"}}/> */}
                            </td>
                            <td className="ClientName" scope="row">
                              <FaTrash
                                onClick={() => {
                                  setSelectedId(e.id);
                                  onOpenModalRef();
                                }}
                                style={{ cursor: "pointer" }}
                                className="NAicon"
                                size="20px"
                                color="#002752"
                              />
                            </td>
                          </tr>
                        );
                      })
                    : commissionsPaginate?.map((e) => {
                        {
                          e.payded
                            ? (sumPaid =
                                sumPaid +
                                Users.filter((f) => f.id === e.commisionTo)[0]
                                  ?.ComissionValue)
                            : (sumUnPaid =
                                sumUnPaid +
                                Users.filter((f) => f.id === e.commisionTo)[0]
                                  ?.ComissionValue);
                        }
                        return (
                          <tr>
                            {/* <td className="ClientName" scope="row">
                              {e.Sell.ClientName}
                            </td> */}
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
                              {e.createdAt.slice(0, 10)}
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
                                  color={"#002752"}
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
                            <td className="ClientName" scope="row">
                              <FaTrash
                                onClick={() => {
                                  setSelectedId(e.id);
                                  onOpenModalRef();
                                }}
                                style={{ cursor: "pointer" }}
                                className="NAicon"
                                size="20px"
                                color="#002752"
                              />
                            </td>
                          </tr>
                        );
                      })}
                </tbody>
              </table>
            </>
          </div>
        </div>
      )}
      {Screen.width > 1000 ? (
        <div>
          <div
            className="CardsGraficsCommision"
            style={{
              marginLeft: "20px",
              top: "235px",
              justifyContent: "space-between",
              backgroundColor: "rgba(0, 39, 82,0.8)",
            }}
          >
            <div
              className="dashCircle"
              style={{ backgroundColor: "#ebeff2", marginLeft: "10px" }}
            >
              <FaMoneyBillAlt size="28px" color="#002752" />
            </div>
            <div className="dashText" style={{ marginRight: "10px" }}>
              {Search ? (
                <p className="dashCardTitle" style={{ color: "#ebeff2" }}>
                  {formatNumber(payed)}
                </p>
              ) : (
                <p className="dashCardTitle" style={{ color: "#ebeff2" }}>
                  {formatNumber(payed)}
                </p>
              )}
              <p className="dashCardText" style={{ color: "#ebeff2" }}>
                Total Commission Paid
              </p>
            </div>
          </div>
          <div
            className="CardsGraficsCommision"
            style={{
              marginLeft: "20px",
              top: "325px",
              justifyContent: "space-between",
              backgroundColor: "#84596B",
            }}
          >
            <div
              className="dashCircle"
              style={{ backgroundColor: "#ebeff2", marginLeft: "10px" }}
            >
              <MdMoneyOff size="28px" color="#84596B" />
            </div>
            <div className="dashText" style={{ marginRight: "20px" }}>
              {Search ? (
                <p className="dashCardTitle" style={{ color: "#ebeff2" }}>
                  {formatNumber(noPayed)}
                </p>
              ) : (
                <p className="dashCardTitle" style={{ color: "#ebeff2" }}>
                  {formatNumber(noPayed)}
                </p>
              )}

              <p className="dashCardText" style={{ color: "#ebeff2" }}>
                Total Com. Unpaid
              </p>
            </div>
          </div>
        </div>
      ) : (
        <div>
          <div
            className="CardsGraficsCommision"
            style={{
              left: "100px",
              bottom: "50px",
              justifyContent: "space-between",
              backgroundColor: "rgba(0, 39, 82,0.8)",
            }}
          >
            <div
              className="dashCircle"
              style={{ backgroundColor: "#ebeff2", marginLeft: "10px" }}
            >
              <FaMoneyBillAlt size="28px" color="#002752" />
            </div>
            <div className="dashText" style={{ marginRight: "20px" }}>
              {Search ? (
                <p className="dashCardTitle">${sumPaid}</p>
              ) : (
                <p className="dashCardTitle">{formatNumber(payed)}</p>
              )}
              <p className="dashCardText">Total Commission Paid</p>
            </div>
          </div>
          <div
            className="CardsGraficsCommision"
            style={{
              left: "400px",
              bottom: "50px",
              justifyContent: "space-between",
              backgroundColor: "#84596B",
            }}
          >
            <div
              className="dashCircle"
              style={{ backgroundColor: "#ebeff2", marginLeft: "10px" }}
            >
              <MdMoneyOff size="28px" color="#84596B" />
            </div>
            <div className="dashText" style={{ marginRight: "20px" }}>
              {Search ? (
                <p className="dashCardTitle">${sumUnPaid}</p>
              ) : (
                <p className="dashCardTitle">{formatNumber(noPayed)}</p>
              )}

              <p className="dashCardText">Total Com. Unpaid</p>
            </div>
          </div>
        </div>
      )}
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

      <Modal
        open={openRef}
        onClose={onCloseModalRef}
        center
        classNames={"modal"}
      >
        <div
          className="modal"
          style={{ minWidth: "250px", alignItems: "center" }}
        >
          <FaTrash
            color="#002752"
            size={"50px"}
            style={{
              alignSelf: "center",
              marginTop: "25px",
              marginBottom: "10px",
            }}
          />
          <p className="modalText">Type "delete" to confirm </p>
          <input
            className="AQinput"
            onChange={(e) => setCommissionDelete(e.target.value)}
            style={{ marginTop: "12px" }}
          />

          <button
            disabled={commissionDelete === "delete" ? false : true}
            className="modalButton"
            onClick={() => deleteCommission()}
          >
            Continue
          </button>
        </div>
      </Modal>
      <PaginationToCommissions
        paginationSize={paginationSize}
        paginator={paginator}
        setPaginator={setPaginator}
        commissionsPaginate={commissionsPaginate}
        CommissionsByDate={CommissionsByDate}
      />
    </div>
  );
}

export default CommissionManagementComponent;
