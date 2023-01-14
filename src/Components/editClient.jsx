import React, { useEffect, useState } from "react";
import "../Css/css.css";
import Select from "react-select";
import "react-responsive-modal/styles.css";
import Isologo_background from "../assets/Isologo_background.png";
import { Modal } from "react-responsive-modal";
import Icon from "../assets/Icon.png";
import CrossMark from "../assets/cross-mark.png";
import { NavLink } from "react-router-dom";

import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
function EditClient({
  form,
  setForm,
  open,
  onSubmit,
  optionsReason,
  optionsStatus,
  optionsStatusLead,
  onCloseModal,
  respTransactionCoord,
  validarEmail,
  clientData
}) {

  const [checkedOne, setCheckedOne] = useState(clientData.clientType);


  const handleChangeOne = () => {
    setCheckedOne('Client');
    
  };

  const handleChangeTwo = () => {
    setCheckedOne('Lead'); 
  };

  useEffect(() => {
    if(clientData.contactDate2) {setContact2(true)}
    if(clientData.contactDate3) {setContact3(true)}
    if(clientData.contactDate4) {setContact4(true)}
    if(clientData.contactDate5) {setContact5(true)}
    if(clientData.contactDate6) {setContact6(true)}
    if(clientData.contactDate7) {setContact7(true)}
    if(clientData.contactDate8) {setContact8(true)}
    if(clientData.contactDate9) {setContact9(true)}
    if(clientData.contactDate10) {setContact10(true)}
  }, [clientData])
  
  const [contact2, setContact2] = useState(false)
  const [contact3, setContact3] = useState(false)
  const [contact4, setContact4] = useState(false)
  const [contact5, setContact5] = useState(false)
  const [contact6, setContact6] = useState(false)
  const [contact7, setContact7] = useState(false)
  const [contact8, setContact8] = useState(false)
  const [contact9, setContact9] = useState(false)
  const [contact10, setContact10] = useState(false)

  
  let validation =
    form.clientName?.length < 3 ||
    typeof form.clientName === "undefined" ||
    typeof form.phone === "undefined" ||
    typeof form.contactDate === "undefined" ||
    typeof form.reason === "undefined" ||
    typeof form.clientType === "undefined" ||
    typeof form.status === "undefined";

  return (
    <div className="genericDiv">
       <div className="genericHeader" style={{ marginBottom: "30px" }}>
        <p className="genericTitle">Edit Client</p>
      </div>
      <div className="managerInputsContainer">
        <div className="managerInputsubContainer" style={{ width: "60vw" }}>
          <div className="inputDiv">
            <p className="PAYtitle">Client Name</p>
            <input
              defaultValue={clientData.clientName}
              placeholder="Client Name"
              onChange={(e) => {
                setForm({ ...form, clientName: e.target.value });
              }}
              className="AQinputPackage"
            ></input>
            <p className="FORMerror"></p>
          </div>
          <div className="inputDiv">
            <p className="PAYtitle">Email</p>
            <input
             defaultValue={clientData.mail}
              placeholder="Email"
              onChange={(e) => {
                setForm({ ...form, mail: e.target.value });
              }}
              className="AQinputPackage"
            ></input>
            {/* <p className="FORMerror">{validarEmail(form.email)? "" :"Email must be a valid email"}</p> */}
          </div>
          <div className="inputDiv">
            <p className="PAYtitle">Number Phone</p>
            <input
             defaultValue={clientData.phone}
              placeholder="Phone"
              onChange={(e) => {
                setForm({ ...form, phone: e.target.value });
              }}
              className="AQinputPackage"
            ></input>
            <p className="FORMerror"></p>
          </div>
          <div className="inputDiv">
            <p className="PAYtitle">Client</p>
            <label className="containerCheck2">
            <input type="checkbox" className="checkBoxCont" style={{color: 'red'}} checked={checkedOne === 'Client'} onChange={(val) => {handleChangeOne(); setForm({ ...form, clientType: 'Client' })}}  />
            <span class="checkmark2"></span>
            </label>
          </div>
          <div className="inputDiv">
          <p className="PAYtitle">Lead</p>
          <label className="containerCheck">

            <input type="checkbox" className="checkBoxCont" checked={checkedOne === 'Lead'} onChange={(val) => {handleChangeTwo(); setForm({ ...form, clientType: 'Lead' })}} />
            <span class="checkmark"></span>
          </label>
            </div>
          </div>
          <div className="managerInputsubContainer" style={{ width: "60vw" }}>
          <div className="inputDiv">
            <p className="PAYtitle">Added Date</p>
            <input
              type={"date"}
              defaultValue={clientData.addedDate}
              onChange={(e) => {
                setForm({ ...form, addedDate: e.target.value });
              }}
              placeholder="Added Date"
              className="AQinputPackage"
            ></input>
          </div>
          <div className="inputDiv">
            <p className="PAYtitle">Contact Date 1</p>
            <input
              type={"date"}
              defaultValue={clientData.contactDate}
              onChange={(e) => {
                setForm({ ...form, contactDate: e.target.value });
              }}
              placeholder="ClosingDate"
              className="AQinputPackage"
            ></input>
          </div>
          {
            !contact2 &&
            <div className="inputDiv">
            <p className="PAYtitle"></p>
            <button
            onClick={() => setContact2(true)}
              className="PAYbutton"
              style={{width: '250px', marginTop: '25px'}}
            ><p className="PAYbuttonText">Add Contact Date +</p></button>
          </div>
          }
        
          {
            contact2 && 
            <div className="inputDiv">
            <p className="PAYtitle">Contact Date 2</p>
            <input
              type={"date"}
              defaultValue={clientData.contactDate2}
              onChange={(e) => {
                setForm({ ...form, contactDate2: e.target.value });
              }}
              placeholder="ClosingDate"
              className="AQinputPackage"
            ></input>
          </div>
          }

{
            !contact3 &&
            <div className="inputDiv">
            <p className="PAYtitle"></p>
            <button
            onClick={() => setContact3(true)}
              className="PAYbutton"
              style={{width: '250px', marginTop: '25px'}}
            ><p className="PAYbuttonText">Add Contact Date +</p></button>
          </div>
          }
        
          {
            contact3 && 
            <div className="inputDiv">
            <p className="PAYtitle">Contact Date 3</p>
            <input
              type={"date"}
              defaultValue={clientData.contactDate3}
              onChange={(e) => {
                setForm({ ...form, contactDate3: e.target.value });
              }}
              placeholder="ClosingDate"
              className="AQinputPackage"
            ></input>
          </div>
          }
          </div>
          {
            contact3 &&
            <div className="managerInputsubContainer" style={{ width: "60vw" }}>
            {
              !contact4 &&
              <div className="inputDiv">
              <p className="PAYtitle"></p>
              <button
              onClick={() => setContact4(true)}
                className="PAYbutton"
                style={{width: '250px', marginTop: '25px'}}
              ><p className="PAYbuttonText">Add Contact Date +</p></button>
            </div>
            }
          
            {
              contact4 && 
              <div className="inputDiv">
              <p className="PAYtitle">Contact Date 4</p>
              <input
                type={"date"}
                defaultValue={clientData.contactDate4}
                onChange={(e) => {
                  setForm({ ...form, contactDate4: e.target.value });
                }}
                placeholder="ClosingDate"
                className="AQinputPackage"
              ></input>
            </div>
            }
  
  {
              !contact5 &&
              <div className="inputDiv">
              <p className="PAYtitle"></p>
              <button
              onClick={() => setContact5(true)}
                className="PAYbutton"
                style={{width: '250px', marginTop: '25px'}}
              ><p className="PAYbuttonText">Add Contact Date +</p></button>
            </div>
            }
          
            {
              contact5 && 
              <div className="inputDiv">
              <p className="PAYtitle">Contact Date 5</p>
              <input
                type={"date"}
                defaultValue={clientData.contactDate5}
                onChange={(e) => {
                  setForm({ ...form, contactDate5: e.target.value });
                }}
                placeholder="ClosingDate"
                className="AQinputPackage"
              ></input>
            </div>
            }
            {
              !contact6 &&
              <div className="inputDiv">
              <p className="PAYtitle"></p>
              <button
              onClick={() => setContact6(true)}
                className="PAYbutton"
                style={{width: '250px', marginTop: '25px'}}
              ><p className="PAYbuttonText">Add Contact Date +</p></button>
            </div>
            }
          
            {
              contact6 && 
              <div className="inputDiv">
              <p className="PAYtitle">Contact Date 6</p>
              <input
                type={"date"}
                defaultValue={clientData.contactDate6}
                onChange={(e) => {
                  setForm({ ...form, contactDate6: e.target.value });
                }}
                placeholder="ClosingDate"
                className="AQinputPackage"
              ></input>
            </div>
            }
            </div>
          }
            {
            contact6 &&
            <div className="managerInputsubContainer" style={{ width: "60vw" }}>
            {
              !contact7 &&
              <div className="inputDiv">
              <p className="PAYtitle"></p>
              <button
              onClick={() => setContact7(true)}
                className="PAYbutton"
                style={{width: '250px', marginTop: '25px'}}
              ><p className="PAYbuttonText">Add Contact Date +</p></button>
            </div>
            }
          
            {
              contact7 && 
              <div className="inputDiv">
              <p className="PAYtitle">Contact Date 7</p>
              <input
                type={"date"}
                defaultValue={clientData.contactDate7}
                onChange={(e) => {
                  setForm({ ...form, contactDate7: e.target.value });
                }}
                placeholder="ClosingDate"
                className="AQinputPackage"
              ></input>
            </div>
            }
  
  {
              !contact8 &&
              <div className="inputDiv">
              <p className="PAYtitle"></p>
              <button
              onClick={() => setContact8(true)}
                className="PAYbutton"
                style={{width: '250px', marginTop: '25px'}}
              ><p className="PAYbuttonText">Add Contact Date +</p></button>
            </div>
            }
          
            {
              contact8 && 
              <div className="inputDiv">
              <p className="PAYtitle">Contact Date 8</p>
              <input
                type={"date"}
                defaultValue={clientData.contactDate8}
                onChange={(e) => {
                  setForm({ ...form, contactDate8: e.target.value });
                }}
                placeholder="ClosingDate"
                className="AQinputPackage"
              ></input>
            </div>
            }
            {
              !contact9 &&
              <div className="inputDiv">
              <p className="PAYtitle"></p>
              <button
              onClick={() => setContact9(true)}
                className="PAYbutton"
                style={{width: '250px', marginTop: '25px'}}
              ><p className="PAYbuttonText">Add Contact Date +</p></button>
            </div>
            }
          
            {
              contact9 && 
              <div className="inputDiv">
              <p className="PAYtitle">Contact Date 9</p>
              <input
                type={"date"}
                defaultValue={clientData.contactDate9}
                onChange={(e) => {
                  setForm({ ...form, contactDate9: e.target.value });
                }}
                placeholder="ClosingDate"
                className="AQinputPackage"
              ></input>
            </div>
            }
            </div>
          }
         
          <div className="managerInputsubContainer" style={{ width: "60vw" }}>
          <div className="inputDiv">
            <p className="PAYtitle">Transaction Type</p>
            <Select
             defaultValue={optionsReason[optionsReason.findIndex(x => x.value === clientData.reason)]}
              onChange={(val) => setForm({ ...form, reason: val.value })}
              options={optionsReason}
              name={"Transaction Type"}
              className="PAYselect2"
              placeholder="Select Type"
            />
          </div>
          {/* <div className="inputDiv">
            <p className="PAYtitle">Client Type</p>
            <Select
            defaultValue={optionsClient[optionsClient.findIndex(x => x.value === clientData.clientType)]}
              onChange={(val) => setForm({ ...form, clientType: val.value })}
              options={optionsClient}
              name={"Realtor Name"}
              className="PAYselect2"
              placeholder="Select Client Type"
            />
          </div> */}
           <div className="inputDiv">
            <p className="PAYtitle">Status</p>
            <Select
            defaultValue={optionsStatus[optionsStatus.findIndex(x => x.value === clientData.status)]}
              onChange={(val) => setForm({ ...form, status: val.value })}
              options={form.clientType === 'Client' ? optionsStatus : optionsStatusLead}
              name={"Realtor Name"}
              className="PAYselect2"
              placeholder="Select Client Type"
            />
          </div>
          </div>
          <div className="managerInputsubContainer" style={{ width: "60vw" }}>
        
        </div>
      

      <div
        style={{
          position: "absolute",
          right: "50px",
          top: "76px",
          display: "flex",
        }}
      >
        <button
          className="PAYbutton"
          onClick={onSubmit}
          style={{
            opacity: validation && "0.2",
            cursor: validation && "default",
          }}
          disabled={validation ? true : false}
        >
          <p className="PAYbuttonText">Edit Client</p>
        </button>
      </div>

      <Modal open={open} onClose={onCloseModal} center classNames={"modal"}>
        <div className="modal">
        {
            respTransactionCoord[0] ? 
            <>
            <img
            src={Icon}
            style={{
              width: "35px",
              alignSelf: "center",
              marginTop: "25px",
              marginBottom: "10px",
            }}
          />

          <p className="modalText">{respTransactionCoord[1]}</p>
          </>
          :
          <>
          <img
          src={CrossMark}
          style={{
            width: "35px",
            alignSelf: "center",
            marginTop: "25px",
            marginBottom: "10px",
          }}
        />

        <p className="modalText">{respTransactionCoord[1]}</p>
        </>
          }

            <NavLink style={{ textDecoration: "none", color: "#000", alignSelf: 'center' }} to={"/clients"}>
          <button className="modalButton">
              Continue
          </button>
            </NavLink>
        </div>
      </Modal>
      <img
        src={Isologo_background}
        style={{
          position: "fixed",
          pointerEvents: "none",
          right: 0,
          bottom: 0,
          width: "428px",
          opacity: "0.5",
        }}
      />
      <BsChevronLeft
        cursor="pointer"
        color="grey"
        style={{
          minWidth: "30px",
          minHeight: "30px",
          position: "fixed",
          zIndex: 9,
          left: "80px",
          top: "17px",
          alignSelf: "flex-start",
        }}
        onClick={() => window.history.go(-1)}
      />
    </div>
    </div>
  );
}

export default EditClient;
