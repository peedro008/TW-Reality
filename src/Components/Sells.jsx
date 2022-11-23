import React, { useEffect, useState } from "react";
import { MdPayments } from "react-icons/md";
import { FaRegMoneyBillAlt } from "react-icons/fa";
import { BiSearchAlt2 } from "react-icons/bi";
import Modal from "react-responsive-modal";
import Select from "react-select";
import wbill from "../assets/wbill.png";

function Sells({
  allSells,
  Users,
  nameFrom,
  onCloseModal,
  modalPay,
  setModalPay,
  onSubmit,
  open,
  onOpenModal,
}) {
  const [Search, setSearch] = useState("");
  const [IsSelected, setIsSelected] = useState(false);
  const realtorsList = Users.map(e => ({value: e.name, label: e.name}))
  
  
  let Seller = realtorsList.filter((e) => e.label === nameFrom);
  let defaultSelect = realtorsList.indexOf(Seller[0]);
  console.log(Seller)


 
  // const [sumSold, setsumSold] = useState(0)
  let sumSold = 0
  useEffect(() => {
    setSearch(nameFrom)
  }, [])
  return (
    <div className="genericDiv1">
      <div className="genericHeader">
        <p className="genericTitle">{`Sells management`}</p>
      </div>
      <div
        style={{
          width: "20vw",
          minWidth: "500px",
          height: "35px",
          marginLeft: "5vw",
          marginTop: "2vh",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <BiSearchAlt2 size={"20px"} style={{ marginRight: "10px" }} />{" "}
        <input
          onChange={(e) => setSearch(e.target.value)}
          style={{
            height: "25px",
            borderColor: "transparent",
            borderRadius: "10px",
            paddingInline: "8px",
          }}
        ></input>
           <Select
                options={realtorsList}
                onChange={(e) => {
                  setSearch(e.value);
                  setIsSelected(true)
                }}
                className="StadSelectGrafic"
                defaultValue={realtorsList[defaultSelect]}
                placeholder="Type"
              />
      </div>
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
                    <p className="REPtype">Closing date</p>
                  </th>
                  <th scope="col" className="column1">
                    <p className="REPtype">Address</p>
                  </th>
                  <th scope="col" className="column1">
                    <p className="REPtype">Price</p>
                  </th>
                
                </tr>
                {Search 
                  ? allSells.filter(
                    (e) =>
                    
                      e.ClientName?.toLowerCase().includes(
                        Search.toLowerCase()
                      ) ||
                      e.User?.name
                        ?.toLowerCase()
                        .includes(Search.toLowerCase())
                        ||
                        Users?.filter((f) => f.id == e.UserId)[0]?.name
                        ?.toLowerCase()
                        .includes(Search.toLowerCase())
                  ).map((e) => {
                    sumSold = sumSold + Math.floor(e.Value)
                      return (
                        <tr>
                          <td className="ClientName" scope="row">
                            {e.ClientName}
                          </td>
                          <td className="ClientName" scope="row">
                            {e.User?.name}
                          </td>
                         
                          <td className="ClientName" scope="row">
                            {e.ClosingDate}
                          </td>
                          <td className="ClientName" scope="row">
                            {e.Address}
                          </td>
                          <td className="ClientName" scope="row">
                            $
                            {
                              e.Value
                            }
                          </td>
                        </tr>
                      );
                    })
                  : allSells.map((e) => {
                    sumSold = sumSold + Math.floor(e.Value)
                    return (
                      <tr>
                        <td className="ClientName" scope="row">
                          {e.ClientName}
                        </td>
                        <td className="ClientName" scope="row">
                          {e.User?.name}
                        </td>
                       
                        <td className="ClientName" scope="row">
                          {e.ClosingDate}
                        </td>
                        <td className="ClientName" scope="row">
                          {e.Address}
                        </td>
                        <td className="ClientName" scope="row">
                          $
                          {
                            e.Value
                          }
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
                    top: '200px',
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
                    <p className="dashCardTitle">${sumSold}</p>
                    <p className="dashCardText">Total Sold</p>
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

export default Sells;
