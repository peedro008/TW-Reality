import React from "react";
import "../Css/css.css";

import Select from "react-select";
import "react-responsive-modal/styles.css";
import Isologo_background from "../assets/Isologo_background.png";
import { Modal } from "react-responsive-modal";
import Icon from "../assets/Icon.png";
import { NavLink } from "react-router-dom";
import { Controller } from "react-hook-form";
import { BsChevronLeft } from "react-icons/bs";
import { BsEye } from "react-icons/bs";
import { BsEyeSlash } from "react-icons/bs";

function ManagerRecruitComponent({
  show,
setShow,
  form,
  FetchAll,
  dispatch,
  RUser,
open,
onSubmit,
onCloseModal,
onOpenModal,validarEmail,
setForm,
}) {
  console.log(form)
  let validation = (form.password?.length<8 || typeof form.password?.length === 'undefined'||!validarEmail(form.email)||form.name?.length < 6  || typeof form.name?.length === 'undefined' || typeof form.ComissionValue?.length === 'undefined'||form.ComissionValue?.length < 2 );

  return (
    <div className="genericDiv">
    <div className="genericHeader">
      <p className="genericTitle">Add Realtor</p>
    </div>

    <div className="managerInputsContainer">
      <div className="managerInputsubContainer" style={{ width: "50vw" }}>
        <div className="inputDiv">
          <p className="PAYtitle">Full Name</p>
          <input
          defaultValue={form.name}
            placeholder="Name"
            onChange={(e) => {
              setForm({ ...form, name: e.target.value });
            }}
            className="AQinput"
          ></input>
    
        </div>
        <div className="inputDiv">
          <p className="PAYtitle">Email</p>
          <input
             defaultValue={form.email}
            onChange={(e) => {
              setForm({ ...form, email: e.target.value });
            }}
            placeholder="Email"
            className="AQinput"
          ></input>
         
        </div>
        <div className="inputDiv">
          <p className="PAYtitle">Password</p>
          <div style={{flexDirection:"row", display:"flex", alignItems:"center"}}>
          <input
            type={show?"text":"password"}
            
            onChange={(e) => {
              setForm({ ...form, password: e.target.value });
            }}
            placeholder="Password"
            className="AQinput"
          >
          </input>

            {show?<BsEye style={{marginLeft:"10px"}} onClick={()=>setShow(!show)}/>:<BsEyeSlash style={{marginLeft:"10px"}} onClick={()=>setShow(!show)}/>}
       </div>
        </div>
      </div>
      <div className="managerInputsubContainer" style={{ width: "50vw" }}>
        <div className="inputDiv">
          <p className="PAYtitle">Phone</p>
          <input
            defaultValue={form.phone}
            placeholder="Phone"
            onChange={(e) => {
              setForm({ ...form, phone: e.target.value });
            }}
            className="AQinput"
          ></input>
        
        </div>
        <div className="inputDiv">
          <p className="PAYtitle">Comission Value</p>
          <input
          type="number"
            defaultValue={form.ComissionValue}
            placeholder="ComissionValue"
            onChange={(e) => {
              setForm({ ...form, ComissionValue: e.target.value });
            }}
            className="AQinput"
          ></input>
          <p className="FORMerror">
       
          </p>
          </div>
        <div className="inputDiv">
          <p className="PAYtitle">Referred by</p>
          <input
            disabled={true}
            value={RUser?.name}
            style={{backgroundColor:'lightgrey'}}
            className="AQinput"
          ></input>
          
         </div>
      
      </div>
    </div>

    <div
      style={{
        position: "absolute",
        right: "50px",
        top: "76px",
        display: "flex",
      }}
    >
      <button className="PAYbutton" onClick={() => onSubmit()}
      style={{backgroundColor: validation &&"#586579", cursor: validation && 'default'}}
      disabled={validation?true:false}
      >
        <p className="PAYbuttonText">Add Realtor</p>
      </button>
    </div>

    <Modal open={open} onClose={onCloseModal} center classNames={"modal"}>
      <div className="modal">
        <img
          src={Icon}
          style={{
            width: "35px",
            alignSelf: "center",
            marginTop: "25px",
            marginBottom: "10px",
          }}
        />

        <p className="modalText">Realtor added successfully</p>

        <button onClick={()=>{
              
              window.history.back()
        }} className="modalButton">
     
       
            Continue
        
        </button>
      </div>
    </Modal>
    <img
      src={Isologo_background}
      style={{
        position: "absolute",
        right: 0,
        bottom: 0,
        width: "428px",
        opacity: "0.5",
      }}
    />
    <BsChevronLeft
    cursor='pointer'
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
  )
}

export default ManagerRecruitComponent