import React from "react";
import { NavLink } from "react-router-dom";
import "../Css/css.css";
import { FiGrid, FiBarChart2 } from "react-icons/fi";
import { MdManageAccounts } from "react-icons/md";
// import Manager from "./manager"
import { FaBox, FaBoxOpen, FaRegMoneyBillAlt, FaWallet } from "react-icons/fa";
import { FiLogOut } from "react-icons/fi";
import { AiOutlineFile } from "react-icons/ai";
import { MdAdd } from "react-icons/md";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../Redux/actions";
import { BiStats } from "react-icons/bi";
import logo from "../assets/1logo.jpeg";
function AdminNav() {
  const dispatch = useDispatch();

  const Name = useSelector((state) => state.userName);
  const Role = useSelector((state) => state.userRole);

  const logOut = () => {
    localStorage.clear();
    window.history.pushState("", "", "/");
    dispatch(logout());
  };
  return (
    <div style={{ display: "flex" }}>
      <div className="topbar">
        <div style={{ paddingRight: "40px", display: "flex" }}>
          <div className="circle">
            <p className="initial">{Name && Name.substring(0, 1)}</p>
          </div>
          <div className="ANusercontainer">
            <p className="NAname">{Name}</p>
            <p className="NArole">{Role}</p>
          </div>
          <button
            onClick={() => logOut()}
            style={{ backgroundColor: "transparent", borderWidth: "0px" }}
          >
            <FiLogOut
              size="20px"
              className="NAicon"
              style={{ alignSelf: "center", cursor: "pointer" }}
            />
          </button>
        </div>
      </div>

      <div className="sidebar">
        <img
          className="image"
          src={logo}
          alt={"logo"}
          style={{ backgroundColor: "#2b4162" }}
        />
         <div className="NAcontainer">
          <NavLink className="icons" to="/" activeClassName="NAavtive" exact>
            <FiBarChart2
              className="NAicon"
              color="#868ba5"
              activeClassName="NAactive"
            />
          </NavLink>
        </div>
        <div className="NAcontainer">
          <NavLink className="icons" to="/stadistic" activeClassName="NAavtive" exact>
            <FiGrid
              className="NAicon"
              color="#868ba5"
              activeClassName="NAactive"
            />
          </NavLink>
        </div>
        <div className="NAcontainer">
          <NavLink className="icons" to="/addSell" activeClassName="NAavtive">
            <FaRegMoneyBillAlt className="NAicon" size="20px" color="#868ba5" />
          </NavLink>
        </div>
       
        <div className="NAcontainer">
          <NavLink
            className="icons"
            to="/CommissionManagement"
            activeClassName="NAavtive"
          >
            <FaWallet className="NAicon" size="25px" color="#868ba5" />
          </NavLink>
        </div>

        <span />
        <div className="NAcontainer">
          <NavLink
            className="icons"
            to="/addPackage"
            activeClassName="NAavtive"
          >
            <FaBoxOpen className="NAicon" size="25px" color="#868ba5" />
          </NavLink>
        </div>
        <span />

        <div className="NAcontainer">
          <NavLink
            className="icons"
            to="/adminManagement"
            activeClassName="NAavtive"
          >
            <MdManageAccounts
              style={{ height: "25px", width: "25px" }}
              size="35px"
              color="#868ba5"
            />
          </NavLink>
        </div>

        <div className="NAcontainer">
          <NavLink
            className="icons"
            to="/UsersManagement"
            activeClassName="NAavtive"
          >
            <MdAdd
              style={{ height: "25px", width: "25px" }}
              size="35px"
              color="#868ba5"
            />
          </NavLink>
        </div>
        <span />
      </div>
    </div>
  );
}

export default AdminNav;
