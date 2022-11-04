import React from "react";
import { NavLink } from "react-router-dom";
import "../Css/css.css";
import logo from "../assets/1logo.jpeg";
import { FiGrid } from "react-icons/fi";
import { FiUser } from "react-icons/fi";
import { VscGraph } from "react-icons/vsc";
import { BiStats } from "react-icons/bi";
import { FaRegMoneyBillAlt } from "react-icons/fa";
import { FiLogOut } from "react-icons/fi";
import { AiOutlineFile } from "react-icons/ai";
import { MdAdd } from "react-icons/md";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../Redux/actions";

function RealtorNav({ onSearch }) {
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
              cursor="pointer"
              size="20px"
              color="grey"
              style={{ alignSelf: "center" }}
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
            <FiGrid
              className="NAicon"
              color="#868ba5"
              activeClassName="NAactive"
            />
          </NavLink>
        </div>

        {/* <span />

        <div className="NAcontainer">
          <NavLink className="icons" to="/addSell" activeClassName="NAavtive">
            <FaRegMoneyBillAlt className="NAicon" size="20px" color="#868ba5" />
          </NavLink>
        </div> */}
        <span />
        <div className="NAcontainer">
          <NavLink
            className="icons"
            to="/addReferred"
            activeClassName="NAavtive"
          >
            <MdAdd className="NAicon" size="25px" color="#868ba5" />
          </NavLink>
        </div>
        <span />
        {/*        
        <div className="NAcontainer">
          <NavLink className="icons" to="/stadistic" activeClassName="NAavtive">
            <BiStats className="NAicon" size="20px" color="#868ba5" />
          </NavLink>
        </div>
         */}
      </div>
    </div>
  );
}

export default RealtorNav;
