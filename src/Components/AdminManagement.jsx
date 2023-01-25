import React, { useEffect, useState } from "react";
import { FaPenSquare, FaTrash } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import Modal from "react-responsive-modal";
import { userId } from "../Redux/actions";

function AdminManagement({
  Referred,
  Users,
  onCloseModal,
  onCloseModalRef,
  onCloseModalMan,
  UserId,
  modalPay,
  setModalPay,
  deleteUser,
  deleteManager,
  open,
  openRef,
  openMan,
  setSelectedId,
  onOpenModal,
  onOpenModalRef,
  onOpenModalMan,
  deleteReferred,
  typeList,
  setTypeList,
}) {
  const [isAdminOne, setIsAdminOne] = useState(false);

  let Screen = window.screen;

  useEffect(() => {
    if (UserId === 1) setIsAdminOne(true);
  }, []);

  const buttonStyle = {
    height: "40px",
    width: "150px",
    alignSelf: "center",
    cursor: "pointer",
    fontFamily: "Gilroy-Regular",
    fontWeight: "bold",
    fontSize: '16px',
    color: "white",
    boxShadow: "4px 4px 4px rgb(199, 199, 199)",
    backgroundColor: "#2b4162",
    borderWidth: 0,
    borderRadius: "8px",
  };
  const adminUser = Users?.filter((e) => e.UserRole === "Admin");
  const managerUser = Users?.filter((e) => e.UserRole === "Manager");
  const realtorUser = Users?.filter((e) => e.UserRole === "Realtor");

  return (
    <div className="genericDiv1">
      <div className="genericHeader">
        <p className="genericTitle">Users Management</p>
      </div>
      <div className="PAYbuttonCont" style={{ justifyContent: "flex-start" }}>

        <button onClick={() => setTypeList("Admin")} className="PAYbutton">
          <p className="PAYbuttonText">Admins</p>
        </button>
        <button onClick={() => setTypeList("Manager")} className="PAYbutton" style={{ marginLeft: "30px" }}>
          <p className="PAYbuttonText">Managers</p>
        </button>
        <button onClick={() => setTypeList("Realtors")} className="PAYbutton" style={{ marginLeft: "30px" }}>
          <p className="PAYbuttonText">Realtors</p>
        </button>
        <button onClick={() => setTypeList("Referral")} className="PAYbutton" style={{ marginLeft: "30px" }}>
          <p className="PAYbuttonText">Referrals</p>
        </button>
      </div>
      <div
        className="DashContainerSells"
        style={{ justifyContent: "start", flexDirection: "column" }}
      >
        {typeList === "Referral" && (
          <div className="DashSubCont" style={{ maxWidth: "90vw" }}>
            <div style={{ flexDirection: "row"}}>
              <p className="subTitt" style={{ marginTop: "2vh", fontSize: '18px', color: '#2b4162' }}>
                Referral list
              </p>
              <table className="table5" style={{ marginTop: "2vh", width: '90vw', marginLeft: '0px'  }}>
                <tbody>
                  <tr>
                    <th scope="col" className="column1">
                      <p className="REPtype2">Referral name</p>
                    </th>
                    <th scope="col" className="column1">
                      <p className="REPtype2">Referred by</p>
                    </th>
                    {Screen.width > 1000 && (
                      <th scope="col" className="column1">
                        <p className="REPtype2">Email</p>
                      </th>
                    )}
                    <th scope="col" className="column1">
                      <p className="REPtype2">Phone</p>
                    </th>
                    <th scope="col" className="column1">
                      <p className="REPtype2">Company</p>
                    </th>
                    <th scope="col" className="column1">
                      <p className="REPtype2">Edit</p>
                    </th>
                    {isAdminOne && (
                      <th scope="col" className="column1">
                        <p className="REPtype2">Del</p>
                      </th>
                    )}
                  </tr>
                  {Referred?.map((e, i) => {
                    return (
                      <tr key={i}>
                        <td className="ClientName" scope="row">
                          <NavLink
                            style={{ textDecoration: "none" }}
                            to={{
                              pathname: "/management/ManagerRecruit",
                              aboutProps: e,
                            }}
                          >
                            {e.name}
                          </NavLink>
                        </td>
                        <td className="ClientName" scope="row">
                          {e.User.name}
                        </td>
                        {Screen.width > 1000 && (
                          <td className="ClientName" scope="row">
                            {e.email}
                          </td>
                        )}
                        <td className="ClientName" scope="row">
                          {e.phone}
                        </td>
                        <td className="ClientName" scope="row">
                          {e.Company}
                        </td>
                        <th className="ClientName" scope="row">
                          <NavLink
                            className="icons"
                            to={{ pathname: "/editReferred", aboutProps: e }}
                            activeClassName="NAavtive"
                          >
                            <FaPenSquare
                              className="NAicon"
                              size="20px"
                              color="#2b4162"
                            />
                          </NavLink>
                        </th>
                        {isAdminOne && (
                          <th className="ClientName" scope="row">
                            <FaTrash
                              onClick={() => {
                                setSelectedId(e.id);
                                onOpenModalRef();
                                console.log("hola");
                              }}
                              style={{ cursor: "pointer" }}
                              className="NAicon"
                              size="20px"
                              color="#FF4C61"
                            />
                          </th>
                        )}
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
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
                  color="#FF4C61"
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
                  onChange={(e) => setModalPay(e.target.value)}
                  style={{ marginTop: "12px" }}
                />

                <button
                  disabled={modalPay == "delete" ? false : true}
                  className="modalButton"
                  onClick={() => deleteReferred()}
                >
                  Continue
                </button>
              </div>
            </Modal>
          </div>
        )}
        {typeList === "Realtors" && (
          <div className="DashSubCont" style={{ maxWidth: "90vw" }}>
            <div style={{ flexDirection: "row"}}>
              <p className="subTitt" style={{ marginTop: "2vh",fontSize: '18px', color: '#2b4162' }}>
                Realtors list
              </p>
              <table className="table5" style={{ marginTop: "2vh", marginLeft: '0px', width: '90vw' }}>
                <tbody>
                  <tr>
                    <th scope="col" className="column1">
                      <p className="REPtype2">Realtor name</p>
                    </th>
                    <th scope="col" className="column1">
                      <p className="REPtype2">Referred by</p>
                    </th>
                    <th scope="col" className="column1">
                      <p className="REPtype2">Manager</p>
                    </th>
                    {Screen.width > 1000 && (
                      <th scope="col" className="column1">
                        <p className="REPtype2">Email</p>
                      </th>
                    )}

                    <th scope="col" className="column1">
                      <p className="REPtype2">Phone</p>
                    </th>
                    <th scope="col" className="column1">
                      <p className="REPtype2">Referrals</p>
                    </th>
                    <th scope="col" className="column1">
                      <p className="REPtype2">Recruited</p>
                    </th>
                    <th scope="col" className="column1">
                      <p className="REPtype2">Sales</p>
                    </th>
                    <th scope="col" className="column1">
                      <p className="REPtype2">Edit</p>
                    </th>
                    {isAdminOne && (
                      <th scope="col" className="column1">
                        <p className="REPtype2">Del</p>
                      </th>
                    )}
                  </tr>
                  {realtorUser?.map((e, i) => {
                    return (
                      <tr key={i}>
                        <td className="ClientName" scope="row">
                          {e.name}
                        </td>
                        <td className="ClientName" scope="row">
                          {Users.filter((f) => f.id == e.ReferredId)[0]?.name}
                        </td>
                        <td className="ClientName" scope="row">
                          {
                            managerUser?.filter((m) => m.id === e.managerId)[0]
                              ?.name
                          }
                        </td>
                        {Screen.width > 1000 && (
                          <td className="ClientName" scope="row">
                            {e.email}
                          </td>
                        )}

                        <td className="ClientName" scope="row">
                          {e.phone}
                        </td>
                        <td className="ClientName" scope="row">
                          {Referred.filter((f) => f.User.id == e.id).length}
                        </td>
                        <td className="ClientName" scope="row">
                          {Referred.filter((f) => f.User.id == e.id).length}
                        </td>
                        <td className="ClientName" scope="row">
                          {e.Sells.length}
                        </td>
                        <th className="ClientName" scope="row">
                          <NavLink
                            className="icons"
                            to={{ pathname: "/editUser", aboutProps: e }}
                            activeClassName="NAavtive"
                          >
                            <FaPenSquare
                              className="NAicon"
                              size="20px"
                              color="#2b4162"
                            />
                          </NavLink>
                        </th>
                        {isAdminOne && (
                          <th className="ClientName" scope="row">
                            <FaTrash
                              onClick={() => {
                                setSelectedId(e.id);
                                onOpenModal();
                              }}
                              style={{ cursor: "pointer" }}
                              className="NAicon"
                              size="20px"
                              color="#FF4C61"
                            />
                          </th>
                        )}
                        {/* <th className="ClientName" style={{alignSelf:'center', justifySelf:'center'}} scope="row">
                          <NavLink
                            className="icons"
                            to={{ pathname: "/editUser", aboutProps: e }}
                            activeClassName="NAavtive"
                          >
                            <FaTrash
                              className="NAicon"
                              size="20px"
                              color="#FF4C61"
                            />
                          </NavLink>
                        </th> */}
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
            <Modal
              open={open}
              onClose={onCloseModal}
              center
              classNames={"modal"}
            >
              <div
                className="modal"
                style={{ minWidth: "250px", alignItems: "center" }}
              >
                <FaTrash
                  color="#FF4C61"
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
                  onChange={(e) => setModalPay(e.target.value)}
                  style={{ marginTop: "12px" }}
                />

                <button
                  disabled={modalPay == "delete" ? false : true}
                  className="modalButton"
                  onClick={() => deleteUser()}
                >
                  Continue
                </button>
              </div>
            </Modal>
          </div>
        )}
        {typeList === "Manager" && (
          <div className="DashSubCont" style={{ maxWidth: "90vw" }}>
            <div style={{ flexDirection: "row" }}>
              <p className="subTitt" style={{ marginTop: "2vh", fontSize: '18px', color: '#2b4162' }}>
                Managers list
              </p>
              <table className="table5" style={{ marginTop: "2vh", marginLeft: '0px', width: '90vw' }}>
                <tbody>
                  <tr>
                    <th scope="col" className="column1">
                      <p className="REPtype2">Manager name</p>
                    </th>
                    <th scope="col" className="column1">
                      <p className="REPtype2">Referred by</p>
                    </th>
                    {Screen.width > 1000 && (
                      <th scope="col" className="column1">
                        <p className="REPtype2">Email</p>
                      </th>
                    )}

                    <th scope="col" className="column1">
                      <p className="REPtype2">Commision Value</p>
                    </th>
                    <th scope="col" className="column1">
                      <p className="REPtype2">Phone</p>
                    </th>
                    <th scope="col" className="column1">
                      <p className="REPtype2">Referrals</p>
                    </th>
                    <th scope="col" className="column1">
                      <p className="REPtype2">Recruited</p>
                    </th>
                    <th scope="col" className="column1">
                      <p className="REPtype2">Sales</p>
                    </th>
                    <th scope="col" className="column1">
                      <p className="REPtype2">Edit</p>
                    </th>
                    {}
                    <th scope="col" className="column1">
                      <p className="REPtype2">Del</p>
                    </th>
                  </tr>
                  {managerUser?.map((e, i) => {
                    return (
                      <tr key={i}>
                        <td className="ClientName" scope="row">
                          {e.name}
                        </td>
                        <td className="ClientName" scope="row">
                          {Users.filter((f) => f.id == e.ReferredId)[0]?.name}
                        </td>
                        {Screen.width > 1000 && (
                          <td className="ClientName" scope="row">
                            {e.email}
                          </td>
                        )}

                        <td className="ClientName" scope="row">
                          $ {e.ComissionValue}
                        </td>
                        <td className="ClientName" scope="row">
                          {e.phone}
                        </td>
                        <td className="ClientName" scope="row">
                          {Referred.filter((f) => f.User.id == e.id).length}
                        </td>
                        <td className="ClientName" scope="row">
                          {Referred.filter((f) => f.User.id == e.id).length}
                        </td>
                        <td className="ClientName" scope="row">
                          {e.Sells.length}
                        </td>
                        <th className="ClientName" scope="row">
                          <NavLink
                            className="icons"
                            to={{ pathname: "/editManager", aboutProps: e }}
                            activeClassName="NAavtive"
                          >
                            <FaPenSquare
                              className="NAicon"
                              size="20px"
                              color="#2b4162"
                            />
                          </NavLink>
                        </th>
                        <th className="ClientName" scope="row">
                          <FaTrash
                            onClick={() => {
                              setSelectedId(e.id);
                              onOpenModalMan();
                              console.log("hola");
                            }}
                            style={{ cursor: "pointer" }}
                            className="NAicon"
                            size="20px"
                            color="#FF4C61"
                          />
                        </th>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
            <Modal
              open={openMan}
              onClose={onCloseModalMan}
              center
              classNames={"modal"}
            >
              <div
                className="modal"
                style={{ minWidth: "250px", alignItems: "center" }}
              >
                <FaTrash
                  color="#FF4C61"
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
                  onChange={(e) => setModalPay(e.target.value)}
                  style={{ marginTop: "12px" }}
                />

                <button
                  disabled={modalPay == "delete" ? false : true}
                  className="modalButton"
                  onClick={() => deleteManager()}
                >
                  Continue
                </button>
              </div>
            </Modal>
          </div>
        )}
          {typeList === "Admin" && (
          <div className="DashSubCont" style={{ maxWidth: "90vw" }}>
            <div style={{ flexDirection: "row" }}>
              <p className="subTitt" style={{ marginTop: "2vh", fontSize: '18px', color: '#2b4162' }}>
                Admin list
              </p>
              <table className="table5" style={{ marginTop: "2vh", marginLeft: '0px', width: '90vw' }}>
                <tbody>
                  <tr>
                    <th scope="col" className="column1">
                      <p className="REPtype2">Admin name</p>
                    </th>
                    {Screen.width > 1000 && (
                      <th scope="col" className="column1">
                        <p className="REPtype2">Email</p>
                      </th>
                    )}

                    <th scope="col" className="column1">
                      <p className="REPtype2">Commision Value</p>
                    </th>
                    <th scope="col" className="column1">
                      <p className="REPtype2">Phone</p>
                    </th>
                    <th scope="col" className="column1">
                      <p className="REPtype2">Referrals</p>
                    </th>
                    <th scope="col" className="column1">
                      <p className="REPtype2">Recruited</p>
                    </th>
                    <th scope="col" className="column1">
                      <p className="REPtype2">Sales</p>
                    </th>
                    <th scope="col" className="column1">
                      <p className="REPtype2">Edit</p>
                    </th>
                    {}
                    <th scope="col" className="column1">
                      <p className="REPtype2">Del</p>
                    </th>
                  </tr>
                  {adminUser?.map((e, i) => {
                    return (
                      <tr key={i}>
                        <td className="ClientName" scope="row">
                          {e.name}
                        </td>
                        {Screen.width > 1000 && (
                          <td className="ClientName" scope="row">
                            {e.email}
                          </td>
                        )}

                        <td className="ClientName" scope="row">
                          $ {e.ComissionValue}
                        </td>
                        <td className="ClientName" scope="row">
                          {e.phone}
                        </td>
                        <td className="ClientName" scope="row">
                          {Referred.filter((f) => f.User.id == e.id).length}
                        </td>
                        <td className="ClientName" scope="row">
                          {Referred.filter((f) => f.User.id == e.id).length}
                        </td>
                        <td className="ClientName" scope="row">
                          {e.Sells.length}
                        </td>
                        <th className="ClientName" scope="row">
                          <NavLink
                            className="icons"
                            to={{ pathname: "/editManager", aboutProps: e }}
                            activeClassName="NAavtive"
                          >
                            <FaPenSquare
                              className="NAicon"
                              size="20px"
                              color="#2b4162"
                            />
                          </NavLink>
                        </th>
                        <th className="ClientName" scope="row">
                          <FaTrash
                            onClick={() => {
                              setSelectedId(e.id);
                              onOpenModalMan();
                              console.log("hola");
                            }}
                            style={{ cursor: "pointer" }}
                            className="NAicon"
                            size="20px"
                            color="#FF4C61"
                          />
                        </th>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
            <Modal
              open={openMan}
              onClose={onCloseModalMan}
              center
              classNames={"modal"}
            >
              <div
                className="modal"
                style={{ minWidth: "250px", alignItems: "center" }}
              >
                <FaTrash
                  color="#FF4C61"
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
                  onChange={(e) => setModalPay(e.target.value)}
                  style={{ marginTop: "12px" }}
                />

                <button
                  disabled={modalPay == "delete" ? false : true}
                  className="modalButton"
                  onClick={() => deleteManager()}
                >
                  Continue
                </button>
              </div>
            </Modal>
          </div>
        )}
      </div>
    </div>
  );
}

export default AdminManagement;
