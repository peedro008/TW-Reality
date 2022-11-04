import React, { useState } from "react";
import { MdPayments } from "react-icons/md";
import { FaRegMoneyBillAlt } from "react-icons/fa";
import { BiSearchAlt2 } from "react-icons/bi";
import Modal from "react-responsive-modal";

function CommissionManagementComponent({
  Commissions,
  Users,
  setSelectedId,onCloseModal,
  modalPay,
setModalPay,
  selectedId,  
  onSubmit,
  open,
  onOpenModal,
}) {
  const [Search, setSearch] = useState("");
  return (
    <div className="genericDiv1">
      <div className="genericHeader">
        <p className="genericTitle">{`Commission management`}</p>
        <p className="subTitt">Commission list</p>
      </div>
      <div style={{width:"20vw", minWidth:'500px',height:"35px",  marginLeft:"5vw", marginTop:"2vh", display:"flex", flexDirection:"row", alignItems:"center"}}>
        <BiSearchAlt2 size={"20px"} style={{marginRight:"10px"}}/>  <input
        onChange={e=>setSearch(e.target.value)}
        style={{height:"25px", borderColor:"transparent", borderRadius:"10px", paddingInline:"8px"}}
            ></input>
      </div>
      <div className="DashContainer">

        <div className="DashSubCont" style={{maxWidth:"88vw"}}>
      <>
        <table className="table5" style={{marginTop:"2vh"}} >
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
            {
              Search?
              Commissions?.filter(e=>(e.Sell.ClientName?.toLowerCase().includes(Search.toLowerCase())||e.User?.name?.toLowerCase().includes(Search.toLowerCase())))?.map((e) => {
                return (
                  <tr>
                    
                    <td className="ClientName" scope="row">
              
                      {e.Sell.ClientName}
                    </td>
                    <td className="ClientName" scope="row">
                      {e.User?.name}
                    </td>
                    <td className="ClientName" scope="row">
                    {Users?.filter(f=>f.id==e.User.ReferredId)[0]?.name}
                    </td>
                    <td className="ClientName" scope="row">
                      {e.Sell.ClosingDate}
                    </td>
                    <td className="ClientName" scope="row">
                      {e.Sell.Address}
                    </td>
                    <td className="ClientName" scope="row">
                      $ {Users.filter(f=>f.id===e.User.ReferredId)[0]?.ComissionValue}
                    </td>
                    <td className="ClientName" scope="row" style={{alignItems:"center", display:"flex", justifyContent:"center"}}>
                    {e.payded ? 
                    <MdPayments color={"#33D69F"} size={"24px"} style={{alignSelf:"center"}}/> : 
                    <MdPayments onClick={()=>{setSelectedId(e.id); onOpenModal()}} color={"#FF4C61"} size={"24px"} style={{alignSelf:"center", cursor:"pointer"}}/>}
                  {/* <MdPayments onClick={()=>{setSelectedId(e.id); onOpenModal()}} color={e.payded?"#33D69F":"#FF4C61"} size={"24px"} style={{alignSelf:"center", cursor:"pointer"}}/> */}
                    </td>
                  </tr>
                );
              })
:


            Commissions?.map((e) => {
              return (
                <tr>
                  
                  <td className="ClientName" scope="row">
            
                    {e.Sell.ClientName}
                  </td>
                  <td className="ClientName" scope="row">
                    {e.User.name}
                  </td>
                  <td className="ClientName" scope="row">
                    {Users.filter(f=>f.id===e.User.ReferredId)[0]?.name}
                    </td>
                  <td className="ClientName" scope="row">
                    {e.Sell.ClosingDate}
                  </td>
                  <td className="ClientName" scope="row">
                    {e.Sell.Address}
                  </td>
                  <td className="ClientName" scope="row">
                     $ {Users.filter(f=>f.id===e.User.ReferredId)[0]?.ComissionValue}
                    </td>

                  <td className="ClientName" scope="row" style={{alignItems:"center", display:"flex", justifyContent:"center"}}>
                    {e.payded ? 
                    <MdPayments color={"#33D69F"} size={"24px"} style={{alignSelf:"center"}}/> : 
                    <MdPayments onClick={()=>{setSelectedId(e.id); onOpenModal()}} color={"#FF4C61"} size={"24px"} style={{alignSelf:"center", cursor:"pointer"}}/>}
                  {/* <MdPayments onClick={()=>{setSelectedId(e.id); onOpenModal()}} color={e.payded?"#33D69F":"#FF4C61"} size={"24px"} style={{alignSelf:"center", cursor:"pointer"}}/> */}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </>
      
          </div></div>
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
