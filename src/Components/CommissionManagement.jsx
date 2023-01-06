import React, { useEffect, useState } from "react";
import { MdPayments } from "react-icons/md";
import { FaRegMoneyBillAlt } from "react-icons/fa";
import { BiSearchAlt2 } from "react-icons/bi";
import Modal from "react-responsive-modal";
import Select from "react-select";
import wbill from "../assets/wbill.png";
import Pagination from "./Pagination";
import PaginationToCommissions from './PaginationToCommissions'

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

}) {
  const realtorsList = Users.map((e) => ({ value: e.name, label: e.name }));
  const [Search, setSearch] = useState("");
const [commiTo, setCommiTo] = useState(true)
const [payed, setPayed] = useState()
const [noPayed, setNoPayed] = useState()
console.log(Commissions)
  let sumPaid = 0;
  let sumUnPaid = 0;

  let commisionsPayed = Commissions.filter(e => e.payded === true)

  useEffect(() => {
    let pagado = 0
    let noPagado = 0

    Commissions.map(e => 
      {
        e.payded === true ? (pagado =
          pagado +
          Users.filter((f) => f.id === e.commisionTo)[0]
            ?.ComissionValue)
            : (noPagado =
              noPagado +
              Users.filter((f) => f.id === e.commisionTo)[0]
                ?.ComissionValue)
      })
      return setPayed(pagado), setNoPayed(noPagado)
  }, [])
  
  let Screen = window.screen;

  return (
    <div className="genericDiv1">
      <div className="genericHeader">
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
          <button onClick={() => {getCommissionByDate(); setSearch()}} className="StadBoxDate">
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
            onChange={(e) => {setSearch(e.target.value); setCommiTo(true)}}
            placeholder='Commision or Client name...'
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
            setCommiTo(false)
          }}
          className="StadSelectGrafic"
          // defaultInputValue={yearOptions[0]}
          placeholder="Type"
        />
        </div>
        {
          Search && <button onClick={() => {setSearch(''); setCommissionsByDate()}} className="StadBoxDate" style={{height: 30}}>
          <p className="StadBoxTitle" style={{marginBottom: 0}}>Reset</p>
        </button>
        }
        {/* {
          CommissionsByDate && <button onClick={() => {setSearch(''); setCommissionsByDate()}} className="StadBoxDate" style={{height: 30}}>
          <p className="StadBoxTitle" style={{marginBottom: 0}}>Reset</p>
        </button>
        } */}
        </div>

        { nothing ? <p className="genericTitleNothing">{nothing}</p> :
      <div className="DashContainer" style={{minHeight: '50vh'}}>
        <div className="DashSubCont" style={{ maxWidth: "88vw" }}>
          <>
            <table className="table5" style={{ marginTop: "2vh",width: '70vw', marginLeft: '0px' }}>
              <tbody>
                <tr>
                  <th scope="col" className="column1">
                    <p className="REPtype2 ">Client name</p>
                  </th>
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
                </tr>
                {Search
                  ? Commissions?.filter(
                      (e) =>
                      commiTo && e.Sell.ClientName?.toLowerCase().includes(Search.toLowerCase()
                        )  ||
                        (Users?.filter((f) => f.id == e.commisionTo)[0]
                          ?.name?.toLowerCase()
                          .includes(Search.toLowerCase()))
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
                            {e.createdAt.slice(0,10)}
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
                        </>
                      );
                    })
                  : CommissionsByDate?.length ? 
                  CommissionsByDate?.map((e) => {
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
                            {e.createdAt.slice(0,10)}
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
                    }) : commissionsPaginate?.map((e) => {
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
                            {e.createdAt.slice(0,10)}
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
                    })
                  }
              </tbody>
            </table>
          </>
        </div>
      </div>}
      {
        Screen.width > 1000 ?  
      <div>
      <div
        className="CardsGraficsCommision"
        style={{
          marginLeft: "20px",
          top: "235px",
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
        {
            Search ? <p className="dashCardTitle">${sumPaid}</p> : <p className="dashCardTitle">${payed}</p>
          }
          <p className="dashCardText">Total Commission Paid</p>
        </div>
      </div>
      <div
        className="CardsGraficsCommision"
        style={{
          marginLeft: "20px",
          top: "325px",
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
          {
            Search ? <p className="dashCardTitle">${sumUnPaid}</p> : <p className="dashCardTitle">${noPayed}</p>
          }
          
          <p className="dashCardText">Total Com. Unpaid</p>
        </div>
      </div>
      </div>
      :
      <div>
      <div
        className="CardsGraficsCommision"
        style={{
          left: "100px",
          bottom: "250px",
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
        {
            Search ? <p className="dashCardTitle">${sumPaid}</p> : <p className="dashCardTitle">${payed}</p>
          }
          <p className="dashCardText">Total Commission Paid</p>
        </div>
      </div>
      <div
        className="CardsGraficsCommision"
        style={{
          left: "400px",
          bottom: "250px",
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
          {
            Search ? <p className="dashCardTitle">${sumUnPaid}</p> : <p className="dashCardTitle">${noPayed}</p>
          }
          
          <p className="dashCardText">Total Com. Unpaid</p>
        </div>
      </div>
      </div>
       }
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
      <PaginationToCommissions paginationSize={paginationSize} paginator={paginator} setPaginator={setPaginator} commissionsPaginate={commissionsPaginate} CommissionsByDate={CommissionsByDate}/>
    </div>
  );
}

export default CommissionManagementComponent;
